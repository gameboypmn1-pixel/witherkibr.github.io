document.querySelectorAll("[data-lang]").forEach(el=>{
  el.addEventListener("click",()=>{
    localStorage.setItem("wk_lang", el.dataset.lang);
  });
});
