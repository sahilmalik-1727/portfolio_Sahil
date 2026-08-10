# Sahil Malik — Portfolio (Premium Build)

A creative, animated, fully responsive portfolio with a warm light theme and a rich dark mode.
Multi-page: **Home · Work · About · Contact**.

---

## ▶ Running it

Just open `index.html` in a browser. That's it — it's a static site (HTML/CSS/JS, no build step).

> **Keep an internet connection the first time you view it.** Fonts (Google Fonts) and icons
> (Font Awesome) load from a CDN. Everything else is local. To go fully offline later, you'd
> download those two libraries locally — ask me and I'll wire that up.

To host it live (free): drag the whole folder into **Netlify Drop** (app.netlify.com/drop),
or push to **GitHub Pages**. No configuration needed.

---

## ✨ What's in here

**Signature features**
- **Background hero video** — the home hero plays a looping, muted video behind your portrait.
  It's set to a YouTube video by default (swap the ID), or drop your own `assets/herovideo.mp4`
  for a perfectly clean loop. See `assets/READ-ME-hero-video.txt` for the 30-second how-to.
- **Infinite project canvas** — the home page has a draggable canvas holding *every* project.
  Grab it and drag any direction — it tiles endlessly on all sides and never runs out. Tiles are
  randomly scattered (varied sizes + tilts). Tap any tile to open it. (Arrow keys nudge it too.)
- **Reels swiper** — a row of 6 vertical (portrait) short-video cards below the canvas. It
  auto-advances every 4 seconds, pauses and plays that video inline when you hover, expands to
  full-size when clicked, and you can grab & swipe it. Swap in your real YouTube IDs (see below).
- **"Clapper" the mascot** — a little pixel film-character walks around the site following your
  cursor. He idles when you stop, waves and chats on hover, spins when clicked, and ducks when you
  scroll fast. (Desktop only; hidden on touch and when reduced-motion is on.)
- **Day / night toggle** (top-right sun↔moon) — flips the whole site between warm light and
  deep-aubergine dark. Remembers your choice.
- **Luminance-aware glass nav** — the floating pill reads whether it's over a light or dark
  section and flips its own text color; it compacts into a badge as you scroll. Your **logo** sits
  in the nav mark (drop a real `image/blogo.png` and it appears).
- **Film-countdown loader** — a 3·2·1 academy-leader sweep on first load.
- **Dot cursor** — a small cursor that inverts whatever's behind it (desktop only).
- **"The Cutting Room" footer** — an interactive editing timeline: drag the playhead and film
  frames light up, color swatches pop, and sparks fly. Scrub it. 🎬
- **Parallax throughout** — the hero portrait and floating tags follow your mouse; background
  washes and ambient orbs shift as you scroll, for a sense of depth.
- **Slide-in contact drawer** — the "Let's talk" / footer headline opens a panel with quick
  Email / Phone / WhatsApp buttons (no form to fill — one tap to reach you).

**Pages**
- **Home** — hero (with background video), stats, skills/tools, featured work, showreel band,
  and the infinite draggable project canvas.
- **Work** — every project as a filterable card (Video / UI-UX / Graphic / Photography / Logos).
  Click any card to open it in a pop-up (videos play inline, images zoom, Naturcycle opens its
  Behance embed). Deep-links work too, e.g. `work.html#video`.
- **About** — story, traits, toolkit, timeline, résumé button.
- **Contact** — contact methods, working email form, all your socials.

---

## 🔁 Swapping in your REAL files

Everything is a **placeholder with the correct final filename**, so you just drop your real files
on top — **no code changes needed.** Overwrite these (keep the exact names):

### Photo & logo → `image/`
| File | What it is |
|------|-----------|
| `image/sahil.jpeg` | Your portrait (home + about) |
| `image/blogo.png` | Your logo — shown in the nav (top-left). Drop your real logo here (keep the `blogo.png` name). |
| `image/logo.png` | Kept for favicon / general use. |
| `image/SAHIL RESUME.pdf` | Your résumé (the About page "résumé" button opens this) |

### Project images → `gallery/`
Overwrite each with your real artwork, **same filename**:

**Graphic design:** `heineken.jpg`, `MAGAZINE.jpg`, `deathbed.jpg`, `wordillustration.jpg`,
`Bever.png`, `sketch.jpg`
**Photography:** `car.png`, `classic (1).jpg`, `classic (9).jpg`
**Logos:** `werewolf icon.jpg`, `Bever.png`, `wordillustration.jpg`
**UI/UX:** `prototype.png`

### Videos — already live ✅
Your YouTube videos are wired by their IDs, so they **already play** (Demo Reel, Keep Going, Time,
Toronto, Solsip, and the Boxing broadcast-graphics video). The thumbnails pull from YouTube
automatically, with a local fallback image if YouTube is unreachable. To change a video, swap the
YouTube ID in the HTML (search for `youtube` in `work.html` / `index.html`).

### The 6 reels (home "reels & edits" swiper) — swap later
The 6 vertical reels currently use **placeholder** YouTube IDs. Open `js/site.js`, find the `REELS`
list near the top, and replace each `src:'...'` with your real YouTube video ID. (Instagram reels
can't autoplay-on-hover when embedded — that's why these use YouTube. If you'd rather link straight
to Instagram, tell me and I'll switch them to click-through IG cards.) You can also drop your own
poster images over `gallery/reel1.jpg … reel6.jpg`.

### The 2 case-study PDFs — swap later
Placeholder PDFs live at `gallery/naturcycle-casestudy.pdf` and `gallery/clarity-casestudy.pdf`.
Drop your real PDFs on top (keep the same filenames) and the "Read case study (PDF)" buttons in
those project pop-ups will show them.

### Web projects + screenshots
**Afilife** and **Clarity** are live (they load your real sites in the pop-up and link out). To use
nicer thumbnails, replace `gallery/afilife.jpg` and `gallery/clarity.jpg` with real screenshots.
The Naturcycle prototype video uses a placeholder YouTube ID — swap it in `work.html` / `js/site.js`
(search `naturcycle-proto` / `Naturcycle Proto`). Its poster is `gallery/naturcycle-proto.jpg`.

---

## ➕ Adding a NEW project card

Open `work.html`, copy one existing `<article class="work-card" ...>` block, paste it, and edit:
- `data-cat="video|uiux|web|graphic|logo"` (controls which filter it shows under)
- the thumbnail `src`
- the title / description
- the `data-modal-*` attributes (these tell the pop-up what to open — an image, a YouTube ID,
  a PDF, or an embed URL). Add `data-portrait="true"` for vertical videos, and `data-link2` /
  `data-link2-label` for a second button (e.g. a case-study PDF).

To also show it in the home canvas + keep everything in sync, add the same project to the `PROJECTS`
list in `js/site.js`. The filter counts update themselves.

---

## 🎨 Changing colors

All colors are CSS variables at the top of `css/site.css` (the `:root` block for light mode, and
`body.night` for dark). Change `--c-coral` (primary) or `--c-amber` (secondary) in one place and
it cascades everywhere.

---

## 📁 Structure

```
index.html · work.html · about.html · contact.html
css/
  site.css     ← design system, nav, loader, cursor, contact drawer, theme
  footer.css   ← "The Cutting Room" interactive footer
  home.css · work.css · pages.css
js/
  site.js      ← nav, theme, loader, cursor, modal, footer timeline, contact drawer
  work.js      ← project filtering
image/  ← your photo, logo, résumé
gallery/ ← project images (+ video thumbnail fallbacks)
```

---

## 📇 Your details (already embedded)

Email **sahilmalik1727@gmail.com** · Phone **+1 742 688 1727** · Toronto
Instagram · YouTube · Behance · LinkedIn · WhatsApp — all linked in the footer, contact page,
and contact drawer.

> The contact form opens your **email app** with the message pre-filled (no server needed). If you
> ever want submissions to hit your inbox automatically without opening an email app, ask me about
> wiring up a free form service (e.g. Formspree) — it's a 2-minute change.

Enjoy! — and send me your real files whenever you're ready and I'll drop them in for you.
