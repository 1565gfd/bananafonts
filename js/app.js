/* ============================================================
   Banana — app logic
   - Unicode transforms (Math Alphanumeric Symbols)
   - Font picker
   - Language switch (RU / EN)
   - Theme switch (light / dark / night)
   - Copy to clipboard
   ============================================================ */

(function () {
  "use strict";

  /* --------- localized text --------- */
  var TEXT = {
    ru: {
      title: "Шрифты для Word и Telegram",
      placeholder: "Введите ваш текст...",
      footerPrefix: "сделал",
      footerSuffix: "(banana.team)",
      copy: "Копировать",
      copied: "Скопировано!",
      themeLight: "Светлая",
      themeDark: "Тёмная",
      themeNight: "Ночная",
      themeRainbow: "Радужная",
      themeSchool: "Школа",
      ttUniversal: "🇷🇺 🇬🇧 Поддерживает кириллицу и латиницу",
      ttUnicode: "🇬🇧 Только латиница и цифры. В Telegram Desktop Windows может не работать (нормализация Unicode)",
      ttCombining: "🇷🇺 🇬🇧 Подчёркнутый/зачёркнутый — работает везде, включая Telegram Desktop Windows и кириллицу",
      tabHome: "Главная",
      tabFonts: "Шрифты",
      tabSecret: "Секретные коды",
      secretTitle: "Секретные коды",
      secretIntro: "Введите специальный код, чтобы открыть скрытое сообщение.",
      secretLabel: "Код",
      secretPlaceholder: "Введите код...",
      secretSubmit: "Проверить",
      secretError: "Неверный код",
      secretEmpty: "Сначала введите код",
      secretSchoolUnlocked: "Тема школы активирована 🏫",
      secretChips: "С возвращением из магазина! 🍟",
      secretMatrix: "Wake up, Neo… 💊",
      secret42: "Ответ на главный вопрос жизни, вселенной и всего такого 🌌",
      secretParty: "Время веселья! 🎉🎊",
      secretFlip: "Вверх тормашками 🙃",
      secretHeart: "Любви тебе! ❤️",
      secretSnow: "Зима близко! ❄️",
      secretPizza: "Время пиццы! 🍕",
      secretMeow: "Мяу! 🐈",
      secretUnicorn: "Магия и единороги! 🦄✨",
      secretShake: "Землетрясение! 🌍",
      secretMoon: "Доброй ночи 🌙",
      secretSun: "Доброе утро ☀️",
      secretNoir: "Чёрно-белое кино 🎬",
      secretMeta: "Ты нашёл мета-код! Всего кодов: ",
      secretMetaSuffix: " 🔍",
      secret67: "67 💙",
      tabSettings: "Настройки",
      homeTitle: "Banana",
      homeIntro: "Помогающий сайт: инструменты для текста, шрифты для Word, Unicode-стили для Telegram и Discord.",
      homePlaceholder: "Введите или вставьте сюда текст...",
      toolTextLabel: "Текст для работы",
      toolCaseLabel: "Преобразование регистра",
      toolLinesLabel: "Действия над строками",
      toolCleanLabel: "Операции с текстом",
      statChars: "символов",
      statWords: "слов",
      statLines: "строк",
      statNoSpaces: "без пробелов",
      btnTrim: "Убрать лишние пробелы",
      btnReverse: "Обратный порядок",
      btnCopyText: "Копировать",
      btnClear: "Очистить",
      btnSortAsc: "Сортировка А→Я",
      btnSortDesc: "Сортировка Я→А",
      btnDedupe: "Уникальные строки",
      btnRemoveEmpty: "Убрать пустые строки",
      tabCalc: "Калькулятор",
      calcTitle: "Калькулятор",
      calcModeBasic: "Базовый",
      calcModeGeom: "Геометрия",
      calcModeUnits: "Единицы",
      calcModeFraction: "Дроби",
      fracIntro: "Складывайте, вычитайте, умножайте и делите простые дроби — результат сокращается автоматически.",
      tabTime: "Время",
      timeTitle: "Время",
      clocksLabel: "Часы по городам",
      clockMoscow: "Москва",
      clockYerevan: "Ереван",
      clockNewYork: "Нью-Йорк",
      stopwatchLabel: "Секундомер",
      stopwatchStart: "Старт",
      stopwatchPause: "Пауза",
      stopwatchReset: "Сброс",
      stopwatchLap: "Круг",
      timerLabel: "Таймер",
      timerStart: "Старт",
      timerPause: "Пауза",
      timerReset: "Сброс",
      timerDone: "Время вышло! ⏰",
      timerInvalid: "Введите корректное время (минуты ≥ 0, секунды 0–59).",
      timerRunning: "Идёт обратный отсчёт…",
      timerPaused: "На паузе.",
      geomShapeLabel: "Фигура",
      shapeRectangle: "Прямоугольник",
      shapeSquare: "Квадрат",
      shapeCircle: "Круг",
      shapeTriangle: "Треугольник",
      geomWidth: "Ширина",
      geomHeight: "Высота",
      geomSide: "Сторона",
      geomRadius: "Радиус",
      geomBase: "Основание",
      geomArea: "Площадь",
      geomPerimeter: "Периметр",
      geomCircumference: "Длина окружности",
      unitsCatLabel: "Категория",
      unitsLength: "Длина",
      unitsMass: "Масса",
      unitsTemp: "Температура",
      settingsTitle: "Настройки",
      settingsSizeLabel: "Размер превью",
      settingsSizeHint: "От 16 до 72 пикселей",
      settingsResetLabel: "Сбросить настройки",
      settingsResetBtn: "Сбросить тему, язык и размер",
      settingsResetHint: "Очистит сохранённые настройки и перезагрузит страницу.",
      settingsResetConfirm: "Точно сбросить все настройки?",
      settingsAboutLabel: "О сайте",
      settingsAboutText: "Banana — помогающий сайт.\n\n• Главная: счётчик символов/слов/строк, преобразование регистра, сортировка и очистка строк, реверс, копирование.\n\n• Шрифты: 20 стилей — системные для Word, Google Fonts, Unicode для Telegram/Discord, подчёркнутый/зачёркнутый.\n\n• Калькулятор: базовый с процентами, геометрия (4 фигуры), перевод единиц (длина/масса/температура)."
    },
    en: {
      title: "Fonts for Word and Telegram",
      placeholder: "Enter your text...",
      footerPrefix: "made by",
      footerSuffix: "(banana.team)",
      copy: "Copy",
      copied: "Copied!",
      themeLight: "Light",
      themeDark: "Dark",
      themeNight: "Night",
      themeRainbow: "Rainbow",
      themeSchool: "School",
      ttUniversal: "🇷🇺 🇬🇧 Supports Cyrillic and Latin",
      ttUnicode: "🇬🇧 Latin and digits only. May not work in Telegram Desktop Windows (Unicode normalization)",
      ttCombining: "🇷🇺 🇬🇧 Underline/strikethrough — works everywhere including Telegram Desktop Windows and Cyrillic",
      tabHome: "Home",
      tabFonts: "Fonts",
      tabSecret: "Secret codes",
      secretTitle: "Secret codes",
      secretIntro: "Enter a special code to unlock a hidden message.",
      secretLabel: "Code",
      secretPlaceholder: "Enter code...",
      secretSubmit: "Submit",
      secretError: "Wrong code",
      secretEmpty: "Enter a code first",
      secretSchoolUnlocked: "School theme unlocked 🏫",
      secretChips: "Welcome back from the store! 🍟",
      secretMatrix: "Wake up, Neo… 💊",
      secret42: "The answer to life, the universe and everything 🌌",
      secretParty: "Party time! 🎉🎊",
      secretFlip: "Upside down 🙃",
      secretHeart: "Spreading love ❤️",
      secretSnow: "Winter is here ❄️",
      secretPizza: "Pizza time! 🍕",
      secretMeow: "Meow! 🐈",
      secretUnicorn: "Magic and unicorns! 🦄✨",
      secretShake: "Earthquake! 🌍",
      secretMoon: "Good night 🌙",
      secretSun: "Good morning ☀️",
      secretNoir: "Film noir 🎬",
      secretMeta: "You found a meta-code! Total codes: ",
      secretMetaSuffix: " 🔍",
      secret67: "67 💙",
      tabSettings: "Settings",
      homeTitle: "Banana",
      homeIntro: "A helper site: text tools, fonts for Word, Unicode styles for Telegram and Discord.",
      homePlaceholder: "Type or paste your text here...",
      toolTextLabel: "Text to work with",
      toolCaseLabel: "Case conversion",
      toolLinesLabel: "Line operations",
      toolCleanLabel: "Text operations",
      statChars: "characters",
      statWords: "words",
      statLines: "lines",
      statNoSpaces: "no spaces",
      btnTrim: "Trim spaces",
      btnReverse: "Reverse",
      btnCopyText: "Copy",
      btnClear: "Clear",
      btnSortAsc: "Sort A→Z",
      btnSortDesc: "Sort Z→A",
      btnDedupe: "Unique lines",
      btnRemoveEmpty: "Remove empty lines",
      tabCalc: "Calculator",
      calcTitle: "Calculator",
      calcModeBasic: "Basic",
      calcModeGeom: "Geometry",
      calcModeUnits: "Units",
      calcModeFraction: "Fractions",
      fracIntro: "Add, subtract, multiply and divide simple fractions — the result is reduced automatically.",
      tabTime: "Time",
      timeTitle: "Time",
      clocksLabel: "World clocks",
      clockMoscow: "Moscow",
      clockYerevan: "Yerevan",
      clockNewYork: "New York",
      stopwatchLabel: "Stopwatch",
      stopwatchStart: "Start",
      stopwatchPause: "Pause",
      stopwatchReset: "Reset",
      stopwatchLap: "Lap",
      timerLabel: "Timer",
      timerStart: "Start",
      timerPause: "Pause",
      timerReset: "Reset",
      timerDone: "Time's up! ⏰",
      timerInvalid: "Enter a valid time (minutes ≥ 0, seconds 0–59).",
      timerRunning: "Counting down…",
      timerPaused: "Paused.",
      geomShapeLabel: "Shape",
      shapeRectangle: "Rectangle",
      shapeSquare: "Square",
      shapeCircle: "Circle",
      shapeTriangle: "Triangle",
      geomWidth: "Width",
      geomHeight: "Height",
      geomSide: "Side",
      geomRadius: "Radius",
      geomBase: "Base",
      geomArea: "Area",
      geomPerimeter: "Perimeter",
      geomCircumference: "Circumference",
      unitsCatLabel: "Category",
      unitsLength: "Length",
      unitsMass: "Mass",
      unitsTemp: "Temperature",
      settingsTitle: "Settings",
      settingsSizeLabel: "Preview size",
      settingsSizeHint: "From 16 to 72 pixels",
      settingsResetLabel: "Reset settings",
      settingsResetBtn: "Reset theme, language, and size",
      settingsResetHint: "Clears saved settings and reloads the page.",
      settingsResetConfirm: "Really reset all settings?",
      settingsAboutLabel: "About",
      settingsAboutText: "Banana — a helper site.\n\n• Home: character/word/line counter, case conversion, line sort and cleanup, reverse, copy.\n\n• Fonts: 20 styles — Word-safe, Google Fonts, Unicode for Telegram/Discord, underline/strikethrough.\n\n• Calculator: basic with percentages, geometry (4 shapes), unit conversion (length/mass/temperature)."
    }
  };

  /* --------- Unicode transforms --------- */
  var TRANSFORMS = {
    bold:       { upper: 0x1D3BF, lower: 0x1D3B9, digit: 0x1D79E },
    italic:     { upper: 0x1D3F3, lower: 0x1D3ED, exceptions: { h: "ℎ" } },
    bolditalic: { upper: 0x1D427, lower: 0x1D421, digit: 0x1D79E },
    sansbold:   { upper: 0x1D593, lower: 0x1D58D, digit: 0x1D7BC },
    sansitalic: { upper: 0x1D5C7, lower: 0x1D5C1 },
    mono:       { upper: 0x1D62F, lower: 0x1D629, digit: 0x1D7C6 }
  };

  function applyTransform(text, key) {
    var t = TRANSFORMS[key];
    if (!t) return text;
    var out = "";
    for (var i = 0, n = text.length; i < n; ) {
      var code = text.codePointAt(i);
      var c = String.fromCodePoint(code);
      i += c.length;
      if (t.exceptions && Object.prototype.hasOwnProperty.call(t.exceptions, c)) {
        out += t.exceptions[c];
        continue;
      }
      if (code >= 0x41 && code <= 0x5A) {
        out += String.fromCodePoint(code + t.upper);
      } else if (code >= 0x61 && code <= 0x7A) {
        out += String.fromCodePoint(code + t.lower);
      } else if (code >= 0x30 && code <= 0x39 && t.digit !== undefined) {
        out += String.fromCodePoint(code + t.digit);
      } else {
        out += c;
      }
    }
    return out;
  }

  /* Combining-character styles. These work in Telegram Desktop Windows
     where Math Alphanumeric gets NFKC-normalized away. They also work
     with Cyrillic, unlike Math Alphanumeric (Latin only).
     The combiner is appended after every visible character. */
  function applyCombining(text, combiner) {
    if (!combiner) return text;
    var out = "";
    for (var c of text) {
      out += c;
      /* Skip combining for whitespace and existing combining chars */
      if (c !== " " && c !== "\n" && c !== "\t" && c !== "\r") {
        out += combiner;
      }
    }
    return out;
  }

  /* --------- font list --------- */
  var FONTS = [
    { label: "Arial",        kind: "css", family: "Arial" },
    { label: "Verdana",      kind: "css", family: "Verdana" },
    { label: "Tahoma",       kind: "css", family: "Tahoma" },
    { label: "Trebuchet",    kind: "css", family: "'Trebuchet MS', sans-serif" },
    { label: "Times",        kind: "css", family: "'Times New Roman', serif" },
    { label: "Courier",      kind: "css", family: "'Courier New', monospace" },
    { label: "Roboto",       kind: "css", family: "Roboto, sans-serif" },
    { label: "Open Sans",    kind: "css", family: "'Open Sans', sans-serif" },
    { label: "Montserrat",   kind: "css", family: "Montserrat, sans-serif" },
    { label: "PT Sans",      kind: "css", family: "'PT Sans', sans-serif" },
    { label: "Merriweather", kind: "css", family: "Merriweather, serif" },
    { label: "Roboto Mono",  kind: "css", family: "'Roboto Mono', monospace" },
    { label: "Bold",         kind: "unicode", transform: "bold" },
    { label: "Italic",       kind: "unicode", transform: "italic" },
    { label: "Bold Italic",  kind: "unicode", transform: "bolditalic" },
    { label: "Sans Bold",    kind: "unicode", transform: "sansbold" },
    { label: "Sans Italic",  kind: "unicode", transform: "sansitalic" },
    { label: "Mono",         kind: "unicode", transform: "mono" },
    { label: "Underline",    kind: "combining", combiner: "̲" },
    { label: "Strike",       kind: "combining", combiner: "̶" }
  ];

  var VERSION = "v5.13.0";

  /* --------- DOM refs --------- */
  var titleEl   = document.getElementById("title");
  var inputEl   = document.getElementById("input");
  var fontsEl   = document.getElementById("fonts");
  var outputEl  = document.getElementById("output");
  var footerEl  = document.getElementById("footer");
  var copyBtn   = document.getElementById("copy-btn");
  var langButtons  = document.querySelectorAll(".lang-switch button");
  var themeButtons = document.querySelectorAll(".theme-switch button");
  var tabButtons   = document.querySelectorAll(".tab-btn");
  var tabContents  = document.querySelectorAll(".tab-content");
  /* Home tab refs */
  var tabBtnHome      = document.getElementById("tab-btn-home");
  var homeTitleEl     = document.getElementById("home-title");
  var homeIntroEl     = document.getElementById("home-intro");
  var homeInputEl     = document.getElementById("home-input");
  var toolTextLabel   = document.getElementById("tool-text-label");
  var toolCaseLabel   = document.getElementById("tool-case-label");
  var toolLinesLabel  = document.getElementById("tool-lines-label");
  var toolCleanLabel  = document.getElementById("tool-clean-label");
  var statCharsEl     = document.getElementById("stat-chars");
  var statWordsEl     = document.getElementById("stat-words");
  var statLinesEl     = document.getElementById("stat-lines");
  var statNoSpacesEl  = document.getElementById("stat-no-spaces");
  var statCharsLab    = document.getElementById("stat-chars-label");
  var statWordsLab    = document.getElementById("stat-words-label");
  var statLinesLab    = document.getElementById("stat-lines-label");
  var statNoSpacesLab = document.getElementById("stat-no-spaces-label");
  var btnTrim         = document.getElementById("btn-trim");
  var btnReverse      = document.getElementById("btn-reverse");
  var btnHomeCopy     = document.getElementById("btn-home-copy");
  var btnClear        = document.getElementById("btn-clear");
  var btnSortAsc      = document.getElementById("btn-sort-asc");
  var btnSortDesc     = document.getElementById("btn-sort-desc");
  var btnDedupe       = document.getElementById("btn-dedupe");
  var btnRemoveEmpty  = document.getElementById("btn-remove-empty");
  var sizeSlider   = document.getElementById("preview-size");
  var sizeValueEl  = document.getElementById("settings-size-value");
  var sizeSampleEl = document.getElementById("settings-size-sample");
  var resetBtn     = document.getElementById("reset-btn");
  /* Settings tab text targets — updated on language change */
  var settingsTitleEl   = document.getElementById("settings-title");
  var settingsSizeLabel = document.getElementById("settings-size-label");
  var settingsSizeHint  = document.getElementById("settings-size-hint");
  var settingsResetLab  = document.getElementById("settings-reset-label");
  var settingsResetHint = document.getElementById("settings-reset-hint");
  var settingsAboutLab  = document.getElementById("settings-about-label");
  var settingsAboutText = document.getElementById("settings-about-text");
  var settingsVersionEl = document.getElementById("settings-version-line");
  var tabBtnFonts       = document.getElementById("tab-btn-fonts");
  var tabBtnSettings    = document.getElementById("tab-btn-settings");
  var tabBtnCalc        = document.getElementById("tab-btn-calc");
  var tabBtnTime        = document.getElementById("tab-btn-time");
  var tabBtnSecret      = document.getElementById("tab-btn-secret");

  /* Time tab refs — clocks, stopwatch, timer */
  var timeTitleEl       = document.getElementById("time-title");
  var clocksLabelEl     = document.getElementById("clocks-label");
  var clockMoscowEl     = document.getElementById("clock-moscow");
  var clockYerevanEl    = document.getElementById("clock-yerevan");
  var clockNewYorkEl    = document.getElementById("clock-newyork");
  var clockDateMoscowEl   = document.getElementById("clock-date-moscow");
  var clockDateYerevanEl  = document.getElementById("clock-date-yerevan");
  var clockDateNewYorkEl  = document.getElementById("clock-date-newyork");
  var clockNameMoscowEl   = document.getElementById("clock-name-moscow");
  var clockNameYerevanEl  = document.getElementById("clock-name-yerevan");
  var clockNameNewYorkEl  = document.getElementById("clock-name-newyork");
  var stopwatchLabelEl  = document.getElementById("stopwatch-label");
  var stopwatchDisplay  = document.getElementById("stopwatch-display");
  var stopwatchStartBtn = document.getElementById("stopwatch-start");
  var stopwatchResetBtn = document.getElementById("stopwatch-reset");
  var stopwatchLapBtn   = document.getElementById("stopwatch-lap");
  var stopwatchLapsEl   = document.getElementById("stopwatch-laps");
  var timerLabelEl      = document.getElementById("timer-label");
  var timerMinEl        = document.getElementById("timer-min");
  var timerSecEl        = document.getElementById("timer-sec");
  var timerDisplayEl    = document.getElementById("timer-display");
  var timerStartBtn     = document.getElementById("timer-start");
  var timerResetBtn     = document.getElementById("timer-reset");
  var timerFeedbackEl   = document.getElementById("timer-feedback");

  /* Fraction calculator refs */
  var fracIntroEl       = document.getElementById("frac-intro");
  var fracANumEl        = document.getElementById("frac-a-num");
  var fracADenEl        = document.getElementById("frac-a-den");
  var fracBNumEl        = document.getElementById("frac-b-num");
  var fracBDenEl        = document.getElementById("frac-b-den");
  var fracOpBtns        = document.querySelectorAll(".frac-op-btn");
  var fracResultEl      = document.getElementById("frac-result");
  /* Secret tab refs */
  var secretTitleEl     = document.getElementById("secret-title");
  var secretIntroEl     = document.getElementById("secret-intro");
  var secretLabelEl     = document.getElementById("secret-label");
  var secretInputEl     = document.getElementById("secret-input");
  var secretSubmitEl    = document.getElementById("secret-submit");
  var secretFeedbackEl  = document.getElementById("secret-feedback");
  var secretResultEl    = document.getElementById("secret-result");
  /* Calculator refs */
  var calcTitleEl       = document.getElementById("calc-title");
  var calcModeBtns      = document.querySelectorAll(".calc-mode-btn");
  var calcPanels        = document.querySelectorAll(".calc-panel");
  var calcDisplayEl     = document.getElementById("calc-display");
  var calcBtns          = document.querySelectorAll(".calc-btn");
  var geomShapeLabel    = document.getElementById("geom-shape-label");
  var geomShapeSel      = document.getElementById("geom-shape");
  var geomInputsEl      = document.getElementById("geom-inputs");
  var geomResultsEl     = document.getElementById("geom-results");
  var unitsCatLabel     = document.getElementById("units-cat-label");
  var unitsCatSel       = document.getElementById("units-cat");
  var unitsFromVal      = document.getElementById("units-from-val");
  var unitsFromSel      = document.getElementById("units-from");
  var unitsToVal        = document.getElementById("units-to-val");
  var unitsToSel        = document.getElementById("units-to");

  /* --------- state --------- */
  var currentIdx = 0;
  var currentLang = "en";
  var VALID_THEMES = ["light", "dark", "night", "rainbow", "school"];
  var currentTheme = document.documentElement.dataset.theme || "dark";
  if (VALID_THEMES.indexOf(currentTheme) === -1) currentTheme = "dark";

  /* --------- language --------- */
  function readSavedLang() {
    try {
      var saved = localStorage.getItem("bananafont:lang");
      if (saved === "ru" || saved === "en") return saved;
    } catch (e) {}
    var browserLang = (navigator.language || "").toLowerCase();
    return browserLang.indexOf("ru") === 0 ? "ru" : "en";
  }

  /* Elements whose text changes when language switches — fade these. */
  function getFadeTargets() {
    var list = [titleEl, inputEl, footerEl, copyBtn];
    for (var i = 0; i < themeButtons.length; i++) list.push(themeButtons[i]);
    return list;
  }

  /* Update lang-button active state — instant feedback for the click. */
  function updateLangButtonsActive(lang) {
    for (var i = 0; i < langButtons.length; i++) {
      langButtons[i].classList.toggle("active", langButtons[i].dataset.lang === lang);
    }
  }

  /* Actually swap all the text. No animation here. */
  function applyLang(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    try { localStorage.setItem("bananafont:lang", lang); } catch (e) {}
    var t = TEXT[lang];
    titleEl.textContent = t.title;
    inputEl.placeholder = t.placeholder;
    copyBtn.textContent = copyBtn.classList.contains("copied") ? t.copied : t.copy;
    footerEl.innerHTML =
      t.footerPrefix +
      ' <a href="https://github.com/1565gfd" target="_blank" rel="noopener noreferrer">1565gfd</a> ' +
      t.footerSuffix +
      " · " +
      VERSION;
    var THEME_LABEL_KEYS = {
      light: "themeLight",
      dark: "themeDark",
      night: "themeNight",
      rainbow: "themeRainbow",
      school: "themeSchool"
    };
    for (var j = 0; j < themeButtons.length; j++) {
      var btn = themeButtons[j];
      var key = btn.dataset.themeBtn;
      btn.textContent = t[THEME_LABEL_KEYS[key]] || key;
    }
    /* Tab labels and Settings panel content */
    tabBtnHome.textContent        = t.tabHome;
    tabBtnFonts.textContent       = t.tabFonts;
    tabBtnCalc.textContent        = t.tabCalc;
    tabBtnTime.textContent        = t.tabTime;
    tabBtnSecret.textContent      = t.tabSecret;
    tabBtnSettings.textContent    = t.tabSettings;
    /* Secret tab labels */
    secretTitleEl.textContent     = t.secretTitle;
    secretIntroEl.textContent     = t.secretIntro;
    secretLabelEl.textContent     = t.secretLabel;
    secretInputEl.placeholder     = t.secretPlaceholder;
    secretSubmitEl.textContent    = t.secretSubmit;
    /* Time tab labels */
    timeTitleEl.textContent       = t.timeTitle;
    clocksLabelEl.textContent     = t.clocksLabel;
    clockNameMoscowEl.textContent  = t.clockMoscow;
    clockNameYerevanEl.textContent = t.clockYerevan;
    clockNameNewYorkEl.textContent = t.clockNewYork;
    stopwatchLabelEl.textContent  = t.stopwatchLabel;
    timerLabelEl.textContent      = t.timerLabel;
    /* Stopwatch & timer button labels — re-rendered here so they follow language;
       state-dependent labels (Start↔Pause) are also refreshed by their handlers. */
    refreshStopwatchButtonLabels();
    refreshTimerButtonLabels();
    /* Calculator labels */
    calcTitleEl.textContent       = t.calcTitle;
    calcModeBtns[0].textContent   = t.calcModeBasic;
    calcModeBtns[1].textContent   = t.calcModeGeom;
    calcModeBtns[2].textContent   = t.calcModeUnits;
    calcModeBtns[3].textContent   = t.calcModeFraction;
    fracIntroEl.textContent       = t.fracIntro;
    geomShapeLabel.textContent    = t.geomShapeLabel + ":";
    unitsCatLabel.textContent     = t.unitsCatLabel + ":";
    rebuildGeomSelect();
    rebuildUnitsCatSelect();
    renderGeomInputs();
    renderUnitsCategory();
    /* Home tab content */
    homeTitleEl.textContent       = t.homeTitle;
    homeIntroEl.textContent       = t.homeIntro;
    homeInputEl.placeholder       = t.homePlaceholder;
    toolTextLabel.textContent     = t.toolTextLabel;
    toolCaseLabel.textContent     = t.toolCaseLabel;
    toolLinesLabel.textContent    = t.toolLinesLabel;
    toolCleanLabel.textContent    = t.toolCleanLabel;
    statCharsLab.textContent      = t.statChars;
    statWordsLab.textContent      = t.statWords;
    statLinesLab.textContent      = t.statLines;
    statNoSpacesLab.textContent   = t.statNoSpaces;
    btnTrim.textContent           = t.btnTrim;
    btnReverse.textContent        = t.btnReverse;
    btnHomeCopy.textContent       = t.btnCopyText;
    btnClear.textContent          = t.btnClear;
    btnSortAsc.textContent        = t.btnSortAsc;
    btnSortDesc.textContent       = t.btnSortDesc;
    btnDedupe.textContent         = t.btnDedupe;
    btnRemoveEmpty.textContent    = t.btnRemoveEmpty;
    /* Settings panel content */
    settingsTitleEl.textContent   = t.settingsTitle;
    settingsSizeLabel.textContent = t.settingsSizeLabel;
    settingsSizeHint.textContent  = t.settingsSizeHint;
    settingsResetLab.textContent  = t.settingsResetLabel;
    resetBtn.textContent          = t.settingsResetBtn;
    settingsResetHint.textContent = t.settingsResetHint;
    settingsAboutLab.textContent  = t.settingsAboutLabel;
    settingsAboutText.textContent = t.settingsAboutText;
    settingsVersionEl.textContent = VERSION;
    renderFonts();
    setFont(currentIdx);
  }

  var langFadeTimer = null;
  var langInitialised = false;
  var prefersReducedMotion = window.matchMedia
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

  function setLang(lang) {
    /* First call on page load: no animation. */
    if (!langInitialised || prefersReducedMotion) {
      langInitialised = true;
      updateLangButtonsActive(lang);
      applyLang(lang);
      return;
    }

    /* Lang button gets active-state immediately for instant feedback. */
    updateLangButtonsActive(lang);

    /* Fade out → swap text → fade in. */
    var targets = getFadeTargets();
    for (var i = 0; i < targets.length; i++) {
      targets[i].classList.add("lang-fading");
    }

    if (langFadeTimer) clearTimeout(langFadeTimer);
    langFadeTimer = setTimeout(function () {
      applyLang(lang);
      /* Re-fetch targets — renderFonts may have replaced children. */
      var afterTargets = getFadeTargets();
      for (var k = 0; k < afterTargets.length; k++) {
        afterTargets[k].classList.remove("lang-fading");
      }
      langFadeTimer = null;
    }, 180);
  }

  /* --------- theme --------- */
  var THEME_COLORS = {
    light:   "#eef2ff",
    dark:    "#161b3a",
    night:   "#000000",
    rainbow: "#ff006e",   /* v5.9.0: rainbow now psychedelic (hot pink first stop) */
    school:  "#0f2c4a"    /* v5.9.0: school restored to navy/gold */
  };
  var themeTransitionTimer = null;

  function setMobileBarColor(theme) {
    /* Mobile browsers (Chrome on Android, Safari iOS 15+) tint the address
       bar with <meta name="theme-color">. Override all media-scoped tags so
       the user's explicit theme wins over OS prefers-color-scheme. */
    var color = THEME_COLORS[theme] || THEME_COLORS.dark;
    var existing = document.querySelectorAll('meta[name="theme-color"]');
    for (var i = 0; i < existing.length; i++) {
      existing[i].parentNode.removeChild(existing[i]);
    }
    var meta = document.createElement("meta");
    meta.name = "theme-color";
    meta.content = color;
    document.head.appendChild(meta);
  }

  function setTheme(theme) {
    var root = document.documentElement;
    /* If a previous theme-transition is still active (rapid clicks),
       remove it first so the new transition starts from a clean state.
       Without this, switching back can look "jumpy" because the browser
       is still mid-way through the previous animation when var values
       change again. */
    if (themeTransitionTimer) {
      clearTimeout(themeTransitionTimer);
      root.classList.remove("theme-transition");
      themeTransitionTimer = null;
    }
    /* Add transition class, then FORCE a synchronous reflow before
       changing CSS variables. This guarantees the browser commits the
       transition rule first, so the variable change actually animates
       (both forwards AND backwards) instead of snapping. */
    root.classList.add("theme-transition");
    void root.offsetHeight;
    currentTheme = theme;
    root.dataset.theme = theme;
    try { localStorage.setItem("bananafont:theme", theme); } catch (e) {}
    for (var i = 0; i < themeButtons.length; i++) {
      themeButtons[i].classList.toggle("active", themeButtons[i].dataset.themeBtn === theme);
    }
    setMobileBarColor(theme);
    themeTransitionTimer = setTimeout(function () {
      root.classList.remove("theme-transition");
      themeTransitionTimer = null;
    }, 500);
  }

  /* --------- fonts --------- */
  function getDisplayText() {
    var font = FONTS[currentIdx];
    if (font.kind === "unicode") {
      return applyTransform(inputEl.value, font.transform);
    }
    if (font.kind === "combining") {
      return applyCombining(inputEl.value, font.combiner);
    }
    return inputEl.value;
  }

  function renderOutput() {
    var font = FONTS[currentIdx];
    outputEl.textContent = getDisplayText();
    outputEl.style.fontFamily = font.kind === "css" ? font.family : "";
    copyBtn.disabled = !outputEl.textContent;
  }

  function setFont(idx) {
    currentIdx = idx;
    var btns = fontsEl.querySelectorAll("button");
    for (var i = 0; i < btns.length; i++) {
      btns[i].classList.toggle("active", parseInt(btns[i].dataset.idx, 10) === idx);
    }
    renderOutput();
  }

  function renderFonts() {
    var t = TEXT[currentLang];
    var html = "";
    for (var i = 0; i < FONTS.length; i++) {
      var item = FONTS[i];
      var display, tip, flag;
      if (item.kind === "unicode") {
        display = applyTransform(item.label, item.transform);
        tip = t.ttUnicode;
        flag = "🇬🇧";
      } else if (item.kind === "combining") {
        display = applyCombining(item.label, item.combiner);
        tip = t.ttCombining;
        flag = "🇷🇺 🇬🇧";
      } else {
        display = item.label;
        tip = t.ttUniversal;
        flag = "🇷🇺 🇬🇧";
      }
      html += '<button type="button" data-idx="' + i +
              '" data-kind="' + item.kind +
              '" data-flag="' + flag +
              '" title="' + tip + '">' + display + '</button>';
    }
    fontsEl.innerHTML = html;
    var btns = fontsEl.querySelectorAll("button");
    for (var k = 0; k < btns.length; k++) {
      (function (btn) {
        btn.addEventListener("click", function () {
          setFont(parseInt(btn.dataset.idx, 10));
        });
      })(btns[k]);
    }
  }

  /* --------- copy --------- */
  function handleCopy() {
    var text = outputEl.textContent;
    if (!text) return;
    function flash() {
      copyBtn.classList.add("copied");
      copyBtn.textContent = TEXT[currentLang].copied;
      setTimeout(function () {
        copyBtn.classList.remove("copied");
        copyBtn.textContent = TEXT[currentLang].copy;
      }, 1500);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(flash).catch(function () {});
    } else {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); flash(); } catch (e) {}
      document.body.removeChild(ta);
    }
  }

  /* --------- wiring --------- */
  for (var i = 0; i < langButtons.length; i++) {
    (function (btn) {
      btn.addEventListener("click", function () { setLang(btn.dataset.lang); });
    })(langButtons[i]);
  }
  for (var j = 0; j < themeButtons.length; j++) {
    (function (btn) {
      btn.addEventListener("click", function () { setTheme(btn.dataset.themeBtn); });
    })(themeButtons[j]);
  }
  inputEl.addEventListener("input", renderOutput);
  copyBtn.addEventListener("click", handleCopy);

  /* --------- tabs (with fade) --------- */
  var tabFadeTimer = null;
  function switchTab(name) {
    var newTab = document.getElementById("tab-" + name);
    if (!newTab) return;
    var currentTab = null;
    for (var c = 0; c < tabContents.length; c++) {
      if (tabContents[c].classList.contains("active")) {
        currentTab = tabContents[c];
        break;
      }
    }
    if (currentTab === newTab) return;
    /* Update buttons instantly */
    for (var i = 0; i < tabButtons.length; i++) {
      var isActive = tabButtons[i].dataset.tab === name;
      tabButtons[i].classList.toggle("active", isActive);
      tabButtons[i].setAttribute("aria-selected", isActive ? "true" : "false");
    }
    if (!currentTab || prefersReducedMotion) {
      if (currentTab) {
        currentTab.classList.remove("active");
        currentTab.setAttribute("hidden", "");
      }
      newTab.removeAttribute("hidden");
      newTab.classList.add("active");
      return;
    }
    /* Fade out current, swap, fade in new */
    currentTab.classList.add("tab-fading");
    if (tabFadeTimer) clearTimeout(tabFadeTimer);
    tabFadeTimer = setTimeout(function () {
      currentTab.classList.remove("active");
      currentTab.classList.remove("tab-fading");
      currentTab.setAttribute("hidden", "");
      newTab.removeAttribute("hidden");
      newTab.classList.add("tab-fading");
      newTab.classList.add("active");
      /* Force reflow then unfade */
      void newTab.offsetHeight;
      newTab.classList.remove("tab-fading");
      tabFadeTimer = null;
    }, 180);
  }
  for (var ti = 0; ti < tabButtons.length; ti++) {
    (function (btn) {
      btn.addEventListener("click", function () { switchTab(btn.dataset.tab); });
    })(tabButtons[ti]);
  }

  /* --------- Home tab: text tools --------- */
  function updateTextStats() {
    var t = homeInputEl.value;
    statCharsEl.textContent = t.length;
    var trimmed = t.trim();
    statWordsEl.textContent = trimmed ? trimmed.split(/\s+/).length : 0;
    statLinesEl.textContent = t === "" ? 0 : t.split("\n").length;
    statNoSpacesEl.textContent = t.replace(/\s/g, "").length;
  }
  homeInputEl.addEventListener("input", updateTextStats);

  var CASE_TRANSFORMS = {
    upper: function (s) { return s.toUpperCase(); },
    lower: function (s) { return s.toLowerCase(); },
    title: function (s) {
      return s.replace(/\S+/g, function (w) {
        return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
      });
    },
    invert: function (s) {
      var out = "";
      for (var i = 0; i < s.length; i++) {
        var c = s.charAt(i);
        var l = c.toLowerCase();
        out += c === l ? c.toUpperCase() : l;
      }
      return out;
    }
  };
  var caseButtons = document.querySelectorAll("[data-transform]");
  for (var cb = 0; cb < caseButtons.length; cb++) {
    (function (btn) {
      btn.addEventListener("click", function () {
        var fn = CASE_TRANSFORMS[btn.dataset.transform];
        if (!fn) return;
        homeInputEl.value = fn(homeInputEl.value);
        updateTextStats();
      });
    })(caseButtons[cb]);
  }

  function flashHomeCopy() {
    var orig = btnHomeCopy.textContent;
    btnHomeCopy.textContent = TEXT[currentLang].copied;
    setTimeout(function () { btnHomeCopy.textContent = TEXT[currentLang].btnCopyText; }, 1200);
  }

  btnTrim.addEventListener("click", function () {
    homeInputEl.value = homeInputEl.value
      .replace(/[ \t]+/g, " ")
      .replace(/\n[ \t]+/g, "\n")
      .replace(/[ \t]+\n/g, "\n")
      .replace(/\n{3,}/g, "\n\n")
      .trim();
    updateTextStats();
  });
  btnReverse.addEventListener("click", function () {
    /* Reverse using Array.from to handle astral Unicode code points */
    homeInputEl.value = Array.from(homeInputEl.value).reverse().join("");
    updateTextStats();
  });
  btnClear.addEventListener("click", function () {
    homeInputEl.value = "";
    updateTextStats();
    homeInputEl.focus();
  });
  btnSortAsc.addEventListener("click", function () {
    homeInputEl.value = homeInputEl.value.split("\n").sort(function (a, b) {
      return a.localeCompare(b, currentLang, { numeric: true, sensitivity: "base" });
    }).join("\n");
    updateTextStats();
  });
  btnSortDesc.addEventListener("click", function () {
    homeInputEl.value = homeInputEl.value.split("\n").sort(function (a, b) {
      return b.localeCompare(a, currentLang, { numeric: true, sensitivity: "base" });
    }).join("\n");
    updateTextStats();
  });
  btnDedupe.addEventListener("click", function () {
    var lines = homeInputEl.value.split("\n");
    var seen = (typeof Set !== "undefined") ? new Set() : null;
    var out = [];
    for (var i = 0; i < lines.length; i++) {
      if (seen) {
        if (!seen.has(lines[i])) { seen.add(lines[i]); out.push(lines[i]); }
      } else {
        if (out.indexOf(lines[i]) === -1) out.push(lines[i]);
      }
    }
    homeInputEl.value = out.join("\n");
    updateTextStats();
  });
  btnRemoveEmpty.addEventListener("click", function () {
    homeInputEl.value = homeInputEl.value.split("\n").filter(function (l) {
      return l.trim() !== "";
    }).join("\n");
    updateTextStats();
  });
  btnHomeCopy.addEventListener("click", function () {
    var txt = homeInputEl.value;
    if (!txt) return;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(txt).then(flashHomeCopy).catch(function () {});
    } else {
      homeInputEl.select();
      try { document.execCommand("copy"); flashHomeCopy(); } catch (e) {}
    }
  });
  updateTextStats();

  /* --------- preview size slider --------- */
  function applyPreviewSize(px) {
    outputEl.style.fontSize = px + "px";
    sizeValueEl.textContent = px + "px";
    if (sizeSampleEl) sizeSampleEl.style.fontSize = px + "px";
  }
  var savedSize = 30;
  try {
    var raw = localStorage.getItem("bananafont:size");
    var parsed = raw === null ? NaN : parseInt(raw, 10);
    if (!isNaN(parsed) && parsed >= 16 && parsed <= 72) savedSize = parsed;
  } catch (e) {}
  sizeSlider.value = String(savedSize);
  applyPreviewSize(savedSize);
  sizeSlider.addEventListener("input", function () {
    var v = parseInt(sizeSlider.value, 10);
    if (isNaN(v)) return;
    applyPreviewSize(v);
    try { localStorage.setItem("bananafont:size", String(v)); } catch (e) {}
  });

  /* --------- reset --------- */
  resetBtn.addEventListener("click", function () {
    var msg = TEXT[currentLang].settingsResetConfirm;
    if (!window.confirm(msg)) return;
    try {
      localStorage.removeItem("bananafont:theme");
      localStorage.removeItem("bananafont:lang");
      localStorage.removeItem("bananafont:size");
    } catch (e) {}
    window.location.reload();
  });

  /* --------- calculator mode switch --------- */
  for (var cm = 0; cm < calcModeBtns.length; cm++) {
    (function (btn) {
      btn.addEventListener("click", function () {
        var mode = btn.dataset.mode;
        for (var i = 0; i < calcModeBtns.length; i++) {
          calcModeBtns[i].classList.toggle("active", calcModeBtns[i].dataset.mode === mode);
        }
        for (var j = 0; j < calcPanels.length; j++) {
          var match = calcPanels[j].id === "calc-panel-" + mode;
          if (match) calcPanels[j].removeAttribute("hidden");
          else calcPanels[j].setAttribute("hidden", "");
        }
      });
    })(calcModeBtns[cm]);
  }

  /* --------- basic calculator --------- */
  var calcState = {
    display: "0",
    prev: null,
    op: null,
    waiting: false
  };

  function calcRender() {
    calcDisplayEl.textContent = calcState.display;
    /* Highlight active operator */
    for (var i = 0; i < calcBtns.length; i++) {
      var k = calcBtns[i].dataset.key;
      var isOp = (k === "+" || k === "-" || k === "*" || k === "/");
      calcBtns[i].classList.toggle("active-op", isOp && k === calcState.op && calcState.waiting);
    }
  }

  function calcFormat(n) {
    if (!isFinite(n)) return "∞";
    if (isNaN(n)) return "Error";
    /* Trim trailing zeros while keeping precision for small numbers */
    var rounded = Math.round(n * 1e10) / 1e10;
    var s = String(rounded);
    /* Limit length to avoid display overflow */
    if (s.length > 15) s = n.toPrecision(10);
    return s;
  }

  function calcInputDigit(d) {
    if (calcState.waiting) {
      calcState.display = d;
      calcState.waiting = false;
    } else {
      calcState.display = (calcState.display === "0" || calcState.display === "Error") ? d : calcState.display + d;
    }
    calcRender();
  }

  function calcInputDot() {
    if (calcState.waiting) {
      calcState.display = "0.";
      calcState.waiting = false;
    } else if (calcState.display.indexOf(".") === -1) {
      calcState.display += ".";
    }
    calcRender();
  }

  function calcEval(a, b, op) {
    switch (op) {
      case "+": return a + b;
      case "-": return a - b;
      case "*": return a * b;
      case "/": return b === 0 ? NaN : a / b;
      default:  return b;
    }
  }

  function calcSetOp(op) {
    var current = parseFloat(calcState.display);
    if (isNaN(current)) return;
    if (calcState.prev === null) {
      calcState.prev = current;
    } else if (!calcState.waiting) {
      var result = calcEval(calcState.prev, current, calcState.op);
      calcState.prev = result;
      calcState.display = calcFormat(result);
    }
    calcState.op = op;
    calcState.waiting = true;
    calcRender();
  }

  function calcEquals() {
    if (calcState.op === null || calcState.prev === null) return;
    var current = parseFloat(calcState.display);
    if (isNaN(current)) return;
    var result = calcEval(calcState.prev, current, calcState.op);
    calcState.display = calcFormat(result);
    calcState.prev = null;
    calcState.op = null;
    calcState.waiting = true;
    calcRender();
  }

  function calcClear() {
    calcState.display = "0";
    calcState.prev = null;
    calcState.op = null;
    calcState.waiting = false;
    calcRender();
  }

  function calcNegate() {
    var n = parseFloat(calcState.display);
    if (isNaN(n)) return;
    calcState.display = calcFormat(-n);
    calcRender();
  }

  function calcPercent() {
    var n = parseFloat(calcState.display);
    if (isNaN(n)) return;
    /* If there's a pending operation, percent of prev value */
    if (calcState.prev !== null && calcState.op) {
      calcState.display = calcFormat(calcState.prev * n / 100);
    } else {
      calcState.display = calcFormat(n / 100);
    }
    calcRender();
  }

  for (var cb = 0; cb < calcBtns.length; cb++) {
    (function (btn) {
      btn.addEventListener("click", function () {
        var key = btn.dataset.key;
        if (/^[0-9]$/.test(key)) calcInputDigit(key);
        else if (key === ".") calcInputDot();
        else if (key === "+" || key === "-" || key === "*" || key === "/") calcSetOp(key);
        else if (key === "=") calcEquals();
        else if (key === "AC") calcClear();
        else if (key === "neg") calcNegate();
        else if (key === "%") calcPercent();
      });
    })(calcBtns[cb]);
  }

  /* Keyboard support for calculator (when calc tab is active) */
  document.addEventListener("keydown", function (e) {
    var calcTab = document.getElementById("tab-calc");
    if (!calcTab || calcTab.hasAttribute("hidden")) return;
    var basicPanel = document.getElementById("calc-panel-basic");
    if (!basicPanel || basicPanel.hasAttribute("hidden")) return;
    /* Ignore if typing in an input/select */
    var tag = (e.target && e.target.tagName) || "";
    if (tag === "INPUT" || tag === "SELECT" || tag === "TEXTAREA") return;
    var k = e.key;
    if (/^[0-9]$/.test(k)) { calcInputDigit(k); e.preventDefault(); }
    else if (k === ".") { calcInputDot(); e.preventDefault(); }
    else if (k === "+" || k === "-" || k === "*" || k === "/") { calcSetOp(k); e.preventDefault(); }
    else if (k === "Enter" || k === "=") { calcEquals(); e.preventDefault(); }
    else if (k === "Escape" || k === "c" || k === "C") { calcClear(); e.preventDefault(); }
    else if (k === "%") { calcPercent(); e.preventDefault(); }
    else if (k === "Backspace") {
      if (!calcState.waiting && calcState.display.length > 1) {
        calcState.display = calcState.display.slice(0, -1);
      } else {
        calcState.display = "0";
      }
      calcRender();
      e.preventDefault();
    }
  });

  /* --------- geometry --------- */
  var GEOM_SHAPES = {
    rectangle: { inputs: ["width", "height"], calc: function (w, h) { return { area: w * h, perimeter: 2 * (w + h) }; } },
    square:    { inputs: ["side"],            calc: function (s) { return { area: s * s, perimeter: 4 * s }; } },
    circle:    { inputs: ["radius"],          calc: function (r) { return { area: Math.PI * r * r, circumference: 2 * Math.PI * r }; } },
    triangle:  { inputs: ["base", "height"],  calc: function (b, h) { return { area: 0.5 * b * h }; } }
  };
  var GEOM_INPUT_KEY = { width: "geomWidth", height: "geomHeight", side: "geomSide", radius: "geomRadius", base: "geomBase" };
  var GEOM_RESULT_KEY = { area: "geomArea", perimeter: "geomPerimeter", circumference: "geomCircumference" };
  var SHAPE_KEY = { rectangle: "shapeRectangle", square: "shapeSquare", circle: "shapeCircle", triangle: "shapeTriangle" };

  function rebuildGeomSelect() {
    var t = TEXT[currentLang];
    var current = geomShapeSel.value || "rectangle";
    var html = "";
    var keys = ["rectangle", "square", "circle", "triangle"];
    for (var i = 0; i < keys.length; i++) {
      html += '<option value="' + keys[i] + '">' + t[SHAPE_KEY[keys[i]]] + '</option>';
    }
    geomShapeSel.innerHTML = html;
    geomShapeSel.value = current;
  }

  function renderGeomInputs() {
    var shape = geomShapeSel.value;
    if (!GEOM_SHAPES[shape]) return;
    var t = TEXT[currentLang];
    var inputs = GEOM_SHAPES[shape].inputs;
    /* Preserve previous values if same input keys */
    var prevVals = {};
    var existing = geomInputsEl.querySelectorAll("input[data-geom]");
    for (var k = 0; k < existing.length; k++) prevVals[existing[k].dataset.geom] = existing[k].value;
    var html = "";
    for (var i = 0; i < inputs.length; i++) {
      var key = inputs[i];
      var label = t[GEOM_INPUT_KEY[key]] || key;
      var val = prevVals[key] || "";
      html += '<div class="calc-row">' +
              '<label>' + label + ':</label>' +
              '<input type="number" data-geom="' + key + '" class="calc-input" step="any" min="0" inputmode="decimal" value="' + val + '" />' +
              '</div>';
    }
    geomInputsEl.innerHTML = html;
    var newInputs = geomInputsEl.querySelectorAll("input[data-geom]");
    for (var j = 0; j < newInputs.length; j++) {
      newInputs[j].addEventListener("input", calcGeom);
    }
    calcGeom();
  }

  function calcGeom() {
    var shape = geomShapeSel.value;
    if (!GEOM_SHAPES[shape]) return;
    var t = TEXT[currentLang];
    var config = GEOM_SHAPES[shape];
    var values = [];
    var valid = true;
    for (var i = 0; i < config.inputs.length; i++) {
      var input = geomInputsEl.querySelector('input[data-geom="' + config.inputs[i] + '"]');
      if (!input) { valid = false; break; }
      var v = parseFloat(input.value);
      if (isNaN(v) || v < 0) { valid = false; break; }
      values.push(v);
    }
    if (!valid) { geomResultsEl.innerHTML = ""; return; }
    var result = config.calc.apply(null, values);
    var html = "";
    for (var key in result) {
      if (!Object.prototype.hasOwnProperty.call(result, key)) continue;
      var label = t[GEOM_RESULT_KEY[key]] || key;
      html += '<div class="calc-result-row">' +
              '<span>' + label + ':</span>' +
              '<span class="calc-result-value">' + formatGeomNum(result[key]) + '</span>' +
              '</div>';
    }
    geomResultsEl.innerHTML = html;
  }

  function formatGeomNum(n) {
    if (!isFinite(n)) return "—";
    var rounded = Math.round(n * 10000) / 10000;
    return String(rounded);
  }

  geomShapeSel.addEventListener("change", renderGeomInputs);

  /* --------- units conversion --------- */
  var UNITS = {
    length: {
      base: "m",
      list: [["mm", 0.001], ["cm", 0.01], ["m", 1], ["km", 1000], ["in", 0.0254], ["ft", 0.3048], ["yd", 0.9144], ["mi", 1609.344]]
    },
    mass: {
      base: "kg",
      list: [["mg", 0.000001], ["g", 0.001], ["kg", 1], ["t", 1000], ["oz", 0.0283495], ["lb", 0.453592]]
    },
    temp: {
      special: true,
      list: ["°C", "°F", "K"]
    }
  };
  var UNIT_CAT_KEY = { length: "unitsLength", mass: "unitsMass", temp: "unitsTemp" };

  function rebuildUnitsCatSelect() {
    var t = TEXT[currentLang];
    var current = unitsCatSel.value || "length";
    var html = "";
    var keys = ["length", "mass", "temp"];
    for (var i = 0; i < keys.length; i++) {
      html += '<option value="' + keys[i] + '">' + t[UNIT_CAT_KEY[keys[i]]] + '</option>';
    }
    unitsCatSel.innerHTML = html;
    unitsCatSel.value = current;
  }

  function tempToBase(v, unit) {
    if (unit === "°C") return v;
    if (unit === "°F") return (v - 32) * 5 / 9;
    if (unit === "K")  return v - 273.15;
    return v;
  }
  function tempFromBase(v, unit) {
    if (unit === "°C") return v;
    if (unit === "°F") return v * 9 / 5 + 32;
    if (unit === "K")  return v + 273.15;
    return v;
  }

  function renderUnitsCategory() {
    var cat = unitsCatSel.value;
    if (!UNITS[cat]) return;
    var prevFrom = unitsFromSel.value;
    var prevTo = unitsToSel.value;
    var html = "";
    if (UNITS[cat].special) {
      for (var i = 0; i < UNITS[cat].list.length; i++) {
        html += '<option value="' + UNITS[cat].list[i] + '">' + UNITS[cat].list[i] + '</option>';
      }
    } else {
      for (var j = 0; j < UNITS[cat].list.length; j++) {
        var u = UNITS[cat].list[j][0];
        html += '<option value="' + u + '">' + u + '</option>';
      }
    }
    unitsFromSel.innerHTML = html;
    unitsToSel.innerHTML = html;
    /* Restore selection if possible, else use first two distinct */
    var firstOpt = unitsFromSel.options[0] && unitsFromSel.options[0].value;
    var secondOpt = unitsFromSel.options[1] && unitsFromSel.options[1].value;
    var firstList = UNITS[cat].special ? UNITS[cat].list : UNITS[cat].list.map(function (x) { return x[0]; });
    unitsFromSel.value = firstList.indexOf(prevFrom) >= 0 ? prevFrom : firstOpt;
    unitsToSel.value = firstList.indexOf(prevTo) >= 0 ? prevTo : (secondOpt || firstOpt);
    convertUnits();
  }

  function convertUnits() {
    var cat = unitsCatSel.value;
    if (!UNITS[cat]) return;
    var fromVal = parseFloat(unitsFromVal.value);
    if (isNaN(fromVal)) { unitsToVal.value = ""; return; }
    var fromUnit = unitsFromSel.value;
    var toUnit = unitsToSel.value;
    var result;
    if (UNITS[cat].special) {
      var inBase = tempToBase(fromVal, fromUnit);
      result = tempFromBase(inBase, toUnit);
    } else {
      var fromFactor = 1, toFactor = 1;
      for (var i = 0; i < UNITS[cat].list.length; i++) {
        if (UNITS[cat].list[i][0] === fromUnit) fromFactor = UNITS[cat].list[i][1];
        if (UNITS[cat].list[i][0] === toUnit)   toFactor = UNITS[cat].list[i][1];
      }
      result = fromVal * fromFactor / toFactor;
    }
    /* Trim trailing zeros, max ~6 decimal digits */
    var rounded = Math.round(result * 1e6) / 1e6;
    unitsToVal.value = String(rounded);
  }

  unitsCatSel.addEventListener("change", renderUnitsCategory);
  unitsFromSel.addEventListener("change", convertUnits);
  unitsToSel.addEventListener("change", convertUnits);
  unitsFromVal.addEventListener("input", convertUnits);

  /* ============================================================
     SECRET CODES TAB
     Each code is an object { message, action? }.
       message — string shown in the result card (or function returning string)
       action  — optional function fired after the card is shown
     Easy to extend: add new { "CODE": { message, action } } entries.
     ============================================================ */
  var SECRET_CODES = {
    "ILOVELIBSCHOOL": {
      message: "Виталий лучший"
    },
    "LIBERATEDSCHOOL": {
      /* Message is computed from TEXT at call time so it follows the
         current language. Returned as function. */
      message: function () { return TEXT[currentLang].secretSchoolUnlocked; },
      action: function () { setTheme("school"); }
    },

    /* ── v5.10.0 chip-run pack — added while the author was at the
          store buying chips. Five new codes for the curious. ── */

    "ILOVECHIPS": {
      message: function () { return TEXT[currentLang].secretChips; },
      action:  function () { emojiRain("🍟", 60); }
    },

    "MATRIX": {
      message: function () { return TEXT[currentLang].secretMatrix; },
      action:  function () { matrixRain(); }
    },

    "42": {
      /* The answer to life, the universe and everything (HHGTTG). */
      message: function () { return TEXT[currentLang].secret42; },
      action:  function () { triggerRainbow(); }
    },

    "PARTY": {
      message: function () { return TEXT[currentLang].secretParty; },
      action:  function () {
        /* Stagger a few different emoji rains so the screen feels busy */
        var partyEmojis = ["🎉", "🎊", "🥳", "🎈", "🎂", "✨"];
        for (var i = 0; i < partyEmojis.length; i++) {
          (function (e, idx) {
            setTimeout(function () { emojiRain(e, 14); }, idx * 90);
          })(partyEmojis[i], i);
        }
        triggerRainbow();
      }
    },

    "FLIP": {
      message: function () { return TEXT[currentLang].secretFlip; },
      action:  function () { flipPage(); }
    },

    /* ── v5.11.0 mega-pack — 10 more codes for variety ── */

    "HEART": {
      message: function () { return TEXT[currentLang].secretHeart; },
      action:  function () { emojiRain("❤️", 50); }
    },

    "SNOW": {
      message: function () { return TEXT[currentLang].secretSnow; },
      action:  function () { emojiRain("❄️", 50); }
    },

    "PIZZA": {
      message: function () { return TEXT[currentLang].secretPizza; },
      action:  function () { emojiRain("🍕", 40); }
    },

    "MEOW": {
      message: function () { return TEXT[currentLang].secretMeow; },
      action:  function () { emojiRain("🐈", 40); }
    },

    "UNICORN": {
      /* Pure magic — unicorns + hue-rotate rainbow sweep */
      message: function () { return TEXT[currentLang].secretUnicorn; },
      action:  function () {
        emojiRain("🦄", 30);
        triggerRainbow();
      }
    },

    "SHAKE": {
      message: function () { return TEXT[currentLang].secretShake; },
      action:  function () { shakePage(); }
    },

    "MOON": {
      /* Switches to night theme and rains moons */
      message: function () { return TEXT[currentLang].secretMoon; },
      action:  function () {
        setTheme("night");
        emojiRain("🌙", 30);
      }
    },

    "SUN": {
      /* Switches to light theme and rains suns */
      message: function () { return TEXT[currentLang].secretSun; },
      action:  function () {
        setTheme("light");
        emojiRain("☀️", 30);
      }
    },

    "NOIR": {
      message: function () { return TEXT[currentLang].secretNoir; },
      action:  function () { noirPage(); }
    },

    "SECRET": {
      /* Meta-code: reveals the total number of secret codes at runtime,
         so it stays accurate as more get added later. */
      message: function () {
        var t = TEXT[currentLang];
        return t.secretMeta + Object.keys(SECRET_CODES).length + t.secretMetaSuffix;
      },
      action: function () { emojiRain("🔍", 20); }
    },

    "67": {
      /* Huge blue 67 takes over the screen for 3 seconds. */
      message: function () { return TEXT[currentLang].secret67; },
      action:  function () { showBigNumber(67, "#1e88ff"); }
    }
  };

  function showSecretFeedback(text, isError) {
    secretFeedbackEl.textContent = text;
    secretFeedbackEl.classList.toggle("error", !!isError);
    secretFeedbackEl.style.opacity = text ? "1" : "0";
  }

  function showSecretMessage(msg) {
    /* Replace previous message so animation re-fires */
    secretResultEl.innerHTML = "";
    var card = document.createElement("div");
    card.className = "secret-message";
    /* Text in its own span so the absolutely-positioned close button
       does not overlap the text. */
    var textSpan = document.createElement("span");
    textSpan.className = "secret-message-text";
    textSpan.textContent = msg;
    card.appendChild(textSpan);
    /* Close button (×) — removes the message from view */
    var closeBtn = document.createElement("button");
    closeBtn.type = "button";
    closeBtn.className = "secret-close";
    closeBtn.setAttribute("aria-label", "Close");
    closeBtn.textContent = "×";
    closeBtn.addEventListener("click", function () {
      secretResultEl.innerHTML = "";
    });
    card.appendChild(closeBtn);
    secretResultEl.appendChild(card);
    /* Celebration: heart rain + rainbow flash */
    if (typeof emojiRain === "function") emojiRain("❤️", 24);
    triggerRainbow();
  }

  /* Short rainbow hue-rotate sweep on <html>. Cleans up after itself.
     Respects prefers-reduced-motion. */
  var rainbowTimer = null;
  function triggerRainbow() {
    var html = document.documentElement;
    if (prefersReducedMotion) return;
    if (rainbowTimer) clearTimeout(rainbowTimer);
    html.classList.add("rainbow-active");
    rainbowTimer = setTimeout(function () {
      html.classList.remove("rainbow-active");
      rainbowTimer = null;
    }, 3000);
  }

  function checkSecretCode() {
    var raw = (secretInputEl.value || "").trim();
    if (!raw) {
      showSecretFeedback(TEXT[currentLang].secretEmpty, true);
      return;
    }
    var code = raw.toUpperCase();
    if (Object.prototype.hasOwnProperty.call(SECRET_CODES, code)) {
      var entry = SECRET_CODES[code];
      var msg = (typeof entry.message === "function") ? entry.message() : entry.message;
      showSecretFeedback("", false);
      showSecretMessage(msg);
      if (typeof entry.action === "function") {
        try { entry.action(); } catch (e) {}
      }
    } else {
      showSecretFeedback(TEXT[currentLang].secretError, true);
    }
  }

  secretSubmitEl.addEventListener("click", checkSecretCode);
  secretInputEl.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      checkSecretCode();
    }
  });
  /* Clear stale error feedback as soon as the user starts typing again */
  secretInputEl.addEventListener("input", function () {
    if (secretFeedbackEl.classList.contains("error")) {
      showSecretFeedback("", false);
    }
  });

  /* ============================================================
     TIME TAB (v5.12.0) — three live world clocks, stopwatch, timer.
     ============================================================ */

  /* ── World clocks ── use Intl.DateTimeFormat with explicit timeZone.
     Three Intl instances are reused; cheap to tick once per second. */
  var TZ_MOSCOW  = "Europe/Moscow";
  var TZ_YEREVAN = "Asia/Yerevan";
  var TZ_NEWYORK = "America/New_York";
  function makeTimeFmt(tz) {
    return new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit", minute: "2-digit", second: "2-digit",
      hour12: false, timeZone: tz
    });
  }
  function makeDateFmt(tz) {
    return new Intl.DateTimeFormat("en-GB", {
      weekday: "short", day: "2-digit", month: "short", timeZone: tz
    });
  }
  var fmtMoscow   = makeTimeFmt(TZ_MOSCOW);
  var fmtYerevan  = makeTimeFmt(TZ_YEREVAN);
  var fmtNewYork  = makeTimeFmt(TZ_NEWYORK);
  var dfmtMoscow  = makeDateFmt(TZ_MOSCOW);
  var dfmtYerevan = makeDateFmt(TZ_YEREVAN);
  var dfmtNewYork = makeDateFmt(TZ_NEWYORK);

  function tickClocks() {
    var now = new Date();
    clockMoscowEl.textContent      = fmtMoscow.format(now);
    clockYerevanEl.textContent     = fmtYerevan.format(now);
    clockNewYorkEl.textContent     = fmtNewYork.format(now);
    clockDateMoscowEl.textContent  = dfmtMoscow.format(now);
    clockDateYerevanEl.textContent = dfmtYerevan.format(now);
    clockDateNewYorkEl.textContent = dfmtNewYork.format(now);
  }
  tickClocks();
  setInterval(tickClocks, 1000);

  /* ── Stopwatch ── millisecond-precision via performance.now().
     We don't sum elapsed deltas every tick (drift-prone); instead we
     record start time and compute (now - start + previouslyAccumulated). */
  var swState = "idle";       /* idle | running | paused */
  var swStartedAt = 0;
  var swAccumulated = 0;
  var swRafId = null;

  function formatStopwatch(ms) {
    if (ms < 0) ms = 0;
    var totalSec = Math.floor(ms / 1000);
    var mm = Math.floor(totalSec / 60);
    var ss = totalSec % 60;
    var cs = Math.floor((ms % 1000) / 10); /* centiseconds, 0–99 */
    return pad2(mm) + ":" + pad2(ss) + "." + pad2(cs);
  }
  function pad2(n) { return (n < 10 ? "0" : "") + n; }
  function stopwatchElapsed() {
    if (swState === "running") {
      return swAccumulated + (performance.now() - swStartedAt);
    }
    return swAccumulated;
  }
  function stopwatchTick() {
    stopwatchDisplay.textContent = formatStopwatch(stopwatchElapsed());
    if (swState === "running") {
      swRafId = requestAnimationFrame(stopwatchTick);
    }
  }
  function refreshStopwatchButtonLabels() {
    var t = TEXT[currentLang];
    stopwatchStartBtn.textContent = (swState === "running") ? t.stopwatchPause : t.stopwatchStart;
    stopwatchResetBtn.textContent = t.stopwatchReset;
    stopwatchLapBtn.textContent   = t.stopwatchLap;
    /* Lap button only useful while running */
    stopwatchLapBtn.disabled = (swState !== "running");
  }
  function stopwatchToggle() {
    if (swState === "running") {
      /* pause */
      swAccumulated += performance.now() - swStartedAt;
      swState = "paused";
      if (swRafId) cancelAnimationFrame(swRafId);
      swRafId = null;
    } else {
      /* start or resume */
      swStartedAt = performance.now();
      swState = "running";
      stopwatchTick();
    }
    refreshStopwatchButtonLabels();
  }
  function stopwatchReset() {
    if (swRafId) cancelAnimationFrame(swRafId);
    swRafId = null;
    swState = "idle";
    swStartedAt = 0;
    swAccumulated = 0;
    stopwatchDisplay.textContent = formatStopwatch(0);
    stopwatchLapsEl.innerHTML = "";
    refreshStopwatchButtonLabels();
  }
  function stopwatchLap() {
    if (swState !== "running") return;
    var li = document.createElement("li");
    li.textContent = formatStopwatch(stopwatchElapsed());
    stopwatchLapsEl.insertBefore(li, stopwatchLapsEl.firstChild);
  }
  stopwatchStartBtn.addEventListener("click", stopwatchToggle);
  stopwatchResetBtn.addEventListener("click", stopwatchReset);
  stopwatchLapBtn.addEventListener("click", stopwatchLap);

  /* ── Timer ── countdown to zero. setInterval is fine here (we don't
     need sub-second precision in the display). On finish we beep via
     WebAudio (no external asset) and visually flash the display. */
  var tmState = "idle";       /* idle | running | paused | done */
  var tmRemainingMs = 0;
  var tmEndAt = 0;             /* performance.now() target for finish */
  var tmIntervalId = null;
  var audioCtx = null;

  function readTimerInputs() {
    var m = parseInt(timerMinEl.value, 10);
    var s = parseInt(timerSecEl.value, 10);
    if (isNaN(m) || m < 0)   return null;
    if (isNaN(s) || s < 0 || s > 59) return null;
    return (m * 60 + s) * 1000;
  }
  function formatTimer(ms) {
    if (ms < 0) ms = 0;
    var totalSec = Math.ceil(ms / 1000);
    var mm = Math.floor(totalSec / 60);
    var ss = totalSec % 60;
    return pad2(mm) + ":" + pad2(ss);
  }
  function refreshTimerButtonLabels() {
    var t = TEXT[currentLang];
    timerStartBtn.textContent = (tmState === "running") ? t.timerPause : t.timerStart;
    timerResetBtn.textContent = t.timerReset;
  }
  function setTimerFeedback(text, isError) {
    timerFeedbackEl.textContent = text || "";
    timerFeedbackEl.style.color = isError ? "#ff6b7a" : "";
  }
  function beepDone() {
    /* Three short beeps via WebAudio API — no asset needed. */
    try {
      if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      var ctx = audioCtx;
      [0, 0.25, 0.5].forEach(function (delay) {
        var osc = ctx.createOscillator();
        var gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.value = 880;
        gain.gain.setValueAtTime(0.0001, ctx.currentTime + delay);
        gain.gain.exponentialRampToValueAtTime(0.25, ctx.currentTime + delay + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + delay + 0.18);
        osc.connect(gain).connect(ctx.destination);
        osc.start(ctx.currentTime + delay);
        osc.stop(ctx.currentTime + delay + 0.2);
      });
    } catch (e) { /* WebAudio unavailable — fail silently */ }
  }
  function timerFinish() {
    tmState = "done";
    tmRemainingMs = 0;
    if (tmIntervalId) clearInterval(tmIntervalId);
    tmIntervalId = null;
    timerDisplayEl.textContent = "00:00";
    timerDisplayEl.classList.add("timer-done");
    setTimerFeedback(TEXT[currentLang].timerDone, false);
    refreshTimerButtonLabels();
    beepDone();
    /* Remove blink after the 5 iterations (0.6s × 5 = 3s) */
    setTimeout(function () { timerDisplayEl.classList.remove("timer-done"); }, 3500);
  }
  function timerTick() {
    var remain = tmEndAt - performance.now();
    if (remain <= 0) {
      timerFinish();
      return;
    }
    tmRemainingMs = remain;
    timerDisplayEl.textContent = formatTimer(remain);
  }
  function timerToggle() {
    if (tmState === "running") {
      /* pause */
      tmRemainingMs = Math.max(0, tmEndAt - performance.now());
      tmState = "paused";
      if (tmIntervalId) clearInterval(tmIntervalId);
      tmIntervalId = null;
      setTimerFeedback(TEXT[currentLang].timerPaused, false);
    } else if (tmState === "paused") {
      /* resume */
      tmEndAt = performance.now() + tmRemainingMs;
      tmState = "running";
      tmIntervalId = setInterval(timerTick, 250);
      setTimerFeedback(TEXT[currentLang].timerRunning, false);
    } else {
      /* start fresh from inputs */
      var ms = readTimerInputs();
      if (ms === null || ms === 0) {
        setTimerFeedback(TEXT[currentLang].timerInvalid, true);
        return;
      }
      tmRemainingMs = ms;
      tmEndAt = performance.now() + ms;
      tmState = "running";
      timerDisplayEl.classList.remove("timer-done");
      timerDisplayEl.textContent = formatTimer(ms);
      tmIntervalId = setInterval(timerTick, 250);
      setTimerFeedback(TEXT[currentLang].timerRunning, false);
    }
    refreshTimerButtonLabels();
  }
  function timerReset() {
    if (tmIntervalId) clearInterval(tmIntervalId);
    tmIntervalId = null;
    tmState = "idle";
    tmRemainingMs = 0;
    var ms = readTimerInputs();
    timerDisplayEl.textContent = formatTimer(ms === null ? 0 : ms);
    timerDisplayEl.classList.remove("timer-done");
    setTimerFeedback("", false);
    refreshTimerButtonLabels();
  }
  /* Keep the display in sync with the input fields while idle */
  function timerInputsChanged() {
    if (tmState === "idle") {
      var ms = readTimerInputs();
      timerDisplayEl.textContent = formatTimer(ms === null ? 0 : ms);
    }
  }
  timerStartBtn.addEventListener("click", timerToggle);
  timerResetBtn.addEventListener("click", timerReset);
  timerMinEl.addEventListener("input", timerInputsChanged);
  timerSecEl.addEventListener("input", timerInputsChanged);
  /* Initial paint */
  refreshStopwatchButtonLabels();
  refreshTimerButtonLabels();
  stopwatchDisplay.textContent = formatStopwatch(0);
  timerInputsChanged();

  /* ============================================================
     FRACTION CALCULATOR (v5.12.0) — add/sub/mul/div simple fractions
     ============================================================ */
  var currentFracOp = "+";

  function fracGcd(a, b) {
    a = Math.abs(a); b = Math.abs(b);
    while (b !== 0) { var tmp = b; b = a % b; a = tmp; }
    return a || 1;
  }
  function fracReduce(num, den) {
    if (den === 0) return null;
    /* keep sign on numerator */
    if (den < 0) { num = -num; den = -den; }
    var g = fracGcd(num, den);
    return { n: num / g, d: den / g };
  }
  function fracCompute(an, ad, bn, bd, op) {
    if (ad === 0 || bd === 0) return null;
    var n, d;
    switch (op) {
      case "+": n = an * bd + bn * ad; d = ad * bd; break;
      case "-": n = an * bd - bn * ad; d = ad * bd; break;
      case "*": n = an * bn;           d = ad * bd; break;
      case "/":
        if (bn === 0) return null;
        n = an * bd; d = ad * bn;
        break;
      default: return null;
    }
    return fracReduce(n, d);
  }
  function renderFracResult(frac) {
    if (!frac) {
      fracResultEl.textContent = "—";
      return;
    }
    /* Show whole number when denominator reduces to 1 */
    if (frac.d === 1) {
      fracResultEl.textContent = String(frac.n);
      return;
    }
    /* Render as a stacked mini-fraction */
    fracResultEl.innerHTML = "";
    var wrap = document.createElement("span");
    wrap.className = "frac-mini";
    var top = document.createElement("span"); top.textContent = String(frac.n);
    var bar = document.createElement("div"); bar.className = "frac-mini-bar";
    var bot = document.createElement("span"); bot.textContent = String(frac.d);
    wrap.appendChild(top);
    wrap.appendChild(bar);
    wrap.appendChild(bot);
    fracResultEl.appendChild(wrap);
  }
  function recalcFraction() {
    var an = parseInt(fracANumEl.value, 10);
    var ad = parseInt(fracADenEl.value, 10);
    var bn = parseInt(fracBNumEl.value, 10);
    var bd = parseInt(fracBDenEl.value, 10);
    if (isNaN(an) || isNaN(ad) || isNaN(bn) || isNaN(bd)) {
      fracResultEl.textContent = "—";
      return;
    }
    renderFracResult(fracCompute(an, ad, bn, bd, currentFracOp));
  }
  for (var fb = 0; fb < fracOpBtns.length; fb++) {
    (function (btn) {
      btn.addEventListener("click", function () {
        currentFracOp = btn.dataset.fracOp;
        for (var k = 0; k < fracOpBtns.length; k++) {
          fracOpBtns[k].classList.toggle("active", fracOpBtns[k] === btn);
        }
        recalcFraction();
      });
    })(fracOpBtns[fb]);
  }
  [fracANumEl, fracADenEl, fracBNumEl, fracBDenEl].forEach(function (el) {
    el.addEventListener("input", recalcFraction);
  });
  /* Initial paint */
  recalcFraction();

  /* ============================================================
     EASTER EGGS — hidden features for the curious.
     Not mentioned in UI. Let the user discover them.
     ============================================================ */

  /* Generic emoji rain — drop any emoji from the top with random
     spread, size, rotation. Default emoji: 🍌. */
  function emojiRain(emoji, count) {
    var ch = emoji || "🍌";
    var n = count || 25;
    for (var i = 0; i < n; i++) {
      (function (i) {
        var b = document.createElement("div");
        b.textContent = ch;
        b.style.position = "fixed";
        b.style.top = "-60px";
        b.style.left = (Math.random() * 100) + "vw";
        b.style.fontSize = (20 + Math.random() * 36) + "px";
        b.style.pointerEvents = "none";
        b.style.zIndex = "9999";
        b.style.transition = "transform 3s linear, opacity 3s linear";
        b.style.willChange = "transform, opacity";
        document.body.appendChild(b);
        var rot = (Math.random() * 1440 - 720);
        setTimeout(function () {
          b.style.transform = "translateY(110vh) rotate(" + rot + "deg)";
          b.style.opacity = "0";
        }, 10 + i * 30);
        setTimeout(function () { if (b.parentNode) b.parentNode.removeChild(b); }, 4000 + i * 30);
      })(i);
    }
  }
  /* Backward-compat alias — old code & dev console keep working */
  function bananaRain(count) { emojiRain("🍌", count); }

  /* ── Matrix-style green character rain ── classic falling katakana +
     latin glyphs in neon green for ~5 seconds, then fades and removes
     itself. Respects prefers-reduced-motion by showing a 1.5s static
     overlay instead of the full animation. */
  function matrixRain() {
    var canvas = document.createElement("canvas");
    canvas.style.cssText = [
      "position:fixed", "inset:0",
      "width:100vw", "height:100vh",
      "pointer-events:none",
      "z-index:9998",
      "opacity:0",
      "transition:opacity 0.4s ease"
    ].join(";");
    document.body.appendChild(canvas);
    var ctx = canvas.getContext("2d");
    function resize() {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    requestAnimationFrame(function () { canvas.style.opacity = "1"; });

    var chars = "アイウエオカキクケコサシスセソタチツテトナニヌネノABCDEFGHJKLMNPQRSTUVWXYZ0123456789".split("");
    var fontSize = 16;
    var columns = Math.max(1, Math.floor(canvas.width / fontSize));
    var drops = new Array(columns);
    for (var i = 0; i < columns; i++) drops[i] = Math.random() * -50;

    var interval = setInterval(function () {
      /* Translucent black overlay creates the fade-trail effect */
      ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#00ff41";
      ctx.font = fontSize + "px monospace";
      for (var c = 0; c < drops.length; c++) {
        var ch = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(ch, c * fontSize, drops[c] * fontSize);
        if (drops[c] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[c] = 0;
        }
        drops[c]++;
      }
    }, prefersReducedMotion ? 999999 : 40);

    var duration = prefersReducedMotion ? 1500 : 5500;
    setTimeout(function () {
      canvas.style.opacity = "0";
      setTimeout(function () {
        clearInterval(interval);
        if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
      }, 500);
    }, duration);
  }

  /* ── Page flip ── rotates <html> 180° for ~3 seconds, then back.
     Implemented in CSS via .page-flipped class so the transition is
     hardware-accelerated. Respects prefers-reduced-motion (snaps
     instantly with no transition). */
  function flipPage() {
    var html = document.documentElement;
    if (html.classList.contains("page-flipped")) return; /* don't stack */
    html.classList.add("page-flipped");
    setTimeout(function () {
      html.classList.remove("page-flipped");
    }, 3000);
  }

  /* ── Page shake ── earthquake-style horizontal shake for 1.5 seconds.
     Implemented via CSS keyframes on html.page-shaking. No-op when
     prefers-reduced-motion is set. */
  function shakePage() {
    if (prefersReducedMotion) return;
    var html = document.documentElement;
    if (html.classList.contains("page-shaking")) return;
    html.classList.add("page-shaking");
    setTimeout(function () {
      html.classList.remove("page-shaking");
    }, 1500);
  }

  /* ── Page noir ── desaturates everything to black-and-white for 3
     seconds. Uses CSS filter via the .page-noir class. Smooth fade in/out
     thanks to transition on filter. */
  function noirPage() {
    var html = document.documentElement;
    if (html.classList.contains("page-noir")) return;
    html.classList.add("page-noir");
    setTimeout(function () {
      html.classList.remove("page-noir");
    }, 3000);
  }

  /* ── Big number overlay (v5.13.0) ── shows a huge centred number on
     screen with a pop-in / pop-out CSS animation. Auto-removes after
     ~3 seconds. Generic: takes any number and any CSS color. */
  function showBigNumber(num, color) {
    var overlay = document.createElement("div");
    overlay.className = "big-number-overlay";
    var n = document.createElement("div");
    n.className = "big-number";
    n.textContent = String(num);
    if (color) n.style.color = color;
    overlay.appendChild(n);
    document.body.appendChild(overlay);
    /* Match the CSS animation duration; small buffer to let opacity fade. */
    setTimeout(function () {
      if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
    }, 3300);
  }

  /* 🎨 Console banner — greet developers who open DevTools */
  try {
    var bigStyle = "font-size: 36px; font-weight: 700; color: #ff9d44; " +
                   "background: linear-gradient(135deg, #222949, #1c1f3a); " +
                   "padding: 16px 24px; border-radius: 12px; line-height: 1;";
    var subStyle = "font-size: 13px; color: #b8b0ff; font-weight: 600;";
    var hintStyle = "font-size: 11px; color: #888;";
    console.log("%c🍌 Banana", bigStyle);
    console.log("%cBanana — helper site · " + VERSION, subStyle);
    console.log("%cHidden goodies (don't tell anyone 🤫):", hintStyle);
    console.log("%c  · Konami code: ↑↑↓↓←→←→BA", hintStyle);
    console.log("%c  · Click on \"banana.team\" in the footer 5 times", hintStyle);
    console.log("%c  · Type \"banana\" anywhere in the Home tab textarea", hintStyle);
    console.log("%c  · bananaRain() / emojiRain(\"❤️\", 30) — try it!", hintStyle);
    console.log("%c  · matrixRain() / flipPage() / shakePage() / noirPage()", hintStyle);
    console.log("%c  · showBigNumber(67, \"#1e88ff\") — try a giant number", hintStyle);
    console.log("%c  · Secret-codes tab: 18 codes hidden in the site 🔎", hintStyle);
    console.log("%c    (try View Source ⌘+U  or  Select-All ⌘+A then paste)", hintStyle);
    console.log("%c  · Try the SECRET code itself — it counts for you 🤫", hintStyle);
  } catch (e) {}

  /* Expose helpers on window so devs can call them from console */
  try {
    window.bananaRain    = bananaRain;
    window.emojiRain     = emojiRain;
    window.matrixRain    = matrixRain;
    window.flipPage      = flipPage;
    window.shakePage     = shakePage;
    window.noirPage      = noirPage;
    window.showBigNumber = showBigNumber;
  } catch (e) {}

  /* 🍌 Click footer 5 times → banana rain */
  var footerClickCount = 0;
  var footerClickTimer = null;
  footerEl.addEventListener("click", function () {
    footerClickCount++;
    if (footerClickTimer) clearTimeout(footerClickTimer);
    footerClickTimer = setTimeout(function () {
      footerClickCount = 0;
    }, 2000);
    if (footerClickCount >= 5) {
      footerClickCount = 0;
      bananaRain(30);
    }
  });

  /* 🕹 Konami code: ↑↑↓↓←→←→BA → rainbow hue-rotate + banana rain */
  var KONAMI = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
                "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
                "b", "a"];
  var konamiPos = 0;
  document.addEventListener("keydown", function (e) {
    var k = e.key;
    var expected = KONAMI[konamiPos];
    /* Case-insensitive for letters */
    var match = (expected === "b" || expected === "a")
      ? k.toLowerCase() === expected
      : k === expected;
    if (match) {
      konamiPos++;
      if (konamiPos === KONAMI.length) {
        konamiPos = 0;
        activateKonami();
      }
    } else {
      /* Allow restart from the first key */
      konamiPos = (k === KONAMI[0]) ? 1 : 0;
    }
  });

  function activateKonami() {
    var html = document.documentElement;
    html.style.transition = "filter 2s ease";
    var hue = 0;
    var iv = setInterval(function () {
      hue = (hue + 30) % 360;
      html.style.filter = "hue-rotate(" + hue + "deg) saturate(1.2)";
    }, 80);
    bananaRain(60);
    setTimeout(function () {
      clearInterval(iv);
      html.style.filter = "";
      setTimeout(function () { html.style.transition = ""; }, 2100);
    }, 4000);
    try {
      console.log("%c🎉 KONAMI CODE ACTIVATED! 🍌",
        "font-size: 24px; font-weight: 700; color: #ff9d44; padding: 8px;");
    } catch (e) {}
  }

  /* 🍌 Type "banana" in Home input → big banana emoji pops up */
  var bananaShown = false;
  homeInputEl.addEventListener("input", function () {
    if (bananaShown) return;
    if (/banana/i.test(homeInputEl.value)) {
      bananaShown = true;
      showBigBanana();
      setTimeout(function () { bananaShown = false; }, 6000);
    }
  });

  function showBigBanana() {
    var b = document.createElement("div");
    b.textContent = "🍌";
    b.style.position = "fixed";
    b.style.left = "50%";
    b.style.top = "50%";
    b.style.transform = "translate(-50%, -50%) scale(0) rotate(0deg)";
    b.style.fontSize = "min(40vw, 220px)";
    b.style.pointerEvents = "none";
    b.style.zIndex = "9999";
    b.style.transition = "transform 0.5s cubic-bezier(0.18, 0.89, 0.32, 1.28), opacity 0.4s ease";
    b.style.opacity = "1";
    b.style.filter = "drop-shadow(0 0 30px rgba(255, 200, 100, 0.6))";
    document.body.appendChild(b);
    requestAnimationFrame(function () {
      b.style.transform = "translate(-50%, -50%) scale(1) rotate(720deg)";
    });
    setTimeout(function () {
      b.style.opacity = "0";
      b.style.transform = "translate(-50%, -50%) scale(0.3) rotate(720deg)";
    }, 1800);
    setTimeout(function () { if (b.parentNode) b.parentNode.removeChild(b); }, 2400);
  }

  /* --------- init --------- */
  renderFonts();
  setFont(0);
  setLang(readSavedLang());
  setTheme(currentTheme);
  calcRender();
})();
