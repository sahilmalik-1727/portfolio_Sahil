/* ════════════════════════════════════════════════════════════════════
   site.js — shared chrome as light-DOM Web Components (<site-nav>,
   <site-footer>) so global CSS + tokens apply unchanged.

   Per page: link css/site.css first, add the 1-line theme guard inline
   (before first paint), place <site-nav>…</site-nav> and <site-footer>,
   then load this file with defer.
   ════════════════════════════════════════════════════════════════════ */

const CONTACT_EMAIL = 'sahilmalik1727@gmail.com';
const SOCIALS = {
  instagram: 'https://instagram.com/sahil_malik1727',
  youtube:   'https://www.youtube.com/@sahil_1.7.2.7',
  behance:   'https://www.behance.net/sahilmalik42',
  linkedin:  'https://www.linkedin.com/in/sahil-26a2b3238/',
  whatsapp:  'https://wa.me/17426881727'
};

/* ── NAV markup ── */
const NAV_HTML = `
  <nav id="nav">
    <div class="nav-side">
      <svg class="pin" viewBox="0 0 12 16" fill="none" aria-hidden="true"><path d="M6 0C2.7 0 0 2.7 0 6c0 4.2 6 10 6 10s6-5.8 6-10c0-3.3-2.7-6-6-6Zm0 8.4A2.4 2.4 0 1 1 6 3.6a2.4 2.4 0 0 1 0 4.8Z" fill="currentColor"/></svg>
      <span class="nav-loc">TORONTO,&nbsp;CA</span>
    </div>

    <div class="nav-pill" id="nav-pill">
      <a class="nav-brand" href="index.html" aria-label="Sahil Malik — home">
        <span class="nav-mark"><img src="image/blogo.png" alt="Sahil Malik logo" /></span>
        <span class="nav-brand-name">Sahil Malik<small>Creative</small></span>
      </a>
      <div class="avail-tag" aria-hidden="true"><span class="avail-text">Available for work</span></div>
      <span class="avail-dot" aria-hidden="true"></span>
      <div class="nav-links" id="nav-links">
        <a href="index.html" class="nav-link" data-nav="index">Home</a>
        <a href="work.html" class="nav-link" data-nav="work">Work</a>
        <a href="about.html" class="nav-link" data-nav="about">About</a>
        <a href="contact.html" class="nav-link" data-nav="contact">Contact</a>
        <a class="nav-cta" data-contact-open href="contact.html">Let's talk</a>
      </div>
    </div>

    <div class="nav-side right">
      <button class="day-toggle" id="theme-toggle" aria-label="Toggle day and night theme" aria-pressed="false">
        <svg class="toggle-ico ico-sun" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="4.5" fill="currentColor"/>
          <g fill="currentColor"><circle cx="12" cy="3.4" r="1.15"/><circle cx="12" cy="20.6" r="1.15"/><circle cx="3.4" cy="12" r="1.15"/><circle cx="20.6" cy="12" r="1.15"/><circle cx="6" cy="6" r="1.15"/><circle cx="18" cy="6" r="1.15"/><circle cx="6" cy="18" r="1.15"/><circle cx="18" cy="18" r="1.15"/></g>
        </svg>
        <svg class="toggle-ico ico-moon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.2A8 8 0 1 1 10.3 4.2a6.4 6.4 0 0 0 9.7 10Z" fill="currentColor"/></svg>
      </button>
      <button class="nav-burger" id="nav-burger" aria-label="Open menu" aria-expanded="false" aria-controls="menu-overlay"><span></span><span></span></button>
    </div>
  </nav>`;

const MENU_HTML = `
  <div class="menu-overlay" id="menu-overlay" role="dialog" aria-modal="true" aria-label="Menu">
    <nav>
      <ul class="menu-links">
        <li><a href="index.html" class="menu-link"><span class="num">01</span><span class="word">Home</span></a></li>
        <li><a href="work.html" class="menu-link"><span class="num">02</span><span class="word">Work</span></a></li>
        <li><a href="about.html" class="menu-link"><span class="num">03</span><span class="word">About</span></a></li>
        <li><a href="contact.html" class="menu-link"><span class="num">04</span><span class="word">Contact</span></a></li>
      </ul>
    </nav>
    <p class="menu-footer">TORONTO, CA</p>
    <div class="menu-social">
      <a href="${SOCIALS.instagram}" target="_blank" rel="noopener" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
      <a href="${SOCIALS.youtube}" target="_blank" rel="noopener" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
      <a href="${SOCIALS.behance}" target="_blank" rel="noopener" aria-label="Behance"><i class="fa-brands fa-behance"></i></a>
    </div>
  </div>`;

const CONTACT_HTML = `
  <div class="contact-scrim" id="contact-scrim"></div>
  <aside class="contact-drawer" id="contact-drawer" role="dialog" aria-modal="true" aria-labelledby="cd-title">
    <button class="cd-close" id="cd-close" aria-label="Close contact panel"></button>
    <div class="cd-body">
      <p class="cd-eyebrow"><span class="cd-dot"></span>Available for new projects</p>
      <h2 class="cd-title" id="cd-title">Let's build<br>something great.</h2>
      <p class="cd-intro">Tell me what you're making — a film, a brand, a site, a wild idea. Reach me whichever way is easiest and I'll reply within 48 hours.</p>
      <div class="cd-cards">
        <a class="cd-card" href="mailto:${CONTACT_EMAIL}">
          <span class="cd-card-ic ic-mail"><i class="fa-solid fa-envelope"></i></span>
          <span class="cd-card-info"><small>Email</small><b>${CONTACT_EMAIL}</b></span>
          <span class="cd-card-go"><i class="fa-solid fa-arrow-right"></i></span>
        </a>
        <a class="cd-card" href="tel:+17426881727">
          <span class="cd-card-ic ic-phone"><i class="fa-solid fa-phone"></i></span>
          <span class="cd-card-info"><small>Phone</small><b>+1 742 688 1727</b></span>
          <span class="cd-card-go"><i class="fa-solid fa-arrow-right"></i></span>
        </a>
        <a class="cd-card" href="${SOCIALS.whatsapp}" target="_blank" rel="noopener">
          <span class="cd-card-ic ic-wa"><i class="fa-brands fa-whatsapp"></i></span>
          <span class="cd-card-info"><small>WhatsApp</small><b>Message me directly</b></span>
          <span class="cd-card-go"><i class="fa-solid fa-arrow-right"></i></span>
        </a>
      </div>
    </div>
    <div class="cd-alt">
      <p class="cd-alt-label">Find me elsewhere</p>
      <nav class="cd-alt-social" aria-label="Social links">
        <a href="${SOCIALS.instagram}" target="_blank" rel="noopener">Instagram ↗</a>
        <a href="${SOCIALS.youtube}" target="_blank" rel="noopener">YouTube ↗</a>
        <a href="${SOCIALS.behance}" target="_blank" rel="noopener">Behance ↗</a>
        <a href="${SOCIALS.linkedin}" target="_blank" rel="noopener">LinkedIn ↗</a>
      </nav>
    </div>
  </aside>`;

/* ── FOOTER markup: The Cutting Room ── */
const FRAME_DATA = [
  { c1: '#ff5d3b', c2: '#ffb23e', ico: 'fa-clapperboard' },
  { c1: '#6fa8ff', c2: '#a78bfa', ico: 'fa-camera' },
  { c1: '#34d399', c2: '#22d3ee', ico: 'fa-palette' },
  { c1: '#ffb23e', c2: '#ff5d3b', ico: 'fa-film' },
  { c1: '#f472b6', c2: '#c6683e', ico: 'fa-pen-nib' },
  { c1: '#a3e635', c2: '#34d399', ico: 'fa-wand-magic-sparkles' },
  { c1: '#22d3ee', c2: '#6fa8ff', ico: 'fa-image' },
  { c1: '#ff5d3b', c2: '#f472b6', ico: 'fa-bezier-curve' }
];
const SWATCHES = ['#ff5d3b','#ffb23e','#6fa8ff','#34d399','#f472b6','#a78bfa','#22d3ee'];

/* ── All projects (feed the infinite canvas). img falls back via onerror in render. ── */
const PROJECTS = [
  { cat:'Short Film',   title:'Time',            type:'youtube', src:'xHI5IEzkCVE', img:'https://i.ytimg.com/vi/xHI5IEzkCVE/hqdefault.jpg', fb:'gallery/reel_time.jpg',     desc:'A cinematic short film exploring time and memory.' },
  { cat:'Kinetic Type', title:'Keep Going',      type:'youtube', src:'0yt-e44I1Bw', img:'https://i.ytimg.com/vi/0yt-e44I1Bw/hqdefault.jpg', fb:'gallery/reel_keepgoing.jpg', desc:'An energetic kinetic typography piece.' },
  { cat:'Short',        title:'Toronto',         type:'youtube', src:'-ADndC4_R50', img:'https://i.ytimg.com/vi/-ADndC4_R50/hqdefault.jpg', fb:'gallery/reel_toronto.jpg',  desc:'A short cinematic intro shot around Toronto.' },
  { cat:'Brand Ad',     title:'Solsip',          type:'youtube', src:'vMdKV20280s', img:'https://i.ytimg.com/vi/vMdKV20280s/hqdefault.jpg', fb:'gallery/reel_solsip.jpg',   desc:'A punchy brand advertisement edit.' },
  { cat:'VFX',          title:'Boxing Broadcast',type:'youtube', src:'_kurLUGi_VI', img:'https://i.ytimg.com/vi/_kurLUGi_VI/hqdefault.jpg', fb:'gallery/boxing-vfx.jpg',    desc:'Broadcast graphics for an Olympic boxing tournament — animated lower-thirds, info cards and a stinger transition.' },
  { cat:'UI / UX',      title:'Naturcycle',      type:'iframe',  src:'https://www.behance.net/embed/project/247480001?ilo0=1', img:'gallery/prototype.png', desc:'Skincare app — full UX case study, from research to final UI.', link:'https://www.figma.com/proto/FzJ0Y0YW6ZBfLAjS8AAeF2/final-frames?node-id=36-579', linkLabel:'Open Figma prototype', link2:'gallery/naturcycle-casestudy.pdf', link2Label:'Read case study (PDF)' },
  { cat:'Prototype',    title:'Naturcycle Proto',type:'youtube', src:'ZdP7jWkDmus', img:'gallery/naturcycle-proto.jpg', portrait:true, desc:'A walkthrough of the Naturcycle app prototype in motion.', link:'https://www.figma.com/proto/FzJ0Y0YW6ZBfLAjS8AAeF2/final-frames?node-id=36-579', linkLabel:'Open Figma prototype' },
  { cat:'Web',          title:'Afilife',         type:'iframe',  src:'https://sahilmalik-1727.github.io/Afilife/', img:'gallery/afilife.jpg', desc:'Your whole life, safely passed on to the people you love. One secure place to keep your accounts, assets, documents and final wishes — so if something happens to you, your family isn\u2019t left lost, locked out or guessing.', link:'https://sahilmalik-1727.github.io/Afilife/', linkLabel:'Visit live site' },
  { cat:'Web',          title:'Clarity',         type:'iframe',  src:'https://sahilmalik-1727.github.io/clarity-website/', img:'gallery/clarity.jpg', desc:'One thing at a time. Clarity ends decision fatigue — instead of a scary to-do list, you see the single most important thing to do right now, and you can talk it through when you\u2019re stuck.', link:'https://sahilmalik-1727.github.io/clarity-website/', linkLabel:'Visit live site', link2:'gallery/clarity-casestudy.pdf', link2Label:'Read case study (PDF)' },
  { cat:'Poster',       title:'Heineken',        type:'image',   src:'gallery/heineken.jpg',        img:'gallery/heineken.jpg',        desc:'Bold promotional poster blending type and product photography.' },
  { cat:'Editorial',    title:'Magazine',        type:'image',   src:'gallery/MAGAZINE.jpg',        img:'gallery/MAGAZINE.jpg',        desc:'Editorial magazine layout with a strong grid.' },
  { cat:'Social',       title:'Bever Promo',     type:'image',   src:'gallery/Bever.png',           img:'gallery/Bever.png',           desc:'Promo social post design.' },
  { cat:'Logo',         title:'Werewolf Icon',   type:'image',   src:'gallery/werewolf icon.jpg',   img:'gallery/werewolf icon.jpg',   desc:'Character icon / mascot mark.' },
  { cat:'Logo',         title:'Bever Mark',      type:'image',   src:'gallery/Bever.png',           img:'gallery/Bever.png',           desc:'Brand mark for Bever.' },
  { cat:'Logo',         title:'Type Mark',       type:'image',   src:'gallery/wordillustration.jpg',img:'gallery/wordillustration.jpg',desc:'Type-based logotype exploration.' }
];

/* ── Reels: 6 portrait shorts (real YouTube shorts IDs). ── */
const REELS = [
  { title:'Library Edit',  tag:'Short · Edit',      src:'3m_9qNqgCzo', img:'gallery/reel1.jpg', desc:'A self-shot piece in a library that I edited.' },
  { title:'SM Logo MOGRT', tag:'Motion · MOGRT',    src:'lhVJ4-ASqgs', img:'gallery/reel2.jpg', desc:'My SM logo MOGRT files — animated lower-third and stinger.' },
  { title:'Joker Poster',  tag:'Motion · Poster',   src:'LG_hDCbNIXU', img:'gallery/reel3.jpg', desc:'A moving poster for the Joker movie.' },
  { title:'VFX Reel',      tag:'Short · VFX',        src:'-fQOiJ-A4HI', img:'gallery/reel4.jpg', desc:'A short of my VFX and editing style, working on myself.' },
  { title:'Boxing Graphics',tag:'Short · VFX',       src:'_kurLUGi_VI', img:'gallery/reel5.jpg', desc:'Broadcast graphics — lower-thirds, info cards and a stinger.' },
  { title:'Keep Going',    tag:'Short · Kinetic',    src:'0yt-e44I1Bw', img:'gallery/reel6.jpg', desc:'A kinetic typography short edit.' }
];

const FOOTER_HTML = `
  <footer class="footer" id="contact-footer">
    <div class="ft-inner">
      <p class="ft-sub reveal">From first frame to final grade — I help ambitious teams turn ideas into work that looks sharp, moves well, and gets remembered.</p>
      <h2 class="ft-head"><button class="ft-head-btn" type="button" data-contact-open>Let's roll.</button></h2>
    </div>

    <div class="cutting-room" id="cutting-room" aria-hidden="true">
      <p class="cr-hint"><span class="kbd">Scrub →</span> drag across the timeline</p>
      <div class="cr-strip" id="cr-strip">
        <div class="cr-frames" id="cr-frames"></div>
        <div class="cr-playhead" id="cr-playhead"></div>
        <div class="cr-fx" id="cr-fx"></div>
      </div>
      <div class="cr-swatches" id="cr-swatches"></div>
    </div>

    <div class="ft-bottom">
      <p class="ft-credit">Designed &amp; edited by Sahil Malik · Toronto © <span data-year>2026</span></p>
      <nav class="ft-social" aria-label="Social links">
        <a href="${SOCIALS.instagram}" target="_blank" rel="noopener" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
        <a href="${SOCIALS.youtube}" target="_blank" rel="noopener" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
        <a href="${SOCIALS.behance}" target="_blank" rel="noopener" aria-label="Behance"><i class="fa-brands fa-behance"></i></a>
        <a href="${SOCIALS.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
        <a href="${SOCIALS.whatsapp}" target="_blank" rel="noopener" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
      </nav>
    </div>
  </footer>`;

/* ── Pixel mascot: "Clapper" — a little film-crew sprite that walks to your
   cursor, idles when you stop, waves on hover, spins on click, tucks on scroll.
   Built from SVG rects so it's crisp pixel-art with zero image assets. ── */
const CHARACTER_HTML = `
  <div class="mascot" id="mascot" aria-hidden="true" title="Hi! I'm Clapper — drag the gallery, click me, keep scrolling…">
    <div class="mascot-inner" id="mascot-inner">
      <div class="mascot-bubble" id="mascot-bubble"></div>
      <svg class="mascot-svg" viewBox="0 0 32 40" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg">
        <!-- shadow -->
        <ellipse class="m-shadow" cx="16" cy="38" rx="9" ry="2.2"/>
        <!-- legs (animated via CSS transforms on these groups) -->
        <g class="m-leg m-leg-l"><rect x="10" y="30" width="4" height="7" fill="#2a1e3f"/><rect x="9" y="36" width="6" height="2" fill="#14100c"/></g>
        <g class="m-leg m-leg-r"><rect x="18" y="30" width="4" height="7" fill="#2a1e3f"/><rect x="18" y="36" width="6" height="2" fill="#14100c"/></g>
        <!-- body -->
        <rect x="8" y="20" width="16" height="12" rx="1" fill="#ff5d3b"/>
        <rect x="8" y="20" width="16" height="3" fill="#ffb23e"/>
        <!-- arms -->
        <g class="m-arm m-arm-l"><rect x="5" y="21" width="3" height="8" fill="#e8431f"/><rect x="5" y="28" width="3" height="3" fill="#ffd9b0"/></g>
        <g class="m-arm m-arm-r"><rect x="24" y="21" width="3" height="8" fill="#e8431f"/><rect x="24" y="28" width="3" height="3" fill="#ffd9b0"/></g>
        <!-- head: clapperboard -->
        <g class="m-head">
          <rect x="7" y="6" width="18" height="13" rx="1" fill="#14100c"/>
          <!-- clapper stripes top -->
          <g class="m-clap"><rect x="7" y="4" width="18" height="3" fill="#14100c"/>
            <rect x="8" y="4" width="3" height="3" fill="#fff"/><rect x="14" y="4" width="3" height="3" fill="#fff"/><rect x="20" y="4" width="3" height="3" fill="#fff"/>
          </g>
          <!-- face -->
          <rect x="10" y="10" width="12" height="7" fill="#fff9f1"/>
          <rect class="m-eye m-eye-l" x="12" y="12" width="2" height="3" fill="#14100c"/>
          <rect class="m-eye m-eye-r" x="18" y="12" width="2" height="3" fill="#14100c"/>
          <rect class="m-smile" x="13" y="15" width="6" height="1" fill="#ff5d3b"/>
        </g>
      </svg>
    </div>
  </div>`;

// wire year + character injection happens in the SiteFooter component below.

/* ════════════════════════ helpers ════════════════════════ */
const $  = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const reduceMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
const clamp = (v, a, b) => v < a ? a : v > b ? b : v;
const rnd = (a, b) => a + Math.random() * (b - a);

/* ════ THEME ════ */
function initTheme() {
  const toggle = $('#theme-toggle');
  if (!toggle) return;
  const apply = (night) => { document.body.classList.toggle('night', night); toggle.setAttribute('aria-pressed', String(night)); };
  apply(document.body.classList.contains('night'));
  toggle.addEventListener('click', () => {
    const night = !document.body.classList.contains('night');
    const swap = () => { apply(night); try { localStorage.setItem('theme', night ? 'night' : 'day'); } catch(e){} window.updateNavContrast?.(); };
    if (document.startViewTransition && !reduceMotion()) document.startViewTransition(swap);
    else { document.body.classList.add('theme-fading'); swap(); setTimeout(() => document.body.classList.remove('theme-fading'), 500); }
  });
}

/* ════ NAV scroll (compact pill) ════ */
function initNavScroll() {
  const nav = $('#nav'); if (!nav) return;
  const pill = $('#nav-pill');
  let lastY = 0;
  const onScroll = () => {
    const y = window.scrollY;
    nav.classList.toggle('scrolled', y > 20);
    if (pill) {
      if (y > 80 && y > lastY) pill.classList.add('compact');
      else if (y < lastY) pill.classList.remove('compact');
    }
    lastY = y;
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ════ NAV luminance contrast ════ */
function initNavContrast() {
  const nav = $('#nav'); if (!nav) return;
  const parse = s => { const m = s && s.match(/rgba?\(([^)]+)\)/); if (!m) return null; const p = m[1].split(',').map(parseFloat); return { r:p[0], g:p[1], b:p[2], a:p[3]===undefined?1:p[3] }; };
  const lum = ({r,g,b}) => { const f = c => { c/=255; return c<=0.03928 ? c/12.92 : Math.pow((c+0.055)/1.055,2.4); }; return 0.2126*f(r)+0.7152*f(g)+0.0722*f(b); };
  const gradLum = bg => { const cols = bg.match(/rgba?\([^)]+\)/g); if (!cols) return null; let s=0,n=0; cols.forEach(c=>{const p=parse(c); if(p&&p.a>0.1){s+=lum(p);n++;}}); return n?s/n:null; };
  const lumAt = (x,y) => {
    const stack = document.elementsFromPoint(x,y);
    for (const el of stack) {
      if (el === nav || nav.contains(el)) continue;
      if (el.dataset && el.dataset.navbg) return el.dataset.navbg === 'dark' ? 0 : 1;
      const cs = getComputedStyle(el);
      const bc = parse(cs.backgroundColor);
      if (bc && bc.a >= 0.5) return lum(bc);
      const bg = cs.backgroundImage;
      if (bg && bg !== 'none') { const gl = gradLum(bg); if (gl !== null) return gl; }
    }
    return document.body.classList.contains('night') ? 0 : 1;
  };
  let navRect = null;
  window.addEventListener('resize', () => { navRect = null; }, { passive: true });
  const update = () => {
    const r = navRect || (navRect = nav.getBoundingClientRect());
    if (!r.width) { navRect = null; return; }
    const y = r.top + r.height/2;
    const xs = [r.left + 80, (r.left+r.right)/2, r.right - 80];
    let s=0,n=0; xs.forEach(x => { s += lumAt(clamp(x,1,innerWidth-1), y); n++; });
    const dark = (s/n) < 0.5;
    nav.classList.toggle('nav-on-dark', dark);
    nav.classList.toggle('nav-on-light', !dark);
  };
  let last = 0;
  const onScroll = () => { const now = performance.now(); if (now - last < 60) return; last = now; update(); };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.updateNavContrast = update;
  setTimeout(update, 50);
}

/* ════ Active nav link ════ */
function initActiveLink() {
  const page = (location.pathname.split('/').pop() || 'index.html').replace('.html','') || 'index';
  $$('.nav-link[data-nav]').forEach(a => { if (a.dataset.nav === page) a.classList.add('active'); });
}

/* ════ Mobile menu ════ */
function initMenu() {
  const nav = $('#nav'), burger = $('#nav-burger'), overlay = $('#menu-overlay');
  if (!burger || !overlay) return;
  const set = (open) => {
    overlay.classList.toggle('open', open);
    nav.classList.toggle('menu-open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    document.body.style.overflow = open ? 'hidden' : '';
  };
  burger.addEventListener('click', () => set(!overlay.classList.contains('open')));
  $$('.menu-link', overlay).forEach(a => a.addEventListener('click', () => set(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && overlay.classList.contains('open')) set(false); });
}

/* ════ Contact drawer ════ */
function initContact() {
  const drawer = $('#contact-drawer'), scrim = $('#contact-scrim'), closeBtn = $('#cd-close');
  if (!drawer || drawer.dataset.wired) return;
  drawer.dataset.wired = '1';
  let opener = null;
  const set = (open) => {
    drawer.classList.toggle('open', open);
    scrim.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) closeBtn.focus(); else if (opener) { opener.focus(); opener = null; }
  };
  document.addEventListener('click', e => { const t = e.target.closest('[data-contact-open]'); if (!t) return; e.preventDefault(); opener = t; set(true); });
  scrim.addEventListener('click', () => set(false));
  closeBtn.addEventListener('click', () => set(false));
  document.addEventListener('keydown', e => {
    if (!drawer.classList.contains('open')) return;
    if (e.key === 'Escape') { set(false); return; }
    if (e.key !== 'Tab') return;
    const items = $$('a[href], button:not([disabled])', drawer).filter(el => el.offsetParent !== null);
    if (!items.length) return;
    const first = items[0], last = items[items.length-1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
}

/* ════ Reveal on scroll ════ */
function initReveal(root = document) {
  const els = $$('.reveal', root);
  if (!els.length) return;
  if (reduceMotion() || !('IntersectionObserver' in window)) { els.forEach(el => el.classList.add('is-visible')); return; }
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0 });
  els.forEach(el => io.observe(el));
}

/* ════ Counters ════ */
function initCounters(root = document) {
  const nums = $$('[data-count]', root);
  if (!nums.length) return;
  const run = el => {
    const target = parseFloat(el.dataset.count), suffix = el.dataset.suffix || '', dur = 1400;
    if (reduceMotion()) { el.textContent = target + suffix; return; }
    const start = performance.now();
    const tick = now => { const p = Math.min((now-start)/dur, 1); const e = 1-Math.pow(1-p,3); el.textContent = Math.round(target*e) + suffix; if (p<1) requestAnimationFrame(tick); };
    requestAnimationFrame(tick);
  };
  const io = new IntersectionObserver((entries) => { entries.forEach(e => { if (e.isIntersecting) { run(e.target); io.unobserve(e.target); } }); }, { threshold: 0.6 });
  nums.forEach(n => io.observe(n));
}

/* ════ Universal media modal ════
   Trigger: [data-modal] with data-type(image|youtube|pdf|iframe), data-src,
   data-title, data-tag, data-desc, data-link, data-link-label. */
function initModal() {
  if ($('#site-modal')) return;
  const modal = document.createElement('div');
  modal.id = 'site-modal'; modal.className = 'smodal'; modal.setAttribute('role','dialog'); modal.setAttribute('aria-modal','true');
  modal.innerHTML = `<div class="smodal-inner"><button class="smodal-close" aria-label="Close">&times;</button><div class="smodal-media"></div><div class="smodal-body"><span class="smodal-tag"></span><h3></h3><p></p><div class="smodal-actions"></div></div></div>`;
  document.body.appendChild(modal);
  const media = $('.smodal-media', modal), tag = $('.smodal-tag', modal), title = $('h3', modal), desc = $('.smodal-body p', modal), actions = $('.smodal-actions', modal), closeBtn = $('.smodal-close', modal);
  let lastFocus = null;
  const build = (type, src) => {
    switch (type) {
      case 'youtube': return `<iframe src="https://www.youtube.com/embed/${src}?autoplay=1&rel=0" title="Video" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
      case 'pdf': return `<embed src="${src}#toolbar=1" type="application/pdf" />`;
      case 'iframe': return `<iframe src="${src}" title="Embedded content" allowfullscreen loading="lazy"></iframe>`;
      default: return `<img src="${src}" alt="" />`;
    }
  };
  const open = d => {
    lastFocus = document.activeElement;
    media.innerHTML = build(d.type || 'image', d.src);
    media.classList.toggle('portrait', !!d.portrait);
    tag.textContent = d.tag || ''; tag.style.display = d.tag ? '' : 'none';
    title.textContent = d.title || '';
    desc.textContent = d.desc || ''; desc.style.display = d.desc ? '' : 'none';
    actions.innerHTML = '';
    if (d.link) { const a = document.createElement('a'); a.href = d.link; a.target = '_blank'; a.rel = 'noopener'; a.className = 'btn btn-primary'; a.innerHTML = `${d.linkLabel || 'Open link'} <i class="fa-solid fa-arrow-up-right-from-square"></i>`; actions.appendChild(a); }
    if (d.link2) { const a = document.createElement('a'); a.href = d.link2; a.target = '_blank'; a.rel = 'noopener'; a.className = 'btn btn-ghost'; a.innerHTML = `${d.link2Label || 'Open'} <i class="fa-solid fa-arrow-up-right-from-square"></i>`; actions.appendChild(a); }
    const c = document.createElement('button'); c.className = 'btn btn-ghost'; c.textContent = 'Close'; c.addEventListener('click', close); actions.appendChild(c);
    modal.classList.add('open'); document.body.style.overflow = 'hidden'; closeBtn.focus();
  };
  const close = () => { modal.classList.remove('open'); document.body.style.overflow = ''; setTimeout(() => { media.innerHTML = ''; media.classList.remove('portrait'); }, 300); if (lastFocus) lastFocus.focus(); };
  document.addEventListener('click', e => { const t = e.target.closest('[data-modal]'); if (!t) return; e.preventDefault(); open({ type:t.dataset.type, src:t.dataset.src, title:t.dataset.title, tag:t.dataset.tag, desc:t.dataset.desc, link:t.dataset.link, linkLabel:t.dataset.linkLabel, link2:t.dataset.link2, link2Label:t.dataset.link2Label, portrait:t.dataset.portrait }); });
  closeBtn.addEventListener('click', close);
  modal.addEventListener('click', e => { if (e.target === modal) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('open')) close(); });
  window.SahilModal = { open, close };
}

/* ════ Footer headline scrub-grow ════ */
function initFooterGrow() {
  const head = $('.ft-head'); if (!head) return;
  if (reduceMotion()) { head.style.setProperty('--ft-grow', '1'); return; }
  let last = null;
  const update = () => {
    const vh = innerHeight, r = head.getBoundingClientRect(), mid = (r.top + r.bottom)/2;
    let p = (vh - mid) / (vh - vh*0.5); p = clamp(p, 0, 1);
    const v = (0.7 + p*0.3).toFixed(4);
    if (v !== last) { head.style.setProperty('--ft-grow', v); last = v; }
  };
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
}

/* ════ THE CUTTING ROOM — interactive editing timeline ════ */
function initCuttingRoom() {
  const room = $('#cutting-room'), strip = $('#cr-strip'), framesEl = $('#cr-frames'),
        playhead = $('#cr-playhead'), fx = $('#cr-fx'), swatchesEl = $('#cr-swatches'),
        footer = $('.footer');
  if (!room || !strip) return;
  const reduce = reduceMotion();

  // build frames
  const frames = FRAME_DATA.map(d => {
    const f = document.createElement('div');
    f.className = 'cr-frame';
    f.style.setProperty('--f1', d.c1); f.style.setProperty('--f2', d.c2);
    f.innerHTML = `<span class="cr-ico"><i class="fa-solid ${d.ico}"></i></span>`;
    framesEl.appendChild(f);
    return f;
  });
  // build swatches
  const swatches = SWATCHES.map(hex => {
    const s = document.createElement('div');
    s.className = 'cr-swatch'; s.style.background = hex;
    s.innerHTML = `<span>${hex.toUpperCase()}</span>`;
    swatchesEl.appendChild(s);
    return s;
  });

  // scrub cursor (clapper/playhead) that follows pointer over the footer
  let cursor = null, tipX = 22, tipY = 6;
  if (matchMedia('(hover: hover) and (pointer: fine)').matches && !reduce) {
    cursor = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    cursor.setAttribute('viewBox', '0 0 44 44'); cursor.setAttribute('width','40'); cursor.setAttribute('height','40'); cursor.setAttribute('class','ft-cursor');
    cursor.innerHTML = `
      <g transform="rotate(-8 22 20)">
        <rect x="8" y="14" width="28" height="20" rx="3" fill="#14100c"/>
        <rect x="8" y="8" width="28" height="9" rx="2" fill="#ff5d3b"/>
        <g fill="#fbf6ee"><rect x="10" y="9.5" width="5" height="6" transform="rotate(12 12 12)"/><rect x="18" y="9.5" width="5" height="6" transform="rotate(12 20 12)"/><rect x="26" y="9.5" width="5" height="6" transform="rotate(12 28 12)"/></g>
        <circle cx="22" cy="24" r="4.5" fill="#ff5d3b"/><path d="M20.5 21.5v5l4-2.5z" fill="#fff"/>
      </g>`;
    document.body.appendChild(cursor);
  }

  // spark particles
  const sparks = []; let raf = 0;
  const GRAV = 0.32;
  function emit(x, y, colors, n) {
    const cap = 80;
    for (let i = 0; i < n && sparks.length < cap; i++) {
      const r = rnd(3, 6), d = document.createElement('div');
      d.className = 'cr-spark'; d.style.width = d.style.height = r.toFixed(1)+'px';
      d.style.background = colors[(Math.random()*colors.length)|0];
      fx.appendChild(d);
      sparks.push({ el:d, x, y, vx: rnd(-2.6,2.6), vy: rnd(-3.5,-0.5), a:1, r });
    }
    if (!raf) raf = requestAnimationFrame(tick);
  }
  function tick() {
    const h = strip.clientHeight;
    for (let i = sparks.length-1; i >= 0; i--) {
      const s = sparks[i];
      s.vy += GRAV; s.x += s.vx; s.y += s.vy; s.a -= 0.02;
      if (s.a <= 0 || s.y > h + 20) { s.el.remove(); sparks.splice(i,1); continue; }
      s.el.style.transform = `translate(${s.x.toFixed(1)}px, ${s.y.toFixed(1)}px)`;
      s.el.style.opacity = s.a.toFixed(2);
    }
    raf = sparks.length ? requestAnimationFrame(tick) : 0;
  }

  let litCount = 0;
  function scrubTo(clientX) {
    const rect = strip.getBoundingClientRect();
    const x = clamp(clientX - rect.left, 0, rect.width);
    const p = x / rect.width;
    room.classList.add('active');
    playhead.style.left = x + 'px';
    const idx = Math.min(frames.length - 1, Math.floor(p * frames.length));
    for (let i = 0; i <= idx; i++) {
      if (!frames[i].classList.contains('lit')) {
        frames[i].classList.add('lit');
        const d = FRAME_DATA[i];
        if (!reduce) {
          const fr = frames[i].getBoundingClientRect();
          emit(fr.left - rect.left + fr.width/2, fr.top - rect.top + fr.height/2, [d.c1, d.c2], 8);
        }
        // pop a matching swatch
        if (swatches[i % swatches.length]) swatches[i % swatches.length].classList.add('pop');
        litCount++;
      }
    }
    // scrubbing back un-lights beyond playhead
    for (let i = idx + 1; i < frames.length; i++) frames[i].classList.remove('lit');
  }

  // pointer wiring on the strip
  let scrubbing = false;
  const onDown = e => { scrubbing = true; strip.setPointerCapture?.(e.pointerId); scrubTo(e.clientX ?? e.touches?.[0]?.clientX); };
  const onMove = e => { if (!scrubbing) return; scrubTo(e.clientX ?? e.touches?.[0]?.clientX); };
  const onUp = () => { scrubbing = false; };
  strip.addEventListener('pointerdown', onDown);
  strip.addEventListener('pointermove', onMove);
  window.addEventListener('pointerup', onUp);
  // hover reveal (light frames under pointer without dragging)
  strip.addEventListener('pointermove', e => { if (!scrubbing) scrubTo(e.clientX); });

  // footer cursor follow
  if (cursor) {
    footer.addEventListener('pointerenter', () => { footer.classList.add('room-live'); cursor.classList.add('on'); });
    footer.addEventListener('pointerleave', () => { footer.classList.remove('room-live'); cursor.classList.remove('on'); });
    footer.addEventListener('pointermove', e => { cursor.style.transform = `translate(${e.clientX - tipX}px, ${e.clientY - tipY}px)`; }, { passive: true });
  }

  // auto-demo once when scrolled into view (so it's discoverable), then let user play
  if (!reduce && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          io.disconnect();
          const rect = strip.getBoundingClientRect();
          let i = 0;
          const step = () => { if (i > frames.length) return; scrubTo(rect.left + (i/frames.length)*rect.width); i++; setTimeout(step, 130); };
          setTimeout(step, 400);
        }
      });
    }, { threshold: 0.4 });
    io.observe(room);
  } else {
    frames.forEach(f => f.classList.add('lit')); swatches.forEach(s => s.classList.add('pop'));
  }
}

/* ════ DOT CURSOR ════ */
function initDotCursor() {
  const fine = matchMedia('(hover: hover) and (pointer: fine)');
  if (!fine.matches) return;
  const dot = document.createElement('div'); dot.className = 'dot-cursor'; dot.setAttribute('aria-hidden','true');
  const label = document.createElement('span'); label.className = 'dot-label'; dot.appendChild(label);
  document.body.appendChild(dot);
  document.documentElement.classList.add('dot-cursor-on');
  let x = innerWidth/2, y = innerHeight/2, shown = false, raf = 0;
  const HOT = 'a,button,[role="button"],input,textarea,select,label,summary,[data-cursor="hot"]';
  const render = () => { raf = 0; dot.style.transform = `translate3d(${x}px,${y}px,0)`; };
  const tick = () => { if (!raf) raf = requestAnimationFrame(render); };
  window.addEventListener('pointermove', e => {
    if (e.pointerType && e.pointerType !== 'mouse') return;
    x = e.clientX; y = e.clientY;
    if (!shown) { shown = true; dot.classList.add('on'); }
    const labelled = e.target.closest && e.target.closest('[data-cursor-label]');
    if (labelled) label.textContent = labelled.getAttribute('data-cursor-label');
    dot.classList.toggle('labelled', !!labelled);
    dot.classList.toggle('hot', !labelled && !!(e.target.closest && e.target.closest(HOT)));
    tick();
  }, { passive: true });
  window.addEventListener('pointerdown', () => dot.classList.add('down'));
  window.addEventListener('pointerup', () => dot.classList.remove('down'));
  document.addEventListener('mouseleave', () => { shown = false; dot.classList.remove('on'); });
  document.addEventListener('mouseenter', () => { shown = true; dot.classList.add('on'); });
}

/* ════ FILM COUNTDOWN LOADER ════ */
const pageLoader = (() => {
  const el = $('#page-loader');
  if (!el) return { show(){}, hide(){}, boot(){} };
  const numEl = $('.pl-num', el), sweepEl = $('.pl-sweep', el);
  const reduce = reduceMotion();
  let hideTimer = null, visible = true, rafId = 0;
  const lock = on => { document.documentElement.classList.toggle('pl-lock', on); document.body.classList.toggle('pl-lock', on); };
  function animate() {
    if (reduce) { if (numEl) numEl.textContent = '3'; return; }
    const start = performance.now(), total = 2400;
    const run = now => {
      const t = clamp((now - start)/total, 0, 1);
      const deg = (t * 3 % 1) * 360;
      if (sweepEl) sweepEl.style.setProperty('--sweep', deg.toFixed(0) + 'deg');
      if (numEl) numEl.textContent = String(3 - Math.floor(t * 3 + 0.0001)).replace('0','1');
      if (visible) rafId = requestAnimationFrame(run);
    };
    rafId = requestAnimationFrame(run);
  }
  function hide() {
    if (!visible) return; visible = false; cancelAnimationFrame(rafId);
    el.classList.add('is-hiding'); lock(false);
    hideTimer = setTimeout(() => { el.style.display = 'none'; }, reduce ? 0 : 500);
  }
  function settle(ready, { min, cap }) {
    const minWait = new Promise(r => setTimeout(r, reduce ? Math.min(min,500) : min));
    const capped = Promise.race([ Promise.resolve(ready).catch(()=>{}), new Promise(r => setTimeout(r, cap)) ]);
    Promise.all([capped, minWait]).then(hide);
  }
  lock(true); animate();
  return {
    boot() {
      const fonts = (document.fonts && document.fonts.ready) || Promise.resolve();
      const hero = $('.hero');
      const imgs = hero ? $$('img', hero).slice(0, 4) : [];
      const imgReady = img => img.decode ? img.decode().catch(()=>{}) : Promise.resolve();
      settle(Promise.all([fonts, ...imgs.map(imgReady)]), { min: 1400, cap: 6000 });
    },
    hide
  };
})();

/* ════ Web Components ════ */
class SiteNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = NAV_HTML + MENU_HTML + CONTACT_HTML;
    initTheme(); initNavScroll(); initNavContrast(); initActiveLink(); initMenu(); initContact();
  }
}
class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = FOOTER_HTML + CHARACTER_HTML;
    $$('[data-year]', this).forEach(el => el.textContent = new Date().getFullYear());
    initFooterGrow(); initCuttingRoom(); initReveal(this); initCharacter();
  }
}
customElements.define('site-nav', SiteNav);
customElements.define('site-footer', SiteFooter);

/* ════ Infinite project canvas ════
   A seamless, drag-in-any-direction gallery. We build a fixed block of tiles
   (all projects arranged in a near-square grid), then tile that block in a 3×3
   (or larger) super-grid. As the user drags, we move a single plane and wrap it
   with modulo math so the same block repeats forever in every direction. Each
   visible tile is a real button wired to the modal. */
function initInfiniteCanvas() {
  const root = $('#infinite-canvas');
  if (!root) return;
  const viewport = $('#ic-viewport', root);
  const plane = $('#ic-plane', root);
  const hint = $('#ic-hint', root);
  // ── seeded RNG so the random scatter is stable across rebuilds/resizes ──
  function mulberry32(a) { return function () { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }

  const isMobile = matchMedia('(max-width: 640px)').matches;
  const N = PROJECTS.length;

  // A single tileable "block". All projects are scattered RANDOMLY inside it, and
  // the block repeats in every direction → infinite organic scatter (no visible grid).
  // Block is generously larger than the tiles so they don't overlap much.
  const baseW = isMobile ? 190 : 250;           // nominal tile width
  const blockW = isMobile ? 1200 : 2100;        // block canvas size (px)
  const blockH = isMobile ? 1500 : 1500;

  // place each project once, at a seeded-random spot with size + tilt variation.
  // positions kept fully inside [0..block-tileW] so tiling has no hard seams.
  function layoutBlock() {
    const rng = mulberry32(20260809);           // fixed seed = stable layout
    const placed = [];
    const items = [];
    for (let i = 0; i < N; i++) {
      const p = PROJECTS[i];
      const scale = 0.82 + rng() * 0.7;          // 0.82–1.52 size variety
      const w = Math.round(baseW * scale);
      const h = Math.round(w * (0.66 + rng() * 0.12)); // roughly 3:2 with variation
      const rot = (rng() * 2 - 1) * 5;           // −5°…5° tilt
      // try a handful of spots, pick one that doesn't overlap too hard
      let bx = 0, by = 0, best = -1;
      for (let attempt = 0; attempt < 24; attempt++) {
        const cx = rng() * (blockW - w);
        const cy = rng() * (blockH - h);
        // measure nearest-neighbour distance (toroidal, so wraps count)
        let minD = Infinity;
        for (const q of placed) {
          let dx = Math.abs(cx - q.x); dx = Math.min(dx, blockW - dx);
          let dy = Math.abs(cy - q.y); dy = Math.min(dy, blockH - dy);
          const d = Math.hypot(dx, dy);
          if (d < minD) minD = d;
        }
        if (minD > best) { best = minD; bx = cx; by = cy; }
        if (minD > (isMobile ? 180 : 300)) break; // good enough spacing
      }
      placed.push({ x: bx, y: by });
      items.push({ p, x: bx, y: by, w, h, rot });
    }
    return items;
  }
  const BLOCK = layoutBlock();

  function computeCopies() {
    const vw = viewport.clientWidth, vh = viewport.clientHeight;
    const cx = Math.ceil(vw / blockW) + 2;
    const cy = Math.ceil(vh / blockH) + 2;
    return { cx, cy };
  }

  let tiles = [];   // {el, baseX, baseY}
  function build() {
    plane.innerHTML = '';
    tiles = [];
    const { cx, cy } = computeCopies();
    const startBX = -Math.floor(cx / 2), endBX = startBX + cx;
    const startBY = -Math.floor(cy / 2), endBY = startBY + cy;
    const frag = document.createDocumentFragment();
    for (let by = startBY; by < endBY; by++) {
      for (let bx = startBX; bx < endBX; bx++) {
        for (const it of BLOCK) {
          const p = it.p;
          const x = bx * blockW + it.x;
          const y = by * blockH + it.y;
          const el = document.createElement('button');
          el.className = 'ic-tile';
          el.style.width = it.w + 'px';
          el.style.height = it.h + 'px';
          el.style.setProperty('--rot', it.rot.toFixed(2) + 'deg');
          el.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${it.rot}deg)`;
          el.setAttribute('data-modal', '');
          el.setAttribute('data-type', p.type);
          el.setAttribute('data-src', p.src);
          el.setAttribute('data-title', p.title);
          el.setAttribute('data-tag', p.cat);
          if (p.desc) el.setAttribute('data-desc', p.desc);
          if (p.link) { el.setAttribute('data-link', p.link); el.setAttribute('data-link-label', p.linkLabel || 'Open link'); }
          if (p.link2) { el.setAttribute('data-link2', p.link2); el.setAttribute('data-link2-label', p.link2Label || 'Open'); }
          if (p.portrait) el.setAttribute('data-portrait', 'true');
          const playIco = p.type === 'youtube' ? '<i class="fa-solid fa-play"></i>' : '<i class="fa-solid fa-arrow-up-right-from-square"></i>';
          el.innerHTML =
            `<img src="${p.img}"${p.fb ? ` onerror="this.onerror=null;this.src='${p.fb}'"` : ''} alt="${p.title}" loading="lazy" draggable="false">` +
            `<span class="ic-cap"><span class="ic-k">${p.cat}</span><span class="ic-t">${p.title}</span></span>` +
            `<span class="ic-go">${playIco}</span>`;
          frag.appendChild(el);
          tiles.push({ el, baseX: x, baseY: y, rot: it.rot });
        }
      }
    }
    plane.appendChild(frag);
    superW = (endBX - startBX) * blockW;
    superH = (endBY - startBY) * blockH;
    originX = startBX * blockW;
    originY = startBY * blockH;
  }

  let superW = 0, superH = 0, originX = 0, originY = 0;
  let offX = 0, offY = 0, velX = 0, velY = 0;
  let dragging = false, moved = false, lastX = 0, lastY = 0, raf = null;

  function wrap(v, size, origin) {
    // keep v within [origin, origin+size)
    return ((v - origin) % size + size) % size + origin;
  }

  function apply() {
    // each tile = base + drag offset, wrapped into a super-grid window centred on the viewport
    const vw = viewport.clientWidth, vh = viewport.clientHeight;
    const cxp = vw / 2, cyp = vh / 2;
    for (const t of tiles) {
      const x = wrap(t.baseX + offX - cxp, superW, originX) + cxp;
      const y = wrap(t.baseY + offY - cyp, superH, originY) + cyp;
      t.el.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${t.rot}deg)`;
    }
  }

  function momentum() {
    if (dragging) { raf = null; return; }
    velX *= 0.94; velY *= 0.94;
    if (Math.abs(velX) < 0.05 && Math.abs(velY) < 0.05) { raf = null; return; }
    offX += velX; offY += velY;
    apply();
    raf = requestAnimationFrame(momentum);
  }

  // pointer drag
  function down(e) {
    dragging = true; moved = false;
    root.classList.add('grabbing');
    lastX = e.clientX; lastY = e.clientY;
    velX = velY = 0;
    if (raf) { cancelAnimationFrame(raf); raf = null; }
    root.setPointerCapture && root.setPointerCapture(e.pointerId);
  }
  function move(e) {
    if (!dragging) return;
    const dx = e.clientX - lastX, dy = e.clientY - lastY;
    if (Math.abs(dx) + Math.abs(dy) > 3) { moved = true; hideHint(); }
    lastX = e.clientX; lastY = e.clientY;
    offX += dx; offY += dy;
    velX = dx; velY = dy;
    apply();
  }
  function up(e) {
    if (!dragging) return;
    dragging = false;
    root.classList.remove('grabbing');
    if (!raf) raf = requestAnimationFrame(momentum);
    // suppress the click that follows a drag so it doesn't open a modal
    if (moved) {
      const kill = ev => { ev.stopPropagation(); ev.preventDefault(); root.removeEventListener('click', kill, true); };
      root.addEventListener('click', kill, true);
      setTimeout(() => root.removeEventListener('click', kill, true), 60);
    }
  }

  let hintGone = false;
  function hideHint() { if (hintGone) return; hintGone = true; hint && hint.classList.add('gone'); }

  root.addEventListener('pointerdown', down);
  root.addEventListener('pointermove', move);
  window.addEventListener('pointerup', up);
  root.addEventListener('pointercancel', up);
  root.addEventListener('pointerleave', () => { if (dragging) up({ pointerId: null }); });

  // wheel / trackpad pans the canvas too
  root.addEventListener('wheel', e => {
    // only hijack when the gesture is clearly horizontal or the user holds shift,
    // so vertical page scrolling still works normally
    if (e.ctrlKey) return;
    const horizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY);
    if (horizontal || e.shiftKey) {
      e.preventDefault();
      offX -= (e.shiftKey && !horizontal ? e.deltaY : e.deltaX);
      offY -= (horizontal ? 0 : 0);
      hideHint(); apply();
    }
  }, { passive: false });

  // ── perpetual gentle float ──
  // The whole field drifts slowly and continuously (a soft diagonal wander),
  // so the tiles always feel alive. It only pauses while you're actively
  // dragging, then smoothly resumes. Independent of the momentum system.
  let driftT = 0;
  function autoFloat() {
    if (!reduceMotion() && !dragging) {
      driftT += 0.006;
      // base slow leftward/upward drift + a lissajous wander for organic float
      offX -= 0.28 + Math.sin(driftT) * 0.10;
      offY -= 0.10 + Math.cos(driftT * 0.8) * 0.08;
      apply();
    }
    requestAnimationFrame(autoFloat);
  }
  // first interaction just hides the hint; the float keeps going
  root.addEventListener('pointerdown', hideHint, { once: true });
  root.addEventListener('wheel', hideHint, { once: true });

  // build + start
  function boot() { build(); apply(); if (!reduceMotion()) requestAnimationFrame(autoFloat); }
  boot();

  // rebuild on resize (debounced) to keep coverage correct
  let rt = null;
  window.addEventListener('resize', () => {
    clearTimeout(rt);
    rt = setTimeout(() => { const ox = offX, oy = offY; build(); offX = ox; offY = oy; apply(); }, 200);
  });

  // keyboard: arrow keys nudge when canvas focused
  root.tabIndex = 0;
  root.addEventListener('keydown', e => {
    const step = 60;
    if (e.key === 'ArrowLeft')  { offX += step; hideHint(); apply(); e.preventDefault(); }
    if (e.key === 'ArrowRight') { offX -= step; hideHint(); apply(); e.preventDefault(); }
    if (e.key === 'ArrowUp')    { offY += step; hideHint(); apply(); e.preventDefault(); }
    if (e.key === 'ArrowDown')  { offY -= step; hideHint(); apply(); e.preventDefault(); }
  });
}

/* ════ Scroll parallax — ambient depth ════
   Elements tagged [data-parallax] move a fraction of scroll. Positive speed =>
   drifts down slower (feels far); we translate by -progress*speed. */
function initScrollParallax() {
  const layers = $$('[data-parallax]');
  if (!layers.length || reduceMotion()) return;
  let ticking = false;
  const vh = () => window.innerHeight;

  function update() {
    ticking = false;
    const mid = vh() / 2;
    layers.forEach(el => {
      const speed = parseFloat(el.dataset.parallax) || 0;
      const r = el.getBoundingClientRect();
      const center = r.top + r.height / 2;
      const delta = (center - mid) / vh();       // ~ -1 … 1 across viewport
      el.style.transform = `translate3d(0, ${(-delta * speed).toFixed(1)}px, 0)`;
    });
  }
  function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  update();
}

/* ════ Hero pointer parallax ════ (portrait + floating tags react to cursor) */
function initHeroParallax() {
  const hero = $('.hero');
  if (!hero || reduceMotion()) return;
  if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  const layers = $$('[data-hero-depth]', hero);
  if (!layers.length) return;
  let tx = 0, ty = 0, cx = 0, cy = 0, raf = null;
  hero.addEventListener('pointermove', e => {
    const r = hero.getBoundingClientRect();
    tx = ((e.clientX - r.left) / r.width - 0.5) * 2;
    ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
    if (!raf) raf = requestAnimationFrame(tick);
  });
  hero.addEventListener('pointerleave', () => { tx = 0; ty = 0; if (!raf) raf = requestAnimationFrame(tick); });
  function tick() {
    cx += (tx - cx) * 0.07; cy += (ty - cy) * 0.07;
    layers.forEach(el => {
      const d = parseFloat(el.dataset.heroDepth) || 0;
      el.style.setProperty('--tx', (cx * d).toFixed(2) + 'px');
      el.style.setProperty('--ty', (cy * d).toFixed(2) + 'px');
    });
    if (Math.abs(tx - cx) > 0.001 || Math.abs(ty - cy) > 0.001) raf = requestAnimationFrame(tick);
    else raf = null;
  }
}

/* ════ Hero background video ════
   Priority: a real assets/herovideo.mp4 (perfect clean loop) → else YouTube
   iframe API (muted, looped, chrome hidden). Muted autoplay is mandatory in
   all browsers; video never plays sound. Skipped under reduced-motion. */
function initHeroVideo() {
  const wrap = $('#hero-video');
  if (!wrap) return;
  const frame = $('#hv-frame', wrap);
  const mp4 = wrap.dataset.video && wrap.dataset.video.trim();
  const ytId = wrap.dataset.yt && wrap.dataset.yt.trim();
  if (reduceMotion()) return;                 // respect reduced motion — gradient shows instead

  // Try the MP4 first, but only commit to it if the file is actually present
  // and decodable. If it 404s or errors, fall back to YouTube.
  const tryMp4 = () => new Promise(resolve => {
    if (!mp4) return resolve(false);
    const v = document.createElement('video');
    v.muted = true; v.defaultMuted = true; v.loop = true; v.autoplay = true;
    v.playsInline = true; v.setAttribute('playsinline',''); v.preload = 'auto';
    let settled = false;
    const done = ok => { if (settled) return; settled = true; resolve(ok); };
    v.addEventListener('loadeddata', () => {
      frame.classList.remove('yt'); frame.innerHTML = ''; frame.appendChild(v);
      v.play().catch(()=>{});
      wrap.classList.add('ready'); done(true);
    });
    v.addEventListener('error', () => done(false));
    // if it stalls (missing file often just hangs), give up quickly
    setTimeout(() => done(false), 2500);
    v.src = mp4; v.load();
  });

  const loadYouTube = () => {
    if (!ytId) return;
    frame.classList.add('yt');
    const mount = document.createElement('div');
    mount.id = 'hv-yt-' + Math.random().toString(36).slice(2, 7);
    frame.innerHTML = ''; frame.appendChild(mount);

    const build = () => {
      /* eslint-disable no-undef */
      new YT.Player(mount.id, {
        videoId: ytId,
        playerVars: {
          autoplay: 1, controls: 0, mute: 1, loop: 1, playlist: ytId,
          playsinline: 1, modestbranding: 1, rel: 0, showinfo: 0,
          iv_load_policy: 3, disablekb: 1, fs: 0
        },
        events: {
          onReady: e => { e.target.mute(); e.target.playVideo(); wrap.classList.add('ready'); },
          onStateChange: e => { if (e.data === YT.PlayerState.ENDED) e.target.playVideo(); }
        }
      });
    };

    if (window.YT && window.YT.Player) { build(); return; }
    // inject the API once; chain any existing onReady hook
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => { if (typeof prev === 'function') prev(); build(); };
    if (!$('#yt-iframe-api')) {
      const s = document.createElement('script');
      s.id = 'yt-iframe-api'; s.src = 'https://www.youtube.com/iframe_api';
      document.head.appendChild(s);
    }
  };

  tryMp4().then(ok => { if (!ok) loadYouTube(); });
}

/* ════ Mascot controller ════
   Follows the cursor with easing, faces its travel direction, plays a walk
   cycle while moving and an idle when still, waves on hover, spins on click,
   and ducks briefly on fast scroll. Fully disabled for touch / reduced-motion. */
function initCharacter() {
  const el = $('#mascot');
  if (!el) return;
  // skip on touch or reduced motion — it's a delight, not a requirement
  if (reduceMotion() || !matchMedia('(hover: hover) and (pointer: fine)').matches || matchMedia('(pointer: coarse)').matches || window.innerWidth <= 1024) { el.remove(); return; }

  const inner = $('#mascot-inner', el);
  const bubble = $('#mascot-bubble', el);

  const margin = 46;
  // start bottom-left-ish
  let x = 90, y = window.innerHeight - 120;
  let tx = x, ty = y;                     // target = a point offset from the cursor
  let px = x;                             // previous x (for facing + walk speed)
  let facing = 1;
  let mouseX = x, mouseY = y, haveMouse = false;

  el.style.left = '0px'; el.style.top = '0px';

  window.addEventListener('pointermove', e => {
    mouseX = e.clientX; mouseY = e.clientY; haveMouse = true;
  });

  // hover → wave + speech bubble
  let waveT = null;
  el.addEventListener('pointerenter', () => {
    el.classList.add('wave');
    say(pick(["hi!","let's roll 🎬","nice, huh?","drag it →","psst…"]));
    clearTimeout(waveT); waveT = setTimeout(() => el.classList.remove('wave'), 1200);
  });
  // click → spin + confetti-ish hop
  el.addEventListener('click', () => {
    el.classList.remove('spin'); void el.offsetWidth; el.classList.add('spin');
    say(pick(["wheee!","🎬 action!","again!","yay!"]));
    setTimeout(() => el.classList.remove('spin'), 700);
  });

  // scroll → duck
  let duckT = null, lastScroll = window.scrollY;
  window.addEventListener('scroll', () => {
    const dy = Math.abs(window.scrollY - lastScroll); lastScroll = window.scrollY;
    if (dy > 6) {
      el.classList.add('duck');
      clearTimeout(duckT); duckT = setTimeout(() => el.classList.remove('duck'), 260);
    }
  }, { passive: true });

  function say(text) {
    if (!bubble) return;
    bubble.textContent = text;
    bubble.classList.add('show');
    clearTimeout(say._t);
    say._t = setTimeout(() => bubble.classList.remove('show'), 1500);
  }
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }

  let walking = false;
  function loop() {
    // target: stand a bit to the side of the cursor, feet near cursor height
    if (haveMouse) {
      const side = mouseX >= x ? -1 : 1;          // approach from whichever side keeps it facing cursor
      tx = mouseX + side * 54;
      ty = mouseY + 30;
    }
    // clamp to viewport
    tx = clamp(tx, margin, window.innerWidth - margin);
    ty = clamp(ty, margin + 40, window.innerHeight - margin);

    // ease toward target
    const dx = tx - x, dy = ty - y;
    x += dx * 0.06; y += dy * 0.06;

    const speed = Math.abs(x - px);
    px = x;

    // facing follows travel direction (with a small deadzone)
    if (x - tx < -1.2) facing = 1; else if (x - tx > 1.2) facing = -1;

    const nowWalking = speed > 0.25;
    if (nowWalking !== walking) { walking = nowWalking; el.classList.toggle('walking', walking); }
    // walk cadence scales a touch with speed
    inner.style.setProperty('--gait', (clamp(0.6 - speed * 0.03, 0.28, 0.6)).toFixed(2) + 's');

    el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    inner.style.setProperty('--f', facing);

    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);

  // greet once shortly after load
  setTimeout(() => say("hey! 👋"), 1400);

  window.addEventListener('resize', () => {
    x = clamp(x, margin, window.innerWidth - margin);
    y = clamp(y, margin + 40, window.innerHeight - margin);
  });
}

/* ════ Reels swiper ════
   6 portrait cards. Auto-advances every 4s; pauses on hover and plays that
   reel's video inline (muted YouTube); click opens it full-size in the modal;
   drag/swipe to take over. Arrows + dots for manual control. */
function initReels() {
  const track = $('#reels-track');
  if (!track || typeof REELS === 'undefined') return;
  const viewport = $('#reels-viewport');
  const dotsWrap = $('#reels-dots');
  const prevBtn = $('#reels-prev'), nextBtn = $('#reels-next');

  // YouTube thumbnail with local fallback
  const thumb = r => `https://i.ytimg.com/vi/${r.src}/hqdefault.jpg`;

  const cardHTML = (r, i) =>
    `<div class="reel-card" data-idx="${i}" data-src="${r.src}">
       <button class="reel-open" data-modal data-type="youtube" data-portrait="true" data-src="${r.src}" data-title="${r.title}" data-tag="${r.tag}" data-desc="${r.desc || ''}" aria-label="Open ${r.title}">
         <span class="reel-media"><img src="${thumb(r)}" onerror="this.onerror=null;this.src='${r.img}'" alt="${r.title}" loading="lazy" draggable="false"></span>
         <span class="reel-grad"></span>
         <span class="reel-play"><i class="fa-solid fa-play"></i></span>
         <span class="reel-meta"><span class="reel-k">${r.tag}</span><span class="reel-t">${r.title}</span></span>
       </button>
     </div>`;

  // Build TWO copies back-to-back so the marquee can loop seamlessly.
  // We translate left continuously; when we've moved one full set width, we
  // subtract that width (invisible jump because copy 2 is identical to copy 1).
  const setHTML = REELS.map(cardHTML).join('');
  track.innerHTML = setHTML + setHTML;
  const cards = $$('.reel-card', track);
  const setCount = REELS.length;

  // no dots/arrows in marquee mode — hide them
  if (dotsWrap) dotsWrap.style.display = 'none';
  [prevBtn, nextBtn].forEach(b => { if (b) b.style.display = 'none'; });

  // ── measure one set's width (first setCount cards + the gap after) ──
  let setWidth = 0;
  function measure() {
    if (cards.length < setCount + 1) { setWidth = track.scrollWidth / 2; return; }
    const first = cards[0].getBoundingClientRect();
    const nextSetFirst = cards[setCount].getBoundingClientRect();
    setWidth = nextSetFirst.left - first.left;   // exact distance of one full set incl. gap
  }

  let offset = 0;              // current px translate (negative = moved left)
  const SPEED = 0.6;           // px per frame (~36px/s) — slow, smooth float
  let paused = false;
  let raf = null;

  const hoverable = matchMedia('(hover: hover) and (pointer: fine)').matches;

  function normalize() {
    // keep offset within (-setWidth, 0] so the transform never grows unbounded
    if (setWidth > 0) {
      while (offset <= -setWidth) offset += setWidth;
      while (offset > 0) offset -= setWidth;
    }
  }
  function render() { track.style.transform = `translate3d(${offset}px,0,0)`; }

  function tick() {
    if (!paused && !dragging && !reduceMotion()) {
      offset -= SPEED;
      normalize();
      render();
    }
    raf = requestAnimationFrame(tick);
  }

  // ── hover: pause the belt + play that reel inline ──
  function playInline(card) {
    if (card.querySelector('iframe')) return;
    const media = card.querySelector('.reel-media');
    const src = card.dataset.src;
    const f = document.createElement('iframe');
    f.src = `https://www.youtube.com/embed/${src}?autoplay=1&mute=1&controls=0&loop=1&playlist=${src}&modestbranding=1&rel=0&playsinline=1`;
    f.title = 'Reel preview'; f.loading = 'lazy';
    f.allow = 'autoplay; encrypted-media; picture-in-picture';
    f.setAttribute('frameborder', '0');
    media.appendChild(f);
    card.classList.add('playing');
  }
  function stopInline(card) {
    const f = card.querySelector('iframe');
    if (f) f.remove();
    card.classList.remove('playing');
  }
  if (hoverable) {
    cards.forEach(card => {
      card.addEventListener('pointerenter', () => { paused = true; playInline(card); });
      card.addEventListener('pointerleave', () => { stopInline(card); if (!dragging) paused = false; });
    });
  }
  // pausing anywhere on the strip also halts the belt (so it doesn't slide out from under you)
  viewport.addEventListener('pointerenter', () => { if (hoverable) paused = true; });
  viewport.addEventListener('pointerleave', () => { if (!dragging) paused = false; });

  // ── drag / swipe to take over ──
  let dragging = false, startX = 0, startOff = 0, moved = false, lastX = 0, vel = 0;
  viewport.addEventListener('pointerdown', e => {
    dragging = true; moved = false; startX = lastX = e.clientX; startOff = offset; vel = 0;
    paused = true;
    viewport.setPointerCapture && viewport.setPointerCapture(e.pointerId);
  });
  viewport.addEventListener('pointermove', e => {
    if (!dragging) return;
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 4) moved = true;
    vel = e.clientX - lastX; lastX = e.clientX;
    offset = startOff + dx;
    normalize(); render();
  });
  function endDrag() {
    if (!dragging) return;
    dragging = false;
    // fling a little with the release velocity, then resume the belt
    let v = vel;
    (function glide() {
      if (Math.abs(v) < 0.4) { paused = false; return; }
      offset += v; v *= 0.92; normalize(); render();
      requestAnimationFrame(glide);
    })();
    if (moved) { const kill = ev => { ev.stopPropagation(); ev.preventDefault(); viewport.removeEventListener('click', kill, true); }; viewport.addEventListener('click', kill, true); setTimeout(() => viewport.removeEventListener('click', kill, true), 60); }
  }
  window.addEventListener('pointerup', endDrag);
  viewport.addEventListener('pointercancel', endDrag);

  // keep measurements correct on resize / after images load
  function remeasure() { const o = offset; measure(); offset = o; normalize(); render(); }
  window.addEventListener('resize', remeasure);
  window.addEventListener('load', remeasure);
  cards.forEach(c => { const img = c.querySelector('img'); if (img && !img.complete) img.addEventListener('load', remeasure, { once: true }); });

  measure(); render();
  raf = requestAnimationFrame(tick);
}

/* ════ Boot ════ */
document.addEventListener('DOMContentLoaded', () => {
  initReveal(); initCounters(); initModal(); initDotCursor();
  initInfiniteCanvas(); initReels(); initScrollParallax(); initHeroParallax();
  initHeroVideo();
  pageLoader.boot();
});
