var velocita = 1000;
var blink = setInterval(function () {
    var ele = document.getElementById('blink');
    if (ele) ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden');
}, velocita);
