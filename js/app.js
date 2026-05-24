/* ============================================================
   Banana Font — app logic
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
      title: "Выбор шрифта текста для Microsoft Word",
      placeholder: "Введите ваш текст...",
      footerPrefix: "сделал",
      footerSuffix: "(banana.team)",
      copy: "Копировать",
      copied: "Скопировано!",
      themeLight: "Светлая",
      themeDark: "Тёмная",
      themeNight: "Ночная",
      ttUniversal: "🇷🇺🇬🇧 Поддерживает кириллицу и латиницу",
      ttUnicode: "🇬🇧 Только латиница и цифры — для Telegram/Discord"
    },
    en: {
      title: "Text Font Chooser only for Microsoft Word",
      placeholder: "Enter your text...",
      footerPrefix: "made by",
      footerSuffix: "(banana.team)",
      copy: "Copy",
      copied: "Copied!",
      themeLight: "Light",
      themeDark: "Dark",
      themeNight: "Night",
      ttUniversal: "🇷🇺🇬🇧 Supports Cyrillic and Latin",
      ttUnicode: "🇬🇧 Latin and digits only — for Telegram/Discord"
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

  var VERSION = "v4.1.3";

  /* --------- DOM refs --------- */
  var titleEl   = document.getElementById("title");
  var inputEl   = document.getElementById("input");
  var fontsEl   = document.getElementById("fonts");
  var outputEl  = document.getElementById("output");
  var footerEl  = document.getElementById("footer");
  var copyBtn   = document.getElementById("copy-btn");
  var langButtons  = document.querySelectorAll(".lang-switch button");
  var themeButtons = document.querySelectorAll(".theme-switch button");

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

  /* --------- init --------- */
  renderFonts();
  setFont(0);
  setLang(readSavedLang());
  setTheme(currentTheme);
})();
