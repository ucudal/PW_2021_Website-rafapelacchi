
var accedeAnteriormente = "";
var mensaje = "";

if(accedeAnteriormente)
    mensaje = accedeAnteriormente + ", es un gusto tenerlo nuevamente.";
else
    mensaje = "Bienvenido a mi pagina web!";

mostrarMensaje(mensaje, "success");