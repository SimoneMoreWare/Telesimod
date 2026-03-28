function refpage() {
    var valore = document.getElementById("refpage").value;
    switch (valore) {
        case '100': window.location.href = "chisono.html"; break;
        case '101': window.location.href = "https://www.instagram.com/simocandido/"; break;
        case '102': window.location.href = "https://www.linkedin.com/in/simone-candido/"; break;
        case '103': window.location.href = "https://github.com/SimoneMoreWare"; break;
        case '104': window.location.href = "https://twitter.com/SimoneCandido02"; break;
        case '105': window.location.href = "https://www.moreware.org/wp/blog/author/simonecandido/"; break;
        case '106': window.location.href = "https://www.youtube.com/@simonecandido9425"; break;
        case '107': window.location.href = "https://simonemoreware.github.io/portfolio-simonecandido/"; break;
        case '108': window.location.href = "contatti.html"; break;
        case '109': window.location.href = "https://www.moreware.org/books/PC_ita.epub"; break;
        case '110': window.location.href = "cv/cv_simoneCandido.pdf"; break;
        default: window.location.href = "error404.html"; break;
    }
}
