# Vanilla HTML, JS, TS + Tailwind CSS v4 Starter

A blazing fast, frameworkless **Vanilla HTML, JS, and TypeScript** starter repository powered by **Tailwind CSS v4** and strict TypeScript compiler. Zero framework bloatware, zero runtime overhead, pure web standards.

---

## ⚡ Tech Stack & Highlights

- **Pure Vanilla**: HTML5, native ES2022 JavaScript, strict TypeScript 5.
- **Tailwind CSS v4**: High-performance CSS-first utility engine via `@tailwindcss/cli` (no legacy `tailwind.config.js` needed).
- **Zero Framework Bloatware**: 0 KB virtual DOM runtime overhead, instant page loads.
- **Strict TypeScript**: Configured with `strict: true` and zero-suppression policy.
- **Local Static Preview**: Zero-dependency native Node.js static server (`scripts/serve.js`).
- **Modern UI Showcase**: Dark/Light mode toggle, Google Fonts ('Outfit' & 'Inter'), micro-animations, and interactive reactive counter widget.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Build Assets
Compile both Tailwind CSS v4 and TypeScript:
```bash
npm run build
```
*(Or run separately: `npm run build:css` and `npm run build:ts`)*

### 3. Start Local Server
Run the zero-dependency local static preview server:
```bash
npm run serve
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

### 4. Development (Watch Mode)
Watch for file changes during active development:
```bash
# Terminal 1 - Watch Tailwind CSS v4
npm run watch:css

# Terminal 2 - Watch TypeScript
npm run watch:ts
```

---

## 📁 Project Structure

```text
init-vanilla-web/
├── index.html                   # Root semantic HTML entrypoint
├── package.json                 # Scripts: build, watch, serve
├── tsconfig.json                # Strict TypeScript configuration
├── scripts/
│   └── serve.js                 # Zero-dependency native Node.js static preview server
├── src/
│   ├── styles/
│   │   └── main.css             # Tailwind CSS v4 CSS-first entrypoint (@theme tokens)
│   └── ts/
│       ├── types/
│       │   └── index.ts         # TypeScript interfaces & types
│       ├── components/
│       │   ├── counter.ts       # Reactive state counter widget
│       │   ├── theme.ts         # Dark/Light theme manager (localStorage synced)
│       │   └── clipboard.ts     # One-click code snippet copy utility
│       └── main.ts              # Application bootstrapping
├── dist/
│   ├── output.css               # Compiled minified Tailwind CSS bundle
│   └── js/                      # Compiled native ES module JavaScript with sourcemaps
└── workflow/                    # SDLC pipeline documentation & QA proofs (TASK-001)
```

---

## 🤝 Collaborators & Contribution

Very open to anyone, I'll write your name under this, please contribute by sending an email:

- **Email**: faisalamircs@gmail.com
- **Subject**: `Github _ [Github-Username-Account] _ [Language] _ [Repository-Name]`
- **Example**: `Github_amirisback_kotlin_admob-helper-implementation`

### Contributors
- Muhammad Faisal Amir
- Waiting List

---

## 🌟 Attention
- Please enjoy and don't forget to fork and give a star! ⭐
- Don't forget to follow the GitHub account!
