import { ThemeMode } from '../types/index.js';

const THEME_STORAGE_KEY = 'init-vanilla-theme';

export class ThemeManager {
  private currentTheme: ThemeMode;
  private toggleButton: HTMLButtonElement | null = null;
  private iconSun: SVGElement | null = null;
  private iconMoon: SVGElement | null = null;

  constructor() {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.currentTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  }

  public init(): void {
    this.toggleButton = document.getElementById('theme-toggle-btn') as HTMLButtonElement | null;
    this.iconSun = document.getElementById('theme-icon-sun') as SVGElement | null;
    this.iconMoon = document.getElementById('theme-icon-moon') as SVGElement | null;

    this.applyTheme(this.currentTheme);

    if (this.toggleButton) {
      this.toggleButton.addEventListener('click', () => {
        const nextTheme: ThemeMode = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(nextTheme);
      });
    }
  }

  public setTheme(theme: ThemeMode): void {
    this.currentTheme = theme;
    localStorage.setItem(THEME_STORAGE_KEY, theme);
    this.applyTheme(theme);
  }

  private applyTheme(theme: ThemeMode): void {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }

    this.updateIcons(theme);
  }

  private updateIcons(theme: ThemeMode): void {
    if (!this.iconSun || !this.iconMoon) return;

    if (theme === 'dark') {
      this.iconSun.classList.remove('hidden');
      this.iconMoon.classList.add('hidden');
    } else {
      this.iconSun.classList.add('hidden');
      this.iconMoon.classList.remove('hidden');
    }
  }

  public getTheme(): ThemeMode {
    return this.currentTheme;
  }
}
