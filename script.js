
const titleElements = document.getElementsByClassName("title");

function changeColor(element) {
 if (element.style.color !== "red") {
  element.style.color = "red";
 }
 else {
  element.style.color = "black";
 }
}

const titlesArray = [...titleElements];

titlesArray.forEach((element) => {
  element.addEventListener("click", function callChangeColorFun() {
    changeColor(element);
  });
});