# Frontend Implementation Document - Setup Vanilla HTML/JS/TS + Tailwind CSS v4

**Task ID**: `TASK-001`  
**Author**: Fiqry (`fiqry_frontend`) - Frontend Web Developer  
**Team**: Tim FE (Faisal, Angel, Fiqry, Sandra)  
**Date**: 2026-09-18  
**Status**: Implementation Complete & Verified  

---

## 1. Overview
Tim FE telah berhasil mengimplementasikan setup repositori awal untuk web Vanilla tanpa framework, menggabungkan TypeScript murni yang terstruktur ketat (*strict mode*) dan engine terbaru Tailwind CSS v4 yang dikompilasi melalui `@tailwindcss/cli`.

---

## 2. Directory & File Inventory

```text
init-vanilla-web/
├── .gitignore                   # Updated with modern node_modules and web build ignores
├── package.json                 # Core scripts (build:css, build:ts, build, watch:css, watch:ts, serve)
├── tsconfig.json                # Strict TypeScript configuration (ES2022, strict mode, sourcemaps)
├── index.html                   # Semantic HTML5 entrypoint with Google Fonts Outfit & Inter
├── scripts/
│   └── serve.js                 # Zero-dependency native Node.js static preview server (port 3000)
├── src/
│   ├── styles/
│   │   └── main.css             # Tailwind CSS v4 entrypoint with @import "tailwindcss" & @theme
│   └── ts/
│       ├── types/
│       │   └── index.ts         # Strictly typed interfaces (ThemeMode, CounterState, etc.)
│       ├── components/
│       │   ├── counter.ts       # Reactive state counter widget with real-time DOM updates
│       │   ├── theme.ts         # Dark/Light theme toggle manager with localStorage persistence
│       │   └── clipboard.ts     # One-click code snippet copy utility with visual feedback
│       └── main.ts              # App bootstrapping and component initialization
└── dist/
    ├── output.css               # Compiled minified Tailwind CSS bundle (43.6 KB)
    └── js/                      # Compiled native ES module JavaScript with sourcemaps
        ├── components/
        │   ├── counter.js
        │   ├── theme.js
        │   └── clipboard.js
        ├── types/
        └── main.js
```

---

## 3. Package & Script Configuration

### `package.json`
- **Dependencies**:
  - `@tailwindcss/cli`: `^4.0.0` (Tailwind CSS v4 Oxide CLI compiler)
  - `tailwindcss`: `^4.0.0`
  - `typescript`: `^5.7.0`
- **NPM Scripts**:
  - `npm run build:css`: Mengompilasi `src/styles/main.css` ke `dist/output.css --minify`.
  - `npm run build:ts`: Mengompilasi TypeScript via `tsc`.
  - `npm run build`: Menjalankan kompilasi CSS dan TS secara sekuensial.
  - `npm run watch:css`: Menjalankan Tailwind CLI dalam mode `--watch`.
  - `npm run watch:ts`: Menjalankan TypeScript compiler dalam mode `--watch`.
  - `npm run serve`: Menjalankan server preview static lokal di `http://localhost:3000`.

### `tsconfig.json`
- Target: `ES2022`
- Module: `ES2022`
- Module Resolution: `bundler`
- Strict Flags Enabled:
  - `strict: true`
  - `noImplicitAny: true`
  - `strictNullChecks: true`
  - `strictFunctionTypes: true`
  - `noUnusedLocals: true`
  - `noUnusedParameters: true`
  - `sourceMap: true`

---

## 4. Architectural Highlights
1. **Zero Framework Overhead**: Tidak menggunakan React, Vue, Svelte, atau bundler rumit. Seluruh logika interaktif dikendalikan oleh modul TypeScript native yang dikompilasi menjadi JavaScript ES2022 standar.
2. **Tailwind CSS v4 CSS-First**: Tidak memerlukan `tailwind.config.js` warisan v3. Semua konfigurasi font dan token didefinisikan secara deklaratif di `src/styles/main.css` menggunakan blok `@theme`.
3. **Reactive State in Vanilla TS**: State komponen (`CounterState`) dikelola dengan TypeScript interface, menjamin type safety penuh tanpa adanya runtime virtual DOM.
4. **Zero-Suppression Compliance**: Tidak ada satupun penggunaan `// @ts-ignore`, `// @ts-nocheck`, atau eslint suppression dalam seluruh basis kode.

---

## 5. Build Verification Results
- `npm run build:css`: Berhasil dikompilasi dalam 207ms menghasilkan `dist/output.css` (43.6 KB).
- `npm run build:ts`: Berhasil dikompilasi dengan exit code 0 tanpa error tipe apapun.
- `node scripts/serve.js`: Berhasil melayani `http://localhost:3000` dengan response status code 200 untuk HTML, CSS, dan JS.
