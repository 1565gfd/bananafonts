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
      timerMsToggle: "Показывать миллисекунды",
      timerAddedToast: "Добавлено: ",
      alarmLabel: "Будильник",
      alarmHint: "Сначала выберите свой часовой пояс, потом установите время будильника. Будильник сработает, когда время в выбранной зоне совпадёт с указанным.",
      alarmTzLabel: "Часовой пояс",
      alarmTzPlaceholder: "— выберите часовой пояс —",
      alarmTzAuto: "Авто (системный)",
      alarmTimeLabel: "Время будильника",
      alarmSet: "Установить",
      alarmCancel: "Отменить",
      alarmDismiss: "Выключить",
      alarmArmed: "Будильник установлен на ",
      alarmArmedSuffix: ".",
      alarmFiring: "🔔 Будильник звонит! Время вышло.",
      alarmNoTz: "Сначала выберите свой часовой пояс.",
      alarmInvalidTime: "Введите корректное время (часы 0–23, минуты 0–59).",
      alarmCancelled: "Будильник отменён.",
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
      settingsAboutText: "Banana — помогающий сайт.\n\n• Главная: счётчик символов/слов/строк, преобразование регистра, сортировка и очистка строк, реверс, копирование.\n\n• Шрифты: 20 стилей — системные для Word, Google Fonts, Unicode для Telegram/Discord, подчёркнутый/зачёркнутый.\n\n• Калькулятор: базовый с процентами, геометрия (4 фигуры), перевод единиц (длина/масса/температура) и сложение/вычитание/умножение/деление простых дробей.\n\n• Время: часы Москвы / Еревана / Нью-Йорка, секундомер, таймер с миллисекундами и быстрым добавлением времени, будильник с выбором часового пояса.\n\n• Секретные коды: вкладка с 19 скрытыми кодами — emoji-дожди, спецэффекты, мета-код. Найди их сам.\n\n• Темы: 4 видимые (Светлая / Тёмная / Ночь / Радужная анимированная) + одна секретная, разблокируется кодом.\n\n• PWA: можно установить на телефон, работает в Telegram-браузере."
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
      timerMsToggle: "Show milliseconds",
      timerAddedToast: "Added: ",
      alarmLabel: "Alarm clock",
      alarmHint: "First pick your timezone, then set the alarm time. The alarm will fire when the time in the chosen zone matches.",
      alarmTzLabel: "Timezone",
      alarmTzPlaceholder: "— choose a timezone —",
      alarmTzAuto: "Auto (system)",
      alarmTimeLabel: "Alarm time",
      alarmSet: "Set",
      alarmCancel: "Cancel",
      alarmDismiss: "Dismiss",
      alarmArmed: "Alarm set for ",
      alarmArmedSuffix: ".",
      alarmFiring: "🔔 Alarm! Time to wake up.",
      alarmNoTz: "Please pick your timezone first.",
      alarmInvalidTime: "Enter a valid time (hours 0–23, minutes 0–59).",
      alarmCancelled: "Alarm cancelled.",
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
      settingsAboutText: "Banana — a helper site.\n\n• Home: character/word/line counter, case conversion, line sort and cleanup, reverse, copy.\n\n• Fonts: 20 styles — Word-safe, Google Fonts, Unicode for Telegram/Discord, underline/strikethrough.\n\n• Calculator: basic with percentages, geometry (4 shapes), unit conversion (length/mass/temperature) and add/subtract/multiply/divide for simple fractions.\n\n• Time: clocks for Moscow / Yerevan / New York, stopwatch, timer with milliseconds and quick add-time buttons, alarm with timezone picker.\n\n• Secret codes: a tab with 19 hidden codes — emoji rains, special effects, a meta-code. Find them yourself.\n\n• Themes: 4 visible (Light / Dark / Night / animated Rainbow) + a secret one unlocked via a code.\n\n• PWA: installable on phones, works inside the Telegram in-app browser."
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

  var VERSION = "v5.17.0";

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
  var timerAddBtns      = document.querySelectorAll(".timer-add-btn");
  var timerMsToggleEl   = document.getElementById("timer-ms-toggle");
  var timerMsLabelEl    = document.getElementById("timer-ms-label");
  var timerMsEl         = document.getElementById("timer-ms");
  var timerMsWrapEl     = document.getElementById("timer-ms-wrap");
  /* Alarm refs */
  var alarmLabelEl      = document.getElementById("alarm-label");
  var alarmHintEl       = document.getElementById("alarm-hint");
  var alarmTzLabelEl    = document.getElementById("alarm-tz-label");
  var alarmTzSelectEl   = document.getElementById("alarm-tz");
  var alarmTzPlaceholderEl = document.getElementById("alarm-tz-placeholder");
  var alarmTzTimeEl     = document.getElementById("alarm-tz-time");
  var alarmStepTimeEl   = document.getElementById("alarm-step-time");
  var alarmTimeLabelEl  = document.getElementById("alarm-time-label");
  var alarmHourEl       = document.getElementById("alarm-hour");
  var alarmMinEl        = document.getElementById("alarm-min");
  var alarmSetBtn       = document.getElementById("alarm-set");
  var alarmCancelBtn    = document.getElementById("alarm-cancel");
  var alarmStatusEl     = document.getElementById("alarm-status");

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
    /* Alarm labels */
    alarmLabelEl.textContent      = t.alarmLabel;
    alarmHintEl.textContent       = t.alarmHint;
    alarmTzLabelEl.textContent    = t.alarmTzLabel;
    alarmTimeLabelEl.textContent  = t.alarmTimeLabel;
    alarmSetBtn.textContent       = t.alarmSet;
    /* Cancel/Dismiss label is state-dependent — refresh from handler */
    refreshAlarmButtonLabels();
    rebuildAlarmTzSelect();
    /* Rebuild clock formatters so AM/PM follows language (en → 12h, ru → 24h) */
    rebuildClockFormatters();
    /* Re-render any alarm status that includes a time (so it uses the new locale).
       Guarded because alarmState/renderAlarmStatus are declared later — at the
       first applyLang() call during init they're hoisted-but-undefined. */
    if (typeof alarmState !== "undefined" && alarmState && alarmState.target > 0) {
      renderAlarmStatus("armed");
    }
    /* Timer-ms label */
    timerMsLabelEl.textContent = t.timerMsToggle;
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
  /* Heuristic: a token counts as a "real word" only if it's a single
     character (а / я / I / a — legit one-letter words exist) OR contains
     at least two DISTINCT letters/digits. Filters out keyboard-mashing
     like "вввв пппп" → 0 words, while letting "ab", "okay", "привет",
     "12345" through. v5.17.0 — fixes the user-reported case where
     "вввв пппп" was counted as 2 words. */
  function isRealWord(token) {
    if (!token) return false;
    if (token.length === 1) return true;
    /* Walk the token, return true the moment we find a 2nd distinct char.
       Strip case so "AaAa" doesn't pass — we want at least 2 distinct
       LETTERS (case-insensitive). */
    var lower = token.toLowerCase();
    var first = lower.charAt(0);
    for (var i = 1; i < lower.length; i++) {
      if (lower.charAt(i) !== first) return true;
    }
    return false;
  }
  function countRealWords(text) {
    var trimmed = text.trim();
    if (!trimmed) return 0;
    var tokens = trimmed.split(/\s+/);
    var n = 0;
    for (var i = 0; i < tokens.length; i++) {
      if (isRealWord(tokens[i])) n++;
    }
    return n;
  }
  function updateTextStats() {
    var t = homeInputEl.value;
    statCharsEl.textContent = t.length;
    statWordsEl.textContent = countRealWords(t);
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
    },

    /* Math-puzzle code: the equation evaluates to 67, and the reveal is
       the English spelling. Message is the same string in both languages —
       per user request, "six seven" is not localised. */
    "10+10+20+20+7": {
      message: "six seven"
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
     v5.15.0: format is now language-aware. RU → 24-hour ("ru-RU"),
     EN → 12-hour with AM/PM ("en-US"). Formatters are rebuilt whenever
     the user switches language via rebuildClockFormatters(). */
  var TZ_MOSCOW  = "Europe/Moscow";
  var TZ_YEREVAN = "Asia/Yerevan";
  var TZ_NEWYORK = "America/New_York";
  function clockLocale() { return currentLang === "en" ? "en-US" : "ru-RU"; }
  function clockHour12() { return currentLang === "en"; }
  function makeTimeFmt(tz) {
    return new Intl.DateTimeFormat(clockLocale(), {
      hour: "2-digit", minute: "2-digit", second: "2-digit",
      hour12: clockHour12(), timeZone: tz
    });
  }
  function makeDateFmt(tz) {
    return new Intl.DateTimeFormat(clockLocale(), {
      weekday: "short", day: "2-digit", month: "short", timeZone: tz
    });
  }
  var fmtMoscow, fmtYerevan, fmtNewYork;
  var dfmtMoscow, dfmtYerevan, dfmtNewYork;
  function rebuildClockFormatters() {
    fmtMoscow   = makeTimeFmt(TZ_MOSCOW);
    fmtYerevan  = makeTimeFmt(TZ_YEREVAN);
    fmtNewYork  = makeTimeFmt(TZ_NEWYORK);
    dfmtMoscow  = makeDateFmt(TZ_MOSCOW);
    dfmtYerevan = makeDateFmt(TZ_YEREVAN);
    dfmtNewYork = makeDateFmt(TZ_NEWYORK);
    /* Invalidate the alarm-TZ formatter so it gets rebuilt with the new locale on next tick */
    fmtAlarmTzId = null;
  }
  rebuildClockFormatters();

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
    /* Guard against in-flight rAF callbacks firing after Reset/Pause.
       cancelAnimationFrame() doesn't synchronously abort a callback that
       was already queued for this frame — we must early-return ourselves. */
    if (swState !== "running") return;
    stopwatchDisplay.textContent = formatStopwatch(stopwatchElapsed());
    swRafId = requestAnimationFrame(stopwatchTick);
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

  /* ── Timer ── countdown to zero. v5.15.0 additions:
       - Quick-add buttons (+30s, +1m, +5m) work in any state
       - Optional millisecond display via timerShowMs toggle (uses rAF
         instead of setInterval for smooth ms display when on)
     On finish we beep via WebAudio (no external asset) and visually
     flash the display. */
  var tmState = "idle";       /* idle | running | paused | done */
  var tmRemainingMs = 0;
  var tmEndAt = 0;             /* performance.now() target for finish */
  var tmIntervalId = null;
  var tmRafId = null;
  var timerShowMs = false;
  var audioCtx = null;

  function pad3(n) { n = Math.floor(n); return (n < 10 ? "00" : n < 100 ? "0" : "") + n; }
  function readTimerInputs() {
    var m = parseInt(timerMinEl.value, 10);
    var s = parseInt(timerSecEl.value, 10);
    if (isNaN(m) || m < 0)   return null;
    if (isNaN(s) || s < 0 || s > 59) return null;
    /* Milliseconds field is honored only when ms-mode is on. Ignored
       (treated as 0) otherwise, even if the user typed something. */
    var ms = 0;
    if (timerShowMs) {
      ms = parseInt(timerMsEl.value, 10);
      if (isNaN(ms)) ms = 0;
      if (ms < 0 || ms > 999) return null;
    }
    return (m * 60 + s) * 1000 + ms;
  }
  function formatTimer(ms) {
    if (ms < 0) ms = 0;
    if (timerShowMs) {
      /* mm:ss.mmm — true 3-digit millisecond precision.
         IMPORTANT: ms comes from performance.now() math and is a float
         (e.g. 298031.6000000238). We MUST floor to an integer first,
         otherwise (ms % 1000) leaks float drift like "031.6000000238". */
      var msInt        = Math.floor(ms);
      var totalSecFlr  = Math.floor(msInt / 1000);
      var mmMs         = Math.floor(totalSecFlr / 60);
      var ssMs         = totalSecFlr % 60;
      var msMs         = msInt % 1000;
      return pad2(mmMs) + ":" + pad2(ssMs) + "." + pad3(msMs);
    }
    /* default: round UP to whole second so "00:01" doesn't flicker to "00:00" too early */
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
  /* Track in-flight chimes so we can silence them instantly when the
     user resets the timer or dismisses the alarm. Both arrays cleaned
     up automatically as chimes complete naturally. */
  var pendingChimeTimeouts = [];   /* setTimeout ids for scheduled reps */
  var pendingChimeNodes    = [];   /* {oscA, oscB, gain} for live notes */

  /* Play ONE ascending C-major arpeggio (C5 → E5 → G5 → C6) via WebAudio.
     Each note: soft attack (30ms), long bell-like decay (~1.4s). Notes
     overlap to form a chord — feels like a gentle chime. v5.16.0 redesign. */
  function playSingleChime() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    var ctx = audioCtx;
    /* If the browser suspended the context (e.g. tab lost focus on
       mobile), resume so the alarm keeps ringing in background. */
    if (ctx.state === "suspended") { try { ctx.resume(); } catch (e) {} }
    var notes = [
      { freq: 523.25, when: 0.00 },  /* C5  */
      { freq: 659.25, when: 0.16 },  /* E5  */
      { freq: 783.99, when: 0.32 },  /* G5  */
      { freq: 1046.50, when: 0.48 }  /* C6  */
    ];
    notes.forEach(function (n) {
      /* Two oscillators per note: sine fundamental + triangle octave above
         for a touch of bell-like sparkle. */
      var oscA = ctx.createOscillator();
      var oscB = ctx.createOscillator();
      var gain = ctx.createGain();
      oscA.type = "sine";
      oscB.type = "triangle";
      oscA.frequency.value = n.freq;
      oscB.frequency.value = n.freq * 2;
      var t0 = ctx.currentTime + n.when;
      /* Soft attack + slow exponential decay = bell envelope. Peak gain
         is gentle (0.16) so the chime doesn't startle anyone. */
      gain.gain.setValueAtTime(0.0001, t0);
      gain.gain.exponentialRampToValueAtTime(0.16, t0 + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, t0 + 1.4);
      oscA.connect(gain);
      oscB.connect(gain);
      gain.connect(ctx.destination);
      oscA.start(t0);
      oscB.start(t0);
      oscA.stop(t0 + 1.5);
      oscB.stop(t0 + 1.5);
      /* Register node so silenceAllChimes() can stop it early. */
      var nodeRef = { oscA: oscA, oscB: oscB, gain: gain };
      pendingChimeNodes.push(nodeRef);
      /* Auto-cleanup after the note completes naturally (~1.6s) so the
         array doesn't grow without bound on repeat use. */
      setTimeout(function () {
        var idx = pendingChimeNodes.indexOf(nodeRef);
        if (idx >= 0) pendingChimeNodes.splice(idx, 1);
      }, 1700);
    });
  }

  /* beepDone(repeats=1) — play the pleasant chime N times in a row,
     spaced ~1.8s apart so they ring distinctly without harsh overlap.
     v5.16.3: default back to 1, callers pass the count they want
     (timer = 4 reps; alarm = 3 reps). */
  function beepDone(repeats) {
    if (typeof repeats !== "number" || repeats < 1) repeats = 1;
    try {
      for (var r = 0; r < repeats; r++) {
        (function (delayMs) {
          var tid = setTimeout(function () {
            /* Remove this tid from the pending list before firing,
               so silenceAllChimes()'s clearTimeout is a clean no-op. */
            var i = pendingChimeTimeouts.indexOf(tid);
            if (i >= 0) pendingChimeTimeouts.splice(i, 1);
            playSingleChime();
          }, delayMs);
          pendingChimeTimeouts.push(tid);
        })(r * 1800);
      }
    } catch (e) { /* WebAudio unavailable — fail silently */ }
  }

  /* Silence ALL chimes immediately: cancel any scheduled repeats AND
     fade out any oscillators currently playing. Called from timerReset
     and the alarm dismiss path (cancelAlarm). v5.16.8. */
  function silenceAllChimes() {
    /* Drop any future scheduled repeats */
    while (pendingChimeTimeouts.length) {
      try { clearTimeout(pendingChimeTimeouts.pop()); } catch (e) {}
    }
    if (!audioCtx) { pendingChimeNodes.length = 0; return; }
    var now = audioCtx.currentTime;
    while (pendingChimeNodes.length) {
      var node = pendingChimeNodes.pop();
      try {
        /* Wipe the scheduled gain envelope and ramp down to silence
           in 50ms — a tiny fade prevents a click/pop on abrupt stop. */
        node.gain.gain.cancelScheduledValues(now);
        node.gain.gain.setValueAtTime(node.gain.gain.value || 0.0001, now);
        node.gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);
        try { node.oscA.stop(now + 0.06); } catch (e) {}
        try { node.oscB.stop(now + 0.06); } catch (e) {}
      } catch (e) {}
    }
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
    /* Timer rings 4 times (v5.16.3 — user request). ~7 seconds total. */
    beepDone(4);
    /* Remove blink after the 5 iterations (0.6s × 5 = 3s) */
    setTimeout(function () { timerDisplayEl.classList.remove("timer-done"); }, 3500);
  }
  function timerTick() {
    /* Guard against in-flight rAF / setInterval callbacks firing after
       Reset/Pause. cancelAnimationFrame/clearInterval don't synchronously
       abort a callback already queued for this frame — early-return. */
    if (tmState !== "running") return;
    var remain = tmEndAt - performance.now();
    if (remain <= 0) {
      timerFinish();
      return;
    }
    tmRemainingMs = remain;
    timerDisplayEl.textContent = formatTimer(remain);
    if (timerShowMs) {
      tmRafId = requestAnimationFrame(timerTick);
    }
  }
  function startTimerTicker() {
    /* Use rAF when ms-precision is on (smooth ~60fps); otherwise
       cheap setInterval at 250ms (4× per sec, good for whole-second display). */
    stopTimerTicker();
    if (timerShowMs) {
      tmRafId = requestAnimationFrame(timerTick);
    } else {
      tmIntervalId = setInterval(timerTick, 250);
    }
  }
  function stopTimerTicker() {
    if (tmIntervalId) { clearInterval(tmIntervalId); tmIntervalId = null; }
    if (tmRafId)      { cancelAnimationFrame(tmRafId); tmRafId = null; }
  }
  function timerToggle() {
    if (tmState === "running") {
      /* pause */
      tmRemainingMs = Math.max(0, tmEndAt - performance.now());
      tmState = "paused";
      stopTimerTicker();
      setTimerFeedback(TEXT[currentLang].timerPaused, false);
    } else if (tmState === "paused") {
      /* resume */
      tmEndAt = performance.now() + tmRemainingMs;
      tmState = "running";
      startTimerTicker();
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
      startTimerTicker();
      setTimerFeedback(TEXT[currentLang].timerRunning, false);
    }
    refreshTimerButtonLabels();
  }
  function timerReset() {
    stopTimerTicker();
    /* v5.17.0: kill any chime currently ringing from the finish + cancel
       remaining scheduled repeats so the sound stops instantly. */
    silenceAllChimes();
    tmState = "idle";
    tmRemainingMs = 0;
    var ms = readTimerInputs();
    timerDisplayEl.textContent = formatTimer(ms === null ? 0 : ms);
    timerDisplayEl.classList.remove("timer-done");
    setTimerFeedback("", false);
    refreshTimerButtonLabels();
  }
  /* ── Add time to the timer (v5.15.0) ──
     Works in any state:
       - idle: bumps the input fields (and display)
       - running: extends the current endAt by N seconds
       - paused: extends the saved remaining
       - done: re-arms with N seconds and starts running */
  function timerAddSeconds(addSec) {
    var addMs = addSec * 1000;
    if (tmState === "running") {
      tmEndAt += addMs;
      tmRemainingMs = Math.max(0, tmEndAt - performance.now());
      timerDisplayEl.textContent = formatTimer(tmRemainingMs);
    } else if (tmState === "paused") {
      tmRemainingMs += addMs;
      timerDisplayEl.textContent = formatTimer(tmRemainingMs);
    } else if (tmState === "done") {
      /* re-arm fresh */
      tmRemainingMs = addMs;
      tmEndAt = performance.now() + addMs;
      tmState = "running";
      timerDisplayEl.classList.remove("timer-done");
      timerDisplayEl.textContent = formatTimer(addMs);
      startTimerTicker();
      refreshTimerButtonLabels();
      setTimerFeedback(TEXT[currentLang].timerRunning, false);
    } else {
      /* idle — bump the input fields, keep display in sync */
      var curMs = readTimerInputs() || 0;
      var newMs = curMs + addMs;
      var totalSec = Math.floor(newMs / 1000);
      timerMinEl.value = Math.floor(totalSec / 60);
      timerSecEl.value = totalSec % 60;
      timerDisplayEl.textContent = formatTimer(newMs);
    }
    /* Brief toast in the feedback row */
    var toastMins = Math.floor(addSec / 60);
    var toastSecs = addSec % 60;
    var human = (toastMins > 0 ? toastMins + "m " : "") + (toastSecs > 0 ? toastSecs + "s" : "");
    setTimerFeedback(TEXT[currentLang].timerAddedToast + "+" + human.trim(), false);
    /* If running, restore the running-message after a moment */
    if (tmState === "running") {
      setTimeout(function () {
        if (tmState === "running") setTimerFeedback(TEXT[currentLang].timerRunning, false);
      }, 1200);
    }
  }

  /* ── Millisecond display toggle ──
     Switches display format, tick rate (rAF vs 250ms interval), and
     visibility of the manual ms input field. If timer is running,
     restart the ticker so the new rate takes effect immediately. */
  function applyMsVisibility() {
    if (timerShowMs) {
      timerMsWrapEl.removeAttribute("hidden");
      timerMsEl.removeAttribute("hidden");
    } else {
      timerMsWrapEl.setAttribute("hidden", "");
      timerMsEl.setAttribute("hidden", "");
    }
  }
  function onTimerMsToggle() {
    timerShowMs = !!timerMsToggleEl.checked;
    try { localStorage.setItem("bananafont:timerMs", timerShowMs ? "1" : "0"); } catch (e) {}
    applyMsVisibility();
    if (tmState === "running") {
      stopTimerTicker();
      startTimerTicker();
    } else {
      /* repaint display with new format */
      var ms;
      if (tmState === "paused")    ms = tmRemainingMs;
      else if (tmState === "done") ms = 0;
      else                          ms = readTimerInputs() || 0;
      timerDisplayEl.textContent = formatTimer(ms);
    }
  }
  /* Restore saved preference on load */
  try {
    var savedMs = localStorage.getItem("bananafont:timerMs");
    if (savedMs === "1") {
      timerShowMs = true;
      timerMsToggleEl.checked = true;
    }
  } catch (e) {}
  applyMsVisibility();
  /* Keep the display in sync with the input fields while idle.
     v5.16.6: don't blink the display to 00:00 while the user is editing
     and any input is momentarily empty. Once they type a valid number,
     the display updates. */
  function timerInputsChanged() {
    if (tmState !== "idle") return;
    /* If any required input is empty (mid-edit), leave the display alone. */
    if (timerMinEl.value === "" || timerSecEl.value === "") return;
    if (timerShowMs && timerMsEl.value === "") return;
    var ms = readTimerInputs();
    if (ms === null) return;   /* invalid — don't paint 00:00 either */
    timerDisplayEl.textContent = formatTimer(ms);
  }
  timerStartBtn.addEventListener("click", timerToggle);
  timerResetBtn.addEventListener("click", timerReset);
  timerMinEl.addEventListener("input", timerInputsChanged);
  timerSecEl.addEventListener("input", timerInputsChanged);
  timerMsEl.addEventListener("input",  timerInputsChanged);
  /* Quick-add buttons (v5.15.0) */
  for (var addI = 0; addI < timerAddBtns.length; addI++) {
    (function (btn) {
      btn.addEventListener("click", function () {
        var sec = parseInt(btn.dataset.addSec, 10);
        if (!isNaN(sec) && sec > 0) timerAddSeconds(sec);
      });
    })(timerAddBtns[addI]);
  }
  /* Millisecond toggle (v5.15.0) */
  timerMsToggleEl.addEventListener("change", onTimerMsToggle);
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
     ALARM CLOCK (v5.14.0) — user must pick a timezone first, then
     set HH:MM. Alarm fires when the time in the chosen zone matches.
     Persists in localStorage across reloads.
     ============================================================ */

  /* Curated timezone list — city name in both languages + IANA id.
     Add more here if needed. */
  var ALARM_TIMEZONES = [
    { id: "__auto__",            ru: "Авто (системный)",  en: "Auto (system)"   },
    { id: "UTC",                 ru: "UTC",              en: "UTC"             },
    { id: "Europe/Moscow",       ru: "Москва",           en: "Moscow"          },
    { id: "Europe/London",       ru: "Лондон",           en: "London"          },
    { id: "Europe/Berlin",       ru: "Берлин",           en: "Berlin"          },
    { id: "Europe/Paris",        ru: "Париж",            en: "Paris"           },
    { id: "Europe/Kyiv",         ru: "Киев",             en: "Kyiv"            },
    { id: "Asia/Yerevan",        ru: "Ереван",           en: "Yerevan"         },
    { id: "Asia/Tbilisi",        ru: "Тбилиси",          en: "Tbilisi"         },
    { id: "Asia/Dubai",          ru: "Дубай",            en: "Dubai"           },
    { id: "Asia/Kolkata",        ru: "Дели",             en: "Delhi"           },
    { id: "Asia/Shanghai",       ru: "Шанхай",           en: "Shanghai"        },
    { id: "Asia/Tokyo",          ru: "Токио",            en: "Tokyo"           },
    { id: "Australia/Sydney",    ru: "Сидней",           en: "Sydney"          },
    { id: "America/Los_Angeles", ru: "Лос-Анджелес",     en: "Los Angeles"     },
    { id: "America/Chicago",     ru: "Чикаго",           en: "Chicago"         },
    { id: "America/New_York",    ru: "Нью-Йорк",         en: "New York"        },
    { id: "America/Sao_Paulo",   ru: "Сан-Паулу",        en: "São Paulo"       }
  ];
  /* Resolve __auto__ to the actual system timezone (IANA string) */
  function resolveTz(id) {
    if (id === "__auto__") {
      try { return Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC"; }
      catch (e) { return "UTC"; }
    }
    return id;
  }

  function rebuildAlarmTzSelect() {
    var t = TEXT[currentLang];
    /* Preserve current selection */
    var prev = alarmTzSelectEl.value;
    alarmTzSelectEl.innerHTML = "";
    /* Placeholder option (empty value) — required-first-pick UX */
    var ph = document.createElement("option");
    ph.value = "";
    ph.textContent = t.alarmTzPlaceholder;
    ph.id = "alarm-tz-placeholder";
    alarmTzSelectEl.appendChild(ph);
    for (var i = 0; i < ALARM_TIMEZONES.length; i++) {
      var tz = ALARM_TIMEZONES[i];
      var opt = document.createElement("option");
      opt.value = tz.id;
      var name = tz[currentLang] || tz.en;
      opt.textContent = (tz.id === "__auto__" || tz.id === "UTC")
        ? name
        : name + " (" + tz.id + ")";
      alarmTzSelectEl.appendChild(opt);
    }
    /* Restore previous selection */
    alarmTzSelectEl.value = prev || "";
  }

  /* ── Alarm state ── persisted to localStorage under bananafont:alarm.
     Shape: { tzId, hh, mm } or null. We DON'T persist the firing target
     timestamp — it's recomputed on load so it always points to the next
     occurrence, even if the user closed the tab for hours/days. */
  var alarmState = { tzId: null, hh: 7, mm: 0, target: 0, firing: false, ringIntervalId: null };

  function saveAlarm() {
    try {
      /* v5.16.7: persist ONLY when actively armed (target > 0). Otherwise
         remove from localStorage so the alarm doesn't auto-revive on
         reload after firing or cancelling. Previously fireAlarm() kept
         the alarm in storage (because tzId stays set for UI continuity),
         which made reload re-arm it for the next day — surprising. */
      if (alarmState.tzId && alarmState.target > 0) {
        localStorage.setItem("bananafont:alarm", JSON.stringify({
          tzId: alarmState.tzId, hh: alarmState.hh, mm: alarmState.mm
        }));
      } else {
        localStorage.removeItem("bananafont:alarm");
      }
    } catch (e) {}
  }
  function loadAlarm() {
    try {
      var s = localStorage.getItem("bananafont:alarm");
      if (!s) return;
      var p = JSON.parse(s);
      if (!p || typeof p.tzId !== "string") return;
      if (typeof p.hh !== "number" || typeof p.mm !== "number") return;
      /* Repopulate the UI */
      alarmTzSelectEl.value = p.tzId;
      alarmHourEl.value = p.hh;
      alarmMinEl.value = p.mm;
      alarmState.tzId = p.tzId;
      alarmState.hh = p.hh;
      alarmState.mm = p.mm;
      alarmState.target = computeNextAlarm(p.tzId, p.hh, p.mm);
      onTzPicked();
      renderAlarmStatus("armed");
    } catch (e) {}
  }

  /* Compute the next firing timestamp (Date.now()-style) for HH:MM in
     the given timezone. If today's HH:MM has already passed in that
     zone, the alarm is scheduled for tomorrow's HH:MM in that zone.
     DST quirks: if HH:MM is skipped by DST, the alarm fires at the
     next valid HH:MM — usually next day. Acceptable for a casual UI. */
  function computeNextAlarm(tzId, hh, mm) {
    var tz = resolveTz(tzId);
    /* IMPORTANT: keep hour12:false here regardless of user language —
       we do integer math on the hour part (0–23). With hour12:true the
       hour part would be "01"–"12" + a separate dayPeriod, breaking math. */
    var fmt = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit", minute: "2-digit", second: "2-digit",
      hour12: false, timeZone: tz
    });
    var parts = fmt.formatToParts(new Date());
    var get = function (type) {
      for (var i = 0; i < parts.length; i++) if (parts[i].type === type) return +parts[i].value;
      return 0;
    };
    var nowSec = get("hour") * 3600 + get("minute") * 60 + get("second");
    var targetSec = hh * 3600 + mm * 60;
    var deltaSec;
    if (targetSec > nowSec) {
      deltaSec = targetSec - nowSec;
    } else {
      deltaSec = (24 * 3600 - nowSec) + targetSec;
    }
    return Date.now() + deltaSec * 1000;
  }

  function refreshAlarmButtonLabels() {
    var t = TEXT[currentLang];
    /* alarmState may be hoisted-undefined at first applyLang() call during init. */
    var firing = (typeof alarmState !== "undefined" && alarmState && alarmState.firing);
    alarmCancelBtn.textContent = firing ? t.alarmDismiss : t.alarmCancel;
  }

  function setAlarmFieldsLocked(locked) {
    /* Toggle Step 2 inputs enabled/disabled based on TZ pick */
    alarmHourEl.disabled = locked;
    alarmMinEl.disabled  = locked;
    alarmSetBtn.disabled = locked;
    /* Cancel button is only enabled when there's something to cancel/dismiss */
    alarmCancelBtn.disabled = locked
      ? true
      : !(alarmState.target > 0 || alarmState.firing);
    alarmStepTimeEl.classList.toggle("alarm-locked", locked);
  }

  function onTzPicked() {
    var tzId = alarmTzSelectEl.value;
    if (!tzId) {
      setAlarmFieldsLocked(true);
      alarmTzTimeEl.textContent = "—";
      return;
    }
    setAlarmFieldsLocked(false);
    updateAlarmTzTime();
  }

  /* Show live current time in the chosen TZ next to the dropdown.
     Updated together with the world clocks via tickClocks().
     v5.15.0: lang-aware (EN → 12h with AM/PM, RU → 24h). */
  var fmtAlarmTz = null;
  var fmtAlarmTzId = null;
  function updateAlarmTzTime() {
    var tzId = alarmTzSelectEl.value;
    if (!tzId) { alarmTzTimeEl.textContent = "—"; return; }
    var tz = resolveTz(tzId);
    if (tz !== fmtAlarmTzId) {
      fmtAlarmTz = new Intl.DateTimeFormat(clockLocale(), {
        hour: "2-digit", minute: "2-digit", second: "2-digit",
        hour12: clockHour12(), timeZone: tz
      });
      fmtAlarmTzId = tz;
    }
    alarmTzTimeEl.textContent = fmtAlarmTz.format(new Date());
  }

  function renderAlarmStatus(kind) {
    var t = TEXT[currentLang];
    alarmStatusEl.classList.remove("alarm-armed", "alarm-firing");
    if (kind === "armed") {
      var tzEntry = null;
      for (var i = 0; i < ALARM_TIMEZONES.length; i++) {
        if (ALARM_TIMEZONES[i].id === alarmState.tzId) { tzEntry = ALARM_TIMEZONES[i]; break; }
      }
      var name = tzEntry ? (tzEntry[currentLang] || tzEntry.en) : alarmState.tzId;
      var hhmm = pad2(alarmState.hh) + ":" + pad2(alarmState.mm);
      alarmStatusEl.textContent = t.alarmArmed + hhmm + " (" + name + ")" + t.alarmArmedSuffix;
      alarmStatusEl.classList.add("alarm-armed");
    } else if (kind === "firing") {
      alarmStatusEl.textContent = t.alarmFiring;
      alarmStatusEl.classList.add("alarm-firing");
    } else if (kind === "cancelled") {
      alarmStatusEl.textContent = t.alarmCancelled;
      setTimeout(function () {
        if (alarmStatusEl.textContent === t.alarmCancelled) alarmStatusEl.textContent = "";
      }, 2500);
    } else if (kind === "noTz") {
      alarmStatusEl.textContent = t.alarmNoTz;
    } else if (kind === "invalid") {
      alarmStatusEl.textContent = t.alarmInvalidTime;
    } else {
      alarmStatusEl.textContent = "";
    }
  }

  function setAlarm() {
    var tzId = alarmTzSelectEl.value;
    if (!tzId) { renderAlarmStatus("noTz"); return; }
    var hh = parseInt(alarmHourEl.value, 10);
    var mm = parseInt(alarmMinEl.value, 10);
    if (isNaN(hh) || hh < 0 || hh > 23 || isNaN(mm) || mm < 0 || mm > 59) {
      renderAlarmStatus("invalid");
      return;
    }
    alarmState.tzId = tzId;
    alarmState.hh = hh;
    alarmState.mm = mm;
    alarmState.target = computeNextAlarm(tzId, hh, mm);
    alarmState.firing = false;
    saveAlarm();
    alarmCancelBtn.disabled = false;
    refreshAlarmButtonLabels();
    renderAlarmStatus("armed");
  }

  function cancelAlarm() {
    if (alarmState.firing) {
      /* Dismiss the firing state — stop the continuous ringing loop too */
      alarmState.firing = false;
      alarmStatusEl.classList.remove("alarm-firing");
      stopAlarmRinging();
    }
    var hadArmed = alarmState.target > 0;
    alarmState.target = 0;
    saveAlarm();
    refreshAlarmButtonLabels();
    alarmCancelBtn.disabled = true;
    if (hadArmed) renderAlarmStatus("cancelled");
    else renderAlarmStatus("");
  }

  function fireAlarm() {
    if (alarmState.firing) return; /* safety — don't stack intervals */
    alarmState.firing = true;
    alarmState.target = 0;
    saveAlarm();
    renderAlarmStatus("firing");
    refreshAlarmButtonLabels();
    alarmCancelBtn.disabled = false;
    /* v5.16.4: ring CONTINUOUSLY every 3 seconds until the user presses
       Dismiss. One chime ≈ 1.9 sec, gap ≈ 1.1 sec → phone-ring rhythm.
       Stored interval id is cleared in cancelAlarm() (= the Dismiss path). */
    playSingleChime();
    if (alarmState.ringIntervalId) clearInterval(alarmState.ringIntervalId);
    alarmState.ringIntervalId = setInterval(playSingleChime, 3000);
  }
  /* Stop any running alarm chime loop AND silence any chime currently
     playing. Called from cancelAlarm (Dismiss path). v5.17.0: also calls
     silenceAllChimes() so the in-flight bell decays immediately. */
  function stopAlarmRinging() {
    if (alarmState.ringIntervalId) {
      clearInterval(alarmState.ringIntervalId);
      alarmState.ringIntervalId = null;
    }
    silenceAllChimes();
  }

  /* Check alarm fire condition every second from the same clock-tick
     loop — see tickClocks below. Hooked in via alarmTick(). */
  function alarmTick() {
    if (alarmState.firing) return;
    if (!alarmState.target) return;
    if (Date.now() >= alarmState.target) fireAlarm();
  }

  alarmTzSelectEl.addEventListener("change", onTzPicked);
  alarmSetBtn.addEventListener("click", setAlarm);
  alarmCancelBtn.addEventListener("click", cancelAlarm);
  /* Re-validate when user changes the time inputs */
  alarmHourEl.addEventListener("input", function () { /* live preview only */ });
  alarmMinEl.addEventListener("input",  function () { /* live preview only */ });

  /* Initial paint of the alarm UI */
  rebuildAlarmTzSelect();
  setAlarmFieldsLocked(true);   /* Step 2 starts locked */
  loadAlarm();                  /* restore from localStorage if any */

  /* Independent 1Hz tick for the alarm — updates the live TZ-time
     display and checks the fire condition. Kept separate from
     tickClocks() so we don't have to monkey-patch the existing world-
     clocks loop. Both intervals are cheap (just text updates). */
  setInterval(function () {
    updateAlarmTzTime();
    alarmTick();
  }, 1000);

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
    console.log("%c  · Secret-codes tab: 19 codes hidden in the site 🔎", hintStyle);
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
