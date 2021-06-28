//SCRIPT DE LA PAGINA DE RECETAS
//Declaramos la url del archivo JSON local
const URLJSON = "listaTragos.json"

//Escuchamos el evento click del botón agregado
$(document).ready(() => { 
$.getJSON(URLJSON, function (respuesta, estado) {
    if(estado === "success"){
      $("#recetas").html(""); //vacio el div cada vez que se aprieta el boton para que no se repita la info
      let tragos = respuesta;
      for (const trago of tragos) {
        $("#recetas").append(`<div class="trago">
                                <h3 class="nombreTrago2">${trago.nombre}</h3>
                                <b>${trago.info}</b><br>
                                <b>${trago.tipo}</b>
                                <p>${trago.ingredientes}</p>
                            </div>`)
      }  
    }
    });
});

//ALGORITMO DE LA BUSQUEDA POR RECETA DE LA PESTAÑA "RECETAS".
let entrada;
$("#buscar").click( () => {
  //pone la pagina en 0 al realizar una nueva busqueda
  $("#resultados").hide(100)
                  .delay(400);
  $("#resultados").html("");
  //hacemos aparecer el div de resultados que estaba oculto hasta ahora
  $("#resultados").show("1000");
  //recupera el value del input de busqueda y lo muestra en un console log para su verificacion.
  let entrada = document.getElementById("buscador").value.toLowerCase();
  console.log(entrada);
  //buscamos en el JSON con la tragos aquellos que cumplan el requisito de la busqueda
  $.getJSON(URLJSON, function (respuesta, estado) {
    if(estado === "success"){
      let tragos = respuesta;
      //filtramos el JSON para conseguir solo aquellos tragos que tienen relacion con la busqueda
      var filtrados = tragos.filter(elemento => elemento.nombre.toLowerCase() == entrada); 
      console.log(filtrados); 
      for (const trago of filtrados) {
        $("#resultados").append(`<div class="trago">
        <h3 class="nombreTrago2">${trago.nombre}</h3>
        <b>${trago.info}</b><br>
        <b>${trago.tipo}</b>
        <p>${trago.ingredientes}</p>
        </div>`)
      }
      }
    })
  //vuelve el input a 0 luego de realizada la busqueda
  document.getElementById("buscador").value = ""
})