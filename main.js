class Bebida { //creo la clase bebida 
    constructor(nombre, gradoAlcoholico, sabor) {
        this.nombre = nombre;
        this.gradoAlcoholico = parseFloat(gradoAlcoholico) + "% aprox.";
        this.sabor = sabor;
        //creo este metodo para dar la info sobre la bebida elegida y borrar informacion de busquedas anteriores
    } mostrarData() {  
        let data = document.createElement("p");
        data.innerHTML = "Buscaste <b class='nombreTrago'>"+ this.nombre + "</b> ahí te van algunos datos sobre él antes de que lo uses para preparar tu <b>PROPIO</b> trago: <br> - Grado alcohólico: "+ this.gradoAlcoholico + "<br> - Sabor: "+ this.sabor;
        let padre = document.getElementById("resultados") 
        padre.innerHTML = "";
        padre.appendChild(data)
           
    }
   }
//creo los objetos de las distintas bebidas dentro de esta misma clase.
const gin = new Bebida("Gin", "40", "Variado, puede ser citrico, especiado y hasta con sabor a pepino!");
const ron = new Bebida("Ron", "40", "Suele ser dulce, puede variar en más o menos amaderado y notas específicas.");
const vodka = new Bebida("Vodka", "38", "Suele ser bastante neutro o básico, puede tener pequeñas variaciones en algunas notas.");
const whiskey = new Bebida("Whiskey", "38-40", "Si ya es variado con los nombres que puede tener dependiendo de donde fue hecho o con que ingredientes (scotch: escoces, ireland: irlandes, bourbon: de EEUU, rye: de trigo/centeno, corn: de maiz, etc.) puede ser aun mas variado con sus posibles sabores, es una bebida digna de cata y goce.")
const brandy =new Bebida("Brandy/Cognac", "38-40", "con sabor a vino fuerte amaderado, su nombre deriba de la region francesa que lo vio nacer y  solo a los brandys que surgan de alli se les puede llamar 'Conac', el resto son solo eso, brandys.")

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
const horseNeck = ["1,25/1,50oz de whiskey"," completar con ginger ale (5oz/200ml aprox)(se puede reemplazar por gaseaso lima-limon"," opcional: dash de bitter Angostura", " twist/cascara de limon"];
const whiskeySour = ["2oz de whiskey", " 1 oz de jugo de limon"," 1oz almibar", " opcional: 0,5/1 clara de huevo (para mas espuma)", " 3 gotas de bitter Angostura"];
const oldFashioned = [" 1,5oz de whiskey", " 1 cucharada de azucar (o 1/2oz de almibar", "2 ó 3 dashes de bitter Angostura", " opcional: golpe/dash de soda"];
const manhattan = ["2oz de rye/bourbon/whiskey", " 0,75oz vermut rosso", " 1 dash de bitter Angostura"];
const brandyAlexander = ["1oz de brandy/cognac", " 1oz de licor de crema de cacao/chocolate", " 1oz crema de leche", " opcional: 0,5oz almibar"];
const sidecar = ["2oz de brandy/cognac", " 1oz de jugo de limon", " 1oz de triple sec", " 1 dash de almibar"];
const brandyDaisy = [" 2oz de brandy/cognac", " 1oz de jugo de limon", " 1 dash/0,25oz de granadina", " 1 dash de soda", " frutos rojos"];

//declaramos la variable que reinicia las busquedas anterioriores por el aside y las borra en caso de que usemos otro tipo de busqueda
const reinicioAside = () => {
    $("#rtaAside").html("")
}; 

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
//esta ultima la hago con jQuery para demostrar que se utilizarlo
const mostrarReceta4 = function(trago){
    $("#receta4").append("<p>Este trago lleva " + trago.length + "ingredientes, y estos son: "+ trago + "</p>");
}
//declaro la variable del boton para luego aplicarle eventos y funciones.
let botonBuscar = document.getElementById("buscar");
botonBuscar.addEventListener("click", agregarEntrada)
//agrega al array de entradas la entrada (todavia no le doy un uso pero lo dejo pq en un futuro a lo mejor si).
function agregarEntrada(){
     arrayEntradas.unshift(document.getElementById("buscador").value.toLowerCase());
     console.log(arrayEntradas);
     }
//evento del boton que acciona al algoritmo principal de la pagina.
botonBuscar.addEventListener("click", mostrarInfo)
//muestra la info solicitada.
function mostrarInfo() {
        //quitamos las busquedas por el aside anteriores en caso de que las hubiera.
        reinicioAside();
        //hacemos aparecer con una animacion los distintos constenedores de informacion que se mantenian oculto para que no interfirieran en caso que se realizara la busqueda por medio del aside.
        $("#resultados").slideDown(400);
        $("#recetas").slideDown(400);
        //hacemos aparecer el titulo "recetas sugeridas" para que no este siempre
        $("#recetasSugeridas").html('<h2>Recetas sugeridas:</h2>')
        //borramos la info del trago 4 para que en caso de haber buscado antes "whiskey" que tiene un trago mas su informacion no permanezca con otras bebidas
        $("#nombreTrago4, #receta4").html("");
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
        case "whiskey": //en estos dos ultimos "case" usa jQuery para demostrar que se utilizarlo
        case "bourbon":
        case "wiskey":
        case "whisky":
            whiskey.mostrarData();
            $("#nombreTrago1").html("Old Fashioned");
            mostrarReceta1(oldFashioned);
            $("#nombreTrago2").html("Horse`s Neck");
            mostrarReceta2(horseNeck);
            $("#nombreTrago3").html("Manhattan");
            mostrarReceta3(manhattan);
            $("#nombreTrago4").html("Whiskey Sour");
            mostrarReceta4(whiskeySour);
            break;
        case "brandy":
        case "cognac":
            brandy.mostrarData();
            $("#nombreTrago1").html("Brandy Alexander");
            mostrarReceta1(brandyAlexander);
            $("#nombreTrago2").html("Sidecar");
            mostrarReceta2(sidecar);
            $("#nombreTrago3").html("Brandy Daisy");
            mostrarReceta3(brandyDaisy);
            break;
        default:
            //salta una alerta al momento de realizar una busqueda erronea o inexistente.
            $("#error").html('<p id="pError">La bebida ingresada no es válida o no esta implementada en la página aún, por favor prueba con otra.</p>');
            $('#pError').css({ "display": "none",
                              "background-color": "red",
                              "color": "yellow"});
            
            $('#pError').fadeIn(500)
                        .delay(4500)
                        .fadeOut(500);
    }
}
//mostrador de busquedas realizadas con parte en jQuery para mostrar que entiendo su uso.
//se procede a mostrar la ultima busqueda realizada luego de realizar una busqueda.
$("#buscar").click(function mostrarBusquedas(){
    //se inician y ponen a punto las variables, conversiones y datos necesarios utilizando JSON y local
    const busquedasJSON = JSON.stringify(arrayEntradas);
    localStorage.setItem("array busquedas", busquedasJSON);
    let lista = JSON.parse(localStorage.getItem("array busquedas"));
    //se muestra la ultima busqueda realizada
    const ultimaBusqueda = lista[0];
    $("#busquedasRecientes").append(`<p class="busquedas"> ` + ultimaBusqueda +`</p>`)   
  });