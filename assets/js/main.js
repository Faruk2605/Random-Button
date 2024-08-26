const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");

const wrapperReact = wrapper.getBoundingClientRect();
const btnNoReact = btnNo.getBoundingClientRect();

btnYes.addEventListener("click", () => {
  question.innerHTML = "I Love You too :)";
});

btnNo.addEventListener("mouseover", () => {
  const i =
    Math.floor(Math.random() * (wrapperReact.width - btnNoReact.width)) + 1;
  const j =
    Math.floor(Math.random() * (wrapperReact.height - btnNoReact.height)) + 1;

  btnNo.style.left = i + "px";
  btnNo.style.top = j + "px";
});
