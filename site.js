(() => {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  const SUN = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>`;
  const MOON = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 14.5A8.5 8.5 0 1 1 9.5 3 7 7 0 0 0 21 14.5z"/></svg>`;

  const LABELS = {
    en: { themeToLight: "Switch to light", themeToDark: "Switch to dark" },
    kr: { themeToLight: "라이트 모드", themeToDark: "다크 모드" }
  };

  const state = {
    lang: document.documentElement.classList.contains("lang-kr") ? "kr" : "en",
    theme: document.documentElement.classList.contains("light") ? "light" : "dark",
  };

  function applyChrome() {
    const t = LABELS[state.lang];
    document.documentElement.lang = state.lang === "kr" ? "ko" : "en";
    document.documentElement.classList.toggle("lang-kr", state.lang === "kr");
    document.documentElement.classList.toggle("light", state.theme === "light");

    const title = state.lang === "kr" ? document.body.dataset.titleKr : document.body.dataset.titleEn;
    if (title) document.title = title;

    $$(".lang").forEach((btn) => {
      btn.dataset.lang = state.lang;
      btn.setAttribute("aria-label", state.lang === "kr" ? "Switch to English" : "한국어로 전환");
    });

    $$("[data-theme-toggle]").forEach((btn) => {
      btn.innerHTML = state.theme === "dark" ? SUN : MOON;
      btn.setAttribute("aria-label", state.theme === "dark" ? t.themeToLight : t.themeToDark);
    });
  }

  function setLang(lang) {
    state.lang = lang;
    try { localStorage.setItem("vm-lang", lang); } catch (e) {}
    applyChrome();
    restartType();
  }

  function setTheme(theme) {
    state.theme = theme;
    try { localStorage.setItem("vm-theme", theme); } catch (e) {}
    applyChrome();
  }

  // 1. Animasi Mengetik (Typing Effect)
  let typeTimer = 0;
  let typeState = { i: 0, n: 0, dir: 1 };

  function restartType() {
    window.clearTimeout(typeTimer);
    const el = $(".typed");
    if (!el) return;
    const words = (state.lang === "kr" ? el.dataset.wordsKr : el.dataset.wordsEn).split("|");
    typeState = { i: 0, n: 0, dir: 1, words };
    tickType();
  }

  function tickType() {
    const el = $(".typed");
    if (!el || !typeState.words) return;
    const word = typeState.words[typeState.i % typeState.words.length];
    el.textContent = word.slice(0, typeState.n);

    if (typeState.dir > 0 && typeState.n >= word.length) {
      typeState.dir = -1;
      typeTimer = window.setTimeout(tickType, 1100);
      return;
    }
    if (typeState.dir < 0 && typeState.n <= 0) {
      typeState.dir = 1;
      typeState.i += 1;
      typeTimer = window.setTimeout(tickType, 280);
      return;
    }
    typeState.n += typeState.dir;
    typeTimer = window.setTimeout(tickType, typeState.dir > 0 ? 78 : 36);
  }

  // 2. Animasi Muncul saat Scroll (Scroll Reveal)
  function initReveal() {
    const nodes = $$(".reveal");
    if (!nodes.length) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach((n) => n.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("is-in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.18 }
    );
    nodes.forEach((n) => io.observe(n));
  }

  // 3. Animasi Penghitung Angka (Stats Counter)
  function initCount() {
    const nodes = $$("[data-count]");
    if (!nodes.length) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const run = (el) => {
      const to = Number(el.dataset.count);
      if (reduce) {
        el.textContent = String(to);
        return;
      }
      const start = performance.now();
      const step = (now) => {
        const p = Math.min(1, (now - start) / 900);
        el.textContent = String(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          run(en.target);
          io.unobserve(en.target);
        }
      });
    });
    nodes.forEach((n) => io.observe(n));
  }

  // 4. Animasi 3D Tilt pada Foto About
  function initTilt() {
    const el = $(".about-photo");
    if (!el) return;
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `rotateX(${(-y * 7).toFixed(2)}deg) rotateY(${(x * 8).toFixed(2)}deg)`;
    });
    el.addEventListener("mouseleave", () => {
      el.style.transform = "";
    });
  }

  // Event Listeners untuk Tombol Tema & Bahasa
  function bindChrome() {
    $$("[data-theme-toggle]").forEach((btn) => {
      btn.addEventListener("click", () => setTheme(state.theme === "dark" ? "light" : "dark"));
    });
    $$(".lang").forEach((btn) => {
      btn.addEventListener("click", () => setLang(state.lang === "en" ? "kr" : "en"));
    });
  }

  applyChrome();
  bindChrome();
  initReveal();
  initCount();
  initTilt();
  restartType();
})();
