/* ===== DATASETS ===== */
const datasets = {
    ru: [
        { q: "и", a: "and" }, { q: "в", a: "in" }, { q: "не", a: "not" },
        { q: "на", a: "on" }, { q: "я", a: "I" }, { q: "быть", a: "be" },
        { q: "с", a: "with" }, { q: "он", a: "he" }, { q: "что", a: "what" },
        { q: "а", a: "and" }, { q: "этот", a: "this" }, { q: "по", a: "by" },
        { q: "горячий", a: "hot" }, { q: "слово", a: "word" }, { q: "вода", a: "water" }
    ],
    jp: [
        { q: "私", a: "I" }, { q: "猫", a: "cat" }, { q: "犬", a: "dog" },
        { q: "食べる", a: "eat" }, { q: "見る", a: "see" }, { q: "本", a: "book" },
        { q: "水", a: "water" }, { q: "空", a: "sky" }, { q: "川", a: "river" },
        { q: "山", a: "mountain" }, { q: "はい", a: "yes" }, { q: "いいえ", a: "no" },
        { q: "車", a: "car" }, { q: "電話", a: "phone" }, { q: "行く", a: "go" }
    ]
};

/* ===== STATE ===== */
let currentLang = "ru";
let mode = "normal";
let index = 0;
let revealed = false;
let activeCards = [];
let randomOrder = [];
let knownSet = new Set();

/* ===== ELEMENTS ===== */
const card = document.getElementById("card");
const fromInput = document.getElementById("from");
const toInput = document.getElementById("to");
const skipBtn = document.getElementById("skipBtn");
const resetBtn = document.getElementById("resetBtn");
const answerInput = document.getElementById("answerInput");
const langSelect = document.getElementById("langSelect");

/* ===== LOGIC ===== */

// 1. Load Known Words for specific language
function loadKnownWords() {
    const key = `knownWords_${currentLang}`;
    const stored = localStorage.getItem(key);
    knownSet = new Set(stored ? JSON.parse(stored) : []);
}

// 2. Save Known Words for specific language
function saveKnownWords() {
    const key = `knownWords_${currentLang}`;
    localStorage.setItem(key, JSON.stringify([...knownSet]));
}

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

function rebuildActiveCards() {
    // Get correct dataset
    const data = datasets[currentLang];
    
    // Clamp inputs
    let from = parseInt(fromInput.value);
    let to = parseInt(toInput.value);
    from = Math.max(1, from);
    to = Math.min(data.length, to);
    if (from > to) from = to;

    fromInput.value = from;
    toInput.value = to;

    // Filter cards
    activeCards = data.slice(from - 1, to).filter(c => !knownSet.has(c.q));
    
    index = 0;
    revealed = false;

    if (mode === "random") {
        randomOrder = [...activeCards.keys()];
        shuffle(randomOrder);
    }
    
    showCard();
}

function getCurrentCard() {
    return mode === "random" ? activeCards[randomOrder[index]] : activeCards[index];
}

function showCard() {
    if (activeCards.length === 0) {
        card.textContent = "All Done! 🏆";
        answerInput.value = "";
        skipBtn.classList.remove("active");
        return;
    }
    const current = getCurrentCard();
    card.textContent = current.q;
    revealed = false;
    answerInput.value = "";
    
    // Check if user already marked it (edge case)
    if (knownSet.has(current.q)) {
        skipBtn.classList.add("active");
    } else {
        skipBtn.classList.remove("active");
    }
}

/* ===== EVENTS ===== */

/* Language Switch */
langSelect.addEventListener("change", (e) => {
    currentLang = e.target.value;
    loadKnownWords();
    // Reset range to 1-15 for new language or keep user preference? 
    // Let's reset to safe defaults to prevent bugs if lists are different sizes
    fromInput.value = 1;
    toInput.value = Math.min(15, datasets[currentLang].length);
    rebuildActiveCards();
});

/* Card Click */
card.addEventListener("click", () => {
    if (!activeCards.length) return;
    if (!revealed) {
        card.textContent = getCurrentCard().a;
        revealed = true;
    } else {
        index = (index + 1) % activeCards.length;
        showCard();
    }
});

/* Input Logic */
answerInput.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;
    if (!activeCards.length) return;

    const current = getCurrentCard();
    const typed = answerInput.value.trim().toLowerCase();
    const correct = current.a.toLowerCase();

    if (typed === correct) {
        // Flash green border for feedback
        answerInput.style.borderColor = "#4caf50";
        setTimeout(() => answerInput.style.borderColor = "#ddd", 500);
        
        index = (index + 1) % activeCards.length;
        showCard();
    } else {
        answerInput.style.borderColor = "#f44336"; // Flash red
        card.textContent = `${current.a} ❌`;
        revealed = true;
    }
});

/* Skip / Mark Known */
skipBtn.addEventListener("click", () => {
    if (!activeCards.length) return;
    const current = getCurrentCard();

    // Toggle known status
    if (knownSet.has(current.q)) {
        knownSet.delete(current.q);
    } else {
        knownSet.add(current.q);
    }
    
    saveKnownWords();
    rebuildActiveCards();
});

/* Reset */
resetBtn.addEventListener("click", () => {
    if(confirm(`Reset progress for ${currentLang === 'ru' ? 'Russian' : 'Japanese'}?`)) {
        knownSet.clear();
        saveKnownWords();
        rebuildActiveCards();
    }
});

/* Inputs Change */
document.querySelectorAll('input[name="mode"]').forEach(i => {
    i.addEventListener("change", e => { mode = e.target.value; rebuildActiveCards(); });
});
[fromInput, toInput].forEach(i => i.addEventListener("change", rebuildActiveCards));

/* ===== INIT ===== */
loadKnownWords();
rebuildActiveCards();
