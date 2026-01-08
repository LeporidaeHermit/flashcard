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
{ ru: "его", en: "his" },
{ ru: "год", en: "year" },
{ ru: "кто", en: "who" },
{ ru: "дело", en: "business" },
{ ru: "нет", en: "no" },
{ ru: "её", en: "her" },
{ ru: "очень", en: "very" },
{ ru: "большой", en: "big" },
{ ru: "новый", en: "new" },
{ ru: "работа", en: "work" },
{ ru: "сейчас", en: "now" },
{ ru: "время", en: "time" },
{ ru: "человек", en: "person" },
{ ru: "идти", en: "go" },
{ ru: "если", en: "if" },
{ ru: "два", en: "two" },
{ ru: "мой", en: "my" },
{ ru: "жизнь", en: "life" },
{ ru: "до", en: "until" },
{ ru: "где", en: "where" },
{ ru: "каждый", en: "each" },
{ ru: "самый", en: "most" },
{ ru: "хотеть", en: "want" },
{ ru: "здесь", en: "here" },
{ ru: "надо", en: "need" },
{ ru: "люди", en: "people" },
{ ru: "теперь", en: "now" },
{ ru: "дом", en: "house" },
{ ru: "раз", en: "time" },
{ ru: "день", en: "day" },
{ ru: "или", en: "or" },
{ ru: "город", en: "city" },
{ ru: "там", en: "there" },
{ ru: "слово", en: "word" },
{ ru: "глаз", en: "eye" },
{ ru: "потом", en: "then" },
{ ru: "видеть", en: "see" },
{ ru: "их", en: "their" },
{ ru: "под", en: "under" },
{ ru: "даже", en: "even" },
{ ru: "думать", en: "think" },
{ ru: "хорошо", en: "well" },
{ ru: "можно", en: "possible" },
{ ru: "тут", en: "here" },
{ ru: "тысяча", en: "thousand" },
{ ru: "ли", en: "whether" },
{ ru: "вода", en: "water" },
{ ru: "ничего", en: "nothing" },
{ ru: "много", en: "many" },
{ ru: "рука", en: "hand" },
{ ru: "себя", en: "self" },
{ ru: "молодой", en: "young" },
{ ru: "тоже", en: "too" },
{ ru: "спрашивать", en: "ask" },
{ ru: "без", en: "without" },
{ ru: "делать", en: "do" },
{ ru: "три", en: "three" },
{ ru: "всё", en: "all" },
{ ru: "то", en: "that" },
{ ru: "жить", en: "live" },
{ ru: "труд", en: "work" },
{ ru: "сам", en: "self" },
{ ru: "хороший", en: "good" },
{ ru: "второй", en: "second" },
{ ru: "через", en: "through" },
{ ru: "место", en: "place" },
{ ru: "после", en: "after" },
{ ru: "страна", en: "country" },
{ ru: "двадцать", en: "twenty" },
{ ru: "должен", en: "must" },
{ ru: "больше", en: "more" },
{ ru: "ваш", en: "your" },
{ ru: "дверь", en: "door" },
{ ru: "друг", en: "friend" },
{ ru: "машина", en: "car" },
{ ru: "комната", en: "room" },
{ ru: "учиться", en: "study" },
{ ru: "над", en: "above" },
{ ru: "голова", en: "head" },
{ ru: "почему", en: "why" },
{ ru: "земля", en: "earth" },
{ ru: "стол", en: "table" },
{ ru: "давать", en: "give" },
{ ru: "перед", en: "before" },
{ ru: "тогда", en: "then" },
{ ru: "сидеть", en: "sit" },
{ ru: "мальчик", en: "boy" },
{ ru: "девушка", en: "girl" },
{ ru: "лето", en: "summer" },
{ ru: "сегодня", en: "today" },
{ ru: "сторона", en: "side" },
{ ru: "совсем", en: "completely" },
{ ru: "маленький", en: "small" },
{ ru: "несколько", en: "several" },
{ ru: "вдруг", en: "suddenly" },
{ ru: "лицо", en: "face" },
{ ru: "конечно", en: "of course" },
{ ru: "народ", en: "people" },
{ ru: "начинать", en: "begin" },
{ ru: "пять", en: "five" },
{ ru: "ведь", en: "after all" },
{ ru: "вопрос", en: "question" },
{ ru: "писать", en: "write" },
{ ru: "письмо", en: "letter" },
{ ru: "при", en: "at" },
{ ru: "мать", en: "mother" },
{ ru: "нужно", en: "necessary" },
{ ru: "смотреть", en: "watch" },
{ ru: "сила", en: "strength" },
{ ru: "вместе", en: "together" },
{ ru: "выходить", en: "go out" },
{ ru: "любить", en: "love" },
{ ru: "дорога", en: "road" },
{ ru: "старый", en: "old" },
{ ru: "улица", en: "street" },
{ ru: "решать", en: "decide" },
{ ru: "книга", en: "book" },
{ ru: "всегда", en: "always" },
{ ru: "голос", en: "voice" },
{ ru: "значить", en: "mean" },
{ ru: "сразу", en: "immediately" },
{ ru: "лишь", en: "only" },
{ ru: "минута", en: "minute" },
{ ru: "снова", en: "again" },
{ ru: "окно", en: "window" },
{ ru: "бы", en: "would" },
{ ru: "уходить", en: "leave" },
{ ru: "последний", en: "last" },
{ ru: "проходить", en: "pass" },
{ ru: "отец", en: "father" },
{ ru: "час", en: "hour" },
{ ru: "просто", en: "simply" },
{ ru: "же", en: "emphasis" },
{ ru: "третий", en: "third" },
{ ru: "потому", en: "because" },
{ ru: "никто", en: "nobody" },
{ ru: "ждать", en: "wait" },
{ ru: "сколько", en: "how much" },
{ ru: "высокий", en: "tall" },
{ ru: "лучше", en: "better" },
{ ru: "получать", en: "get" },
{ ru: "почти", en: "almost" },
{ ru: "лес", en: "forest" },
{ ru: "конец", en: "end" },
{ ru: "нога", en: "leg" },
{ ru: "собственный", en: "own" },
{ ru: "сто", en: "hundred" }

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
const answerInput = document.getElementById("answerInput");

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
        answerInput.value = "";
        return;
    }

    const current = getCurrentCard();
    card.textContent = current.ru;
    skipBtn.classList.toggle("active", knownSet.has(current.ru));
    revealed = false;

    answerInput.value = "";
    answerInput.focus();
}

/* ===== EVENTS ===== */

/* Click card: reveal / next */
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

/* Typing answer + Enter */
answerInput.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;
    if (!activeCards.length) return;

    const current = getCurrentCard();
    const typed = answerInput.value.trim().toLowerCase();
    const correct = current.en.toLowerCase();

    if (typed === correct) {
        index = (index + 1) % activeCards.length;
        showRussian();
    } else {
        card.textContent = `${current.en} ❌`;
        revealed = true;
    }
});

/* Skip / mark known */
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

/* Reset known words */
resetBtn.addEventListener("click", () => {
    knownSet.clear();
    localStorage.removeItem("knownWords");
    rebuildActiveCards();
});

/* Mode change */
modeInputs.forEach(input => {
    input.addEventListener("change", () => {
        mode = input.value;
        rebuildActiveCards();
    });
});

/* Range change */
fromInput.addEventListener("change", rebuildActiveCards);
toInput.addEventListener("change", rebuildActiveCards);

/* ===== INIT ===== */
rebuildActiveCards();

