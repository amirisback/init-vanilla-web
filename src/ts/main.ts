import { ThemeManager } from './components/theme.js';
import { CounterWidget } from './components/counter.js';
import { ClipboardManager } from './components/clipboard.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Theme Manager
  const themeManager = new ThemeManager();
  themeManager.init();

  // 2. Initialize Interactive Counter
  const counterWidget = new CounterWidget();
  counterWidget.init();

  // 3. Initialize Clipboard Utility
  const clipboardManager = new ClipboardManager();
  clipboardManager.init();

  // 4. Update Footer Year dynamically
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear().toString();
  }

  // 5. Console Badge for Developers
  console.log(
    '%c⚡ Vanilla Web + Tailwind CSS v4 + TypeScript',
    'color: #818cf8; font-size: 14px; font-weight: bold; background: #0f172a; padding: 6px 12px; border-radius: 6px;'
  );
  console.log('Zero Framework Overhead. Pure modern web standards.');
});
