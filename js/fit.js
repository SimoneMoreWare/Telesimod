function fitToScreen() {
    var container = document.querySelector('.container');
    if (!container) return;

    // Reset
    container.style.transform = 'none';
    container.style.position = 'relative';
    container.style.left = '';

    var containerW = container.offsetWidth;
    var containerH = container.offsetHeight;

    var scaleX = window.innerWidth  / containerW;
    var scaleY = window.innerHeight / containerH;
    var scale  = Math.min(scaleX, scaleY);

    // Center: offset = half of the space gained by scaling
    var scaledW = containerW * scale;
    var offsetX = (window.innerWidth - scaledW) / 2;

    container.style.position = 'absolute';
    container.style.top = '0';
    container.style.left = offsetX + 'px';
    container.style.transform = 'scale(' + scale + ')';
    container.style.transformOrigin = 'top left';
}

window.addEventListener('load',   fitToScreen);
window.addEventListener('resize', fitToScreen);