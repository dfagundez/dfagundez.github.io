# dfagundez.dev

Personal portfolio and consulting site. Static, no build step, no dependencies —
plain HTML, CSS and vanilla JavaScript served by GitHub Pages.

**Live:** https://dfagundez.dev

## Running locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000. Hard-reload (`Ctrl+Shift+R`) after editing CSS or JS:
the dev server sends no `Cache-Control`, so browsers hold on to stale copies.

## Structure

```
index.html            The whole site — every section lives here
design-tokens.html    Design system reference, reads the tokens from style.css at runtime
css/style.css         Design tokens plus all styles
js/scripts.js         Language toggle, theme, reveals, cursor effects, typewriter
favicon.svg           Browser tab icon
apple-touch-icon.png  iOS home-screen icon (square: iOS applies its own rounding)
og-image.png          1200x630 social preview card
CNAME                 Custom domain for GitHub Pages
```

## Design system

Colors are OKLCH tokens defined on `:root` in `css/style.css`. Never hardcode a color —
use `var(--token)`. Open `design-tokens.html` to see every token with its live value,
its hex, and what it is for.

Light mode is driven entirely by CSS: the palette is redefined under
`prefers-color-scheme: light` and under `[data-theme="light"]`. JavaScript only applies
an explicitly stored override, so the system preference works on its own. There is no
theme toggle in the UI yet.

## Two things worth knowing before editing

**Reveal animations are transitions, not animations.** Elements start at
`opacity: 0` under `.js .reveal`; an IntersectionObserver adds `.reveal-in` to transition
them in, and the per-element stagger comes from an inline `transition-delay` copied from
`--delay`. This matters: a CSS *animation* on `transform` would win over the cascade and
silently break every `:hover` lift on cards.

**Content is bilingual through data attributes.** Any element carrying `data-es` and
`data-en` gets its text swapped by `setLanguage()`, which assigns `textContent` — so such
an element must never contain child markup, or the children are destroyed on load. Wrap
the translatable text in its own `<span>` instead.
