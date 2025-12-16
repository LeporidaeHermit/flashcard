/* ===== FLASHCARD DATA ===== */
const flashcards = [
{ ru: "и", en: "and" },
{ ru: "в", en: "in" },
{ ru: "не", en: "not" },
{ ru: "на", en: "on" },
{ ru: "я", en: "I" },
{ ru: "он", en: "he" },
{ ru: "что", en: "what" },
{ ru: "с", en: "with" },
{ ru: "это", en: "this" },
{ ru: "быть", en: "to be" },
{ ru: "а", en: "but" },
{ ru: "весь", en: "all" },
{ ru: "они", en: "they" },
{ ru: "она", en: "she" },
{ ru: "как", en: "how" },
{ ru: "мы", en: "we" },
{ ru: "к", en: "to" },
{ ru: "у", en: "at" },
{ ru: "вы", en: "you" },
{ ru: "этот", en: "this" },
{ ru: "за", en: "for" },
{ ru: "тот", en: "that" },
{ ru: "но", en: "but" },
{ ru: "ты", en: "you" },
{ ru: "по", en: "along" },
{ ru: "из", en: "from" },
{ ru: "о", en: "about" },
{ ru: "свой", en: "own" },
{ ru: "так", en: "so" },
{ ru: "один", en: "one" },
{ ru: "вот", en: "here" },
{ ru: "который", en: "which" },
{ ru: "наш", en: "our" },
{ ru: "только", en: "only" },
{ ru: "ещё", en: "still" },
{ ru: "от", en: "from" },
{ ru: "такой", en: "such" },
{ ru: "мочь", en: "can" },
{ ru: "говорить", en: "speak" },
{ ru: "сказать", en: "say" },
{ ru: "для", en: "for" },
{ ru: "уже", en: "already" },
{ ru: "знать", en: "know" },
{ ru: "да", en: "yes" },
{ ru: "какой", en: "which" },
{ ru: "когда", en: "when" },
{ ru: "другой", en: "other" },
{ ru: "первый", en: "first" },
{ ru: "чтобы", en: "to" },
{ ru: "его", en: "his" }


];

/* ===== STATE ===== */
let mode = "normal";
let index = 0;
let revealed = false;
let activeCards = [];
let randomOrder = [];

/* Known words */
let knownSet = new Set(
    JSON.parse(localStorage.getItem("knownWords") || "[]")
);

/* ===== ELEMENTS ===== */
const card = document.getElementById("card");
const fromInput = document.getElementById("from");
const toInput = document.getElementById("to");
const skipBtn = document.getElementById("skipBtn");
const resetBtn = document.getElementById("resetBtn");
const modeInputs = document.querySelectorAll('input[name="mode"]');

/* ===== UTILITIES ===== */
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

function clampRange(from, to) {
    from = Math.max(1, from);
    to = Math.min(flashcards.length, to);
    if (from > to) [from, to] = [to, from];
    return [from, to];
}

/* ===== CORE ===== */
function rebuildActiveCards() {
    let from = parseInt(fromInput.value);
    let to = parseInt(toInput.value);

    [from, to] = clampRange(from, to);
    fromInput.value = from;
    toInput.value = to;

    activeCards = flashcards
        .slice(from - 1, to)
        .filter(card => !knownSet.has(card.ru));

    index = 0;
    revealed = false;

    if (mode === "random") {
        randomOrder = [...activeCards.keys()];
        shuffle(randomOrder);
    }

    showRussian();
}

function getCurrentCard() {
    return mode === "random"
        ? activeCards[randomOrder[index]]
        : activeCards[index];
}

function showRussian() {
    if (activeCards.length === 0) {
        card.textContent = "All words in this range are known ✔";
        skipBtn.classList.remove("active");
        return;
    }

    const current = getCurrentCard();
    card.textContent = current.ru;
    skipBtn.classList.toggle("active", knownSet.has(current.ru));
    revealed = false;
}

/* ===== EVENTS ===== */
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

skipBtn.addEventListener("click", () => {
    const current = getCurrentCard();
    if (!current) return;

    if (knownSet.has(current.ru)) {
        knownSet.delete(current.ru);
    } else {
        knownSet.add(current.ru);
    }

    localStorage.setItem("knownWords", JSON.stringify([...knownSet]));
    rebuildActiveCards();
});

resetBtn.addEventListener("click", () => {
    knownSet.clear();
    localStorage.removeItem("knownWords");
    rebuildActiveCards();
});

modeInputs.forEach(input => {
    input.addEventListener("change", () => {
        mode = input.value;
        rebuildActiveCards();
    });
});

fromInput.addEventListener("change", rebuildActiveCards);
toInput.addEventListener("change", rebuildActiveCards);

/* ===== INIT ===== */
rebuildActiveCards();
