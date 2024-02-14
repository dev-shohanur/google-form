
const modalEl = document.getElementsByClassName('modal-mainWrapper');
const modalOpenBtn = document.getElementsByClassName("modalOpenBtn");
Array.from(modalOpenBtn).forEach((val, i) => {
  val.addEventListener("click", (e) => {
    modalEl[i].style.display = "flex"
  })
  val.onClick = () => {
    modalEl[i].style.display = "flex";

  }
})
const modalClose = () => {
  Array.from(modalOpenBtn).forEach((val, i) => {
    modalEl[i].style.display = 'none';
  })
};
window.onClick = (e) => {
  if (e.target === modalEl) {
    modalEl.style.display = 'none';
  }
}
if (!modalEl.style.display) {
  modalEl.style.display = 'none';
}
