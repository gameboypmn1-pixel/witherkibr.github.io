document.querySelectorAll("[data-lang]").forEach(el=>{
  el.addEventListener("click",()=>{
    localStorage.setItem("wk_lang", el.dataset.lang);
  });
});
(function () {
  // Set/save language preference if links have data-lang
  const langLinks = document.querySelectorAll("[data-lang]");
  langLinks.forEach(a => {
    a.addEventListener("click", () => {
      const lang = a.getAttribute("data-lang");
      if (lang) localStorage.setItem("wk_lang", lang);
    });
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // Year in footer
  const y = document.querySelector("[data-year]");
  if (y) y.textContent = String(new Date().getFullYear());

  // Simple modal ("Coming soon")
  const backdrop = document.querySelector(".modal-backdrop");
  const closeBtn = document.querySelector("[data-modal-close]");
  const openers = document.querySelectorAll("[data-comingsoon]");

  function openModal() {
    if (!backdrop) return;
    backdrop.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    if (!backdrop) return;
    backdrop.style.display = "none";
    document.body.style.overflow = "";
  }

  openers.forEach(btn => btn.addEventListener("click", (e) => {
    e.preventDefault();
    openModal();
  }));

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (backdrop) backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
})();
