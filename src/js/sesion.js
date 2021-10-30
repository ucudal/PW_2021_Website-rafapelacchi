
// Seccion Accesos
var cant = parseInt(sessionStorage.getItem("cantidadAccesos"));
if (isNaN(cant)) {
    cant = 1;
    mostrarMensaje("Bienvenido a mi pagina web!", "success");
} else {
    mostrarMensaje("Acceso numero " + cant + ", es un honor tenerlo nuevamente.", "success");
    cant++;
}
sessionStorage.setItem("cantidadAccesos", cant);



// Seccion Mail
function mandoMail(){
    var cant = parseInt(sessionStorage.getItem("mandoMail"));
    return !isNaN(cant) && cant > 0;
}

function agregarRegistroMail(){
    var cant = parseInt(sessionStorage.getItem("mandoMail"));
    cant = isNaN(cant) && cant > 0 ? 1 : cant+1;  
    sessionStorage.setItem("mandoMail", cant);  
}

function getCantMails(){
    var cant = parseInt(sessionStorage.getItem("mandoMail"));
    cant = !isNaN(cant) && cant > 0 ? cant : 0;
    return cant;
}