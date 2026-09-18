export class ClipboardManager {
    init() {
        const copyButtons = document.querySelectorAll('[data-copy-target]');
        copyButtons.forEach((btn) => {
            btn.addEventListener('click', async () => {
                const targetId = btn.getAttribute('data-copy-target');
                if (!targetId)
                    return;
                const targetEl = document.getElementById(targetId);
                if (!targetEl)
                    return;
                const textToCopy = targetEl.textContent?.trim() || '';
                try {
                    await navigator.clipboard.writeText(textToCopy);
                    this.showCopyFeedback(btn);
                }
                catch {
                    // Fallback if clipboard API is restricted
                    this.fallbackCopyText(textToCopy);
                    this.showCopyFeedback(btn);
                }
            });
        });
    }
    showCopyFeedback(button) {
        const defaultLabel = button.querySelector('.copy-label-default');
        const successLabel = button.querySelector('.copy-label-success');
        if (defaultLabel && successLabel) {
            defaultLabel.classList.add('hidden');
            successLabel.classList.remove('hidden');
            setTimeout(() => {
                defaultLabel.classList.remove('hidden');
                successLabel.classList.add('hidden');
            }, 2000);
        }
    }
    fallbackCopyText(text) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
        }
        catch {
            // Ignored
        }
        document.body.removeChild(textArea);
    }
}
//# sourceMappingURL=clipboard.js.map