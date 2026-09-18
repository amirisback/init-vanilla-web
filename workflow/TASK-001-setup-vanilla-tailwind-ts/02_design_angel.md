# UI/UX Specification & Design System - Vanilla HTML/JS/TS + Tailwind CSS v4

**Task ID**: `TASK-001`  
**Author**: Angel (`angel_uiux`) - UI/UX Designer  
**Team**: Tim FE (Faisal, Angel, Fiqry, Sandra)  
**Date**: 2026-09-18  
**Status**: Ready for Implementation  

---

## 1. Design Vision & Philosophy
Menciptakan kesan pertama yang memukau (*WOW effect*) untuk repositori initial Vanilla Web. Meskipun tanpa framework JS seperti React atau Vue, tampilan dan pengalaman pengguna harus terasa seperti web app modern bernilai premium (level SaaS tier 1) dengan perpaduan dark/light mode harmonis, aksen neon glow, glassmorphism, dan micro-interactions yang mulus.

---

## 2. Design Tokens & Visual Hierarchy

### Typography
- **Primary Font**: `'Outfit', sans-serif` untuk Headings & Brand Logo (Google Fonts). Memberikan kesan modern, tebal, dan futuristik.
- **Body Font**: `'Inter', sans-serif` untuk Text, Paragraphs, dan UI elements. Sangat terbaca pada berbagai ukuran layar.
- **Monospace Font**: `'Fira Code', monospace` untuk Code blocks dan CLI terminal display.

### Color Palette
- **Backgrounds**:
  - Dark Theme: `bg-slate-950` (`#020617`) dengan card surface `bg-slate-900/70` dan subtle border `border-slate-800/80`.
  - Light Theme: `bg-slate-50` (`#f8fafc`) dengan card surface `bg-white/80` dan subtle border `border-slate-200/80`.
- **Accent & Gradients**:
  - Indigo Glow: `#6366f1` (`indigo-500`)
  - Violet Energy: `#8b5cf6` (`violet-500`)
  - Cyan Precision: `#06b6d4` (`cyan-500`)
  - Emerald Success: `#10b981` (`emerald-500`)
- **Text Contrast**:
  - Headings (Dark): `text-white` / Headings (Light): `text-slate-900`
  - Body Text (Dark): `text-slate-400` / Body Text (Light): `text-slate-600`
  - Muted Text: `text-slate-500`

### Surface & Depth
- **Glassmorphism**: `backdrop-blur-md`, semi-transparent background (`bg-slate-900/60`), border halus berketebalan 1px (`border-slate-800/60`).
- **Glow & Shadows**: Aksen gradien radial halus di latar belakang (*ambient background glow*) untuk memberi dimensi kedalaman.

---

## 3. Component Architecture & Specs

### A. Navigation Header
- **Layout**: Fixed/sticky top navbar dengan `backdrop-blur-lg` dan `border-b border-slate-800/40`.
- **Elements**:
  - Brand Logo: Gradient badge "V4" + teks `VanillaTS`.
  - Quick Links: Features, Quickstart, GitHub Repo.
  - Controls: Dark/Light Mode toggle button dengan animasi transisi icon matahari/bulan.

### B. Hero Section
- **Badge**: "⚡ Tailwind CSS v4 + TypeScript + Pure Vanilla" dengan animasi pulse dot hijau.
- **Headline**: Fluid typography `text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight` dengan gradasi teks `bg-gradient-to-r from-white via-slate-200 to-indigo-300 bg-clip-text text-transparent`.
- **Subheadline**: Deskripsi ringkas mengenai keunggulan arsitektur tanpa framework: kecepatan instan, tanpa bundle bloatware, dan kontrol penuh.
- **CTA Actions**:
  - Primary Button: "Explore Template" dengan gradient fill dan hover shadow glow.
  - Secondary Button: "View on GitHub" dengan border styling dan icon GitHub SVG.

### C. Interactive TypeScript Showcase Widget (Pure Vanilla)
- **Tujuan**: Menunjukkan bahwa tanpa framework pun, TypeScript modular dapat mengelola state dinamis secara elegan.
- **Komponen Widget**:
  1. **Reactive Counter Component**: Tombol `-`, `+`, dan `Reset` yang memicu reaktifitas DOM dan indikator status badge ("Even/Odd", "Positive/Zero/Negative").
  2. **Live Input Sync**: Form input real-time yang memancarkan event ke preview card secara instan.
  3. **Performance Metrics Card**: Menampilkan ukuran bundle 0KB framework overhead dan skor kecepatan build.

### D. Features Grid (4 Cards)
1. **Zero Framework Overhead**: Kecepatan runtime murni tanpa React/Vue virtual DOM overhead.
2. **Tailwind CSS v4 Native CLI**: Menggunakan engine Oxide terbaru berkecepatan kompilasi tinggi.
3. **Strict TypeScript 5**: Type-safe development dengan modular ES modules native.
4. **Instant Developer Experience**: Skrip npm siap pakai untuk build, watch, dan dev server.

### E. Quickstart Terminal Card
- Kartu bergaya terminal dark dengan tombol **Copy to Clipboard** yang interaktif (menampilkan status "Copied!" dengan micro-animation).

---

## 4. Responsive Breakpoints
- **Mobile (<640px)**: Single column stack, compact hero, full-width buttons.
- **Tablet (640px - 1024px)**: 2-column feature cards, comfortable typography.
- **Desktop (1024px+)**: 4-column feature grid, side-by-side interactive demo widget, maximum container `max-w-7xl`.
