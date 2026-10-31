# Assignment 6 — jQuery

**Student:** Bakdaulet Begaliev  
**Group:** SE-2526  
**Repository:** https://github.com/bakdauletbegaliev/Jquery

## About

A small multi-page website for Assignment #6: jQuery Selectors, Effects, and Animations. It uses simple HTML, CSS, JavaScript, and jQuery 3.7.1 loaded from the official CDN. Every task has its own interactive example.

## Pages and tasks

| Page | Tasks | Features |
| --- | --- | --- |
| `index.html` | 0–1 | CDN setup, `$(document).ready()`, ID/class/tag selectors, `.text()`, `.html()`, `.css()` |
| `effects.html` | 2–4 | `.hide()`, `.show()`, `.toggle()`, fade methods, slide methods |
| `dom.html` | 5–7 | `.append()`, `.prepend()`, `.remove()`, `.attr()`, `.val()`, live input |
| `animations.html` | 8–10 | Basic, sequential, and combined `.animate()` methods |
| `project.html` | 11 | Accordion Menu mini project with `.slideToggle()` |

## How to run

1. Download or clone this repository.
2. Open `index.html` in a browser (or use the VS Code Live Server extension).
3. Use the navigation bar to visit each task.
4. Open browser DevTools → Console on the Basics page to see `jQuery is ready!`.

An internet connection is required to load jQuery from the CDN. This project does not use npm or a build step.

## GitHub Pages deployment

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the **main** branch and the **/(root)** folder, then save.
5. Open the published website when GitHub provides its URL.

Expected site address after deployment: https://bakdauletbegaliev.github.io/Jquery/

## Project structure

```text
index.html
├── effects.html
├── dom.html
├── animations.html
├── project.html
├── styles.css
├── js/
│   ├── basics.js
│   ├── effects.js
│   ├── dom.js
│   ├── animations.js
│   └── project.js
└── assets/
    ├── sunrise.svg
    └── ocean.svg
```

## Notes

- Each HTML page has a working navigation bar.
- jQuery is loaded before the page's JavaScript file.
- Each task was written using basic, easy-to-explain jQuery methods.
- No frameworks, databases, or extra tools are required.
