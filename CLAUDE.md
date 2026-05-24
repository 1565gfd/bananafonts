# Banana — инструкции для будущих ИИ-помощников

Этот файл — context для любого AI (Claude, GPT, Gemini и т.д.), который будет
работать с этим репозиторием. Прочитай его прежде чем что-то менять.

## Что это за сайт

**Banana** — небольшой helper-сайт с тремя группами инструментов:

1. **Главная** — текстовые инструменты: счётчик символов/слов/строк,
   преобразование регистра (UPPER/lower/Title/iNVERT), действия над
   строками (сортировка/dedupe/remove empty), trim/reverse/copy/clear.
2. **Шрифты** — 20 стилей превью: 6 системных Word-safe (Arial, Verdana,
   Tahoma, Trebuchet, Times, Courier), 6 Google Fonts (Roboto, Open Sans,
   Montserrat, PT Sans, Merriweather, Roboto Mono), 6 Math Alphanumeric
   Unicode (Bold, Italic, Bold Italic, Sans Bold, Sans Italic, Mono),
   2 combining-стиля (Underline, Strike) для Telegram Desktop Windows.
3. **Калькулятор** — три режима: Базовый (с % и дробями), Геометрия
   (прямоугольник/квадрат/круг/треугольник), Перевод единиц (длина,
   масса, температура).
4. **Настройки** — размер превью (slider), сброс настроек, информация.

## Архитектура

**Это pure static-сайт. Никакого build step, никакого Next.js,
никакого `package.json`, никакого `middleware.ts`.** Так специально —
была долгая история с Next.js, который падал на Vercel с
`MIDDLEWARE_INVOCATION_FAILED` из-за in-process rate-limit в middleware.
Мигрировали на чистую статику в v3.0.0 — больше не возвращаемся.

```
D:\bananafont\
├── .vercel\project.json      (Vercel CLI binding — НЕ трогать)
├── .claude\launch.json       (Claude preview config — НЕ трогать)
├── index.html                (только разметка + <link>/<script>)
├── 404.html                  (та же стилистика, link на main.css)
├── manifest.json             (PWA manifest для Android)
├── robots.txt                (с canonical sitemap URL)
├── sitemap.xml               (с canonical home URL)
├── vercel.json               (security headers, CSP, cache rules)
├── css\main.css              (все стили, 3 темы как CSS variables)
├── js\app.js                 (вся логика, VERSION константа здесь)
└── CLAUDE.md                 (этот файл)
```

## Канонический домен

**`https://banana-helper.vercel.app/`** (с дефисом, совпадает с rebrand
"Banana — помощник"). Старый `banana-fonts.vercel.app` пока работает
как fallback. GitHub-репо называется `bananafonts` (исторически, до
ребрендинга) — менять имя репо НЕ нужно.

`robots.txt` и `sitemap.xml` должны ссылаться на новый
`banana-helper.vercel.app`.

## Правило VERSION bump (КРИТИЧНО)

Пользователь явно настаивает: **после каждого "big change" нужно
бампать `VERSION` в `js/app.js`** (поиск `var VERSION = "v..."`).
Версия отображается в footer сайта и в About настройках.

Semver intent:
- **MAJOR** (X.0.0) — редизайн, архитектурное изменение, breaking UX.
  Примеры: v3.0.0 (Next.js → static), v4.0.0 (production-ready milestone),
  v5.0.0 (rebrand "Banana Font" → "Banana").
- **MINOR** (5.X.0) — новая фича, capability, новая вкладка, новые
  шрифты, новые инструменты. Примеры: v5.1.0 (калькулятор), v5.2.0
  (combining-стили), v5.3.0 (line operations).
- **PATCH** (5.3.X) — багфикс, security патч, мелкая UX-полировка,
  обновление документации.

Если не уверен, бамать ли — **спроси** пользователя коротко вместо
того чтобы молча пропустить или молча бамать.

В сводке в конце своего ответа всегда упоминай bump (e.g. "VERSION
v5.3.0 → v5.3.1 PATCH").

## Правила для AI

1. **Темы** — три: light / dark / night. Реализованы через CSS variables
   на `[data-theme]` атрибуте `<html>`. Anti-FOUC inline-script в `<head>`
   обоих HTML-файлов читает `localStorage` и ставит атрибут до paint.
   Theme switch имеет timed transition class (`html.theme-transition`)
   с force-reflow trick для корректного fade в обе стороны.
2. **Языки** — два: ru / en. Один объект `TEXT` в `js/app.js` с
   локализованными строками. Смена языка делает fade-out → swap →
   fade-in. Не забывай добавлять новые ключи в **оба** языка.
3. **Mobile-fallback** — на `@media (hover: none), (max-width: 700px)`
   отключаем `backdrop-filter` (он жрёт GPU на mobile при 30+ элементах
   с blur). Solid background fallback для всех 3 тем. **Используй
   `:not(.active)`** в селекторах фоллбеков, иначе они перекроют active-
   state из-за равной specificity!
4. **`color-scheme: dark/light/dark`** установлен per data-theme. Не
   убирай — без него native dropdown'ы (`<select>`) в night-теме
   нечитаемы.
5. **CSS specificity** — будь осторожен с `[data-theme] selector`
   правилами, они часто имеют ту же специфичность что и `.active`.
   Используй `:not(.active)` для фоллбеков.
6. **Unicode шрифты**: Math Alphanumeric Symbols (`bold`, `italic` и т.д.)
   ломаются в Telegram Desktop Windows (NFKC normalization). Combining-
   стили (`underline`, `strike`) — работают везде, включая кириллицу.
   В tooltip это явно прописано.
7. **localStorage ключи** — `bananafont:theme`, `bananafont:lang`,
   `bananafont:size`. Префикс `bananafont:` исторический (до ребрендинга
   в v5.0.0) — оставлен для backward compat returning users. Не мигрируй
   на `banana:`.
8. **CSP в vercel.json** разрешает `script-src 'self' 'unsafe-inline'`
   (нужно для inline anti-FOUC скрипта), `style-src 'self' 'unsafe-inline'
   https://fonts.googleapis.com`, `font-src 'self' data: https://fonts.gstatic.com`.
   Без этого Google Fonts не загрузятся.
9. **`color: #ffffff`** на `.active` button — белый цвет работает во
   всех 3 темах потому что accent-bg всегда насыщенный фиолетовый/оранжевый.
10. **Vercel Speed Insights** подключён через `/_vercel/speed-insights/script.js`
    (built-in Vercel CDN script). Не требует npm install. На локалке
    вернёт 404 — это нормально.
11. **`max-age=300 must-revalidate`** для css/js в `vercel.json` — чтобы
    деплои быстро попадали к пользователям. НЕ возвращай `immutable` для
    css/js — иначе пользователи неделю не видят апдейтов.

## Что НЕ делать (исторические грабли)

- **НЕ** возвращать Next.js — он падал на Vercel Edge с
  `MIDDLEWARE_INVOCATION_FAILED`.
- **НЕ** возвращать `middleware.ts` с in-process Map для rate-limit —
  то же самое.
- **НЕ** возвращать `package.json` — Vercel начнёт пытаться сделать
  Next.js build.
- **НЕ** менять локализационные строки молча — после изменений
  обязательно проверь что и `ru`, и `en` версии обновлены.
- **НЕ** менять `localStorage` ключи (`bananafont:*`).
- **НЕ** удалять `color-scheme` per-theme — без него dropdown'ы
  нечитаемы в night.
- **НЕ** говорить "Banana Font" в UI/metadata — сайт переименован
  просто в "Banana" (как helper-tool). Префикс в коде/repo остался для
  совместимости.
- **НЕ** добавлять PNG icons в manifest без явного запроса — у нас
  только SVG inline data URI (без build step не сгенерировать PNG).

## История версий

| Версия | Что |
|--------|-----|
| v5.16.x | **Звук таймера/будильника** редизайн: вместо 3-х резких пип-пип-пип теперь приятная **C-major arpeggio** (C5→E5→G5→C6) через WebAudio, две осциллятора на ноту (sine fundamental + triangle octave для bell-sparkle), soft attack + 1.4s decay = chime. **Ручной ввод миллисекунд** в таймере: 3-й input (0–999, видимость управляется `applyMsVisibility` на основе toggle); display переключён с `mm:ss.cs` (центисекунды) на `mm:ss.mmm` (true ms). **Settings/About** обновлён — описывает все 6 вкладок (Главная, Шрифты, Калькулятор с дробями, Время, Секретные коды, Темы, PWA). |
| v5.15.x | **Таймер: +30s/+1m/+5m кнопки** (работают в любом state — idle, running, paused, done); **опциональный ms-режим** через чекбокс «Показывать миллисекунды» (display `mm:ss.cs`, tick через `requestAnimationFrame`); preference сохраняется в localStorage. **Часы теперь lang-aware**: RU → 24h формат, EN → 12h с AM/PM (через `clockLocale()` + `clockHour12()`, formatters пересоздаются в `applyLang`). Алгоритм будильника (`computeNextAlarm`) остался 24h hardcoded — мы делаем int-math на hour part. |
| v5.14.x | **Будильник** в вкладке «Время» (под таймером). Двухшаговый UX: Step 1 — обязательный выбор часового пояса (18 пресетов от Сан-Паулу до Сиднея + «Авто (системный)»), Step 2 разблокируется только после выбора TZ. Алгоритм next-occurrence через `Intl.DateTimeFormat.formatToParts` для целевой TZ. Persists в localStorage (`bananafont:alarm`) с пересчётом next-target при загрузке. Fire — 3 волны WebAudio beep + красный pulsing статус. Dismiss / cancel. |
| v5.13.x | **Код `67`** (v5.13.0): огромная синяя 67 на весь экран при вводе. Новый helper `showBigNumber(num, color)` — fullscreen overlay с backdrop-blur, pop-in/out animation, generic для любых будущих гигантских чисел. **Код `10+10+20+20+7`** (v5.13.1): математический пазл, выдаёт надпись «six seven» (одинаково ru+en, не локализуется). Всего кодов **19**. |
| v5.12.x | **Новая вкладка «Время»** (между Calc и Settings): 3 live-часы (Москва/Ереван/Нью-Йорк через `Intl.DateTimeFormat` с timeZone), секундомер (millisec через performance.now + rAF, lap-list), таймер (мин:сек, pause/resume, WebAudio beep на финиш). **+ 4-й режим калькулятора «Дроби»** — a/b op c/d с автосокращением через gcd, рендерится stacked mini-fraction. Все строки локализованы. |
| v5.11.x | **Mega-pack**: +10 секретных кодов (`HEART`, `SNOW`, `PIZZA`, `MEOW`, `UNICORN`, `SHAKE`, `MOON`, `SUN`, `NOIR`, `SECRET`) → итого **17**. Новые helper'ы: `shakePage()` (earthquake-shake 1.5 сек) и `noirPage()` (grayscale filter 3 сек). `SECRET` — мета-код, считает остальные коды динамически. `MOON`/`SUN` свапают тему + дождь. Все 10 кодов локализованы (ru+en). |
| v5.10.x | **Chip-run pack**: +5 секретных кодов (`ILOVECHIPS`, `MATRIX`, `42`, `PARTY`, `FLIP`) → итого 7. Новые helper-функции: `matrixRain()` (canvas-оверлей с зелёными katakana 5 сек) и `flipPage()` (поворот html на 180° на 3 сек). Все коды локализованы (ru+en). Console banner обновлён. |
| v5.9.x | **Темы swap**: rainbow получил psychedelic палитру «Виталий лучший» (hot pink → orange → yellow → violet → blue → magenta, 10s flowing); school возвращён в navy/gold реального сайта школы (#0f2c4a → #061528 base + gold accent #ffd54a) и снова **статичен** (без анимации). Conic-swatch на rainbow-кнопке теперь тоже psychedelic. Keyframe `schoolFlow` удалён. |
| v5.8.x | Rainbow redesign в чистый ROYGBIV (отменён в v5.9.0 при swap'е). |
| v5.7.x | School psychedelic experiment (v5.7.1 из navy/gold; v5.7.2 удалили логотип; **в v5.9.0 откатили палитру обратно к navy/gold**). |
| v5.6.x | Rainbow theme (анимированная, 14s flowing gradient, 8 hue-stops); first cut School темы (navy/gold) |
| v5.5.x | Secret Codes tab + `ILOVELIBSCHOOL` → «Виталий лучший»; код `LIBERATEDSCHOOL` разблокирует school-тему; universal emoji rain; скрытые подсказки кода |
| v5.4.x | Скрытые приколы (console banner, Konami code, banana rain, type "banana"); 404 → auto-teleport на главную |
| v5.3.x | Line operations (sort/dedupe/remove empty) |
| v5.2.x | Combining-стили (Underline/Strike) для Telegram Desktop Windows; light theme active contrast fix |
| v5.1.x | Калькулятор: Базовый/Геометрия/Единицы; флаги на кнопках шрифтов; drag-fix |
| v5.0.0 | Rebrand "Banana Font" → "Banana" |
| v4.3.0 | Home tab с text tools |
| v4.2.x | Settings tab (size slider, reset, about); Vercel Speed Insights |
| v4.1.x | Mobile UX (`viewport-fit=cover`, safe-area, 100dvh, PWA manifest, theme-color динамически) |
| v4.0.0 | Production-ready milestone |
| v3.x   | Liquid Glass design, 3 темы (CSS variables), плавные переходы тем/языков, кастомная 404 |
| v3.0.0 | **Миграция Next.js → pure static** (главное архитектурное изменение) |
| v2.x   | Next.js + middleware (deprecated, падал на Vercel) |
| v1.x   | Изначальная простая версия |

## Вкладка «Секретные коды» (v5.5.x)

Пятая видимая вкладка, **ВСЕГДА последняя** в навигации и в DOM
(после Settings). Есть HTML-комментарии в обоих местах напоминающие
не переставлять. Имеет:
- `<input id="secret-input">` (uppercase via CSS `text-transform`)
- Кнопку «Проверить»
- Feedback line (error red)
- Result block с большой надписью при правильном коде, **с крестиком
  × для закрытия** (button.secret-close в углу карточки)

Placeholder в input **намеренно generic** ("Введите код..." / "Enter
code...") — НЕ ставить туда пример кода, это спойлер!

JS: словарь `SECRET_CODES` (ключи в UPPERCASE, значения — текст
сообщения). При совпадении: показывает `.secret-message` карточку с
gradient background и `secretReveal` keyframe-анимацией + **heart rain
24 штуки** (❤️ через `emojiRain("❤️", 24)`) + **rainbow sweep**
(класс `html.rainbow-active` на 3 сек, hue-rotate 0°→360°).

Текущие коды:
- `ILOVELIBSCHOOL` → "Виталий лучший"

Чтобы добавить новый код — просто `SECRET_CODES["NEW_CODE"] = "Text";`
ничего больше не нужно.

Сравнение **case-insensitive** (input приводится к UPPERCASE через
`.toUpperCase()`). Пробелы по краям trim'аются.

Enter в input — то же что клик «Проверить». При начале ввода после
ошибки feedback автоматически очищается.

## 2 новые темы: Rainbow + School (v5.6.0 / v5.7.0)

**5 тем** в `VALID_THEMES`: light / dark / night / **rainbow** / **school**.

В UI **4 видимые кнопки**: light / dark / night / **rainbow**.
**School намеренно не имеет кнопки** — это **секретная тема**,
разблокируется только вводом кода `LIBERATEDSCHOOL` в вкладке
«Секретные коды». После активации сохраняется в localStorage; работает
как полноценная тема. См. ниже раздел про SECRET_CODES.

- **Rainbow** (v5.9.0 — swap со школой) — **psychedelic** анимированная
  тема, **тот же визуальный язык что и reveal-эффект «Виталий лучший»**.
  Фон — flowing linear-gradient 135deg через hot pink → orange → yellow →
  violet → blue → magenta (7 stops с возвратом на #ff006e). Animation
  `rainbowFlow` 10s linear infinite по `background-position`, `background-size: 300% 300%`.
  Accent — pink `#ff006e`. Text белый. Glass яркий (rgba(255,255,255,0.18)).
  Conic-swatch на кнопке тоже psychedelic (те же 7 stops, крутится 6s linear),
  чтобы кнопка визуально соответствовала результату клика.
  Уважает `prefers-reduced-motion: reduce` — обе анимации выключаются.
- **School** (v5.9.0 — restored) — **navy/gold** статичная тема в стиле
  реального сайта школы. Фон — глубокий navy gradient `#0f2c4a → #061528`
  (linear 160deg) + два мягких золотистых radial highlights. Accent — warm
  gold `#ffd54a`. Text — кремовый `#f4ecd0`. Glass — золотистые полупрозрачные
  стенки (`rgba(255, 220, 140, 0.08-0.14)`). **Анимации нет** — sober,
  schoolish. Keyframe `schoolFlow` удалён. НЕТ кнопки в навигации —
  только через секретный код `LIBERATEDSCHOOL`.

**Логотип школы был удалён в v5.7.2** по просьбе пользователя
(«лого убери так уж и быть») после нескольких неудачных попыток
воспроизвести исходное изображение SVG-ом. **Не добавляй сюда
никакого логотипа** обратно, пока пользователь явно не попросит.
Психоделический анимированный фон + pink accent — единственный
визуальный индикатор того, что school-тема активна.

При добавлении новой темы — обнови:
1. `VALID_THEMES` массив в JS
2. `VALID` в anti-FOUC скриптах **обоих** HTML-файлов
3. `THEME_COLORS` map (для динамического meta theme-color)
4. `THEME_LABEL_KEYS` map (для labels в applyLang)
5. локализацию в `TEXT.ru` и `TEXT.en`
6. CSS variables block (`[data-theme="..."] {...}`)
7. (если есть UI button) swatch CSS

## Секретные коды (v5.7.0 redesign, расширен в v5.10.0)

`SECRET_CODES` — словарь **объектов** `{ message, action? }`:

- `message` — строка ИЛИ функция возвращающая строку (используется когда
  текст зависит от языка / runtime state).
- `action` — необязательная функция вызываемая ПОСЛЕ показа карточки.
  Используется для side-effects (смена темы, emoji rain, и т.д.).

Добавить новый код = одна запись. Если message зависит от языка —
делай function. Если action имеет смысл — добавляй action.

### Текущие коды (19)

| Код | Сообщение | Side-effect | Подсказан? |
|---|---|---|---|
| `ILOVELIBSCHOOL` | «Виталий лучший» | — | да (3 подсказки) |
| `LIBERATEDSCHOOL` | Тема школы активирована 🏫 | `setTheme("school")` — разблокирует navy/gold школьную тему | нет |
| `ILOVECHIPS` | С возвращением из магазина! 🍟 | `emojiRain("🍟", 60)` | нет |
| `MATRIX` | Wake up, Neo… 💊 | `matrixRain()` — canvas-оверлей с падающими зелёными katakana ~5 сек | нет |
| `42` | Ответ на главный вопрос жизни 🌌 | `triggerRainbow()` — hue-rotate sweep 3 сек | нет |
| `PARTY` | Время веселья! 🎉🎊 | 6 emoji rains (`🎉🎊🥳🎈🎂✨`) + rainbow sweep | нет |
| `FLIP` | Вверх тормашками 🙃 | `flipPage()` — поворот html на 180° на 3 сек | нет |
| `HEART` | Любви тебе! ❤️ | `emojiRain("❤️", 50)` | нет |
| `SNOW` | Зима близко! ❄️ | `emojiRain("❄️", 50)` | нет |
| `PIZZA` | Время пиццы! 🍕 | `emojiRain("🍕", 40)` | нет |
| `MEOW` | Мяу! 🐈 | `emojiRain("🐈", 40)` | нет |
| `UNICORN` | Магия и единороги! 🦄✨ | `emojiRain("🦄", 30)` + `triggerRainbow()` | нет |
| `SHAKE` | Землетрясение! 🌍 | `shakePage()` — earthquake-shake 1.5 сек (no-op при reduced-motion) | нет |
| `MOON` | Доброй ночи 🌙 | `setTheme("night")` + `emojiRain("🌙", 30)` | нет |
| `SUN` | Доброе утро ☀️ | `setTheme("light")` + `emojiRain("☀️", 30)` | нет |
| `NOIR` | Чёрно-белое кино 🎬 | `noirPage()` — `filter: grayscale(1) contrast(1.08)` на 3 сек | нет |
| `SECRET` | «Ты нашёл мета-код! Всего кодов: N 🔍» | `emojiRain("🔍", 20)`. **N считается динамически** через `Object.keys(SECRET_CODES).length` — всегда актуальное число | нет |
| `67` | 67 💙 | `showBigNumber(67, "#1e88ff")` — гигантская синяя 67 во весь экран с pop-анимацией, ~3 сек | нет |
| `10+10+20+20+7` | «six seven» (одинаково в обоих языках, **намеренно не локализуется** — раскрытие шутки про 67) | — | нет |

Только `ILOVELIBSCHOOL` имеет 3 подсказки (HTML comment, hidden-hint span,
console). Остальные 16 — **не подсказаны** нигде в UI; находятся через
эксперимент / DevTools console / угадывание ключевых слов
(banana-helper vibe → еда, погода, поп-культура, мета).

### Helper functions

В `js/app.js` живут helper'ы рядом с `emojiRain`:

| v | Функция | Что делает |
|---|---|---|
| 5.4 | `emojiRain(emoji, count)` | Generic дождь из любого emoji, 25 по умолчанию, 3-сек падение |
| 5.4 | `bananaRain(count)` | Алиас `emojiRain("🍌", count)` для backward-compat |
| 5.5 | `triggerRainbow()` | Добавляет `html.rainbow-active` → hue-rotate sweep 3 сек |
| 5.10 | `matrixRain()` | Fullscreen canvas с зелёными katakana ~5 сек, fadeout + auto-cleanup |
| 5.10 | `flipPage()` | `html.page-flipped` → rotate 180° 0.6s, через 3 сек назад |
| 5.11 | `shakePage()` | `html.page-shaking` → earthquake-shake keyframe 1.5 сек |
| 5.11 | `noirPage()` | `html.page-noir` → `filter: grayscale(1) contrast(1.08)` 3 сек |
| 5.13 | `showBigNumber(num, color)` | Fullscreen overlay с гигантским числом (220–640px clamp), pop-in/out animation, backdrop-blur. Generic — любое число, любой CSS-цвет. ~3 сек |

Все respect `prefers-reduced-motion` через CSS media query (либо JS
early-return для `shakePage` и `matrixRain`).

Все выставлены на `window.*` — можно дёргать прямо из DevTools console.

## Скрытые подсказки кода (v5.5.2)

В сайте намеренно спрятаны **2 подсказки** к коду `ILOVELIBSCHOOL`,
для разных типов «искателей секретов»:

1. **HTML-комментарий в `<head>`** (`index.html` сразу после `<meta charset>`).
   Содержит явный rebus-намёк "Я. Люблю. Свою. Школу." / "I. Love. My. School.".
   Findable через View Source (Ctrl+U).

2. **Off-screen hidden span** `<span class="hidden-hint">` в `<body>`
   (перед секцией tab-secret). Внутри — буквально `[ secret code hint:
   ILOVELIBSCHOOL ]`. CSS-класс `.hidden-hint` использует
   `position: absolute; left: -10000px; opacity: 0` — visually
   невидимо, **но** остаётся в text-flow и `user-select: text`, поэтому
   при Ctrl+A (select all) → Ctrl+C (copy) → paste в редактор пользователь
   увидит лишний скрытый текст с подсказкой.
   `aria-hidden="true"` чтобы screen readers не читали вслух.

3. **Console banner** в `js/app.js` упоминает «Secret-codes tab: hidden
   code hides in plain sight 🔎» с подсказкой про View Source / Select-All.

Если будешь добавлять новые коды — добавь сюда соответствующий
способ подсказки. **НЕ** удаляй существующие подсказки — это часть
дизайна "скрытое в открытом доступе".

## Вкладка «Время» (v5.12.0)

Новая вкладка, сидит между Calc и Settings. Содержит 3 секции:

**1. Часы по городам** — три live-часов:
- Москва (`Europe/Moscow`)
- Ереван (`Asia/Yerevan`)
- Нью-Йорк (`America/New_York`)

Реализованы через `Intl.DateTimeFormat("en-GB", { hour, minute, second, hour12: false, timeZone })` — один общий `setInterval` на 1 секунду тикает все три (cheap). Date-строка отдельным `DateTimeFormat` с `weekday: "short", day, month`.

**2. Секундомер** — millisecond-precision через `performance.now()`:
- State machine: `idle | running | paused`
- Display обновляется через `requestAnimationFrame` (плавно, без visual jitter)
- При паузе аккумулируется elapsed time, при resume — новый `startedAt = performance.now()` + accumulated
- Lap-кнопка добавляет `<li>` с текущим временем в `<ol id="stopwatch-laps">` (newest сверху)
- Lap-кнопка disabled когда не running

**3. Таймер** — countdown:
- Input мин:сек (валидация 0–59 для секунд)
- State machine: `idle | running | paused | done`
- Использует `setInterval(250ms)` — display обновляется ~4 раза в сек (достаточно)
- На финиш: visual flash через CSS `.timer-done` (5 итераций `timerBlink` keyframe), + 3 коротких beep через WebAudio API (`OscillatorNode`, синусоида 880 Hz, gain envelope) — никаких внешних assets
- Pause/resume через сохранение `remainingMs`, при resume пересчитывается `endAt = performance.now() + remaining`
- Feedback-строка под кнопками: "Идёт обратный отсчёт…" / "На паузе." / "Время вышло!" / "Введите корректное время…"

**Тонкости:**
- Все labels локализованы (ru+en); `refreshStopwatchButtonLabels` / `refreshTimerButtonLabels` вызываются и из `applyLang` (при смене языка), и при смене state (Start↔Pause)
- Audio: `audioCtx` создаётся лениво на первый финиш (нельзя создавать раньше user interaction по правилам browser — а Start-клик уже это interaction)
- `.timer-done` CSS keyframe уважает `prefers-reduced-motion` (выключен)

## Будильник (v5.14.0)

Четвёртая секция вкладки «Время» (после таймера). **Двухшаговый UX —
сначала TZ, потом время**: Step 2 (time-inputs + кнопки) визуально и
функционально заблокирован (`.alarm-locked` class, `disabled` атрибуты)
пока пользователь не выберет часовой пояс.

**Список часовых поясов** — 18 пресетов в `ALARM_TIMEZONES`:
- Спец. `__auto__` → разрешается в `Intl.DateTimeFormat().resolvedOptions().timeZone`
- UTC
- 5 европейских (Москва, Лондон, Берлин, Париж, Киев)
- 7 азиатских (Ереван, Тбилиси, Дубай, Дели, Шанхай, Токио)
- 4 американских (Сан-Паулу, Чикаго, Нью-Йорк, Лос-Анджелес)
- Сидней

Каждая запись — `{ id: "Europe/Moscow", ru: "Москва", en: "Moscow" }`.
Селект перестраивается при смене языка через `rebuildAlarmTzSelect()`.

**Next-occurrence алгоритм** (`computeNextAlarm(tzId, hh, mm)`):
1. Через `Intl.DateTimeFormat(...).formatToParts(new Date())` достаём
   текущие HH:MM:SS в **целевой** TZ
2. `nowSec = hh*3600 + mm*60 + ss`, `targetSec = hh*3600 + mm*60`
3. Если `targetSec > nowSec` → today, иначе → tomorrow (delta + 24h)
4. Возвращаем `Date.now() + deltaSec * 1000` — это absolute timestamp,
   с которым потом сравниваем `Date.now()` каждую секунду

DST edge case: если HH:MM попадает в час, который DST «пропускает» —
будильник просто не выстрелит сегодня, выстрелит завтра. Приемлемо.

**Persistence**: `localStorage["bananafont:alarm"]` = `{ tzId, hh, mm }`.
Target timestamp **НЕ** сохраняется — пересчитывается при загрузке через
`loadAlarm()` → всегда указывает на ближайшее следующее срабатывание,
даже если пользователь закрывал вкладку на часы/дни.

**Fire**: `fireAlarm()` устанавливает `alarmState.firing = true`, статус
получает класс `.alarm-firing` (красный, пульсирующий — keyframe
`alarmFlash` с box-shadow), плюс **3 волны beep** через тот же
WebAudio path что таймер (`beepDone()` + setTimeout 1400ms + 2800ms).
Кнопка Cancel меняет текст на Dismiss (`refreshAlarmButtonLabels`).

**Tick**: отдельный `setInterval(fn, 1000)` — обновляет live time
выбранной TZ рядом с дропдауном (`alarmTzTimeEl`) и проверяет
`Date.now() >= alarmState.target`. Кэширует `Intl.DateTimeFormat`
инстанс по id, чтобы не создавать новый каждый тик.

## Дроби в калькуляторе (v5.12.0)

4-й режим калькулятора (`data-mode="fraction"`, panel `calc-panel-fraction`) — простые дроби с операциями `+ − × ÷`:
- Два stacked-input блока (numerator/denominator) с CSS-нарисованной чертой между ними (.frac-bar)
- 4 кнопки операций (`+ − × ÷`), active-стейт визуально подсвечен
- Результат сокращается через Евклидов `fracGcd(a, b)` → `fracReduce(num, den)`
- Знак нормализуется на числитель (отрицательный знаменатель → инвертируется)
- Если знаменатель сокращается до 1 — показывается целое число
- Иначе рендерится stacked mini-fraction (`<span class="frac-mini">…/…</span>`)
- Division by zero / invalid input → результат "—"
- Recalc на каждый `input` event на любом из 4 полей (live).

## Universal emoji rain (v5.5.1)

Функция `bananaRain` рефакторена в `emojiRain(emoji, count)` —
generic. Старая `bananaRain(count)` оставлена как alias для backward
compat (console и easter eggs всё ещё работают). Оба экспортированы
в `window`. Используй `emojiRain("❤️", 30)` чтобы устроить heart rain
из console.

## 404 → auto-teleport home (v5.4.1)

`404.html` теперь **мгновенно** редиректит на `/` через:
1. `<meta http-equiv="refresh" content="0; url=/" />` — fallback без JS
2. `<script>window.location.replace("/")</script>` — instant если JS есть
   (replace, не href — чтобы битый URL не попал в browser history)

Стилизованная 404-карточка ниже в `<body>` — last-resort fallback если
оба механизма заблокированы. На практике пользователь её никогда не
увидит — `window.location.replace` срабатывает до first paint.

SEO: Vercel всё равно отдаёт HTTP **404 status code** (Google знает,
что страница не существует). Просто **внешний вид** для пользователя —
не "ошибка", а "вернули на главную". Это compromise — не идеальный
SEO, но лучше UX.

## Скрытые приколы (Easter eggs) — добавлены в v5.4.0

В коде есть 4 скрытых features. **НЕ упоминать в UI** — пусть пользователь
сам находит. Расположены в конце IIFE в `js/app.js`.

1. **Console banner** — при загрузке console.log с большим "🍌 Banana",
   версией и подсказками для разработчиков. Также экспортирует
   `window.bananaRain` чтобы dev мог вызвать вручную.
2. **5 кликов по footer** (`#footer`) → `bananaRain(30)`. Счётчик
   сбрасывается через 2 секунды бездействия (через `clearTimeout`).
3. **Konami code** (↑↑↓↓←→←→BA) → `hue-rotate` анимация на html +
   `bananaRain(60)`. Реализован через `document.addEventListener("keydown")`.
   Не конфликтует с calculator keyboard handler — там `e.key` другие.
4. **Type "banana"** (case-insensitive, через `/banana/i.test`) в
   `homeInputEl` → большой 🍌 эмодзи на экран с rotate + scale. Защита
   через `bananaShown` flag на 6 секунд от повторных trigger'ов.

`bananaRain(n)` функция: создаёт n штук 🍌 элементов с
`position: fixed`, случайным left, размером, rotation. CSS transition
3s — падают вниз с opacity → 0. Уборка через setTimeout 4s.

Если будешь модифицировать — **сохрани приколы**. Они часть характера
сайта.

## Кто это сделал

Все правки этого репозитория делались итеративно через Claude (Anthropic)
по запросам пользователя 1565gfd. Если ты следующий AI — постарайся
сохранить дух: чистая статика, минимум зависимостей, читабельный код,
аккуратные комментарии в коде где есть нетривиальные решения (theme
transition, mobile no-blur fallback, combining-стили и т.д.).
