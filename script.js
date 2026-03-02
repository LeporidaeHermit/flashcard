/* ===== DATASETS ===== */
const datasets = {
    ru: [
{ q: "и", a: "and" },
{ q: "в", a: "in" },
{ q: "не", a: "not" },
{ q: "на", a: "on" },
{ q: "я", a: "I" },
{ q: "он", a: "he" },
{ q: "что", a: "what" },
{ q: "с", a: "with" },
{ q: "это", a: "this" },
{ q: "быть", a: "to be" },
{ q: "а", a: "but" },
{ q: "весь", a: "all" },
{ q: "они", a: "they" },
{ q: "она", a: "she" },
{ q: "как", a: "how" },
{ q: "мы", a: "we" },
{ q: "к", a: "to" },
{ q: "у", a: "at" },
{ q: "вы", a: "you" },
{ q: "этот", a: "this" },
{ q: "за", a: "for" },
{ q: "тот", a: "that" },
{ q: "но", a: "but" },
{ q: "ты", a: "you" },
{ q: "по", a: "along" },
{ q: "из", a: "from" },
{ q: "о", a: "about" },
{ q: "свой", a: "own" },
{ q: "так", a: "so" },
{ q: "один", a: "one" },
{ q: "вот", a: "here" },
{ q: "который", a: "which" },
{ q: "наш", a: "our" },
{ q: "только", a: "only" },
{ q: "ещё", a: "still" },
{ q: "от", a: "from" },
{ q: "такой", a: "such" },
{ q: "мочь", a: "can" },
{ q: "говорить", a: "speak" },
{ q: "сказать", a: "say" },
{ q: "для", a: "for" },
{ q: "уже", a: "already" },
{ q: "знать", a: "know" },
{ q: "да", a: "yes" },
{ q: "какой", a: "which" },
{ q: "когда", a: "when" },
{ q: "другой", a: "other" },
{ q: "первый", a: "first" },
{ q: "чтобы", a: "to" },
{ q: "его", a: "his" },
{ q: "год", a: "year" },
{ q: "кто", a: "who" },
{ q: "дело", a: "business" },
{ q: "нет", a: "no" },
{ q: "её", a: "her" },
{ q: "очень", a: "very" },
{ q: "большой", a: "big" },
{ q: "новый", a: "new" },
{ q: "работа", a: "work" },
{ q: "сейчас", a: "now" },
{ q: "время", a: "time" },
{ q: "человек", a: "person" },
{ q: "идти", a: "go" },
{ q: "если", a: "if" },
{ q: "два", a: "two" },
{ q: "мой", a: "my" },
{ q: "жизнь", a: "life" },
{ q: "до", a: "until" },
{ q: "где", a: "where" },
{ q: "каждый", a: "each" },
{ q: "самый", a: "most" },
{ q: "хотеть", a: "want" },
{ q: "здесь", a: "here" },
{ q: "надо", a: "need" },
{ q: "люди", a: "people" },
{ q: "теперь", a: "now" },
{ q: "дом", a: "house" },
{ q: "раз", a: "time" },
{ q: "день", a: "day" },
{ q: "или", a: "or" },
{ q: "город", a: "city" },
{ q: "там", a: "there" },
{ q: "слово", a: "word" },
{ q: "глаз", a: "eye" },
{ q: "потом", a: "then" },
{ q: "видеть", a: "see" },
{ q: "их", a: "their" },
{ q: "под", a: "under" },
{ q: "даже", a: "even" },
{ q: "думать", a: "think" },
{ q: "хорошо", a: "well" },
{ q: "можно", a: "possible" },
{ q: "тут", a: "here" },
{ q: "тысяча", a: "thousand" },
{ q: "ли", a: "whether" },
{ q: "вода", a: "water" },
{ q: "ничего", a: "nothing" },
{ q: "много", a: "many" },
{ q: "рука", a: "hand" },
{ q: "себя", a: "self" },
{ q: "молодой", a: "young" },
{ q: "тоже", a: "too" },
{ q: "спрашивать", a: "ask" },
{ q: "без", a: "without" },
{ q: "делать", a: "do" },
{ q: "три", a: "three" },
{ q: "всё", a: "all" },
{ q: "то", a: "that" },
{ q: "жить", a: "live" },
{ q: "труд", a: "work" },
{ q: "сам", a: "self" },
{ q: "хороший", a: "good" },
{ q: "второй", a: "second" },
{ q: "через", a: "through" },
{ q: "место", a: "place" },
{ q: "после", a: "after" },
{ q: "страна", a: "country" },
{ q: "двадцать", a: "twenty" },
{ q: "должен", a: "must" },
{ q: "больше", a: "more" },
{ q: "ваш", a: "your" },
{ q: "дверь", a: "door" },
{ q: "друг", a: "friend" },
{ q: "машина", a: "car" },
{ q: "комната", a: "room" },
{ q: "учиться", a: "study" },
{ q: "над", a: "above" },
{ q: "голова", a: "head" },
{ q: "почему", a: "why" },
{ q: "земля", a: "earth" },
{ q: "стол", a: "table" },
{ q: "давать", a: "give" },
{ q: "перед", a: "before" },
{ q: "тогда", a: "then" },
{ q: "сидеть", a: "sit" },
{ q: "мальчик", a: "boy" },
{ q: "девушка", a: "girl" },
{ q: "лето", a: "summer" },
{ q: "сегодня", a: "today" },
{ q: "сторона", a: "side" },
{ q: "совсем", a: "completely" },
{ q: "маленький", a: "small" },
{ q: "несколько", a: "several" },
{ q: "вдруг", a: "suddenly" },
{ q: "лицо", a: "face" },
{ q: "конечно", a: "of course" },
{ q: "народ", a: "people" },
{ q: "начинать", a: "begin" },
{ q: "пять", a: "five" },
{ q: "ведь", a: "after all" },
{ q: "вопрос", a: "question" },
{ q: "писать", a: "write" },
{ q: "письмо", a: "letter" },
{ q: "при", a: "at" },
{ q: "мать", a: "mother" },
{ q: "нужно", a: "necessary" },
{ q: "смотреть", a: "watch" },
{ q: "сила", a: "strength" },
{ q: "вместе", a: "together" },
{ q: "выходить", a: "go out" },
{ q: "любить", a: "love" },
{ q: "дорога", a: "road" },
{ q: "старый", a: "old" },
{ q: "улица", a: "street" },
{ q: "решать", a: "decide" },
{ q: "книга", a: "book" },
{ q: "всегда", a: "always" },
{ q: "голос", a: "voice" },
{ q: "значить", a: "mean" },
{ q: "сразу", a: "immediately" },
{ q: "лишь", a: "only" },
{ q: "минута", a: "minute" },
{ q: "снова", a: "again" },
{ q: "окно", a: "window" },
{ q: "бы", a: "would" },
{ q: "уходить", a: "leave" },
{ q: "последний", a: "last" },
{ q: "проходить", a: "pass" },
{ q: "отец", a: "father" },
{ q: "час", a: "hour" },
{ q: "просто", a: "simply" },
{ q: "же", a: "emphasis" },
{ q: "третий", a: "third" },
{ q: "потому", a: "because" },
{ q: "никто", a: "nobody" },
{ q: "ждать", a: "wait" },
{ q: "сколько", a: "how much" },
{ q: "высокий", a: "tall" },
{ q: "лучше", a: "better" },
{ q: "получать", a: "get" },
{ q: "почти", a: "almost" },
{ q: "лес", a: "forest" },
{ q: "конец", a: "end" },
{ q: "нога", a: "leg" },
{ q: "собственный", a: "own" },
{ q: "сто", a: "hundred" }
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
    if (from > to) to = from;

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



