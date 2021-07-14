function scrollUp(element, maximize) {
  document.querySelector(`.${element}`).classList.toggle("up");
  document.querySelector(`${maximize}`).style.display = "block";
  document.querySelector(`${maximize}`).style.opacity = "1";
}

function scrollDown(element, maximize) {
  document.querySelector(`.${element}`).classList.toggle("up");
  document.querySelector(`${maximize}`).style.opacity = "0";
}

export { scrollUp, scrollDown };
