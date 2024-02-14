document.addEventListener('astro:page-load', () => {
  const nav = document.querySelector(".nav");
  const a = nav.querySelectorAll("a");
  const currentURL = window.location.href;
  a.forEach((link) => {
    if (link.href === currentURL) {
      link.classList.add("active","text-slate-300","bg-slate-950","border","hover:bg-slate-950","border-violet-600");
      let el = document.getElementById("tab-id");
    }
  });
});