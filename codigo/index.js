const modal = document.querySelector(".modal");
const button1 = document.querySelector("#button1");
const closeButton = document.querySelector(".modal_close_close");

button1.addEventListener("click", () => {
  modal.classList.remove("hiddn");
  modal.classList.add("visible");
});

closeButton.addEventListener("click", () => {
  modal.classList.remove("visible");
  modal.classList.add("hidden");
});
