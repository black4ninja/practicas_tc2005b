//Imprimir document
console.log(document)

//getElementById()
const paragraph1 = document.getElementById("para1");
console.log(paragraph1);
console.log(paragraph1.textContent); //Obtener solo el texto

//querySelector()
const h1Element = document.querySelector("h1"); //Etiquetas generales
console.log(h1Element);

const list = document.querySelector(".list"); //Clases
console.log(list);

//querySelectorAll()

const listItems = document.querySelectorAll("ul > li");
console.log(listItems); 

const listaDeElementos = document.querySelectorAll("ul > li");

listaDeElementos.forEach((item) => {
  console.log(item);
});

//createElement() y appendChild()
let listaSinOrden = document.createElement("ul");
document.body.appendChild(listaSinOrden);

let elemento1Lista = document.createElement("li");
elemento1Lista.textContent = "HTML";
listaSinOrden.appendChild(elemento1Lista);
let elemento2Lista = document.createElement("li");
elemento2Lista.textContent = "CSS";
listaSinOrden.appendChild(elemento2Lista);
let elemento3Lista = document.createElement("li");
elemento3Lista.textContent = "JS";
listaSinOrden.appendChild(elemento3Lista);

document.body.appendChild(document.createElement("hr"));

//Style
let newH3 = document.createElement("h3");
newH3.textContent = "Hola soy un texto en color negro"
document.body.appendChild(newH3);

const h3 = document.querySelector("h3");
h3.style.color = "blue";
h3.textContent = "Ohh no me cambiaron a azul."
console.log(newH3)


//EventListener
let newButton = document.createElement("button");
newButton.textContent = "Mostrar Alerta"
newButton.setAttribute("id","btn");
document.body.appendChild(newButton);

const button = document.getElementById("btn");

button.addEventListener("click", () => {
    alert("Gracias por el click");
});