const STR = JSON.parse(document.getElementById("strings").textContent);
const emailLink = document.getElementById("email-link");
const EMAIL = emailLink.textContent.trim();

let lang = "id";
let theme = "light";
let currentCard = null;

document.querySelectorAll("[data-en]").forEach((el) => {
  el.dataset.idText = el.textContent.trim();
});
document.querySelectorAll("[data-en-placeholder]").forEach((el) => {
  el.dataset.idPlaceholder = el.getAttribute("placeholder") || "";
});
document.querySelectorAll("[data-en-label]").forEach((el) => {
  el.dataset.idLabel = el.getAttribute("aria-label") || "";
});

const drawer = document.getElementById("drawer");
const scrim = document.getElementById("scrim");
const modal = document.getElementById("modal");
const searchInput = document.getElementById("search");
const empty = document.getElementById("empty");
const countEl = document.getElementById("count");
const form = document.getElementById("contact-form");
const formNote = document.getElementById("form-note");
const copyBtn = document.getElementById("copy-email");
const themeBtn = document.getElementById("theme");

function applyLang() {
  document.documentElement.lang = lang;
  const pack = STR[lang];
  document.querySelectorAll("[data-en]").forEach((el) => {
    el.textContent = lang === "en" ? el.dataset.en : el.dataset.idText;
  });
  document.querySelectorAll("[data-en-placeholder]").forEach((el) => {
    el.placeholder = lang === "en" ? el.dataset.enPlaceholder : el.dataset.idPlaceholder;
  });
  document.querySelectorAll("[data-en-label]").forEach((el) => {
    el.setAttribute("aria-label", lang === "en" ? el.dataset.enLabel : el.dataset.idLabel);
  });
  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.setAttribute("aria-pressed", btn.dataset.lang === lang ? "true" : "false");
  });
  if (copyBtn.dataset.copied !== "1") copyBtn.textContent = pack.copy;
  empty.textContent = pack.empty;
  updateCount();
  updateThemeLabel();
  if (currentCard) fillModal(currentCard);
  localStorage.setItem("ga-lang", lang);
}

function applyTheme() {
  document.documentElement.classList.toggle("dark", theme === "dark");
  updateThemeLabel();
  localStorage.setItem("ga-theme", theme);
}

function updateThemeLabel() {
  const light = lang === "en" ? themeBtn.dataset.enLight : themeBtn.dataset.idLight;
  const dark = lang === "en" ? themeBtn.dataset.enDark : themeBtn.dataset.idDark;
  themeBtn.setAttribute("aria-label", theme === "dark" ? light : dark);
}

function setLock() {
  document.body.style.overflow = drawer.classList.contains("is-open") || modal.classList.contains("is-open") ? "hidden" : "";
}

function go(id) {
  closeDrawer();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function openDrawer() {
  drawer.classList.add("is-open");
  scrim.classList.add("is-open");
  drawer.removeAttribute("inert");
  document.getElementById("menu").setAttribute("aria-expanded", "true");
  setLock();
}

function closeDrawer() {
  drawer.classList.remove("is-open");
  scrim.classList.remove("is-open");
  drawer.setAttribute("inert", "");
  document.getElementById("menu").setAttribute("aria-expanded", "false");
  setLock();
}

function visibleCards() {
  return [...document.querySelectorAll(".card")].filter((card) => !card.classList.contains("is-hidden"));
}

function updateCount() {
  const n = visibleCards().length;
  const pack = STR[lang];
  countEl.textContent = `${n} ${n === 1 ? pack.item : pack.items}`;
}

function applyFilters() {
  const q = searchInput.value.trim().toLowerCase();
  const cat = document.querySelector("[data-cat].is-active")?.dataset.cat || "all";
  document.querySelectorAll(".card").forEach((card) => {
    const catOk = cat === "all" || card.dataset.cat === cat;
    const blob = [
      card.dataset.title,
      card.dataset.tech,
      card.dataset.desc,
      card.dataset.enDesc,
      card.querySelector(".blurb")?.dataset.idText,
      card.querySelector(".blurb")?.dataset.en,
    ]
      .join(" ")
      .toLowerCase();
    card.classList.toggle("is-hidden", !(catOk && (!q || blob.includes(q))));
  });
  const none = visibleCards().length === 0;
  empty.classList.toggle("is-hidden", !none);
  if (!none) empty.textContent = STR[lang].empty;
  else empty.textContent = STR[lang].empty;
  updateCount();
}

function fillModal(card) {
  currentCard = card;
  document.getElementById("modal-title").textContent = card.dataset.title;
  const img = document.getElementById("modal-img");
  img.src = card.dataset.cover;
  img.alt = card.dataset.title;
  document.getElementById("modal-desc").textContent = lang === "en" ? card.dataset.enDesc : card.dataset.desc;
  document.getElementById("modal-role").textContent = lang === "en" ? card.dataset.enRole : card.dataset.role;
  document.getElementById("modal-year").textContent = card.dataset.year;
  document.getElementById("modal-tech").textContent = card.dataset.tech.split("|").join(" · ");
}

function openModal(card) {
  fillModal(card);
  modal.classList.add("is-open");
  modal.removeAttribute("hidden");
  setLock();
  modal.querySelector("[data-close].icon-btn")?.focus();
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("hidden", "");
  currentCard = null;
  setLock();
}

document.querySelectorAll("[data-go]").forEach((btn) => {
  btn.addEventListener("click", () => go(btn.dataset.go));
});

document.querySelectorAll("[data-lang]").forEach((btn) => {
  btn.addEventListener("click", () => {
    lang = btn.dataset.lang;
    applyLang();
  });
});

themeBtn.addEventListener("click", () => {
  theme = theme === "dark" ? "light" : "dark";
  applyTheme();
});

document.getElementById("menu").addEventListener("click", openDrawer);
document.getElementById("drawer-close").addEventListener("click", closeDrawer);
scrim.addEventListener("click", closeDrawer);

document.getElementById("search-form").addEventListener("submit", (event) => {
  event.preventDefault();
  applyFilters();
  go("work");
});
searchInput.addEventListener("input", applyFilters);

document.querySelectorAll("[data-cat]").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("[data-cat]").forEach((el) => {
      el.classList.toggle("is-active", el === btn);
      el.setAttribute("aria-pressed", el === btn ? "true" : "false");
    });
    applyFilters();
  });
});

document.querySelectorAll(".view-btn").forEach((btn) => {
  btn.addEventListener("click", () => openModal(btn.closest(".card")));
});

modal.querySelectorAll("[data-close]").forEach((btn) => {
  btn.addEventListener("click", closeModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeDrawer();
    closeModal();
  }
});

copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(EMAIL);
    copyBtn.dataset.copied = "1";
    copyBtn.textContent = STR[lang].copied;
    window.setTimeout(() => {
      copyBtn.dataset.copied = "0";
      copyBtn.textContent = STR[lang].copy;
    }, 1600);
  } catch {
    copyBtn.dataset.copied = "0";
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const email = String(data.get("email") || "").trim();
  const message = String(data.get("message") || "").trim();
  if (name.length < 2 || !email.includes("@") || message.length < 4) {
    formNote.textContent = STR[lang].error;
    formNote.className = "form-note is-error";
    return;
  }
  const subject = encodeURIComponent(`${STR[lang].subject} — ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
  window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  formNote.textContent = STR[lang].sent;
  formNote.className = "form-note is-ok";
});

const sections = ["home", "work", "skills", "about", "contact"]
  .map((id) => document.getElementById(id))
  .filter(Boolean);

const spy = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    document.querySelectorAll(".nav-tile").forEach((tile) => {
      const on = tile.dataset.go === visible.target.id;
      tile.classList.toggle("is-active", on);
      if (on) tile.setAttribute("aria-current", "true");
      else tile.removeAttribute("aria-current");
    });
    document.querySelectorAll(".mobile-nav .chip").forEach((chip) => {
      chip.classList.toggle("is-active", chip.dataset.go === visible.target.id);
    });
  },
  { rootMargin: "-28% 0px -50% 0px", threshold: [0.1, 0.35, 0.6] },
);
sections.forEach((section) => spy.observe(section));

try {
  lang = localStorage.getItem("ga-lang") === "en" ? "en" : "id";
  theme = localStorage.getItem("ga-theme") === "dark" ? "dark" : "light";
} catch {
  lang = "id";
  theme = "light";
}

applyTheme();
applyLang();
applyFilters();
