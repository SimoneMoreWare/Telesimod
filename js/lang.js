var currentLang = 'it';

function setLang(lang) {
    currentLang = lang;

    // Toggle button styles
    var btnIt = document.getElementById('btn-it');
    var btnEn = document.getElementById('btn-en');
    if (btnIt && btnEn) {
        if (lang === 'it') {
            btnIt.style.background = '#00FF00';
            btnIt.style.color = 'black';
            btnIt.style.border = 'none';
            btnEn.style.background = '#282625';
            btnEn.style.color = '#00FF00';
            btnEn.style.border = '2px solid #00FF00';
        } else {
            btnEn.style.background = '#00FF00';
            btnEn.style.color = 'black';
            btnEn.style.border = 'none';
            btnIt.style.background = '#282625';
            btnIt.style.color = '#00FF00';
            btnIt.style.border = '2px solid #00FF00';
        }
    }

    // Update all elements with data-it / data-en attributes
    var elements = document.querySelectorAll('[data-' + lang + ']');
    elements.forEach(function(el) {
        var val = el.getAttribute('data-' + lang);
        if (val !== null) {
            el.innerHTML = val;
        }
    });

    document.documentElement.lang = lang;
}