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


function smoothScroll(id) {
    var target=document.getElementById(id)
    var scrollContainer = target;
    
    do {
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do {
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 10);
    }
    
    if(id == "skills")
    {
        document.querySelectorAll('.skill').forEach(
            function (x){
                var porcentaje = x.dataset.porcentaje;
                x.style.width = porcentaje + "%"
            } 
        )

    }

    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

function joda(){
    mostrarMensaje("Nunca tomaria un cafe con usted si piensa lo contrario", "error") 
}