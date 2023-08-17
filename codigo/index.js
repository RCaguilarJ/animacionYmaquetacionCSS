const modal = document.querySelector(".modal");
const button = document.querySelector("#button1");
const close = document.querySelector(".modal_content");

button.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add("visible");
});

close.addEventListener("click", () => {
  modal.classList.add("hidden");
  modal.classList.remove("visible");
});
