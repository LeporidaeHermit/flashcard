/* ===== FLASHCARD DATA ===== */
const flashcards = [
    { ru: "и", en: "and" }, { ru: "в", en: "in" }, { ru: "не", en: "not" },
    { ru: "на", en: "on" }, { ru: "я", en: "I" }, { ru: "уходить", en: "leave" },
    { ru: "последний", en: "last" }, { ru: "проходить", en: "pass" },
    { ru: "отец", en: "father" }, { ru: "час", en: "hour" },
    { ru: "просто", en: "simply" }, { ru: "нога", en: "leg" },
    { ru: "собственный", en: "own" }, { ru: "сто", en: "hundred" }
];

/* ===== STATE ===== */
let mode = "normal";
let index = 0;
let revealed = false;
let activeCards = [];
let randomOrder = [];
let knownSet = new Set(JSON.parse(localStorage.getItem("knownWords") || "[]"));

/* ===== ELEMENTS ===== */
const card = document.getElementById("card");
const fromInput = document.getElementById("from");
const toInput = document.getElementById("to");
const skipBtn = document.getElementById("skipBtn");
const resetBtn = document.getElementById("resetBtn");
const answerInput = document.getElementById("answerInput");

/* ===== LOGIC ===== */
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

function rebuildActiveCards() {
    let from = parseInt(fromInput.value);
    let to = parseInt(toInput.value);
    
    // Safety check for range
    from = Math.max(1, from);
    to = Math.min(flashcards.length, to);

    activeCards = flashcards.slice(from - 1, to).filter(c => !knownSet.has(c.ru));
    index = 0;
    revealed = false;

    if (mode === "random") {
        randomOrder = [...activeCards.keys()];
        shuffle(randomOrder);
    }
    showRussian();
}

function getCurrentCard() {
    return mode === "random" ? activeCards[randomOrder[index]] : activeCards[index];
}

function showRussian() {
    if (activeCards.length === 0) {
        card.textContent = "All Done! 🏆";
        answerInput.value = "";
        return;
    }
    card.textContent = getCurrentCard().ru;
    revealed = false;
    answerInput.value = "";
    answerInput.focus();
}

/* ===== EVENT LISTENERS ===== */
card.addEventListener("click", () => {
    if (!activeCards.length) return;
    if (!revealed) {
        card.textContent = getCurrentCard().en;
        revealed = true;
    } else {
        index = (index + 1) % activeCards.length;
        showRussian();
    }
});

answerInput.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;
    if (!activeCards.length) return;

    const current = getCurrentCard();
    if (answerInput.value.trim().toLowerCase() === current.en.toLowerCase()) {
        index = (index + 1) % activeCards.length;
        showRussian();
    } else {
        card.textContent = `${current.en} ❌`;
        revealed = true;
    }
});

skipBtn.addEventListener("click", () => {
    const current = getCurrentCard();
    if (!current) return;
    knownSet.add(current.ru);
    localStorage.setItem("knownWords", JSON.stringify([...knownSet]));
    rebuildActiveCards();
});

resetBtn.addEventListener("click", () => {
    if(confirm("Clear all your progress?")) {
        knownSet.clear();
        localStorage.removeItem("knownWords");
        rebuildActiveCards();
    }
});

document.querySelectorAll('input[name="mode"]').forEach(i => {
    i.addEventListener("change", e => { mode = e.target.value; rebuildActiveCards(); });
});

[fromInput, toInput].forEach(i => i.addEventListener("change", rebuildActiveCards));

// Start
rebuildActiveCards();
