import { CounterState } from '../types/index.js';

export class CounterWidget {
  private state: CounterState = {
    count: 0,
    min: -50,
    max: 100,
    step: 1,
    history: [0]
  };

  private displayElement: HTMLElement | null = null;
  private badgeElement: HTMLElement | null = null;
  private parityElement: HTMLElement | null = null;
  private historyContainer: HTMLElement | null = null;
  private btnDecrement: HTMLButtonElement | null = null;
  private btnIncrement: HTMLButtonElement | null = null;
  private btnReset: HTMLButtonElement | null = null;
  private btnDouble: HTMLButtonElement | null = null;

  public init(): void {
    this.displayElement = document.getElementById('counter-display');
    this.badgeElement = document.getElementById('counter-status-badge');
    this.parityElement = document.getElementById('counter-parity-badge');
    this.historyContainer = document.getElementById('counter-history');
    this.btnDecrement = document.getElementById('counter-btn-dec') as HTMLButtonElement | null;
    this.btnIncrement = document.getElementById('counter-btn-inc') as HTMLButtonElement | null;
    this.btnReset = document.getElementById('counter-btn-reset') as HTMLButtonElement | null;
    this.btnDouble = document.getElementById('counter-btn-double') as HTMLButtonElement | null;

    this.attachEvents();
    this.render();
  }

  private attachEvents(): void {
    this.btnDecrement?.addEventListener('click', () => this.updateCount(this.state.count - this.state.step));
    this.btnIncrement?.addEventListener('click', () => this.updateCount(this.state.count + this.state.step));
    this.btnReset?.addEventListener('click', () => this.updateCount(0));
    this.btnDouble?.addEventListener('click', () => this.updateCount(this.state.count * 2));
  }

  public updateCount(newCount: number): void {
    const clampedCount = Math.max(this.state.min, Math.min(this.state.max, newCount));
    this.state.count = clampedCount;
    this.state.history = [clampedCount, ...this.state.history.slice(0, 4)];
    this.render();
  }

  private render(): void {
    if (this.displayElement) {
      this.displayElement.textContent = this.state.count.toString();
      // Subtle pulse animation
      this.displayElement.classList.add('scale-110');
      setTimeout(() => {
        this.displayElement?.classList.remove('scale-110');
      }, 150);
    }

    if (this.badgeElement) {
      if (this.state.count > 0) {
        this.badgeElement.textContent = 'Positive';
        this.badgeElement.className = 'px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20';
      } else if (this.state.count < 0) {
        this.badgeElement.textContent = 'Negative';
        this.badgeElement.className = 'px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/20';
      } else {
        this.badgeElement.textContent = 'Zero';
        this.badgeElement.className = 'px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20';
      }
    }

    if (this.parityElement) {
      const isEven = this.state.count % 2 === 0;
      this.parityElement.textContent = isEven ? 'Even' : 'Odd';
    }

    if (this.historyContainer) {
      this.historyContainer.innerHTML = this.state.history
        .map((num, idx) => `
          <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-mono ${
            idx === 0 
              ? 'bg-indigo-600/30 text-indigo-300 font-bold border border-indigo-500/30' 
              : 'bg-slate-800/40 text-slate-400'
          }">
            ${num}
          </span>
        `)
        .join('');
    }
  }
}
