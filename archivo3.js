class Bebida { //creo la clase bebida 
    constructor(nombre, gradoAlcoholico, sabor) {
        this.nombre = nombre;
        this.gradoAlcoholico = parseFloat(gradoAlcoholico) + "% aprox.";
        this.sabor = sabor;
        //creo este metodo para dar la info sobre la bebida elegida y borrar informacion de busquedas anteriores
    } mostrarData() {  
        let data = document.createElement("p");
        data.innerHTML = "Buscaste <b>"+ this.nombre + "</b> ahí te van algunos datos sobre él antes de que lo uses para preparar tu <b>PROPIO</b> trago: <br> - Grado alcohólico: "+ this.gradoAlcoholico + "<br> - Sabor: "+ this.sabor;
        let padre = document.getElementById("resultados") 
        padre.innerHTML = "";
        padre.appendChild(data)
           
    }
   }
//creo los objetos de las distintas bebidas dentro de esta misma clase.
const gin = new Bebida("Gin", "40", "Variado, puede ser citrico, especiado y hasta con sabor a pepino!");
const ron = new Bebida("Ron", "40", "Suele ser dulce, puede variar en más o menos amaderado y notas específicas");
const vodka = new Bebida("Vodka", 38, "Suele ser bastante neutro o básico, puede tener pequeñas variaciones en algunas notas");

//creo todos los arrays sobre cada trago para poder poner con que ingredientes entan hechos cada uno.
const ginTonic = ["30% de gin", " 70% de agua tonica", " twist o cascara de limon."];
const tomCollins = ["2oz de gin", " 1oz de limon", " 1oz de almibar", " completar con soda."];
const bramble = ["1,5oz  de gin", " 0,5oz de jugo de limon", " 1oz de almibar", " 0,5oz de licor de cassis", " rodaja de limon."];
const cubaLibre = ["30% de ron (recomiendo dorado)", " 70% de gaseosa de cola (recomiendo 'Pepsi')", " rodaja o cuarto de limon."];
const mojito = ["2oz de ron blanco", " 1oz de jugo de limon", " 1oz de almibar", " menta", " completar con soda."];
const daiquiri = ["2oz de ron blanco", " 1oz de jugo de limon/lima", " 1oz de almibar", " rodaja de limon."];
const kamikaze = ["2oz vodka", " 1oz de triple sec", " 1oz de jugo de limon."];
const destornillador = ["2oz/30% de vodka", " 5oz/70% de jugo de naranja", " dash de soda(opcional)."];
const cosmopolitan = ["1,75oz de vodka", " 0,5oz de triple sec", " 1oz de jugo de arandanos", " 0,5oz jugo de lima/limon", " almibar (opcional)", " cascara de lima/limon."];

//inicializo array de las entradas y variable para que sea global
const arrayEntradas = []
let entrada1

//con estas funciones muestro al usuario recetas de tragos con base en la bebida elegida y los hubico en alguno de los lugares.
const mostrarReceta1 = function(trago) { 
    let receta = document.createElement("p");
    receta.innerHTML = "Este trago lleva "+ trago.length + " ingredientes, y estos son: "+ trago;
    let padre = document.getElementById("receta1");
    padre.innerHTML = "";
    padre.appendChild(receta);
        
}
const mostrarReceta2 = function(trago) { 
    let receta = document.createElement("p")
    receta.innerHTML = "Este trago lleva "+ trago.length + " ingredientes, y estos son: "+ trago;
    let padre = document.getElementById("receta2");
    padre.innerHTML = "";
    padre.appendChild(receta);    
}
const mostrarReceta3 = function(trago) { 
    let receta = document.createElement("p");
    receta.innerHTML = "Este trago lleva "+ trago.length + " ingredientes, y estos son: "+ trago;
    let padre = document.getElementById("receta3");
    padre.innerHTML = "";
    padre.appendChild(receta);  
}

//declaraciones globales necesarias para la busqueda y que necesitan estar cargadas antes de apretar el boton para que no salte error 
let receta1 = document.createElement("article");
receta1.setAttribute("id", "receta1");
document.getElementById("recetas").appendChild(receta1);

//declaro la variable del boton para luego aplicarle eventos y funciones.
let botonBuscar = document.getElementById("buscar");
botonBuscar.addEventListener("click", agregarEntrada)
//agrega al array de entradas la entrada (todavia no le doy un uso pero lo dejo pq en un futuro a lo mejor si).
function agregarEntrada(){
     arrayEntradas.push(document.getElementById("buscador").value.toLowerCase());
     console.log(arrayEntradas);
     }
//evento del boton que acciona al algoritmo principal de la pagina.
botonBuscar.addEventListener("click", mostrarInfo)
//muestra la info solicitada.
function mostrarInfo() {
        let entrada1 = document.getElementById("buscador").value.toLowerCase();
        console.log(entrada1);
        //vuelve el buscador a 0 despues de realizada la busqueda.
        document.getElementById("buscador").value = ""
    switch (entrada1) {
        case "gin":
            //muestra la info de la bebida elegida
            gin.mostrarData();
            //muestra el nombre y la receta del primer trago con esa bebida
            let nombreTrago1 = document.getElementById("nombreTrago1");
            nombreTrago1.innerHTML = "Tom Collins:"
            mostrarReceta1(tomCollins);
            //muestra el nombre y la receta del segundo trago con esa bebida
            let nombreTrago2 = document.getElementById("nombreTrago2");
            nombreTrago2.innerHTML = "Gin Tonic:"
            mostrarReceta2(ginTonic);
            //muestra el nombre y la receta del tercer trago con esa bebida
            let nombretrago3 = document.getElementById("nombreTrago3");
            nombretrago3.innerHTML = "Bramble:"
            mostrarReceta3(bramble);
            break;
        case "ron":
             ron.mostrarData();
           
            let nombretrago4 = document.getElementById("nombreTrago1");
            nombretrago4.innerHTML = "Cuba Libre:"
            mostrarReceta1(cubaLibre);
            
            let nombreTrago5 = document.getElementById("nombreTrago2");
            nombreTrago5.innerHTML = "Mojito:"
            mostrarReceta2(mojito);
            
            let nombretrago6 = document.getElementById("nombreTrago3");
            nombretrago6.innerHTML = "Daiquiri:"
            mostrarReceta3(daiquiri);
            break;
        case "vodka":
            vodka.mostrarData();
           
            let nombretrago7 = document.getElementById("nombreTrago1");
            nombretrago7.innerHTML = "Cosmopolitan:"
            mostrarReceta1(cosmopolitan);
            
            let nombreTrago8 = document.getElementById("nombreTrago2");
            nombreTrago8.innerHTML = "Kamikaze(o Balalaika):"
            mostrarReceta2(kamikaze);
            
            let nombretrago9 = document.getElementById("nombreTrago3");
            nombretrago9.innerHTML = "Destornillador:"
            mostrarReceta3(destornillador);
            break;
        default:
            //dejo el alert en vez de utilizar el DOM pq me parece que en este caso especifico esta bien que salte una alerta al momento de realizar una busqueda erronea o inexistente.
            alert("la bebida ingresada no es válida o no esta en la página aún, por favor prueba con otra");

    }
}
//mostrador de busquedas realizadas
//se procede a mostrar la ultima busqueda realizada luego de realizar una busqueda
botonBuscar.addEventListener("click", mostrarBusquedas)
function mostrarBusquedas(){
    //se inicial y ponen a punto las variables, conversiones y datos necesarios utilizando JSON y local
    const busquedasJSON = JSON.stringify(arrayEntradas);
    localStorage.setItem("array busquedas", busquedasJSON);
    let lista = JSON.parse(localStorage.getItem("array busquedas"));
    //loop que muestra la ultima busqueda realizada
   for (const busqueda of lista) {
        let p = document.createElement("p");
        p.setAttribute("class", "busqueda");
        p.innerHTML = busqueda;
        let padre = document.getElementById("busquedasRecientes");
        padre.innerHTML = "Busquedas recientes: "
        document.getElementById("busquedasRecientes").appendChild(p);
    }
  }