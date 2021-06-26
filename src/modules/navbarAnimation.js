export default function (element, div) {
  document.querySelector(`${element}`).addEventListener("click", function () {
    document.querySelector(div).classList.toggle("navbarAnimation");
  });
}
