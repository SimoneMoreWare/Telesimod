# TeleSimod.it — Simone Candido Portfolio

A retro teletext-style personal portfolio website built with HTML, CSS (custom Tailwind-like utility classes), and vanilla JavaScript.

## Origin Story

This project was originally built during high school as a small assignment — we had just studied HTML, CSS and JavaScript, and needed something to turn in. I went with the idea of a teletext terminal, because why not.

I never threw it away. I got attached to it. Over the years I kept updating it with new projects, new links, new cities. It's rough around the edges and probably not what you'd call "production-grade" — but it's mine, and it still works. So here it stays.

## Live Site

[www.telesimod.it](https://simonemoreware.github.io/Telesimod/) *(GitHub Pages)*

## Structure

```
├── index.html          # Home page — latest projects feed
├── chisono.html        # About me page
├── contatti.html       # Contacts page
├── error404.html       # 404 error page
├── manfredonia.html    # Manfredonia easter egg page
├── pako.html           # Pako easter egg page
├── cv/
│   └── cv_simoneCandido.pdf    # CV / Resume
├── css/
│   └── candidosimone.css       # All styles (teletext aesthetic)
├── js/
│   ├── CandidoSimone_orario.js # Live clock in header
│   ├── CandidoSimone_blink.js  # Blinking text effect
│   ├── sendvalue.js            # Teletext page number navigation
│   ├── lang.js                 # IT / EN language toggle
│   └── fit.js                  # Auto-scale to fit viewport (no scroll)
└── img/
    ├── logo1.png
    ├── home.svg
    ├── favicon.ico
    ├── pic.png
    └── ...
```

## Features

- **Teletext aesthetic** — classic black background with green, yellow, blue and cyan colors, `Press Start 2P` pixel font
- **Live clock** — real-time date/time in the header, updated every second
- **Page number navigation** — type a number (100–110) and press VAI to navigate, just like a real teletext terminal
- **Blinking elements** — footer text blinks in true teletext style
- **Bilingual** — toggle between Italian 🇮🇹 and English 🇬🇧 with the IT/EN buttons
- **No-scroll fullscreen** — auto-scales to fit any screen without scrolling (`fit.js`)
- **Responsive** — works on desktop and mobile; sidebar visible on large screens only

## Navigation (page numbers)

| Code | Destination |
|------|-------------|
| 100  | Chi Sono / About Me |
| 101  | Instagram |
| 102  | LinkedIn |
| 103  | GitHub |
| 104  | X / Twitter |
| 105  | Moreware Blog |
| 106  | YouTube |
| 107  | New Portfolio |
| 108  | Contacts |
| 109  | "Come è fatto un PC" ebook |
| 110  | CV / Resume |

## Run locally

Just open `index.html` in a browser — no build tools required.

```bash
git clone https://github.com/SimoneMoreWare/TeleSimod.git
cd TeleSimod
open index.html
```

## Author

**Simone Candido**  
MSc Double Degree — Computer Engineering @ Politecnico di Torino & IoT @ EURECOM, Antibes

- New Portfolio: [simonemoreware.github.io/portfolio-simonecandido](https://simonemoreware.github.io/portfolio-simonecandido/)
- GitHub: [@SimoneMoreWare](https://github.com/SimoneMoreWare)
- LinkedIn: [simone-candido](https://www.linkedin.com/in/simone-candido/)

## License

MIT
