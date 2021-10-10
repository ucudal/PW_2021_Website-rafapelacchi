var cantModals = 0

function mostrarMensaje(strMensaje, typeMessage) {

    let modal = document.createElement('div');
    modal.className = 'modal';
    let mensaje = document.createElement('p');
    mensaje.className = 'modal-content';
    mensaje.textContent = strMensaje;
    modal.append(mensaje);
    document.body.append(modal);

    let color = "";

    if(typeMessage == "error")
    {
        color = "8px solid rgba(220, 38, 38)";
    }

    mensaje.style.borderLeft = color;
    cantModals++;
    let modals = cantModals * 74;
    modal.style.paddingTop= modals + "px";

    mensaje.textContent = strMensaje;
    modal.style.display = "block"; 

    setTimeout(() => { 
         cantModals--;
         modal.remove();
        }, 3500);
}
