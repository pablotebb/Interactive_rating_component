// CONSTANTS
const buttons_circle = document.querySelector(".rating__grade");
const number_selection = document.querySelector(".thank__selection span");
const button_submit = document.querySelector(".rating__button");
const section_1 = document.querySelector(".rating");
const section_2 = document.querySelector(".thank");

// EVENT
buttons_circle.addEventListener("click", (e) => {
  let num = e.target.innerText;
  if (num > 0 || num < 6) {
    number_selection.innerText = num;
    button_submit.addEventListener("click", () => {
      section_1.style.display = "none";
      section_2.style.display = "flex";
    });
  }
});
