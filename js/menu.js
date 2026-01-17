(() => {
  const menu = document.querySelector("[data-menu]");
  const openBtn = document.querySelector("[data-menu-open]");
  const closeBtn = document.querySelector("[data-menu-close]");

  const toggleMenu = () => {
    menu.classList.toggle("is-open");
    document.body.classList.toggle("no-scroll");
  };

  openBtn.addEventListener("click", toggleMenu);
  closeBtn.addEventListener("click", toggleMenu);

  menu.addEventListener("click", (e) => {
    if (e.target.closest("a")) toggleMenu();
  });
})();
