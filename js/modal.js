(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    backdrop: document.querySelector("[data-modal]"),
  };

  if (!refs.openModalBtn || !refs.closeModalBtn || !refs.backdrop) return;

  refs.openModalBtn.addEventListener("click", openModal);
  refs.closeModalBtn.addEventListener("click", closeModal);

  function openModal() {
    refs.backdrop.classList.add("is-open");
  }

  function closeModal() {
    refs.backdrop.classList.remove("is-open");
  }
})();
