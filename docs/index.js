function mostrarMenuMobile()
{
    var navBar = document.getElementById("navBar");
    navBar.classList.toggle("-translate-x-full")
}

function move() {
    var elem = document.getElementById("myBar");   
    var width = 99;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width * 1  + '%';
      }
      document.getElementById("boton").style.display = "none";
      document.getElementById("mensaje").style.display = "block";
      document.getElementById("bordepweb").className = "p-4 bg-white border-l-8 border-green-400 rounded-md shadow-md m-5 ml-0";
      document.getElementById("mensajeAprobacion").textContent = "Aprobado";
      
      elem.className="w3-container w3-green w3-center"
    }
  }