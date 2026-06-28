# SmileLab — Modern Dental Care

A responsive marketing site for a fictional modern dental clinic. Built with plain
HTML, CSS, and vanilla JavaScript — no build step, no framework.

## Features

- **Three pages** — Home (`index.html`), About (`about.html`), Services (`services.html`)
- **Light & dark mode** — toggle in the navbar, remembers your choice, defaults to light
- **Responsive** — adapts from desktop down to mobile
- **Interactive bits** — smooth scrolling, scroll-reveal animations, and a scripted chatbot widget
- **Component library** — each UI block has a standalone demo page (`hero.html`, `faq.html`, `gallery.html`, …)

## Project structure

```
SmileLab/
├── index.html / about.html / services.html   # the actual pages
├── *.html                                     # standalone component demos
├── css/
│   ├── base/        # reset, base styles, theme (dark mode)
│   ├── layout/      # page shell, footer
│   ├── sections/    # hero, about, services, gallery, reviews, faq, cta, process
│   ├── components/  # chatbot, stat card, avatar stack, etc.
│   └── utilities/   # animations
├── js/
│   ├── core/        # smooth scroll, theme toggle
│   ├── utils/       # scroll reveal
│   └── components/  # chatbot
└── assets/images/   # svg art
```

## Running locally

It's static — open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 8888
# then visit http://localhost:8888
```

## Theming

Colors are driven by CSS custom properties (`--blue`, `--surface`, `--text`, `--lime`, …).
Dark mode is a set of overrides under `:root[data-theme="dark"]` in `css/base/theme.css`;
the toggle simply flips that attribute on `<html>` and saves the choice to `localStorage`.
