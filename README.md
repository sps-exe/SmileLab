<div align="center">

# 🦷 SmileLab — Modern Dental Care

A responsive marketing website for a modern dental clinic — built from scratch with
plain **HTML, CSS, and vanilla JavaScript**. No frameworks, no build step.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-smilelab--eight.vercel.app-000?style=for-the-badge&logo=vercel)](https://smilelab-eight.vercel.app)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000?style=flat&logo=vercel)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

**[🌐 View it live →](https://smilelab-eight.vercel.app)**

</div>

---

## ✨ Features

- **🌗 Light & dark mode** — toggle in the navbar, defaults to light, remembers your choice via `localStorage`
- **📱 Fully responsive** — adapts cleanly from widescreen down to mobile
- **🎬 Motion** — smooth scrolling and scroll-reveal animations
- **💬 Chatbot widget** — a scripted assistant with quick-reply actions
- **🧩 Component-driven** — every UI block has its own standalone demo page
- **⚡ Zero dependencies** — opens straight in a browser; nothing to install

## 📄 Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero, about, services, process, gallery, reviews, FAQ, booking CTA |
| About | `about.html` | Clinic story, team, and credentials |
| Services | `services.html` | Treatment catalogue and pricing |

## 🗂️ Project structure

```
SmileLab/
├── index.html / about.html / services.html   # the actual pages
├── *.html                                     # standalone component demos
├── css/
│   ├── base/        # reset, base styles, theme (dark mode)
│   ├── layout/      # page shell, footer
│   ├── sections/    # hero, about, services, gallery, reviews, faq, cta, process
│   ├── components/  # chatbot, stat card, avatar stack, …
│   └── utilities/   # animations
├── js/
│   ├── core/        # smooth scroll, theme toggle
│   ├── utils/       # scroll reveal
│   └── components/  # chatbot
└── assets/images/   # svg art
```

## 🚀 Running locally

It's a static site — open `index.html` directly, or serve the folder:

```bash
# clone
git clone https://github.com/sps-exe/SmileLab.git
cd SmileLab

# serve (any static server works)
python3 -m http.server 8888
# → http://localhost:8888
```

## 🎨 Theming

Colors are driven by CSS custom properties (`--blue`, `--surface`, `--text`, `--lime`, …).
Dark mode is a set of overrides under `:root[data-theme="dark"]` in `css/base/theme.css`;
the navbar toggle flips that attribute on `<html>` and persists the choice. The page
defaults to light on first load.

## 📦 Deployment

Continuously deployed to **[Vercel](https://vercel.com)** — pushes to `main` ship automatically.

## 📜 License

Released under the [MIT License](LICENSE).

---

<div align="center">
Built with care by <a href="https://github.com/sps-exe">@sps-exe</a>
</div>
