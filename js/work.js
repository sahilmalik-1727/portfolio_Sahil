/* work.js — category filtering + deep links */
(function () {
  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  document.addEventListener('DOMContentLoaded', () => {
    const btns = $$('.filter-btn'), cards = $$('.work-card'), noRes = $('.no-results'), notes = $$('.cat-note');
    if (!btns.length) return;
    btns.forEach(btn => {
      const f = btn.dataset.filter;
      const cnt = f === 'all' ? cards.length : cards.filter(c => c.dataset.cat === f).length;
      const el = btn.querySelector('.cnt'); if (el) el.textContent = cnt;
    });
    const apply = filter => {
      let shown = 0;
      cards.forEach(card => {
        const match = filter === 'all' || card.dataset.cat === filter;
        card.classList.toggle('is-hidden', !match);
        if (match) { card.style.animationDelay = (shown * 0.04) + 's'; shown++; }
      });
      notes.forEach(n => n.style.display = filter === 'all' ? '' : 'none');
      if (noRes) noRes.style.display = shown === 0 ? 'block' : 'none';
    };
    btns.forEach(btn => btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      apply(btn.dataset.filter);
    }));
    const hash = location.hash.replace('#', '');
    if (hash) { const t = btns.find(b => b.dataset.filter === hash); if (t) t.click(); }
  });
})();
