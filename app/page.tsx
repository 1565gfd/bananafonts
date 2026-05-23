"use client";

import { useEffect, useState } from "react";

type Lang = "ru" | "en";
type Theme = "light" | "dark";

const TEXT = {
  ru: {
    title: "Выбор шрифта текста для Microsoft Word",
    placeholder: "Введите ваш текст...",
    footerPrefix: "сделал",
    footerSuffix: "(banana.team)",
    copy: "Копировать",
    copied: "Скопировано!",
    themeLight: "Светлая",
    themeDark: "Тёмная"
  },
  en: {
    title: "Text Font Chooser only for Microsoft Word",
    placeholder: "Enter your text...",
    footerPrefix: "made by",
    footerSuffix: "(banana.team)",
    copy: "Copy",
    copied: "Copied!",
    themeLight: "Light",
    themeDark: "Dark"
  }
} as const;

type Transform = {
  upper: number;
  lower: number;
  digit?: number;
  exceptions?: Record<string, string>;
};

const TRANSFORMS: Record<string, Transform> = {
  bold:       { upper: 0x1D3BF, lower: 0x1D3B9, digit: 0x1D79E },
  italic:     { upper: 0x1D3F3, lower: 0x1D3ED, exceptions: { h: "ℎ" } },
  bolditalic: { upper: 0x1D427, lower: 0x1D421, digit: 0x1D79E },
  sansbold:   { upper: 0x1D593, lower: 0x1D58D, digit: 0x1D7BC },
  sansitalic: { upper: 0x1D5C7, lower: 0x1D5C1 },
  mono:       { upper: 0x1D62F, lower: 0x1D629, digit: 0x1D7C6 }
};

function applyTransform(text: string, t?: Transform): string {
  if (!t) return text;
  let out = "";
  for (const c of text) {
    if (t.exceptions && c in t.exceptions) {
      out += t.exceptions[c];
      continue;
    }
    const code = c.codePointAt(0)!;
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

type FontItem =
  | { label: string; kind: "css"; family: string }
  | { label: string; kind: "unicode"; transform: keyof typeof TRANSFORMS };

const FONTS: FontItem[] = [
  { label: "Arial",        kind: "css", family: "Arial" },
  { label: "Verdana",      kind: "css", family: "Verdana" },
  { label: "Tahoma",       kind: "css", family: "Tahoma" },
  { label: "Trebuchet",    kind: "css", family: "Trebuchet MS" },
  { label: "Times",        kind: "css", family: "Times New Roman" },
  { label: "Courier",      kind: "css", family: "Courier New" },
  { label: "Roboto",       kind: "css", family: "var(--font-roboto)" },
  { label: "Open Sans",    kind: "css", family: "var(--font-open-sans)" },
  { label: "Montserrat",   kind: "css", family: "var(--font-montserrat)" },
  { label: "PT Sans",      kind: "css", family: "var(--font-pt-sans)" },
  { label: "Merriweather", kind: "css", family: "var(--font-merriweather)" },
  { label: "Roboto Mono",  kind: "css", family: "var(--font-roboto-mono)" },
  { label: "Bold",         kind: "unicode", transform: "bold" },
  { label: "Italic",       kind: "unicode", transform: "italic" },
  { label: "Bold Italic",  kind: "unicode", transform: "bolditalic" },
  { label: "Sans Bold",    kind: "unicode", transform: "sansbold" },
  { label: "Sans Italic",  kind: "unicode", transform: "sansitalic" },
  { label: "Mono",         kind: "unicode", transform: "mono" }
];

const VERSION = "v2.1.3";

export default function Page() {
  const [text, setText] = useState("");
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const [lang, setLang] = useState<Lang>("ru");
  const [theme, setTheme] = useState<Theme>("dark");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("bananafont:lang");
    if (savedLang === "ru" || savedLang === "en") {
      setLang(savedLang);
    } else {
      const browserLang = navigator.language.toLowerCase();
      setLang(browserLang.startsWith("ru") ? "ru" : "en");
    }
    const currentTheme = document.documentElement.dataset.theme;
    if (currentTheme === "light" || currentTheme === "dark") {
      setTheme(currentTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  function changeLang(nextLang: Lang) {
    setLang(nextLang);
    try {
      localStorage.setItem("bananafont:lang", nextLang);
    } catch {}
  }

  function changeTheme(nextTheme: Theme) {
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    try {
      localStorage.setItem("bananafont:theme", nextTheme);
    } catch {}
  }

  const t = TEXT[lang];
  const selected = FONTS[selectedIdx];
  const displayText =
    selected.kind === "unicode"
      ? applyTransform(text, TRANSFORMS[selected.transform])
      : text;
  const fontFamily = selected.kind === "css" ? selected.family : undefined;

  async function handleCopy() {
    if (!displayText) return;
    try {
      await navigator.clipboard.writeText(displayText);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard may be unavailable in some contexts
    }
  }

  return (
    <main className="app">
      <div className="top-bar">
        <div className="theme-switch" role="group" aria-label="Theme">
          <button
            type="button"
            className={theme === "light" ? "active" : ""}
            onClick={() => changeTheme("light")}
          >
            {t.themeLight}
          </button>
          <button
            type="button"
            className={theme === "dark" ? "active" : ""}
            onClick={() => changeTheme("dark")}
          >
            {t.themeDark}
          </button>
        </div>
        <div className="lang-switch" role="group" aria-label="Language">
          <button
            type="button"
            className={lang === "ru" ? "active" : ""}
            onClick={() => changeLang("ru")}
          >
            RU
          </button>
          <button
            type="button"
            className={lang === "en" ? "active" : ""}
            onClick={() => changeLang("en")}
          >
            EN
          </button>
        </div>
      </div>

      <h1>{t.title}</h1>

      <textarea
        id="input"
        placeholder={t.placeholder}
        value={text}
        onChange={(event) => setText(event.target.value)}
      />

      <div className="fonts">
        {FONTS.map((item, idx) => {
          const display =
            item.kind === "unicode"
              ? applyTransform(item.label, TRANSFORMS[item.transform])
              : item.label;
          return (
            <button
              key={idx}
              type="button"
              className={idx === selectedIdx ? "active" : ""}
              onClick={() => setSelectedIdx(idx)}
            >
              {display}
            </button>
          );
        })}
      </div>

      <div
        id="output"
        className="output"
        style={fontFamily ? { fontFamily } : undefined}
      >
        {displayText}
      </div>

      <button
        type="button"
        className={"copy-btn" + (copied ? " copied" : "")}
        onClick={handleCopy}
        disabled={!displayText}
      >
        {copied ? t.copied : t.copy}
      </button>

      <footer>
        {t.footerPrefix}{" "}
        <a href="https://github.com/1565gfd" target="_blank" rel="noopener noreferrer">
          1565gfd
        </a>{" "}
        {t.footerSuffix} · {VERSION}
      </footer>
    </main>
  );
}
