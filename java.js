// get lines
const lineX = document.querySelector(".line-x");
const lineY = document.querySelector(".line-y");

// onmousemove event listener for detect mouse position
document.addEventListener("mousemove", function (event) {
  lineX.style.top = event.clientY + "px";
  lineY.style.left = event.clientX + "px";
});