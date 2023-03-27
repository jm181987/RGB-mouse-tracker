// get lines
const lineX = document.querySelector(".line-x");
const lineY = document.querySelector(".line-y");

// onmousemove event listener for detect mouse position
document.addEventListener("mousemove", function (event) {
  lineX.style.top = event.clientY + "px";
  lineY.style.left = event.clientX + "px";
});



// Obtener el elemento que muestra la posición
var posicionElemento = document.getElementById("posicion");

// Agregar un evento de escucha para detectar el movimiento del mouse
document.addEventListener("mousemove", function (event) {
  // Obtener la posición del mouse en la página
  var x = event.clientX + "px";
  var y = event.clientY ;
  
  // Actualizar el texto del elemento con la posición del mouse
  posicionElemento.textContent = x + ", " + y + "px";
});





// Obtener el modal
var modal = document.getElementById("myModal");

// Obtener el botón que abre el modal
var btn = document.getElementById("myBtn");

// Obtener el botón de cierre
var span = document.getElementsByClassName("close")[0];

// Cuando el usuario haga clic en el botón, abre el modal
btn.onclick = function() {
  modal.style.display = "block";
}

// Cuando el usuario haga clic en el botón de cierre, cierra el modal
span.onclick = function() {
  modal.style.display = "none";
}

// Cuando el usuario haga clic fuera del modal, ciérralo
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}