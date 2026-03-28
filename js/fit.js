function fitToScreen() {
    var container = document.querySelector('.container');
    if (!container) return;

    if (window.innerWidth < 992) {
        // ── MOBILE: scroll naturale ──

        // Reset body inline styles
        document.body.style.overflow  = 'auto';
        document.body.style.height    = 'auto';
        document.body.style.width     = '100%';
        document.body.style.minHeight = 'unset';

        // Reset container
        container.style.transform = 'none';
        container.style.position  = 'static';
        container.style.left      = '';
        container.style.top       = '';
        container.style.width     = '100%';
        container.style.maxWidth  = '100%';
        container.style.height    = 'auto';

        // Fix #blink (disclaimer): ha white-space:nowrap; overflow:hidden inline
        var blinkEl = document.getElementById('blink');
        if (blinkEl) {
            blinkEl.style.whiteSpace = 'normal';
            blinkEl.style.overflow   = 'visible';
            blinkEl.style.fontSize   = '0.7rem';
        }
        // Fix blink2 (footer)
        var blink2El = document.getElementById('blink2');
        if (blink2El) {
            blink2El.style.whiteSpace = 'normal';
            blink2El.style.overflow   = 'visible';
            blink2El.style.fontSize   = '0.65rem';
            blink2El.style.wordBreak  = 'break-word';
        }
        return;
    }

    // ── DESKTOP: comportamento originale identico ──
    document.body.style.overflow = 'hidden';
    document.body.style.height   = '100vh';
    document.body.style.width    = '100vw';

    container.style.transform = 'none';
    container.style.position  = 'relative';
    container.style.left      = '';

    var containerW = container.offsetWidth;
    var containerH = container.offsetHeight;
    var scaleX = window.innerWidth  / containerW;
    var scaleY = window.innerHeight / containerH;
    var scale  = Math.min(scaleX, scaleY);

    var scaledW = containerW * scale;
    var offsetX = (window.innerWidth - scaledW) / 2;

    container.style.position        = 'absolute';
    container.style.top             = '0';
    container.style.left            = offsetX + 'px';
    container.style.transform       = 'scale(' + scale + ')';
    container.style.transformOrigin = 'top left';
}

window.addEventListener('load',   fitToScreen);
window.addEventListener('resize', fitToScreen);