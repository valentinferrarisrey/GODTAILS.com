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
      //filtramos el JSON para conseguir solo aquellos tragos que tienen base alcolica en la bebida deseada y lo mostramos en console.log para verificar su correcto funcionamiento.
      var filtrados = tragos.filter(elemento => elemento.bebidaBase === "ron"); 
      console.log(filtrados); 
      for (const trago of filtrados) {
        $("#rtaAside").append(`<div class="trago">
        <h3 class="nombreTrago2">${trago.nombre}</h3>
        <b>${trago.info}</b><br>
        <b>${trago.tipo}</b>
        <p>${trago.ingredientes}</p>
        </div>`)
      }
      }  
    })
  }
);
//le agregamos el evento click al link del aside "gin"
$("#asideGin").click( () => {
    //busca en el JSON estatico con la base de datos de las bebidas
  $.getJSON(URLJSON, function (respuesta, estado) {
    if(estado === "success"){
        //si el estado de la busqueda es "success"(exitoso) desarrolla el metodo/funcion "reinicio"
      reinicio();
      let tragos = respuesta;
      //filtramos el JSON para conseguir solo aquellos tragos que tienen base alcolica en la bebida deseada y lo mostramos en console.log para verificar su correcto funcionamiento.
      var filtrados = tragos.filter(elemento => elemento.bebidaBase === "gin"); 
      console.log(filtrados); 
      for (const trago of filtrados) {
        $("#rtaAside").append(`<div class="trago">
        <h3 class="nombreTrago2">${trago.nombre}</h3>
        <b>${trago.info}</b><br>
        <b>${trago.tipo}</b>
        <p>${trago.ingredientes}</p>
        </div>`)
      }
      }  
    })
  }
);
//le agregamos el evento click al link del aside "Vodka"
$("#asideVodka").click( () => {
  //busca en el JSON estatico con la base de datos de las bebidas
$.getJSON(URLJSON, function (respuesta, estado) {
  if(estado === "success"){
      //si el estado de la busqueda es "success"(exitoso) desarrolla el metodo/funcion "reinicio"
    reinicio();
    let tragos = respuesta;
    //filtramos el JSON para conseguir solo aquellos tragos que tienen base alcolica en la bebida deseada y lo mostramos en console.log para verificar su correcto funcionamiento.
    var filtrados = tragos.filter(elemento => elemento.bebidaBase === "vodka"); 
    console.log(filtrados); 
    for (const trago of filtrados) {
      $("#rtaAside").append(`<div class="trago">
      <h3 class="nombreTrago2">${trago.nombre}</h3>
      <b>${trago.info}</b><br>
      <b>${trago.tipo}</b>
      <p>${trago.ingredientes}</p>
      </div>`)
    }
    }  
  })
}
);
//le agregamos el evento click al link del aside "Whiskey"
$("#asideWhiskey").click( () => {
  //busca en el JSON estatico con la base de datos de las bebidas
$.getJSON(URLJSON, function (respuesta, estado) {
  if(estado === "success"){
      //si el estado de la busqueda es "success"(exitoso) desarrolla el metodo/funcion "reinicio"
    reinicio();
    let tragos = respuesta;
    //filtramos el JSON para conseguir solo aquellos tragos que tienen base alcolica en la bebida deseada y lo mostramos en console.log para verificar su correcto funcionamiento.
    var filtrados = tragos.filter(elemento => elemento.bebidaBase === "whiskey"); 
    console.log(filtrados); 
    for (const trago of filtrados) {
      $("#rtaAside").append(`<div class="trago">
      <h3 class="nombreTrago2">${trago.nombre}</h3>
      <b>${trago.info}</b><br>
      <b>${trago.tipo}</b>
      <p>${trago.ingredientes}</p>
      </div>`)
    }
    }  
  })
}
);
//le agregamos el evento click al link del aside "Brandy"
$("#asideBrandy").click( () => {
  //busca en el JSON estatico con la base de datos de las bebidas
$.getJSON(URLJSON, function (respuesta, estado) {
  if(estado === "success"){
      //si el estado de la busqueda es "success"(exitoso) desarrolla el metodo/funcion "reinicio"
    reinicio();
    let tragos = respuesta;
    //filtramos el JSON para conseguir solo aquellos tragos que tienen base alcolica en la bebida deseada y lo mostramos en console.log para verificar su correcto funcionamiento.
    var filtrados = tragos.filter(elemento => elemento.bebidaBase === "brandy"); 
    console.log(filtrados); 
    for (const trago of filtrados) {
      $("#rtaAside").append(`<div class="trago">
      <h3 class="nombreTrago2">${trago.nombre}</h3>
      <b>${trago.info}</b><br>
      <b>${trago.tipo}</b>
      <p>${trago.ingredientes}</p>
      </div>`)
    }
    }  
  })
}
);
//le agregamos el evento click al link del aside "Tequila"
$("#asideTequila").click( () => {
  //busca en el JSON estatico con la base de datos de las bebidas
$.getJSON(URLJSON, function (respuesta, estado) {
  if(estado === "success"){
      //si el estado de la busqueda es "success"(exitoso) desarrolla el metodo/funcion "reinicio"
    reinicio();
    let tragos = respuesta;
    //filtramos el JSON para conseguir solo aquellos tragos que tienen base alcolica en la bebida deseada y lo mostramos en console.log para verificar su correcto funcionamiento.
    var filtrados = tragos.filter(elemento => elemento.bebidaBase === "tequila"); 
    console.log(filtrados); 
    for (const trago of filtrados) {
      $("#rtaAside").append(`<div class="trago">
      <h3 class="nombreTrago2">${trago.nombre}</h3>
      <b>${trago.info}</b><br>
      <b>${trago.tipo}</b>
      <p>${trago.ingredientes}</p>
      </div>`)
    }
    }  
  })
}
);
//le agregamos el evento click al link del aside "Vino"
$("#asideVino").click( () => {
  //busca en el JSON estatico con la base de datos de las bebidas
$.getJSON(URLJSON, function (respuesta, estado) {
  if(estado === "success"){
      //si el estado de la busqueda es "success"(exitoso) desarrolla el metodo/funcion "reinicio"
    reinicio();
    let tragos = respuesta;
    //filtramos el JSON para conseguir solo aquellos tragos que tienen base alcolica en la bebida deseada y lo mostramos en console.log para verificar su correcto funcionamiento.
    var filtrados = tragos.filter(elemento => elemento.bebidaBase === "vino"); 
    console.log(filtrados); 
    for (const trago of filtrados) {
      $("#rtaAside").append(`<div class="trago">
      <h3 class="nombreTrago2">${trago.nombre}</h3>
      <b>${trago.info}</b><br>
      <b>${trago.tipo}</b>
      <p>${trago.ingredientes}</p>
      </div>`)
    }
    }  
  })
}
);
//le agregamos el evento click al link del aside "Aperol"
$("#asideAperol").click( () => {
  //busca en el JSON estatico con la base de datos de las bebidas
$.getJSON(URLJSON, function (respuesta, estado) {
  if(estado === "success"){
      //si el estado de la busqueda es "success"(exitoso) desarrolla el metodo/funcion "reinicio"
    reinicio();
    let tragos = respuesta;
    //filtramos el JSON para conseguir solo aquellos tragos que tienen base alcolica en la bebida deseada y lo mostramos en console.log para verificar su correcto funcionamiento.
    var filtrados = tragos.filter(elemento => elemento.bebidaBase === "aperol"); 
    console.log(filtrados); 
    for (const trago of filtrados) {
      $("#rtaAside").append(`<div class="trago">
      <h3 class="nombreTrago2">${trago.nombre}</h3>
      <b>${trago.info}</b><br>
      <b>${trago.tipo}</b>
      <p>${trago.ingredientes}</p>
      </div>`)
    }
    }  
  })
}
);
//le agregamos el evento click al link del aside "Gancia"
$("#asideGancia").click( () => {
  //busca en el JSON estatico con la base de datos de las bebidas
$.getJSON(URLJSON, function (respuesta, estado) {
  if(estado === "success"){
      //si el estado de la busqueda es "success"(exitoso) desarrolla el metodo/funcion "reinicio"
    reinicio();
    let tragos = respuesta;
    //filtramos el JSON para conseguir solo aquellos tragos que tienen base alcolica en la bebida deseada y lo mostramos en console.log para verificar su correcto funcionamiento.
    var filtrados = tragos.filter(elemento => elemento.bebidaBase === "gancia"); 
    console.log(filtrados); 
    for (const trago of filtrados) {
      $("#rtaAside").append(`<div class="trago">
      <h3 class="nombreTrago2">${trago.nombre}</h3>
      <b>${trago.info}</b><br>
      <b>${trago.tipo}</b>
      <p>${trago.ingredientes}</p>
      </div>`)
    }
    }  
  })
}
);
//le agregamos el evento click al link del aside "Cynar"
$("#asideCynar").click( () => {
  //busca en el JSON estatico con la base de datos de las bebidas
$.getJSON(URLJSON, function (respuesta, estado) {
  if(estado === "success"){
      //si el estado de la busqueda es "success"(exitoso) desarrolla el metodo/funcion "reinicio"
    reinicio();
    let tragos = respuesta;
    //filtramos el JSON para conseguir solo aquellos tragos que tienen base alcolica en la bebida deseada y lo mostramos en console.log para verificar su correcto funcionamiento.
    var filtrados = tragos.filter(elemento => elemento.bebidaBase === "cynar"); 
    console.log(filtrados); 
    for (const trago of filtrados) {
      $("#rtaAside").append(`<div class="trago">
      <h3 class="nombreTrago2">${trago.nombre}</h3>
      <b>${trago.info}</b><br>
      <b>${trago.tipo}</b>
      <p>${trago.ingredientes}</p>
      </div>`)
    }
    }  
  })
}
);
//le agregamos el evento click al link del aside "Fernet"
$("#asideFernet").click( () => {
  //busca en el JSON estatico con la base de datos de las bebidas
$.getJSON(URLJSON, function (respuesta, estado) {
  if(estado === "success"){
      //si el estado de la busqueda es "success"(exitoso) desarrolla el metodo/funcion "reinicio"
    reinicio();
    let tragos = respuesta;
    //filtramos el JSON para conseguir solo aquellos tragos que tienen base alcolica en la bebida deseada y lo mostramos en console.log para verificar su correcto funcionamiento.
    var filtrados = tragos.filter(elemento => elemento.bebidaBase === "fernet"); 
    console.log(filtrados); 
    for (const trago of filtrados) {
      $("#rtaAside").append(`<div class="trago">
      <h3 class="nombreTrago2">${trago.nombre}</h3>
      <b>${trago.info}</b><br>
      <b>${trago.tipo}</b>
      <p>${trago.ingredientes}</p>
      </div>`)
    }
    }  
  })
}
);