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
      ttUniversal: "🇷🇺🇬🇧 Поддерживает кириллицу и латиницу",
      ttUnicode: "🇬🇧 Только латиница и цифры — для Telegram/Discord",
      tabHome: "Главная",
      tabFonts: "Шрифты",
      tabSettings: "Настройки",
      homeTitle: "Banana",
      homeIntro: "Помогающий сайт: инструменты для текста, шрифты для Word, Unicode-стили для Telegram и Discord.",
      homePlaceholder: "Введите или вставьте сюда текст...",
      toolTextLabel: "Текст для работы",
      toolCaseLabel: "Преобразование регистра",
      toolCleanLabel: "Операции с текстом",
      statChars: "символов",
      statWords: "слов",
      statLines: "строк",
      statNoSpaces: "без пробелов",
      btnTrim: "Убрать лишние пробелы",
      btnReverse: "Обратный порядок",
      btnCopyText: "Копировать",
      btnClear: "Очистить",
      tabCalc: "Калькулятор",
      calcTitle: "Калькулятор",
      calcModeBasic: "Базовый",
      calcModeGeom: "Геометрия",
      calcModeUnits: "Единицы",
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
      settingsAboutText: "Banana — помогающий сайт. Внутри: счётчик и преобразование текста, шрифты для Microsoft Word, Unicode-стили для Telegram, Discord, WhatsApp."
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
      ttUniversal: "🇷🇺🇬🇧 Supports Cyrillic and Latin",
      ttUnicode: "🇬🇧 Latin and digits only — for Telegram/Discord",
      tabHome: "Home",
      tabFonts: "Fonts",
      tabSettings: "Settings",
      homeTitle: "Banana",
      homeIntro: "A helper site: text tools, fonts for Word, Unicode styles for Telegram and Discord.",
      homePlaceholder: "Type or paste your text here...",
      toolTextLabel: "Text to work with",
      toolCaseLabel: "Case conversion",
      toolCleanLabel: "Text operations",
      statChars: "characters",
      statWords: "words",
      statLines: "lines",
      statNoSpaces: "no spaces",
      btnTrim: "Trim spaces",
      btnReverse: "Reverse",
      btnCopyText: "Copy",
      btnClear: "Clear",
      tabCalc: "Calculator",
      calcTitle: "Calculator",
      calcModeBasic: "Basic",
      calcModeGeom: "Geometry",
      calcModeUnits: "Units",
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
      settingsAboutText: "Banana — a helper site. Inside: text counter and case conversion, fonts for Microsoft Word, Unicode styles for Telegram, Discord, WhatsApp."
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
    { label: "Mono",         kind: "unicode", transform: "mono" }
  ];

  var VERSION = "v5.1.2";

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
  var currentTheme = document.documentElement.dataset.theme || "dark";
  if (currentTheme !== "light" && currentTheme !== "dark" && currentTheme !== "night") {
    currentTheme = "dark";
  }

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
    for (var j = 0; j < themeButtons.length; j++) {
      var btn = themeButtons[j];
      var key = btn.dataset.themeBtn;
      btn.textContent = key === "light" ? t.themeLight :
                        key === "night" ? t.themeNight : t.themeDark;
    }
    /* Tab labels and Settings panel content */
    tabBtnHome.textContent        = t.tabHome;
    tabBtnFonts.textContent       = t.tabFonts;
    tabBtnCalc.textContent        = t.tabCalc;
    tabBtnSettings.textContent    = t.tabSettings;
    /* Calculator labels */
    calcTitleEl.textContent       = t.calcTitle;
    calcModeBtns[0].textContent   = t.calcModeBasic;
    calcModeBtns[1].textContent   = t.calcModeGeom;
    calcModeBtns[2].textContent   = t.calcModeUnits;
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
    toolCleanLabel.textContent    = t.toolCleanLabel;
    statCharsLab.textContent      = t.statChars;
    statWordsLab.textContent      = t.statWords;
    statLinesLab.textContent      = t.statLines;
    statNoSpacesLab.textContent   = t.statNoSpaces;
    btnTrim.textContent           = t.btnTrim;
    btnReverse.textContent        = t.btnReverse;
    btnHomeCopy.textContent       = t.btnCopyText;
    btnClear.textContent          = t.btnClear;
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
  var THEME_COLORS = { light: "#eef2ff", dark: "#161b3a", night: "#000000" };
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
    root.classList.add("theme-transition");
    currentTheme = theme;
    root.dataset.theme = theme;
    try { localStorage.setItem("bananafont:theme", theme); } catch (e) {}
    for (var i = 0; i < themeButtons.length; i++) {
      themeButtons[i].classList.toggle("active", themeButtons[i].dataset.themeBtn === theme);
    }
    setMobileBarColor(theme);
    if (themeTransitionTimer) clearTimeout(themeTransitionTimer);
    themeTransitionTimer = setTimeout(function () {
      root.classList.remove("theme-transition");
      themeTransitionTimer = null;
    }, 450);
  }

  /* --------- fonts --------- */
  function getDisplayText() {
    var font = FONTS[currentIdx];
    if (font.kind === "unicode") {
      return applyTransform(inputEl.value, font.transform);
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
      var display = item.kind === "unicode"
        ? applyTransform(item.label, item.transform)
        : item.label;
      var tip = item.kind === "unicode" ? t.ttUnicode : t.ttUniversal;
      var flag = item.kind === "unicode" ? "🇬🇧" : "🇷🇺🇬🇧";
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

  /* --------- init --------- */
  renderFonts();
  setFont(0);
  setLang(readSavedLang());
  setTheme(currentTheme);
  calcRender();
})();
