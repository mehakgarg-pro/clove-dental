(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // Navbar: mobile toggle + shadow on scroll
  const header = $('.site-header'), nav = $('#nav'), menuBtn = $('#menuBtn');
  const setMenu = open => {
    nav.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', open);
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };
  menuBtn.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
  nav.addEventListener('click', e => e.target.tagName === 'A' && setMenu(false));
  document.addEventListener('keydown', e => e.key === 'Escape' && setMenu(false));
  const onScroll = () => header.classList.toggle('scrolled', scrollY > 10);
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // Accordions (one open at a time per group)
  $$('[data-accordion]').forEach(group => {
    group.addEventListener('click', e => {
      const btn = e.target.closest('button'); if (!btn) return;
      const item = btn.closest('.acc-item');
      const open = !item.classList.contains('open');
      $$('.acc-item', group).forEach(i => {
        i.classList.remove('open');
        $('button', i).setAttribute('aria-expanded', 'false');
      });
      item.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', open);
    });
  });

  // Patient stories slider
  const slider = $('#slider');
  const step = () => slider.firstElementChild.getBoundingClientRect().width + 14;
  $('.prev').addEventListener('click', () => slider.scrollBy({ left: -step() * 2, behavior: 'smooth' }));
  $('.next').addEventListener('click', () => slider.scrollBy({ left: step() * 2, behavior: 'smooth' }));
  slider.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') slider.scrollBy({ left: step(), behavior: 'smooth' });
    if (e.key === 'ArrowLeft') slider.scrollBy({ left: -step(), behavior: 'smooth' });
  });

  // Lead form: captcha + validation
  const code = String(Math.floor(1000 + Math.random() * 9000));
  $$('[data-captcha]').forEach(el => (el.textContent = code));
  $('.lead-form').addEventListener('submit', e => {
    e.preventDefault();
    const f = e.target, msg = $('.msg', f);
    const bad = [];
    const name = f.name.value.trim(), mobile = f.mobile.value.trim();
    if (name.length < 2) bad.push(f.name);
    if (!/^[6-9]\d{9}$/.test(mobile)) bad.push(f.mobile);
    if (f.captcha.value.trim() !== code) bad.push(f.captcha);
    $$('input', f).forEach(i => i.removeAttribute('aria-invalid'));
    bad.forEach(i => i.setAttribute('aria-invalid', 'true'));
    msg.classList.remove('ok');
    if (bad.length) { msg.textContent = 'Please check the highlighted fields.'; bad[0].focus(); return; }
    if (!f.consent.checked) { msg.textContent = 'Please accept the terms to continue.'; return; }
    msg.classList.add('ok');
    msg.textContent = `Thanks ${name}! We'll call you shortly.`;
    f.reset();
  });
})();
