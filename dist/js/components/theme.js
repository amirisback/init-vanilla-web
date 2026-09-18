const THEME_STORAGE_KEY = 'init-vanilla-theme';
export class ThemeManager {
    currentTheme;
    toggleButton = null;
    iconSun = null;
    iconMoon = null;
    constructor() {
        const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.currentTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    }
    init() {
        this.toggleButton = document.getElementById('theme-toggle-btn');
        this.iconSun = document.getElementById('theme-icon-sun');
        this.iconMoon = document.getElementById('theme-icon-moon');
        this.applyTheme(this.currentTheme);
        if (this.toggleButton) {
            this.toggleButton.addEventListener('click', () => {
                const nextTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
                this.setTheme(nextTheme);
            });
        }
    }
    setTheme(theme) {
        this.currentTheme = theme;
        localStorage.setItem(THEME_STORAGE_KEY, theme);
        this.applyTheme(theme);
    }
    applyTheme(theme) {
        const root = document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
            root.classList.remove('light');
        }
        else {
            root.classList.remove('dark');
            root.classList.add('light');
        }
        this.updateIcons(theme);
    }
    updateIcons(theme) {
        if (!this.iconSun || !this.iconMoon)
            return;
        if (theme === 'dark') {
            this.iconSun.classList.remove('hidden');
            this.iconMoon.classList.add('hidden');
        }
        else {
            this.iconSun.classList.add('hidden');
            this.iconMoon.classList.remove('hidden');
        }
    }
    getTheme() {
        return this.currentTheme;
    }
}
//# sourceMappingURL=theme.js.map