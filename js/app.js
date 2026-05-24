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
      themeRainbow: "Переливающаяся",
      themeSchool: "Школа",
      themeBlackOrange: "Чёрно-оранж.",
      themeNeonGreen: "Неон зелёный",
      themeNeonViolet: "Неон фиолет",
      themePastel: "Пастель",
      themeOcean: "Океан",
      themeSunset: "Закат",
      themeCyberpunk: "Киберпанк",
      themeCoffee: "Кофе",
      themeTerminal: "Терминал",
      themeAurora: "Сияние",
      themeSovietLift: "Советский лифт",
      themeSovietPodyezd: "Советский подъезд",
      themeOwner: "1565gfd 👑",
      secretBananaKing: "Тема владельца разблокирована 🍌👑",
      secret1488: "Так делать нельзя❌",
      apologyTitle: "Так делать нельзя",
      apologyHint: "Чтобы вернуть сайт — напиши слово прощения:",
      apologyPlaceholder: "SORRY  или  ПРОСТИ",
      apologyBtn: "Извиниться",
      adminTitle: "👑 Админ-панель",
      adminGreeting: "Привет, 1565gfd. Здесь все темы, все коды и быстрые действия.",
      adminStatsTitle: "Статистика",
      adminStatsVersion: "Версия",
      adminStatsTheme: "Тема",
      adminStatsLang: "Язык",
      adminStatsSound: "Звук",
      adminStatsVolume: "Громкость",
      adminStatsStorage: "Записей в localStorage",
      adminThemesTitle: "Все темы",
      adminThemesHint: "Применить любую тему одним кликом (включая секретные).",
      adminCodesTitle: "Зарегистрированные коды",
      adminCodesHint: "Список публичных секретных кодов (приватный код сюда не входит).",
      adminClearStorage: "Очистить localStorage",
      adminClearConfirm: "Удалить ВСЕ записи bananafont:* из localStorage?",
      adminLogout: "Выйти из админа",
      adminActivated: "👑 Админ-режим активирован",
      adminSoundsTitle: "Тест звуков",
      adminSoundsHint: "Клик по кнопке проигрывает соответствующий звук.",
      adminEggsTitle: "Эффекты",
      adminEggsHint: "Запуск любого визуального эффекта одним кликом.",
      adminEmojiTitle: "Кастомный emoji-дождь",
      adminEmojiGo: "Запустить",
      adminStorageTitle: "Инспектор localStorage",
      adminStorageHint: "Все записи bananafont:* — можно удалить по одной.",
      adminStorageEmpty: "(пусто)",
      adminStorageDelete: "✕",
      adminIoTitle: "Экспорт / Импорт настроек",
      adminIoHint: "Сохрани все настройки в JSON или восстанови их.",
      adminExport: "Экспорт в JSON",
      adminImport: "Импорт из JSON",
      adminImportSuccess: "Импортировано ✓",
      adminImportError: "Ошибка чтения файла",
      settingsExtraThemesLabel: "Дополнительные темы",
      settingsExtraThemesHint: "Эти темы спрятаны из главного выбора — нажми чтобы применить.",
      settingsResetWarning: "⚠️ Внимание: при сбросе будут удалены тема, язык, размер превью, выбранный шрифт, настройки таймера, состояние будильника и все разблокированные секретные темы.",
      /* v5.22.0 — sound + tools tab */
      settingsSoundLabel: "Звуки",
      settingsSoundHint: "Включить или отключить звуковые уведомления (клики, переключения, таймер, будильник).",
      soundOn: "🔊 Звук включён",
      soundOff: "🔇 Звук выключен",
      soundVolumeLabel: "Громкость",
      tabTools: "Инструменты",
      toolsTitle: "Полезные инструменты",
      loremLimit: "1–50 абзацев",
      passgenLabel: "Генератор паролей",
      passgenLenText: "Длина:",
      passgenLower: "a–z",
      passgenUpper: "A–Z",
      passgenDigit: "0–9",
      passgenSymbol: "!@#",
      passgenGenerate: "Сгенерировать",
      passgenCopy: "Копировать",
      passgenCopied: "Скопировано!",
      passgenError: "Выбери хотя бы один тип символов.",
      randnumLabel: "Случайное число",
      randnumMin: "от",
      randnumMax: "до",
      randnumGenerate: "Случайное",
      randnumError: "min должно быть меньше или равно max.",
      loremLabel: "Lorem Ipsum (рыба-текст)",
      loremCount: "Абзацев:",
      loremGenerate: "Сгенерировать",
      loremCopy: "Копировать",
      colorLabel: "Конвертер цвета",
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
      timerRemovedToast: "Убрано: ",
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
      settingsAboutText: "Banana — помогающий сайт.\n\n• Главная: счётчик символов/слов/строк, преобразование регистра, сортировка и очистка строк, реверс, копирование.\n\n• Шрифты: 20 стилей — системные для Word, Google Fonts, Unicode для Telegram/Discord, подчёркнутый/зачёркнутый.\n\n• Калькулятор: базовый с процентами, геометрия (4 фигуры), перевод единиц (длина/масса/температура) и сложение/вычитание/умножение/деление простых дробей.\n\n• Время: часы Москвы / Еревана / Нью-Йорка, секундомер, таймер с миллисекундами и быстрым добавлением/вычитанием времени, будильник с выбором часового пояса.\n\n• Настройки: 11 дополнительных тем (в т.ч. советский лифт и подъезд), переключатель звуков, генератор паролей, случайные числа, Lorem Ipsum, конвертер цветов.\n\n• Секретные коды: вкладка с 19 скрытыми кодами — emoji-дожди, спецэффекты, мета-код. Найди их сам.\n\n• Темы: 5 видимых (Светлая / Тёмная / Ночь / Чёрно-оранж. / Переливающаяся) + 11 в настройках + 1 секретная (по коду).\n\n• PWA: можно установить на телефон, работает в Telegram-браузере."
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
      themeRainbow: "Iridescent",
      themeSchool: "School",
      themeBlackOrange: "Black-Orange",
      themeNeonGreen: "Neon Green",
      themeNeonViolet: "Neon Violet",
      themePastel: "Pastel",
      themeOcean: "Ocean",
      themeSunset: "Sunset",
      themeCyberpunk: "Cyberpunk",
      themeCoffee: "Coffee",
      themeTerminal: "Terminal",
      themeAurora: "Aurora",
      themeSovietLift: "Soviet Lift",
      themeSovietPodyezd: "Soviet Hallway",
      themeOwner: "1565gfd 👑",
      secretBananaKing: "Owner theme unlocked 🍌👑",
      secret1488: "You can't do that❌",
      apologyTitle: "You can't do that",
      apologyHint: "To get the site back — type a word of apology:",
      apologyPlaceholder: "SORRY  or  ПРОСТИ",
      apologyBtn: "Apologize",
      adminTitle: "👑 Admin panel",
      adminGreeting: "Hi, 1565gfd. All themes, all codes, quick actions — right here.",
      adminStatsTitle: "Stats",
      adminStatsVersion: "Version",
      adminStatsTheme: "Theme",
      adminStatsLang: "Language",
      adminStatsSound: "Sound",
      adminStatsVolume: "Volume",
      adminStatsStorage: "localStorage entries",
      adminThemesTitle: "All themes",
      adminThemesHint: "Apply any theme in one click (including secret ones).",
      adminCodesTitle: "Registered codes",
      adminCodesHint: "List of public secret codes (the privileged code is NOT included).",
      adminClearStorage: "Clear localStorage",
      adminClearConfirm: "Delete ALL bananafont:* entries from localStorage?",
      adminLogout: "Exit admin",
      adminActivated: "👑 Admin mode activated",
      adminSoundsTitle: "Sound tester",
      adminSoundsHint: "Click any button to play that sound.",
      adminEggsTitle: "Effects",
      adminEggsHint: "Trigger any visual effect in one click.",
      adminEmojiTitle: "Custom emoji rain",
      adminEmojiGo: "Rain it",
      adminStorageTitle: "localStorage inspector",
      adminStorageHint: "All bananafont:* entries — delete individually.",
      adminStorageEmpty: "(empty)",
      adminStorageDelete: "✕",
      adminIoTitle: "Export / Import settings",
      adminIoHint: "Save all settings as JSON or restore them.",
      adminExport: "Export JSON",
      adminImport: "Import JSON",
      adminImportSuccess: "Imported ✓",
      adminImportError: "File read error",
      settingsExtraThemesLabel: "Additional themes",
      settingsExtraThemesHint: "These themes are hidden from the main switch — click to apply.",
      settingsResetWarning: "⚠️ Warning: reset will clear your theme, language, preview size, selected font, timer settings, alarm state, and any unlocked secret themes.",
      /* v5.22.0 — sound + tools tab */
      settingsSoundLabel: "Sounds",
      settingsSoundHint: "Turn UI feedback sounds (clicks, switches, timer, alarm) on or off.",
      soundOn: "🔊 Sound is on",
      soundOff: "🔇 Sound is off",
      soundVolumeLabel: "Volume",
      tabTools: "Tools",
      toolsTitle: "Handy tools",
      loremLimit: "1–50 paragraphs",
      passgenLabel: "Password generator",
      passgenLenText: "Length:",
      passgenLower: "a–z",
      passgenUpper: "A–Z",
      passgenDigit: "0–9",
      passgenSymbol: "!@#",
      passgenGenerate: "Generate",
      passgenCopy: "Copy",
      passgenCopied: "Copied!",
      passgenError: "Pick at least one character type.",
      randnumLabel: "Random number",
      randnumMin: "from",
      randnumMax: "to",
      randnumGenerate: "Random",
      randnumError: "min must be ≤ max.",
      loremLabel: "Lorem Ipsum",
      loremCount: "Paragraphs:",
      loremGenerate: "Generate",
      loremCopy: "Copy",
      colorLabel: "Color converter",
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
      timerRemovedToast: "Removed: ",
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
      settingsAboutText: "Banana — a helper site.\n\n• Home: character/word/line counter, case conversion, line sort and cleanup, reverse, copy.\n\n• Fonts: 20 styles — Word-safe, Google Fonts, Unicode for Telegram/Discord, underline/strikethrough.\n\n• Calculator: basic with percentages, geometry (4 shapes), unit conversion (length/mass/temperature) and add/subtract/multiply/divide for simple fractions.\n\n• Time: clocks for Moscow / Yerevan / New York, stopwatch, timer with milliseconds and quick add/subtract-time buttons, alarm with timezone picker.\n\n• Settings: 11 extra themes (incl. Soviet lift and hallway), sound toggle, password generator, random numbers, Lorem Ipsum, color converter.\n\n• Secret codes: a tab with 19 hidden codes — emoji rains, special effects, a meta-code. Find them yourself.\n\n• Themes: 5 visible (Light / Dark / Night / Black-Orange / Iridescent) + 11 in Settings + 1 secret (unlocked via code).\n\n• PWA: installable on phones, works inside the Telegram in-app browser."
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

  var VERSION = "v5.30.2";

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
  /* Extra themes (v5.19.0) */
  var settingsExtraThemesLabelEl = document.getElementById("settings-extra-themes-label");
  var settingsExtraThemesHintEl  = document.getElementById("settings-extra-themes-hint");
  var extraThemesGridEl          = document.getElementById("extra-themes-grid");
  /* Reset warning (v5.20.0) */
  var settingsResetWarningEl     = document.getElementById("settings-reset-warning");
  /* Admin panel (v5.29.0) */
  var adminBadgeEl       = document.getElementById("admin-badge");
  var adminPanelEl       = document.getElementById("admin-panel");
  var adminBackdropEl    = document.getElementById("admin-backdrop");
  var adminCloseEl       = document.getElementById("admin-close");
  var adminTitleEl       = document.getElementById("admin-title");
  var adminGreetingEl    = document.getElementById("admin-greeting");
  var adminStatsTitleEl  = document.getElementById("admin-stats-title");
  var adminStatsEl       = document.getElementById("admin-stats");
  var adminThemesTitleEl = document.getElementById("admin-themes-title");
  var adminThemesHintEl  = document.getElementById("admin-themes-hint");
  var adminThemesGridEl  = document.getElementById("admin-themes-grid");
  var adminCodesTitleEl  = document.getElementById("admin-codes-title");
  var adminCodesHintEl   = document.getElementById("admin-codes-hint");
  var adminCodesListEl   = document.getElementById("admin-codes-list");
  var adminClearStorageBtn = document.getElementById("admin-clear-storage");
  var adminLogoutBtn     = document.getElementById("admin-logout");
  /* v5.30.0 — extended admin panel */
  var adminSoundsTitleEl = document.getElementById("admin-sounds-title");
  var adminSoundsHintEl  = document.getElementById("admin-sounds-hint");
  var adminSoundsGridEl  = document.getElementById("admin-sounds-grid");
  var adminEggsTitleEl   = document.getElementById("admin-eggs-title");
  var adminEggsHintEl    = document.getElementById("admin-eggs-hint");
  var adminEggsGridEl    = document.getElementById("admin-eggs-grid");
  var adminEmojiTitleEl  = document.getElementById("admin-emoji-title");
  var adminEmojiInputEl  = document.getElementById("admin-emoji-input");
  var adminEmojiCountEl  = document.getElementById("admin-emoji-count");
  var adminEmojiGoBtn    = document.getElementById("admin-emoji-go");
  var adminStorageTitleEl = document.getElementById("admin-storage-title");
  var adminStorageHintEl  = document.getElementById("admin-storage-hint");
  var adminStorageTableEl = document.getElementById("admin-storage-table");
  var adminIoTitleEl     = document.getElementById("admin-io-title");
  var adminIoHintEl      = document.getElementById("admin-io-hint");
  var adminExportBtn     = document.getElementById("admin-export");
  var adminImportBtn     = document.getElementById("admin-import");
  var adminImportFileEl  = document.getElementById("admin-import-file");
  /* Sound toggle + volume (v5.22.0 / v5.24.0) */
  var settingsSoundLabelEl       = document.getElementById("settings-sound-label");
  var settingsSoundHintEl        = document.getElementById("settings-sound-hint");
  var soundToggleBtn             = document.getElementById("sound-toggle-btn");
  var soundVolumeLabelEl         = document.getElementById("sound-volume-label");
  var soundVolumeEl              = document.getElementById("sound-volume");
  var soundVolumeValueEl         = document.getElementById("sound-volume-value");
  /* Tools tab (v5.25.0: restored from Settings) */
  var tabBtnTools                = document.getElementById("tab-btn-tools");
  var toolsTitleEl               = document.getElementById("tools-title");
  var loremLimitHintEl           = document.getElementById("lorem-limit-hint");
  /* Password generator */
  var passgenLabelEl   = document.getElementById("passgen-label");
  var passgenLenTextEl = document.getElementById("passgen-len-text");
  var passgenLenEl     = document.getElementById("passgen-len");
  var passgenLenValueEl= document.getElementById("passgen-len-value");
  var passgenLowerEl   = document.getElementById("passgen-lower");
  var passgenUpperEl   = document.getElementById("passgen-upper");
  var passgenDigitEl   = document.getElementById("passgen-digit");
  var passgenSymbolEl  = document.getElementById("passgen-symbol");
  var passgenLowerTxt  = document.getElementById("passgen-lower-text");
  var passgenUpperTxt  = document.getElementById("passgen-upper-text");
  var passgenDigitTxt  = document.getElementById("passgen-digit-text");
  var passgenSymbolTxt = document.getElementById("passgen-symbol-text");
  var passgenOutputEl  = document.getElementById("passgen-output");
  var passgenGenerate  = document.getElementById("passgen-generate");
  var passgenCopy      = document.getElementById("passgen-copy");
  /* Random number */
  var randnumLabelEl   = document.getElementById("randnum-label");
  var randnumMinTextEl = document.getElementById("randnum-min-text");
  var randnumMaxTextEl = document.getElementById("randnum-max-text");
  var randnumMinEl     = document.getElementById("randnum-min");
  var randnumMaxEl     = document.getElementById("randnum-max");
  var randnumGenBtn    = document.getElementById("randnum-generate");
  var randnumResultEl  = document.getElementById("randnum-result");
  /* Lorem ipsum */
  var loremLabelEl     = document.getElementById("lorem-label");
  var loremCountTextEl = document.getElementById("lorem-count-text");
  var loremCountEl     = document.getElementById("lorem-count");
  var loremLangBtns    = document.querySelectorAll(".lorem-lang-btn");
  var loremGenBtn      = document.getElementById("lorem-generate");
  var loremCopyBtn     = document.getElementById("lorem-copy");
  var loremOutputEl    = document.getElementById("lorem-output");
  /* Color converter */
  var colorLabelEl     = document.getElementById("color-label");
  var colorPickerEl    = document.getElementById("color-picker");
  var colorHexEl       = document.getElementById("color-hex");
  var colorHexDisplay  = document.getElementById("color-hex-display");
  var colorRgbEl       = document.getElementById("color-rgb");
  var colorHslEl       = document.getElementById("color-hsl");
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
  var VALID_THEMES = [
    "light", "dark", "night", "rainbow", "school",
    "black-orange",                                              /* v5.19.0: 5th main-bar button */
    "neon-green", "neon-violet", "pastel", "ocean", "sunset",   /* v5.19.0 extras */
    "cyberpunk", "coffee", "terminal", "aurora",                 /* v5.20.0 extras */
    "soviet-lift", "soviet-podyezd",                             /* v5.21.0 extras */
    "owner"                                                       /* v5.28.0: personal owner theme — secret code BANANAKING */
  ];
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
      school: "themeSchool",
      "black-orange": "themeBlackOrange",
      "neon-green":   "themeNeonGreen",
      "neon-violet":  "themeNeonViolet",
      pastel: "themePastel",
      ocean:  "themeOcean",
      sunset: "themeSunset",
      cyberpunk: "themeCyberpunk",
      coffee:    "themeCoffee",
      terminal:  "themeTerminal",
      aurora:    "themeAurora",
      "soviet-lift":    "themeSovietLift",
      "soviet-podyezd": "themeSovietPodyezd",
      "owner":          "themeOwner"
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
    tabBtnTools.textContent       = t.tabTools;
    tabBtnSecret.textContent      = t.tabSecret;
    tabBtnSettings.textContent    = t.tabSettings;
    /* Tools tab labels (v5.25.0 — restored from Settings) */
    toolsTitleEl.textContent      = t.toolsTitle;
    loremLimitHintEl.textContent  = "(" + t.loremLimit + ")";
    passgenLabelEl.textContent    = t.passgenLabel;
    passgenLenTextEl.textContent  = t.passgenLenText;
    passgenLowerTxt.textContent   = t.passgenLower;
    passgenUpperTxt.textContent   = t.passgenUpper;
    passgenDigitTxt.textContent   = t.passgenDigit;
    passgenSymbolTxt.textContent  = t.passgenSymbol;
    passgenGenerate.textContent   = t.passgenGenerate;
    passgenCopy.textContent       = t.passgenCopy;
    randnumLabelEl.textContent    = t.randnumLabel;
    randnumMinTextEl.textContent  = t.randnumMin;
    randnumMaxTextEl.textContent  = t.randnumMax;
    randnumGenBtn.textContent     = t.randnumGenerate;
    loremLabelEl.textContent      = t.loremLabel;
    loremCountTextEl.textContent  = t.loremCount;
    loremGenBtn.textContent       = t.loremGenerate;
    loremCopyBtn.textContent      = t.loremCopy;
    colorLabelEl.textContent      = t.colorLabel;
    /* Sound toggle labels */
    settingsSoundLabelEl.textContent = t.settingsSoundLabel;
    settingsSoundHintEl.textContent  = t.settingsSoundHint;
    soundVolumeLabelEl.textContent   = t.soundVolumeLabel;
    refreshSoundButtonLabel();
    /* Admin panel labels (v5.29.0) */
    adminTitleEl.textContent       = t.adminTitle;
    adminGreetingEl.textContent    = t.adminGreeting;
    adminStatsTitleEl.textContent  = t.adminStatsTitle;
    adminThemesTitleEl.textContent = t.adminThemesTitle;
    adminThemesHintEl.textContent  = t.adminThemesHint;
    adminCodesTitleEl.textContent  = t.adminCodesTitle;
    adminCodesHintEl.textContent   = t.adminCodesHint;
    adminClearStorageBtn.textContent = t.adminClearStorage;
    adminLogoutBtn.textContent     = t.adminLogout;
    /* v5.30.0: extended admin labels */
    adminSoundsTitleEl.textContent = t.adminSoundsTitle;
    adminSoundsHintEl.textContent  = t.adminSoundsHint;
    adminEggsTitleEl.textContent   = t.adminEggsTitle;
    adminEggsHintEl.textContent    = t.adminEggsHint;
    adminEmojiTitleEl.textContent  = t.adminEmojiTitle;
    adminEmojiGoBtn.textContent    = t.adminEmojiGo;
    adminStorageTitleEl.textContent = t.adminStorageTitle;
    adminStorageHintEl.textContent  = t.adminStorageHint;
    adminIoTitleEl.textContent     = t.adminIoTitle;
    adminIoHintEl.textContent      = t.adminIoHint;
    adminExportBtn.textContent     = t.adminExport;
    adminImportBtn.textContent     = t.adminImport;
    /* Re-render dynamic admin content if panel is open / unlocked */
    if (adminUnlocked) {
      renderAdminPanelContent();
    }
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
    settingsResetWarningEl.textContent = t.settingsResetWarning;
    settingsAboutLab.textContent  = t.settingsAboutLabel;
    settingsAboutText.textContent = t.settingsAboutText;
    settingsVersionEl.textContent = VERSION;
    /* Extra themes section (v5.19.0) */
    settingsExtraThemesLabelEl.textContent = t.settingsExtraThemesLabel;
    settingsExtraThemesHintEl.textContent  = t.settingsExtraThemesHint;
    rebuildExtraThemesGrid();
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
    light:          "#eef2ff",
    dark:            "#0d0f22",   /* v5.23.1: was #161b3a — now properly dark */
    night:          "#0a0a1f",   /* v5.19.1: midnight indigo (was pure black) */
    rainbow:        "#800037",   /* v5.26.0: matches darker palette */
    school:         "#0f2c4a",
    "black-orange": "#000000",   /* v5.19.0 new themes */
    "neon-green":   "#020c02",
    "neon-violet":  "#0a0010",
    pastel:         "#fce8ee",
    ocean:          "#003a5c",
    sunset:         "#2a0a3f",
    cyberpunk:      "#0a0014",   /* v5.20.0 new extras */
    coffee:         "#1a0e08",
    terminal:       "#000000",
    aurora:         "#001a2e",
    "soviet-lift":     "#a05830", /* v5.21.2 — walnut wood */
    "soviet-podyezd":  "#5cb5a8", /* v5.21.2 — turquoise wall */
    "owner":           "#1a0e22"  /* v5.28.0: deep purple-brown, banana-yellow accent */
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

  /* Extra themes (v5.19.0) — populated as a swatch grid in Settings.
     Each entry: { id, ruLabel, enLabel, swatch (CSS color or gradient) }.
     Add new ones here; CSS [data-theme="..."] block must also exist. */
  var EXTRA_THEMES = [
    { id: "neon-green",  ruLabel: "Неон зелёный", enLabel: "Neon Green",
      swatch: "radial-gradient(circle at 30% 30%, #39ff14, #062c06 80%)" },
    { id: "neon-violet", ruLabel: "Неон фиолет",  enLabel: "Neon Violet",
      swatch: "radial-gradient(circle at 30% 30%, #bf00ff, #1a0030 80%)" },
    { id: "pastel",      ruLabel: "Пастель",      enLabel: "Pastel",
      swatch: "linear-gradient(135deg, #ffd1dc 0%, #c8e7ff 50%, #d8c8ff 100%)" },
    { id: "ocean",       ruLabel: "Океан",        enLabel: "Ocean",
      swatch: "linear-gradient(160deg, #003a5c 0%, #007a9e 60%, #00c2cb 100%)" },
    { id: "sunset",      ruLabel: "Закат",        enLabel: "Sunset",
      swatch: "linear-gradient(135deg, #2a0a3f 0%, #c43a85 50%, #ff8b3d 100%)" },
    /* v5.20.0 — 4 new unique extras */
    { id: "cyberpunk",   ruLabel: "Киберпанк",    enLabel: "Cyberpunk",
      swatch: "radial-gradient(circle at 30% 30%, #ff14c8 0%, transparent 55%), radial-gradient(circle at 70% 70%, #00dcff 0%, transparent 55%), #0a0014" },
    { id: "coffee",      ruLabel: "Кофе",         enLabel: "Coffee",
      swatch: "radial-gradient(ellipse at 30% 30%, #d4a373 0%, #6b3410 60%, #2a1810 100%)" },
    { id: "terminal",    ruLabel: "Терминал",     enLabel: "Terminal",
      swatch: "radial-gradient(circle at 30% 30%, #00ff66 0%, transparent 50%), #000000" },
    { id: "aurora",      ruLabel: "Сияние",       enLabel: "Aurora",
      swatch: "linear-gradient(135deg, #0a1830 0%, #2d5e5b 35%, #1f5a7a 65%, #4a3865 100%)" },
    /* v5.21.0 / v5.21.2 — Soviet themes redesigned to match user's photo refs */
    { id: "soviet-lift",    ruLabel: "Советский лифт",    enLabel: "Soviet Lift",
      /* Wood-panel + warm ceiling glow */
      swatch: "radial-gradient(ellipse at 50% 0%, rgba(255,220,140,0.4) 0%, transparent 50%), linear-gradient(180deg, #c47840 0%, #a05830 50%, #7a4220 100%)" },
    { id: "soviet-podyezd", ruLabel: "Советский подъезд", enLabel: "Soviet Hallway",
      /* Iconic white-top / teal-bottom split */
      swatch: "linear-gradient(180deg, #e8e6d8 0%, #e8e6d8 32%, #5cb5a8 35%, #3d8a7d 100%)" }
  ];

  function rebuildExtraThemesGrid() {
    if (!extraThemesGridEl) return;
    extraThemesGridEl.innerHTML = "";
    for (var i = 0; i < EXTRA_THEMES.length; i++) {
      (function (theme) {
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "extra-theme-btn";
        if (currentTheme === theme.id) btn.classList.add("active");
        btn.setAttribute("data-extra-theme", theme.id);
        var sw = document.createElement("span");
        sw.className = "extra-theme-swatch";
        sw.style.background = theme.swatch;
        var lbl = document.createElement("span");
        lbl.className = "extra-theme-label";
        lbl.textContent = (currentLang === "ru") ? theme.ruLabel : theme.enLabel;
        btn.appendChild(sw);
        btn.appendChild(lbl);
        btn.addEventListener("click", function () { setTheme(theme.id); });
        extraThemesGridEl.appendChild(btn);
      })(EXTRA_THEMES[i]);
    }
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
    /* Reflect the active theme on the extra-themes grid swatches too */
    if (extraThemesGridEl) {
      var extras = extraThemesGridEl.querySelectorAll(".extra-theme-btn");
      for (var ex = 0; ex < extras.length; ex++) {
        extras[ex].classList.toggle("active", extras[ex].getAttribute("data-extra-theme") === theme);
      }
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
    },

    /* v5.28.0 — personal owner theme for 1565gfd. Unlocks "owner" theme:
       deep purple-brown base with bright banana-yellow accent. Same pattern
       as LIBERATEDSCHOOL → school. */
    "BANANAKING": {
      message: function () { return TEXT[currentLang].secretBananaKing; },
      action:  function () { setTheme("owner"); }
    },

    /* v5.30.1 — anti-troll: 1488 is a well-known white-supremacist numeric
       code. If anyone tries it on this site, they get a fullscreen "Так
       нельзя", a fail-sound, and ALL their bananafont:* localStorage gets
       wiped, then the page reloads with defaults. No silent accommodation
       of hate symbols. */
    "1488": {
      message: function () { return TEXT[currentLang].secret1488; },
      sound:   "fail",
      action:  function () {
        /* Stage 1 (0ms): big fullscreen "Так нельзя" */
        showBigText("Так нельзя", "#ff3344");
        /* Stage 2 (1.4s): the entire screen goes deep red */
        setTimeout(function () {
          var red = document.createElement("div");
          red.className = "page-red-flash";
          document.body.appendChild(red);
          requestAnimationFrame(function () {
            red.classList.add("active");
          });
          /* Extra fail sound at the red moment for emphasis */
          playUiSound("fail");
        }, 1400);
        /* Stage 3 (2.8s): wipe ALL bananafont:* localStorage + reload */
        setTimeout(function () {
          try {
            var keys = [];
            for (var i = 0; i < localStorage.length; i++) {
              var k = localStorage.key(i);
              if (k && k.indexOf("bananafont:") === 0) keys.push(k);
            }
            keys.forEach(function (k) { localStorage.removeItem(k); });
          } catch (e) {}
          location.reload();
        }, 2800);
      }
    }
    /* NOTE: an additional gated entry-point exists but is NOT registered
       here. It uses a separate check (see _ax/_ad/_isPrivilegedCode below)
       so this dictionary remains "the public secret codes list" without
       leaking the privileged trigger string. */
  };

  /* ────────────────────────────────────────────────────────────────
     Privileged gate — encoded bytes only. No plaintext anywhere in
     this repo. Compares case-insensitive (UPPERCASE) against decoded
     bytes. Decoding is intentionally cheap-but-non-obvious: XOR with
     key 'BANANA' cycled over the byte array. The plaintext is
     documented OFF-repo (only in the original chat session that
     authored this feature). DO NOT add a comment with the plaintext.
     ──────────────────────────────────────────────────────────────── */
  var _ax = [115, 116, 120, 116, 9, 7, 6, 108, 22, 120, 5, 115, 18, 117, 3, 121, 20, 114, 19, 118, 28, 116];
  function _ad(b) {
    var k = "BANANA"; var s = "";
    for (var i = 0; i < b.length; i++) {
      s += String.fromCharCode(b[i] ^ k.charCodeAt(i % k.length));
    }
    return s;
  }
  function _isPrivilegedCode(rawUpper) {
    return rawUpper === _ad(_ax);
  }

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
    /* v5.27.1: autograph removed per user request (was added in v5.26.1). */
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
    /* Privileged gate first (not in SECRET_CODES — code stays off-repo) */
    if (_isPrivilegedCode(code)) {
      showSecretFeedback("", false);
      activateAdmin();
      return;
    }
    if (Object.prototype.hasOwnProperty.call(SECRET_CODES, code)) {
      var entry = SECRET_CODES[code];
      var msg = (typeof entry.message === "function") ? entry.message() : entry.message;
      showSecretFeedback("", false);
      showSecretMessage(msg);
      /* v5.30.1: per-code sound override (entry.sound). Default = "unlock". */
      playUiSound(entry.sound || "unlock");
      if (typeof entry.action === "function") {
        try { entry.action(); } catch (e) {}
      }
    } else {
      showSecretFeedback(TEXT[currentLang].secretError, true);
      playUiSound("fail");   /* v5.26.2: sad-trombone wah-wah-wah */
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
         is gentle (0.16) so the chime doesn't startle anyone.
         v5.24.0: scaled by soundVolume (0.0–1.0). */
      var chimePeak = 0.16 * soundVolume;
      if (chimePeak < 0.0001) chimePeak = 0.0001;
      gain.gain.setValueAtTime(0.0001, t0);
      gain.gain.exponentialRampToValueAtTime(chimePeak, t0 + 0.03);
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
  /* ── Add/subtract time to/from the timer (v5.15.0 / v5.18.0) ──
     addSec may be positive (add) or negative (subtract). Works in
     any state. Underflow handling:
       - running:  subtracting past zero → finish immediately
       - paused:   subtracting past zero → clamp to 0 (user can Reset)
       - idle:     subtracting past zero → clamp to 0
       - done:     negative adds are ignored (already at 0) */
  function timerAddSeconds(addSec) {
    var addMs = addSec * 1000;
    var isAdd = addSec > 0;
    if (tmState === "running") {
      tmEndAt += addMs;
      var newRemain = tmEndAt - performance.now();
      if (newRemain <= 0) {
        /* Subtracted past zero — fire the timer right away */
        timerFinish();
        return;
      }
      tmRemainingMs = newRemain;
      timerDisplayEl.textContent = formatTimer(tmRemainingMs);
    } else if (tmState === "paused") {
      tmRemainingMs = Math.max(0, tmRemainingMs + addMs);
      timerDisplayEl.textContent = formatTimer(tmRemainingMs);
    } else if (tmState === "done") {
      if (addMs <= 0) return; /* nothing to subtract from a finished timer */
      /* re-arm fresh with the added duration */
      tmRemainingMs = addMs;
      tmEndAt = performance.now() + addMs;
      tmState = "running";
      timerDisplayEl.classList.remove("timer-done");
      timerDisplayEl.textContent = formatTimer(addMs);
      startTimerTicker();
      refreshTimerButtonLabels();
      setTimerFeedback(TEXT[currentLang].timerRunning, false);
    } else {
      /* idle — bump the input fields, keep display in sync. Clamp to 0. */
      var curMs = readTimerInputs() || 0;
      var newMs = Math.max(0, curMs + addMs);
      var totalSec = Math.floor(newMs / 1000);
      timerMinEl.value = Math.floor(totalSec / 60);
      timerSecEl.value = totalSec % 60;
      if (timerShowMs) timerMsEl.value = newMs % 1000;
      timerDisplayEl.textContent = formatTimer(newMs);
    }
    /* Brief toast in the feedback row — uses "Added: +1m" or "Removed: -30s" */
    var absSec = Math.abs(addSec);
    var toastMins = Math.floor(absSec / 60);
    var toastSecs = absSec % 60;
    var human = (toastMins > 0 ? toastMins + "m " : "") + (toastSecs > 0 ? toastSecs + "s" : "");
    var prefix = isAdd ? TEXT[currentLang].timerAddedToast : TEXT[currentLang].timerRemovedToast;
    var sign   = isAdd ? "+" : "−";
    setTimerFeedback(prefix + sign + human.trim(), false);
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
  /* Quick add/subtract buttons (v5.15.0 / v5.18.0 / v5.21.0).
     Defensive read: dataset first, getAttribute fallback. Accepts any
     non-zero integer; timerAddSeconds handles underflow per state. */
  for (var addI = 0; addI < timerAddBtns.length; addI++) {
    (function (btn) {
      btn.addEventListener("click", function (e) {
        var raw = btn.dataset.addSec;
        if (raw === undefined || raw === null || raw === "") {
          raw = btn.getAttribute("data-add-sec");
        }
        var sec = parseInt(raw, 10);
        if (isNaN(sec) || sec === 0) return;
        timerAddSeconds(sec);
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
     ADMIN PANEL (v5.29.0) — gated by the privileged code (see _ax/_ad
     above). Provides one-click theme apply (incl. secret), code list,
     stats, clear-storage / logout. Persists across reload via
     localStorage["bananafont:admin"] = "1". The privileged code itself
     stays off-repo — only in the original chat that built this feature.
     ============================================================ */
  var adminUnlocked = false;
  try {
    if (localStorage.getItem("bananafont:admin") === "1") adminUnlocked = true;
  } catch (e) {}

  function activateAdmin() {
    adminUnlocked = true;
    try { localStorage.setItem("bananafont:admin", "1"); } catch (e) {}
    adminBadgeEl.removeAttribute("hidden");
    /* Show success message + open panel */
    showSecretMessage(TEXT[currentLang].adminActivated);
    playUiSound("unlock");
    setTimeout(openAdminPanel, 350);
  }
  function logoutAdmin() {
    adminUnlocked = false;
    try { localStorage.removeItem("bananafont:admin"); } catch (e) {}
    adminBadgeEl.setAttribute("hidden", "");
    closeAdminPanel();
  }
  function openAdminPanel() {
    renderAdminPanelContent();
    adminPanelEl.removeAttribute("hidden");
    document.body.style.overflow = "hidden";
  }
  function closeAdminPanel() {
    adminPanelEl.setAttribute("hidden", "");
    document.body.style.overflow = "";
  }

  function renderAdminPanelContent() {
    var t = TEXT[currentLang];

    /* Stats */
    var storageCount = 0;
    try {
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (k && k.indexOf("bananafont:") === 0) storageCount++;
      }
    } catch (e) {}
    var soundLabel = soundEnabled ? "ON" : "OFF";
    var statsRows = [
      [t.adminStatsVersion, VERSION],
      [t.adminStatsTheme, currentTheme],
      [t.adminStatsLang, currentLang.toUpperCase()],
      [t.adminStatsSound, soundLabel],
      [t.adminStatsVolume, Math.round(soundVolume * 100) + "%"],
      [t.adminStatsStorage, String(storageCount)]
    ];
    adminStatsEl.innerHTML = "";
    statsRows.forEach(function (row) {
      var div = document.createElement("div");
      div.className = "admin-stat-row";
      var lbl = document.createElement("span");
      lbl.className = "admin-stat-label";
      lbl.textContent = row[0];
      var val = document.createElement("span");
      val.className = "admin-stat-value";
      val.textContent = row[1];
      div.appendChild(lbl);
      div.appendChild(val);
      adminStatsEl.appendChild(div);
    });

    /* All themes — one button per theme. Active one highlighted. */
    adminThemesGridEl.innerHTML = "";
    for (var ti = 0; ti < VALID_THEMES.length; ti++) {
      (function (themeId) {
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "admin-theme-btn silent-btn";
        if (currentTheme === themeId) btn.classList.add("active");
        var key = THEME_LABEL_KEY_MAP[themeId];
        var label = (key && t[key]) ? t[key] : themeId;
        btn.textContent = label;
        btn.dataset.adminTheme = themeId;
        btn.addEventListener("click", function () {
          setTheme(themeId);
          /* Refresh active highlight */
          var all = adminThemesGridEl.querySelectorAll(".admin-theme-btn");
          for (var j = 0; j < all.length; j++) {
            all[j].classList.toggle("active", all[j].dataset.adminTheme === themeId);
          }
          playUiSound("select");
        });
        adminThemesGridEl.appendChild(btn);
      })(VALID_THEMES[ti]);
    }

    /* Public codes list — pulled from SECRET_CODES keys. Privileged code
       NOT here, by design. */
    adminCodesListEl.innerHTML = "";
    var codeKeys = Object.keys(SECRET_CODES);
    codeKeys.forEach(function (codeName) {
      var li = document.createElement("li");
      var codeSpan = document.createElement("code");
      codeSpan.className = "admin-code-key";
      codeSpan.textContent = codeName;
      li.appendChild(codeSpan);
      /* Click to fill the secret-input with this code */
      li.addEventListener("click", function () {
        secretInputEl.value = codeName;
        closeAdminPanel();
        switchTab("secret");
        playUiSound("click");
      });
      li.style.cursor = "pointer";
      li.title = "Click to fill the secret-code input";
      adminCodesListEl.appendChild(li);
    });

    /* ── v5.30.0: Sound tester ── */
    var SOUND_NAMES = ["click","tab","tick","select","success","error","pop","whoosh","fail","confirm","unlock","page"];
    adminSoundsGridEl.innerHTML = "";
    SOUND_NAMES.forEach(function (name) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "admin-theme-btn silent-btn";
      btn.textContent = name;
      btn.addEventListener("click", function () { playUiSound(name); });
      adminSoundsGridEl.appendChild(btn);
    });

    /* ── v5.30.0: Easter eggs ── */
    var EGGS = [
      ["🍌 banana", function () { bananaRain(30); }],
      ["❤️ heart",  function () { emojiRain("❤️", 30); }],
      ["🔍 lupa",   function () { emojiRain("🔍", 30); }],
      ["✨ chime",  function () { playSingleChime(); }],
      ["💚 Matrix", function () { matrixRain(); }],
      ["🔄 flip",   function () { flipPage(); }],
      ["🌍 shake",  function () { shakePage(); }],
      ["🎬 noir",   function () { noirPage(); }],
      ["🌈 sweep",  function () { triggerRainbow(); }],
      ["🔢 67",     function () { showBigNumber(67, "#1e88ff"); }]
    ];
    adminEggsGridEl.innerHTML = "";
    EGGS.forEach(function (pair) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "admin-theme-btn silent-btn";
      btn.textContent = pair[0];
      btn.addEventListener("click", pair[1]);
      adminEggsGridEl.appendChild(btn);
    });

    /* ── v5.30.0: localStorage inspector ── */
    renderAdminStorage();
  }

  function renderAdminStorage() {
    var t = TEXT[currentLang];
    adminStorageTableEl.innerHTML = "";
    var keys = [];
    try {
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (k && k.indexOf("bananafont:") === 0) keys.push(k);
      }
    } catch (e) {}
    keys.sort();
    if (!keys.length) {
      var emptyRow = document.createElement("tr");
      var emptyCell = document.createElement("td");
      emptyCell.colSpan = 3;
      emptyCell.className = "admin-storage-empty";
      emptyCell.textContent = t.adminStorageEmpty;
      emptyRow.appendChild(emptyCell);
      adminStorageTableEl.appendChild(emptyRow);
      return;
    }
    keys.forEach(function (key) {
      var val = "";
      try { val = localStorage.getItem(key) || ""; } catch (e) {}
      var tr = document.createElement("tr");
      var tdKey = document.createElement("td");
      tdKey.className = "admin-storage-key";
      tdKey.textContent = key.replace(/^bananafont:/, "");
      var tdVal = document.createElement("td");
      tdVal.className = "admin-storage-value";
      tdVal.textContent = val.length > 60 ? val.slice(0, 60) + "…" : val;
      tdVal.title = val;
      var tdAct = document.createElement("td");
      tdAct.className = "admin-storage-action";
      var delBtn = document.createElement("button");
      delBtn.type = "button";
      delBtn.className = "admin-storage-del silent-btn";
      delBtn.textContent = t.adminStorageDelete;
      delBtn.title = "Удалить ключ";
      delBtn.addEventListener("click", function () {
        try { localStorage.removeItem(key); } catch (e) {}
        playUiSound("click");
        renderAdminStorage();
      });
      tdAct.appendChild(delBtn);
      tr.appendChild(tdKey);
      tr.appendChild(tdVal);
      tr.appendChild(tdAct);
      adminStorageTableEl.appendChild(tr);
    });
  }

  /* THEME_LABEL_KEY_MAP — copy of the inner-applyLang map, accessible
     from outside applyLang for renderAdminPanelContent. */
  var THEME_LABEL_KEY_MAP = {
    light: "themeLight", dark: "themeDark", night: "themeNight",
    rainbow: "themeRainbow", school: "themeSchool",
    "black-orange": "themeBlackOrange", "neon-green": "themeNeonGreen",
    "neon-violet": "themeNeonViolet", pastel: "themePastel",
    ocean: "themeOcean", sunset: "themeSunset",
    cyberpunk: "themeCyberpunk", coffee: "themeCoffee",
    terminal: "themeTerminal", aurora: "themeAurora",
    "soviet-lift": "themeSovietLift", "soviet-podyezd": "themeSovietPodyezd",
    "owner": "themeOwner"
  };

  /* Event wiring */
  adminBadgeEl.addEventListener("click", openAdminPanel);
  adminCloseEl.addEventListener("click", closeAdminPanel);
  adminBackdropEl.addEventListener("click", closeAdminPanel);
  adminLogoutBtn.addEventListener("click", logoutAdmin);
  adminClearStorageBtn.addEventListener("click", function () {
    if (!confirm(TEXT[currentLang].adminClearConfirm)) return;
    try {
      var keys = [];
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (k && k.indexOf("bananafont:") === 0) keys.push(k);
      }
      keys.forEach(function (k) { localStorage.removeItem(k); });
    } catch (e) {}
    renderAdminPanelContent();
    playUiSound("success");
  });
  /* Close on Escape */
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !adminPanelEl.hasAttribute("hidden")) {
      closeAdminPanel();
    }
  });

  /* ── v5.30.0 wiring for new admin tools ── */
  adminEmojiGoBtn.addEventListener("click", function () {
    var emoji = (adminEmojiInputEl.value || "🍌").slice(0, 4);
    var count = parseInt(adminEmojiCountEl.value, 10);
    if (isNaN(count) || count < 1) count = 30;
    if (count > 200) count = 200;
    emojiRain(emoji, count);
  });
  adminExportBtn.addEventListener("click", function () {
    try {
      var bundle = {};
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (k && k.indexOf("bananafont:") === 0) {
          bundle[k] = localStorage.getItem(k);
        }
      }
      var blob = new Blob([JSON.stringify(bundle, null, 2)], { type: "application/json" });
      var url = URL.createObjectURL(blob);
      var a = document.createElement("a");
      a.href = url;
      a.download = "bananafont-settings-" + new Date().toISOString().slice(0, 10) + ".json";
      a.click();
      setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
      playUiSound("success");
    } catch (e) {}
  });
  adminImportBtn.addEventListener("click", function () { adminImportFileEl.click(); });
  adminImportFileEl.addEventListener("change", function () {
    var file = adminImportFileEl.files && adminImportFileEl.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function (e) {
      try {
        var data = JSON.parse(e.target.result);
        var keys = Object.keys(data);
        keys.forEach(function (k) {
          if (k.indexOf("bananafont:") === 0) {
            localStorage.setItem(k, String(data[k]));
          }
        });
        playUiSound("confirm");
        /* Re-render + apply on next reload (or partial now) */
        renderAdminStorage();
        /* Re-apply theme if changed */
        try {
          var newTheme = localStorage.getItem("bananafont:theme");
          if (newTheme && VALID_THEMES.indexOf(newTheme) !== -1) setTheme(newTheme);
        } catch (er) {}
        alert(TEXT[currentLang].adminImportSuccess);
      } catch (err) {
        alert(TEXT[currentLang].adminImportError);
        playUiSound("fail");
      }
      adminImportFileEl.value = "";   /* reset so re-uploading the same file fires change */
    };
    reader.onerror = function () {
      alert(TEXT[currentLang].adminImportError);
      playUiSound("fail");
    };
    reader.readAsText(file);
  });

  /* Restore admin badge on load if previously unlocked */
  if (adminUnlocked) adminBadgeEl.removeAttribute("hidden");

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
     SOUND SYSTEM (v5.22.0) — global mute toggle + UI feedback sounds.
     Persists in localStorage. beepDone() and playSingleChime() also
     respect this gate (so muting kills the timer/alarm chime too).
     ============================================================ */
  var soundEnabled = true;
  var soundVolume = 0.8;        /* v5.24.0: 0.0–1.0, scales all gains */
  try {
    if (localStorage.getItem("bananafont:soundMuted") === "1") soundEnabled = false;
    var savedVol = localStorage.getItem("bananafont:soundVolume");
    if (savedVol !== null && savedVol !== "") {
      var v = parseFloat(savedVol);
      if (!isNaN(v) && v >= 0 && v <= 1) soundVolume = v;
    }
  } catch (e) {}

  function playUiSound(name) {
    if (!soundEnabled || soundVolume <= 0) return;
    try {
      if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      var ctx = audioCtx;
      if (ctx.state === "suspended") { try { ctx.resume(); } catch (e) {} }
      switch (name) {
        case "click":   playTone(ctx, 880,  0.045, 0.06); break;
        case "tab":     playTone(ctx, 660,  0.05,  0.09); break;
        case "tick":    playTone(ctx, 1400, 0.03,  0.04); break;
        case "success":
          playTone(ctx, 880, 0.06, 0.1);
          setTimeout(function () { playTone(ctx, 1320, 0.06, 0.1); }, 70);
          break;
        case "error":   playTone(ctx, 220,  0.08,  0.18); break;
        case "select":  playTone(ctx, 1100, 0.05,  0.07); break;
        /* ── v5.26.0: new sounds ── */
        case "pop":     playPop(ctx);     break;     /* sharp downward chirp */
        case "whoosh":  playWhoosh(ctx);  break;     /* freq sweep — kept for future use */
        case "fail":    playFail(ctx);    break;     /* sad-trombone wah-wah-wah (v5.26.2) */
        case "page":                                  /* v5.27.0: page-flip double-tap — tabs */
          playTone(ctx, 950, 0.04,  0.055);
          setTimeout(function () { playTone(ctx, 720, 0.035, 0.06); }, 55);
          break;
        case "confirm":                              /* 3-note ascending arpeggio */
          playTone(ctx, 660, 0.05, 0.1);
          setTimeout(function () { playTone(ctx,  880, 0.05, 0.1);  }, 80);
          setTimeout(function () { playTone(ctx, 1320, 0.06, 0.14); }, 160);
          break;
        case "unlock":                               /* magical 4-note G-major arpeggio */
          var unlockNotes = [392, 494, 587, 784];
          unlockNotes.forEach(function (f, idx) {
            setTimeout(function () { playTone(ctx, f, 0.055, 0.18); }, idx * 60);
          });
          break;
      }
    } catch (e) {}
  }
  /* ── pop ── short popcorn-style downward square-wave chirp.
     Quick to play, distinctive — good for visual effects (emoji rain). */
  function playPop(ctx) {
    var actualGain = 0.05 * soundVolume;
    if (actualGain < 0.0001) actualGain = 0.0001;
    var osc = ctx.createOscillator();
    var g = ctx.createGain();
    osc.type = "square";
    var t0 = ctx.currentTime;
    osc.frequency.setValueAtTime(900, t0);
    osc.frequency.exponentialRampToValueAtTime(180, t0 + 0.08);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(actualGain, t0 + 0.005);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.1);
    osc.connect(g).connect(ctx.destination);
    osc.start(t0);
    osc.stop(t0 + 0.12);
  }
  /* ── fail ── classic "sad trombone" cadence: 3 descending square-wave
     notes (G#4 → E4 → B3), последняя длиннее остальных. v5.26.2 — для
     неудачного ввода секретного кода. */
  function playFail(ctx) {
    playSadNote(ctx, 415.30, 0.00, 0.15);  /* G#4 — short  */
    playSadNote(ctx, 329.63, 0.16, 0.15);  /* E4  — short  */
    playSadNote(ctx, 246.94, 0.32, 0.45);  /* B3  — long, drawn-out final */
  }
  function playSadNote(ctx, freq, whenOffset, duration) {
    var actualGain = 0.05 * soundVolume;
    if (actualGain < 0.0001) actualGain = 0.0001;
    var osc = ctx.createOscillator();
    var g = ctx.createGain();
    osc.type = "square";
    osc.frequency.value = freq;
    var t0 = ctx.currentTime + whenOffset;
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(actualGain, t0 + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);
    osc.connect(g).connect(ctx.destination);
    osc.start(t0);
    osc.stop(t0 + duration + 0.02);
  }

  /* ── whoosh ── sawtooth descending frequency sweep, mimics a soft
     transition swoosh. Good for tab/theme switches. */
  function playWhoosh(ctx) {
    var actualGain = 0.025 * soundVolume;
    if (actualGain < 0.0001) actualGain = 0.0001;
    var osc = ctx.createOscillator();
    var g = ctx.createGain();
    osc.type = "sawtooth";
    var t0 = ctx.currentTime;
    osc.frequency.setValueAtTime(1500, t0);
    osc.frequency.exponentialRampToValueAtTime(380, t0 + 0.15);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(actualGain, t0 + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.18);
    osc.connect(g).connect(ctx.destination);
    osc.start(t0);
    osc.stop(t0 + 0.2);
  }
  function playTone(ctx, freq, peakGain, dur) {
    /* v5.24.0: scale by user-set volume. Floor at 0.0001 because
       exponentialRampToValueAtTime can't accept 0 (math: log(0)). */
    var actualGain = peakGain * soundVolume;
    if (actualGain < 0.0001) actualGain = 0.0001;
    var osc = ctx.createOscillator();
    var g = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = freq;
    var t0 = ctx.currentTime;
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(actualGain, t0 + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(g).connect(ctx.destination);
    osc.start(t0);
    osc.stop(t0 + dur + 0.02);
  }

  /* Throttled tick for sliders — fires at most once per 80ms to avoid
     a constant buzz while dragging. v5.24.0. */
  var lastSliderTickAt = 0;
  function playSliderTick() {
    var now = (typeof performance !== "undefined" && performance.now) ? performance.now() : Date.now();
    if (now - lastSliderTickAt < 80) return;
    lastSliderTickAt = now;
    playUiSound("tick");
  }
  /* Attach to all range inputs (settings size, password length, volume,
     plus any future ones). Uses event delegation on document so future
     sliders added dynamically also work. */
  document.addEventListener("input", function (e) {
    var el = e.target;
    if (el && el.tagName === "INPUT" && el.type === "range") {
      playSliderTick();
    }
  });

  function refreshSoundButtonLabel() {
    var t = TEXT[currentLang];
    soundToggleBtn.textContent = soundEnabled ? t.soundOn : t.soundOff;
    soundToggleBtn.classList.toggle("sound-off", !soundEnabled);
  }
  soundToggleBtn.addEventListener("click", function () {
    soundEnabled = !soundEnabled;
    try { localStorage.setItem("bananafont:soundMuted", soundEnabled ? "0" : "1"); } catch (e) {}
    refreshSoundButtonLabel();
    if (soundEnabled) playUiSound("click"); /* audible confirmation */
  });
  /* Volume slider — initial sync from loaded soundVolume + live updates */
  soundVolumeEl.value = Math.round(soundVolume * 100);
  soundVolumeValueEl.textContent = Math.round(soundVolume * 100) + "%";
  soundVolumeEl.addEventListener("input", function () {
    var pct = parseInt(soundVolumeEl.value, 10);
    if (isNaN(pct)) pct = 0;
    soundVolume = pct / 100;
    soundVolumeValueEl.textContent = pct + "%";
    try { localStorage.setItem("bananafont:soundVolume", String(soundVolume)); } catch (e) {}
    /* The slider tick (via global "input" listener) plays at the
       new volume — gives the user immediate audible feedback. */
  });
  /* v5.25.0: universal UI-sound delegation. ONE click listener on
     document picks the right sound based on what was clicked, so
     every button/toggle/select in the app gets audio feedback —
     including any added in the future, automatically. */
  document.addEventListener("click", function (e) {
    var t = e.target;
    /* If a button (or anything inside one) was clicked */
    var btn = t.closest ? t.closest("button") : null;
    if (btn && !btn.disabled) {
      /* v5.26.3: skip buttons that already play their own context-specific
         sound (otherwise generic "click" stomps on unlock/fail/etc). */
      if (btn.classList.contains("silent-btn"))                return;
      /* v5.27.0: tab-btn → page (clean double-tap, like flipping pages;
         was whoosh in v5.26.0). themes → select; everything else → click. */
      if (btn.classList.contains("tab-btn"))                  playUiSound("page");
      else if (btn.dataset && btn.dataset.themeBtn)            playUiSound("select");
      else if (btn.classList.contains("extra-theme-btn"))      playUiSound("select");
      else if (btn.dataset && btn.dataset.lang)                playUiSound("click");
      else                                                     playUiSound("click");
      return;
    }
    /* Checkbox toggle (incl. our toggle-switch UI) */
    var cb = (t.tagName === "INPUT" && t.type === "checkbox") ? t : null;
    if (cb) { playUiSound("click"); return; }
  });
  /* Native <select> change events — separate listener (change, not click,
     because users can choose with the keyboard too) */
  document.addEventListener("change", function (e) {
    var t = e.target;
    if (t.tagName === "SELECT") playUiSound("click");
  });
  /* Gate the existing beepDone through the sound toggle */
  var originalPlaySingleChime = playSingleChime;
  playSingleChime = function () {
    if (!soundEnabled) return;
    return originalPlaySingleChime.apply(this, arguments);
  };

  /* ============================================================
     TOOLS TAB (v5.22.0) — password gen, random number, lorem ipsum,
     color converter. Each is self-contained.
     ============================================================ */

  /* ── Password generator ── */
  function generatePassword() {
    var len = parseInt(passgenLenEl.value, 10) || 16;
    var pool = "";
    if (passgenLowerEl.checked)  pool += "abcdefghijklmnopqrstuvwxyz";
    if (passgenUpperEl.checked)  pool += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (passgenDigitEl.checked)  pool += "0123456789";
    if (passgenSymbolEl.checked) pool += "!@#$%^&*()-_=+[]{}<>?/.,;:";
    if (!pool) {
      passgenOutputEl.value = "";
      passgenOutputEl.placeholder = TEXT[currentLang].passgenError;
      playUiSound("error");
      return;
    }
    /* Use crypto.getRandomValues for proper entropy */
    var out = "";
    var randBytes;
    try {
      randBytes = new Uint32Array(len);
      window.crypto.getRandomValues(randBytes);
    } catch (e) {
      randBytes = null;
    }
    for (var i = 0; i < len; i++) {
      var idx = randBytes ? randBytes[i] % pool.length : Math.floor(Math.random() * pool.length);
      out += pool.charAt(idx);
    }
    passgenOutputEl.value = out;
    playUiSound("confirm");   /* v5.26.0: confirm = 3-note ascending */
  }
  passgenLenEl.addEventListener("input", function () {
    passgenLenValueEl.textContent = passgenLenEl.value;
  });
  passgenGenerate.addEventListener("click", generatePassword);
  passgenCopy.addEventListener("click", function () {
    if (!passgenOutputEl.value) return;
    try {
      navigator.clipboard.writeText(passgenOutputEl.value);
      var orig = passgenCopy.textContent;
      passgenCopy.textContent = TEXT[currentLang].passgenCopied;
      setTimeout(function () { passgenCopy.textContent = orig; }, 1200);
      playUiSound("success");
    } catch (e) {
      passgenOutputEl.select();
      document.execCommand("copy");
    }
  });
  generatePassword();   /* initial preview */

  /* ── Random number ── */
  function generateRandomNumber() {
    var lo = parseInt(randnumMinEl.value, 10);
    var hi = parseInt(randnumMaxEl.value, 10);
    if (isNaN(lo) || isNaN(hi) || lo > hi) {
      randnumResultEl.textContent = "—";
      randnumResultEl.style.color = "#ff7a85";
      randnumResultEl.title = TEXT[currentLang].randnumError;
      playUiSound("error");
      return;
    }
    var n;
    try {
      var buf = new Uint32Array(1);
      window.crypto.getRandomValues(buf);
      n = lo + (buf[0] % (hi - lo + 1));
    } catch (e) {
      n = lo + Math.floor(Math.random() * (hi - lo + 1));
    }
    randnumResultEl.textContent = n;
    randnumResultEl.style.color = "";
    randnumResultEl.title = "";
    playUiSound("tick");
  }
  randnumGenBtn.addEventListener("click", generateRandomNumber);

  /* ── Lorem ipsum ── */
  var LOREM_LAT_WORDS = ("lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod " +
    "tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud " +
    "exercitation ullamco laboris nisi aliquip ex ea commodo consequat duis aute irure in " +
    "reprehenderit voluptate velit esse cillum eu fugiat nulla pariatur excepteur sint " +
    "occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est " +
    "laborum at vero eos accusamus iusto odio dignissimos ducimus blanditiis praesentium").split(" ");
  var LOREM_RUS_WORDS = ("рыба текст пример наполнение страница макет шрифт абзац слово предложение " +
    "заголовок верстка дизайн интерфейс кнопка форма поле ввод вывод результат проверка " +
    "стиль цвет фон граница отступ выравнивание шапка подвал контейнер блок элемент модуль " +
    "сетка колонка строка ячейка таблица список ссылка изображение картинка иконка анимация " +
    "переход эффект градиент тень тип размер вес жирный курсив подчёркнутый").split(" ");
  var currentLoremLang = "lat";
  function generateLorem() {
    var count = Math.max(1, Math.min(50, parseInt(loremCountEl.value, 10) || 3));
    var words = currentLoremLang === "rus" ? LOREM_RUS_WORDS : LOREM_LAT_WORDS;
    var paragraphs = [];
    for (var p = 0; p < count; p++) {
      var sentenceCount = 3 + Math.floor(Math.random() * 4);
      var sentences = [];
      for (var s = 0; s < sentenceCount; s++) {
        var wordCount = 6 + Math.floor(Math.random() * 12);
        var picked = [];
        for (var w = 0; w < wordCount; w++) {
          picked.push(words[Math.floor(Math.random() * words.length)]);
        }
        var sent = picked.join(" ");
        sent = sent.charAt(0).toUpperCase() + sent.slice(1);
        sentences.push(sent + ".");
      }
      paragraphs.push(sentences.join(" "));
    }
    loremOutputEl.value = paragraphs.join("\n\n");
    playUiSound("success");
  }
  /* v5.26.3: enforce 1–50 lorem paragraph limit on both input + blur
     events. HTML max="50" only validates on spinner-step, не на typed
     values. Without this, user could type "999" and JS silently clamped
     to 50 при генерации — но input visually держал 999. */
  function clampLoremInput() {
    var v = parseInt(loremCountEl.value, 10);
    if (isNaN(v)) return;            /* allow empty mid-edit */
    if (v > 50)   loremCountEl.value = 50;
    else if (v < 1) loremCountEl.value = 1;
  }
  loremCountEl.addEventListener("input", clampLoremInput);
  loremCountEl.addEventListener("blur", function () {
    /* On blur: also fix empty/NaN by defaulting to 3 */
    var v = parseInt(loremCountEl.value, 10);
    if (isNaN(v) || v < 1) loremCountEl.value = 1;
    else if (v > 50)        loremCountEl.value = 50;
  });
  loremGenBtn.addEventListener("click", generateLorem);
  loremCopyBtn.addEventListener("click", function () {
    if (!loremOutputEl.value) return;
    try {
      navigator.clipboard.writeText(loremOutputEl.value);
      var orig = loremCopyBtn.textContent;
      loremCopyBtn.textContent = TEXT[currentLang].passgenCopied;
      setTimeout(function () { loremCopyBtn.textContent = orig; }, 1200);
      playUiSound("success");
    } catch (e) {}
  });
  for (var li = 0; li < loremLangBtns.length; li++) {
    (function (btn) {
      btn.addEventListener("click", function () {
        currentLoremLang = btn.dataset.loremLang;
        for (var k = 0; k < loremLangBtns.length; k++) {
          loremLangBtns[k].classList.toggle("active", loremLangBtns[k] === btn);
        }
        playUiSound("click");
      });
    })(loremLangBtns[li]);
  }
  generateLorem();   /* initial preview */

  /* ── Color converter ── */
  function hexToRgb(hex) {
    var m = /^#?([a-f\d]{6})$/i.exec(hex);
    if (!m) return null;
    var n = parseInt(m[1], 16);
    return { r: (n >> 16) & 0xff, g: (n >> 8) & 0xff, b: n & 0xff };
  }
  function rgbToHsl(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;
    if (max === min) { h = s = 0; }
    else {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100)
    };
  }
  function updateColorDisplay(hex) {
    var rgb = hexToRgb(hex);
    if (!rgb) return;
    var hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
    colorHexDisplay.textContent = hex.toUpperCase();
    colorRgbEl.textContent = "rgb(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ")";
    colorHslEl.textContent = "hsl(" + hsl.h + ", " + hsl.s + "%, " + hsl.l + "%)";
  }
  colorPickerEl.addEventListener("input", function () {
    colorHexEl.value = colorPickerEl.value;
    updateColorDisplay(colorPickerEl.value);
  });
  colorHexEl.addEventListener("input", function () {
    var v = colorHexEl.value.trim();
    if (!v.startsWith("#")) v = "#" + v;
    if (/^#[a-f\d]{6}$/i.test(v)) {
      colorPickerEl.value = v;
      updateColorDisplay(v);
    }
  });
  /* Click on any color-format value to copy */
  [colorHexDisplay, colorRgbEl, colorHslEl].forEach(function (el) {
    el.style.cursor = "pointer";
    el.title = "Click to copy";
    el.addEventListener("click", function () {
      try {
        navigator.clipboard.writeText(el.textContent);
        var orig = el.style.background;
        el.style.background = "rgba(80, 220, 130, 0.3)";
        setTimeout(function () { el.style.background = orig; }, 600);
        playUiSound("success");
      } catch (e) {}
    });
  });
  updateColorDisplay(colorPickerEl.value);  /* initial paint */

  /* ============================================================
     EASTER EGGS — hidden features for the curious.
     Not mentioned in UI. Let the user discover them.
     ============================================================ */

  /* Generic emoji rain — drop any emoji from the top with random
     spread, size, rotation. Default emoji: 🍌. */
  function emojiRain(emoji, count) {
    var ch = emoji || "🍌";
    var n = count || 25;
    playUiSound("pop");   /* v5.26.0: pop sound on rain trigger */
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
  /* ── Big text overlay (v5.30.1) ── same idea as showBigNumber but for
     arbitrary text. Smaller font (clamp 60–160px) so multi-character
     phrases fit. Reuses the .big-number-overlay backdrop for consistency. */
  function showBigText(text, color) {
    var overlay = document.createElement("div");
    overlay.className = "big-number-overlay";
    var el = document.createElement("div");
    el.className = "big-text";
    el.textContent = String(text);
    if (color) el.style.color = color;
    overlay.appendChild(el);
    document.body.appendChild(overlay);
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
    window.showBigText   = showBigText;
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
