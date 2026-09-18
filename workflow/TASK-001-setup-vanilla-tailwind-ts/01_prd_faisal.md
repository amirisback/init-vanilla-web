# Product Requirements Document (PRD) - Setup Initial Repo Vanilla HTML/JS/TS + Tailwind CSS v4

**Task ID**: `TASK-001`  
**Author**: Faisal (`faisal_pm`) - Product Manager & Business Analyst  
**Team**: Tim FE (Faisal, Angel, Fiqry, Sandra)  
**Date**: 2026-09-18  
**Status**: Approved & Aligned  

---

## 1. Executive Summary & Business Objective
Project ini bertujuan untuk menyediakan template initial repository yang bersih, modern, dan berkinerja tinggi untuk website **Vanilla HTML, JS, dan TypeScript** yang menggunakan **Tailwind CSS v4** tanpa framework frontend (seperti React, Vue, Angular, Svelte).

Repository ini harus dirancang siap pakai (*ready-to-code*), modular, memiliki build tooling berbasis CLI murni (`@tailwindcss/cli` dan `tsc`), serta menampilkan antarmuka showcase modern berestetika tinggi yang mendemonstrasikan integrasi interaktif Vanilla TypeScript dengan utility styling Tailwind CSS v4.

---

## 2. User Stories
- **Sebagai Developer**, saya ingin repository web vanilla ini langsung dapat di-clone dan dijalankan dengan perintah npm sederhana tanpa dependensi framework besar.
- **Sebagai Developer**, saya ingin menulis kode dengan TypeScript yang memiliki strict type checking dan dikompilasi otomatis ke JavaScript murni.
- **Sebagai Developer**, saya ingin memanfaatkan fitur terbaru Tailwind CSS v4 (CSS-first configuration `@import "tailwindcss";`) via CLI compiler mandiri tanpa konfigurasi bundler yang kompleks.
- **Sebagai Developer/Pengguna**, saya ingin melihat tampilan halaman awal (*starter landing page*) yang sangat profesional, modern, responsif, dan interaktif untuk memastikan setup bekerja dengan sempurna.

---

## 3. Acceptance Criteria (AC)
- **`AC-01`**: Setup `package.json` dengan scripts yang jelas: `build:css`, `build:ts`, `build`, `watch:css`, `watch:ts`, dan script dev/preview lokal.
- **`AC-02`**: Konfigurasi TypeScript (`tsconfig.json`) terpasang secara strict, mengompilasi file TypeScript di `src/ts/` menjadi JavaScript modular di `dist/js/`.
- **`AC-03`**: Konfigurasi Tailwind CSS v4 terpasang dengan `@tailwindcss/cli`, mengompilasi CSS dari `src/styles/main.css` ke `dist/output.css`.
- **`AC-04`**: Struktur proyek modular dan teratur:
  - Root `index.html` dengan markup semantik, SEO meta tags, dan estetika visual modern.
  - `src/styles/main.css` dengan CSS-first tokens dan custom animations.
  - `src/ts/` dengan kode TypeScript terstruktur (state management sederhana, theme switcher, interactive widget).
  - `dist/` sebagai target output kompilasi build.
- **`AC-05`**: Tampilan UI awal memenuhi standar estetika tinggi: tema gelap/terang modern (dark mode toggle), tipografi Google Fonts (Inter/Outfit), micro-interactions, responsive multi-device, dan demonstrasi fungsi TypeScript.
- **`AC-06`**: Semua script build (`npm run build`, `npm run build:css`, `npm run build:ts`) tereksekusi 100% sukses tanpa error maupun warning, dan zero-suppression policy ditaati (`// @ts-ignore` dilarang).

---

## 4. Cross-Role Alignment Meeting Log

### 1. Sandra (QA & Security Tester):
- **Question**: *"Bagaimana mekanisme verifikasi build dan test harness untuk pure vanilla repository tanpa framework? Apakah ada potensi bentrok path output build antara tsc dan tailwindcss cli?"*
  - **Faisal (PM Decision)**: Kita pisahkan direktori output secara deterministik di dalam `dist/`: CSS ke `dist/output.css` dan JavaScript ke `dist/js/`. Sandra wajib memverifikasi script `npm run build` berjalan mulus secara sekuensial, tidak meninggalkan path relatif yang rusak di `index.html`, serta tidak ada suppressions (`// @ts-ignore` atau lint disable).
  - **Fiqry (Frontend Web Developer)**: Kami akan menggunakan skrip `npm run build` yang menjalankan `npm run build:css && npm run build:ts`. Path output `dist/output.css` dan `dist/js/main.js` akan di-link langsung dari `index.html` dengan `<script type="module">` sehingga langsung bisa dibuka via local server.

### 2. Bryan (Backend & DevOps Specialist):
- **Question**: *"Apakah project ini memerlukan server API runtime backend khusus atau murni static frontend asset yang siap di-deploy ke static hosting (GitHub Pages, Netlify, Vercel)?"*
  - **Bryan's Assessment**: Proyek ini adalah static client-side web application murni. Tidak ada beban server runtime atau database yang diperlukan pada tahap awal ini. Namun, untuk kemudahan testing dan preview lokal developer, kita dapat menyertakan mini dev-server static (seperti `serve` atau Node.js native static preview script) agar module ES6 berjalan lancar tanpa terhalang CORS local filesystem `file://`.
  - **Faisal (PM Decision)**: Disetujui. Kita sediakan script preview lokal yang ringan dan tidak membebani project.

### 3. Angel (UI/UX Designer):
- **Question**: *"Mengapa banyak template vanilla web terlihat kuno dan membosankan, dan bagaimana kita memastikan template ini memiliki visual yang memukau (WOW effect) pada pandangan pertama?"*
  - **Angel's Explanation**: Kebanyakan starter template hanya menyediakan tombol counter hitam-putih sederhana tanpa sistem desain terpadu.
  - **Fix**: Kita gunakan Tailwind CSS v4 dengan custom design tokens, gradient accents modern (indigo, violet, cyan), glassmorphism cards, subtle backdrop-blur, dan Google Fonts 'Outfit' & 'Inter'.
  - **Angel's Specification**:
    - Typography: Headings menggunakan font modern sans-serif dengan fluid sizing.
    - Color Palette: Dark slate / midnight background (`#0b0f19`), neon/indigo accents (`#6366f1`, `#06b6d4`), dan neutral grays yang berimbang.
    - Components: Hero section dengan live badge, interactive TypeScript counter & reactive state card, dark/light mode toggle, dynamic feature grid, dan quick copy code snippet card.
  - **Angel's Rule**: UI harus 100% responsif dari mobile (375px) hingga ultra-wide desktop (1440px+).

### 4. Fiqry (Frontend Web Developer):
- **Question**: *"Apakah ada rekomendasi penamaan folder dan struktur TypeScript agar mudah dikembangkan lebih lanjut menjadi aplikasi web berskala besar?"*
  - **Fiqry's Proposal**: Struktur kita organisasikan menjadi:
    - `src/ts/types/` untuk interface dan TypeScript types.
    - `src/ts/utils/` untuk utility functions (DOM helpers, storage, theme).
    - `src/ts/components/` untuk modul komponen vanilla JS/TS interaktif.
    - `src/ts/main.ts` sebagai entry point aplikasi.
    - `src/styles/main.css` sebagai file CSS utama Tailwind v4.
  - **Faisal (PM Decision)**: Proposal Fiqry sangat rapi dan disetujui penuh. Pastikan `tsconfig.json` diset ke strict mode dengan `moduleResolution` modern (`bundler` atau `node`), dan `package.json` menyertakan `type: "module"`.
  - **Fiqry's Inventory**:
    - `package.json`
    - `tsconfig.json`
    - `index.html`
    - `src/styles/main.css`
    - `src/ts/main.ts`
    - `src/ts/types/index.ts`
    - `src/ts/components/counter.ts`
    - `src/ts/components/theme.ts`
    - `src/ts/components/featureCards.ts`
