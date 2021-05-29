class Bebida { //creo la clase bebida 
    constructor(nombre, gradoAlcoholico, sabor) {
        this.nombre = nombre;
        this.gradoAlcoholico = parseFloat(gradoAlcoholico) + "% aprox.";
        this.sabor = sabor;
    }
    mostrarData() {  //creo este metodo para dar la info sobre la bebida elegida.
        alert("Elegiste "+ this.nombre + " ahí te van algunos datos sobre él antes de que lo uses para preparar tu PROPIO trago: \n - Grado alcohólico: "+ this.gradoAlcoholico + "\n - Sabor: "+ this.sabor);
    }
}
//creo los objetos de las distintas bebidas dentro de esta misma clase.
const gin = new Bebida("Gin", "40", "Variado, puede ser citrico, especiado y hasta con sabor a pepino!");
const ron = new Bebida("Ron", "40", "Suele ser dulce, puede variar en más o menos amaderado y notas específicas");
const vodka = new Bebida("Vodka", 38, "Suele ser bastante neutro o básico, puede tener pequeñas variaciones en algunas notas");

//la primer entrada para saber en base a que bebida quiere prepara su trago
let entrada1 = prompt('Escribe una bebida espirituosa en base a la que quieres que sea tu cocktail (Gin, Ron o Vodka) y a continuacion te aparecera info. sobre la bebida elegida y luego opciones de tragos en base a tu respuesta o bien no pongas nada y dale enter para salir:').toLowerCase();
let entradaAlt = entrada1;

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

//con esta funcion muestro al usuario los ingredientes con los que esta hecho su trago en base a su eleccion.
const mostrarIngredientes = function(trago) { 
    alert("Este trago lleva "+ trago.length + " ingredientes, y estos son: "+ trago);
}


//Pongo estos if aca para que no sea tan repetitivo el msg de la info y solo se repita el prompt para elegir trago.
if (entradaAlt == "gin") {
     gin.mostrarData();
 } else if (entradaAlt == "ron") {
     ron.mostrarData();
 } else if (entradaAlt == "vodka") {
     vodka.mostrarData();
 }

 //bucle para poder elegir el trago para ver su receta, ver mas de un trago hecho con la misma base alcoholica y poder salir en caso de no poner nada al principio o de poner "esc" al final y mensaje de "la palabra es invalida" en caso de que no se cumplan ninguno de las anteriores.
 while (entrada1 != "") {
    if (entrada1 == "gin") {
        let entrada2 = prompt('Muy bien, escribe alguno de los siguientes tragos con base en gin para ver sus ingredientes: tom collins, gin tonic o bramble. Escribe "esc" cuando quieras salir.').toLowerCase()
        if (entrada2 == "esc"){ 
            break;
        } else {
            switch (entrada2){
                case "tom collins":
                    mostrarIngredientes(tomCollins);
                    document.getElementById("mensaje").innerHTML += "<h2 style='color:red;font-size:38px;'>Disfruta tu <b>Tom Collins</b></h2>";
                    break;
                case "gin tonic":
                    mostrarIngredientes(ginTonic);
                    document.getElementById("mensaje").innerHTML += "<h2 style='color:red;font-size:38px;'>Disfruta tu <b>Gin Tonic</b></h2>";
                    break;
                case "bramble":
                    mostrarIngredientes(bramble);
                    document.getElementById("mensaje").innerHTML += "<h2 style='color:red;font-size:38px;'>Disfruta tu <b>Bramble</b></h2>";
                    break;
                default:
                    alert('la palabra ingresada no es valida');
            }
        }
       
    } else if (entrada1 == "ron") {
        let entrada2 = prompt('Muy bien, escribe alguno de los siguientes tragos con base en ron para ver sus ingredientes: cuba libre, mojito o daiquiri. Escribe "esc" cuando quieras salir.').toLowerCase()
        if (entrada2 == "esc") {
            break;
        } else {
            switch (entrada2){
                case "cuba libre":
                    mostrarIngredientes(cubaLibre);
                    document.getElementById("mensaje").innerHTML += "<h2 style='color:red;font-size:38px;'>Disfruta tu <b>Cuba libre</b></h2>";
                    break;
                case "mojito":
                    mostrarIngredientes(mojito);
                    document.getElementById("mensaje").innerHTML += "<h2 style='color:red;font-size:38px;'>Disfruta tu <b>Mojito</b></h2>";
                    break;
                case "daiquiri":
                    mostrarIngredientes(daiquiri);
                    document.getElementById("mensaje").innerHTML += "<h2 style='color:red;font-size:38px;'>Disfruta tu <b>Daiquiri</b></h2>";
                    break;
                default:
                    alert('la palabra ingresada no es valida');
            }
        }
    } else if (entrada1 == "vodka") {
        let entrada2 = prompt('Muy bien, escribe alguno de los siguientes tragos con base en vodka para ver sus ingredientes: destornillador, cosmopolitan o kamikaze. Escribe "esc" cuando quieras salir.').toLowerCase()
        if (entrada2 == "esc") {
            break;
        } else {
            switch (entrada2){
                case "kamikaze":
                    mostrarIngredientes(kamikaze);
                    document.getElementById("mensaje").innerHTML += "<h2 style='color:red;font-size:38px;'>Disfruta tu <b>Kamikaze</b></h2>";
                    break;
                case "cosmopolitan":
                    mostrarIngredientes(cosmopolitan);
                    document.getElementById("mensaje").innerHTML += "<h2 style='color:red;font-size:38px;'>Disfruta tu <b>Cosmopolitan</b></h2>";
                    break;
                case "destornillador":
                    mostrarIngredientes(destornillador);
                    document.getElementById("mensaje").innerHTML += "<h2 style='color:red;font-size:38px;'>Disfruta tu <b>Destornillador</b></h2>";
                    break;
                default:
                    alert('la palabra ingresada no es valida');
            }
        }
    }
}
