//Declaramos la url del archivo JSON local para luego sacar desde alli las recetas de los tragos
const URLJSON = "listaTragos.json"
//declaramos la variablecon el metodo/funcion que reinicia las busquedas anterioriores por el aside y oculta las busquedas anteriores que no sean por el aside
const reinicio = () => {
    $("#rtaAside").html("")
    $("#resultados").hide(400)
    $("#recetas").hide(400)
};

//le agregamos el evento click al link del aside "Ron"
$("#asideRon").click( () => {
    //busca en el JSON estatico con la base de datos de las bebidas
  $.getJSON(URLJSON, function (respuesta, estado) {
    if(estado === "success"){
        //si el estado de la busqueda es "success"(exitoso) desarrolla el metodo/funcion "reinicio"
      reinicio();
      let tragos = respuesta;
       for (const trago of tragos) {
          //bucle que por cada trago del JSON mediante el if va a fijarse si su bebida base es "ron": si lo es lo va a mostrar en el DOM y si no lo va a ignorar agregando ""(nada) al html.
        if (trago.bebidaBase == "ron") {
            $("#rtaAside").append(`<div class="trago">
                                <h3 class="nombreTrago2">${trago.nombre}</h3>
                                <b>${trago.info}</b><br>
                                <b>${trago.tipo}</b>
                                <p>${trago.ingredientes}</p>
                            </div>`)
        } else {
            $("#rtaAside").append("");
        }
      }  
    }
    });
});
//le agregamos el evento click al link del aside "Gin", haciendo lo mismo que con el aside de "ron"
$("#asideGin").click( () => {
  $.getJSON(URLJSON, function (respuesta, estado) {
    if(estado === "success"){
      reinicio();
      let tragos = respuesta;
       for (const trago of tragos) {
        if (trago.bebidaBase == "gin") {
            $("#rtaAside").append(`<div class="trago">
                                <h3 class="nombreTrago2">${trago.nombre}</h3>
                                <b>${trago.info}</b><br>
                                <b>${trago.tipo}</b>
                                <p>${trago.ingredientes}</p>
                            </div>`)
        } else {
            $("#rtaAside").append("");
        }
      }  
    }
    });
});
//le agregamos el evento click al link del aside "Vodka", haciendo lo mismo que con el aside de "ron"
$("#asideVodka").click( () => {
    $.getJSON(URLJSON, function (respuesta, estado) {
      if(estado === "success"){
        reinicio();
        let tragos = respuesta;
         for (const trago of tragos) {
          if (trago.bebidaBase == "vodka") {
              $("#rtaAside").append(`<div class="trago">
                                  <h3 class="nombreTrago2">${trago.nombre}</h3>
                                  <b>${trago.info}</b><br>
                                  <b>${trago.tipo}</b>
                                  <p>${trago.ingredientes}</p>
                              </div>`)
          } else {
              $("#rtaAside").append("");
          }
        }  
      }
      });
  });
  //le agregamos el evento click al link del aside "Whiskey", haciendo lo mismo que con el aside de "ron"
$("#asideWhiskey").click( () => {
    $.getJSON(URLJSON, function (respuesta, estado) {
      if(estado === "success"){
        reinicio();
        let tragos = respuesta;
         for (const trago of tragos) {
          if (trago.bebidaBase == "whiskey") {
              $("#rtaAside").append(`<div class="trago">
                                  <h3 class="nombreTrago2">${trago.nombre}</h3>
                                  <b>${trago.info}</b><br>
                                  <b>${trago.tipo}</b>
                                  <p>${trago.ingredientes}</p>
                              </div>`)
          } else {
              $("#rtaAside").append("");
          }
        }  
      }
      });
  });
  //le agregamos el evento click al link del aside "Barndy", haciendo lo mismo que con el aside de "ron"
$("#asideBrandy").click( () => {
    $.getJSON(URLJSON, function (respuesta, estado) {
      if(estado === "success"){
        reinicio();
        let tragos = respuesta;
         for (const trago of tragos) {
          if (trago.bebidaBase == "brandy") {
              $("#rtaAside").append(`<div class="trago">
                                  <h3 class="nombreTrago2">${trago.nombre}</h3>
                                  <b>${trago.info}</b><br>
                                  <b>${trago.tipo}</b>
                                  <p>${trago.ingredientes}</p>
                              </div>`)
          } else {
              $("#rtaAside").append("");
          }
        }  
      }
      });
  });
//le agregamos el evento click al link del aside "Cynar", haciendo lo mismo que con el aside de "ron"
$("#asideCynar").click( () => {
    $.getJSON(URLJSON, function (respuesta, estado) {
      if(estado === "success"){
        reinicio();
        let tragos = respuesta;
         for (const trago of tragos) {
          if (trago.bebidaBase == "cynar") {
              $("#rtaAside").append(`<div class="trago">
                                  <h3 class="nombreTrago2">${trago.nombre}</h3>
                                  <b>${trago.info}</b><br>
                                  <b>${trago.tipo}</b>
                                  <p>${trago.ingredientes}</p>
                              </div>`)
          } else {
              $("#rtaAside").append("");
          }
        }  
      }
      });
  });
//le agregamos el evento click al link del aside "Aperol", haciendo lo mismo que con el aside de "ron"
$("#asideAperol").click( () => {
    $.getJSON(URLJSON, function (respuesta, estado) {
      if(estado === "success"){
        reinicio();
        let tragos = respuesta;
         for (const trago of tragos) {
          if (trago.bebidaBase == "aperol") {
              $("#rtaAside").append(`<div class="trago">
                                  <h3 class="nombreTrago2">${trago.nombre}</h3>
                                  <b>${trago.info}</b><br>
                                  <b>${trago.tipo}</b>
                                  <p>${trago.ingredientes}</p>
                              </div>`)
          } else {
              $("#rtaAside").append("");
          }
        }  
      }
      });
  });
//le agregamos el evento click al link del aside "Tequila", haciendo lo mismo que con el aside de "ron"
$("#asideTequila").click( () => {
    $.getJSON(URLJSON, function (respuesta, estado) {
      if(estado === "success"){
        reinicio();
        let tragos = respuesta;
         for (const trago of tragos) {
          if (trago.bebidaBase == "tequila") {
              $("#rtaAside").append(`<div class="trago">
                                  <h3 class="nombreTrago2">${trago.nombre}</h3>
                                  <b>${trago.info}</b><br>
                                  <b>${trago.tipo}</b>
                                  <p>${trago.ingredientes}</p>
                              </div>`)
          } else {
              $("#rtaAside").append("");
          }
        }  
      }
      });
  });
//le agregamos el evento click al link del aside "Vino", haciendo lo mismo que con el aside de "ron"
$("#asideVino").click( () => {
    $.getJSON(URLJSON, function (respuesta, estado) {
      if(estado === "success"){
        reinicio();
        let tragos = respuesta;
         for (const trago of tragos) {
          if (trago.bebidaBase == "vino") {
              $("#rtaAside").append(`<div class="trago">
                                  <h3 class="nombreTrago2">${trago.nombre}</h3>
                                  <b>${trago.info}</b><br>
                                  <b>${trago.tipo}</b>
                                  <p>${trago.ingredientes}</p>
                              </div>`)
          } else {
              $("#rtaAside").append("");
          }
        }  
      }
      });
  });
//le agregamos el evento click al link del aside "Gancia", haciendo lo mismo que con el aside de "ron"
$("#asideGancia").click( () => {
    $.getJSON(URLJSON, function (respuesta, estado) {
      if(estado === "success"){
        reinicio();
        let tragos = respuesta;
         for (const trago of tragos) {
          if (trago.bebidaBase == "gancia") {
              $("#rtaAside").append(`<div class="trago">
                                  <h3 class="nombreTrago2">${trago.nombre}</h3>
                                  <b>${trago.info}</b><br>
                                  <b>${trago.tipo}</b>
                                  <p>${trago.ingredientes}</p>
                              </div>`)
          } else {
              $("#rtaAside").append("");
          }
        }  
      }
      });
  });
 //le agregamos el evento click al link del aside "Fernet", haciendo lo mismo que con el aside de "ron"
$("#asideFernet").click( () => {
  $.getJSON(URLJSON, function (respuesta, estado) {
    if(estado === "success"){
      reinicio();
      let tragos = respuesta;
       for (const trago of tragos) {
        if (trago.bebidaBase == "fernet") {
            $("#rtaAside").append(`<div class="trago">
                                <h3 class="nombreTrago2">${trago.nombre}</h3>
                                <b>${trago.info}</b><br>
                                <b>${trago.tipo}</b>
                                <p>${trago.ingredientes}</p>
                            </div>`)
        } else {
            $("#rtaAside").append("");
        }
      }  
    }
    });
});