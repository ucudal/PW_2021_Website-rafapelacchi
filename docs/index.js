function mostrarMenuMobile()
{
    var navBar = document.getElementById("navBar");
    navBar.classList.toggle("-translate-x-full")
}

function move() {  
      document.getElementById("boton").style.display = "none";
      document.getElementById("mensaje").style.display = "block"; 
      document.getElementById("mensajeAprobacion").textContent = "Aprobado"; 
      document.getElementById("bordepweb").className = "p-4 bg-white border-l-8 border-green-400 rounded-md shadow-md m-5 ml-0";
  }