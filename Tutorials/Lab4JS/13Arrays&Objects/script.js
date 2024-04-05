const arreglo = ["Elemento"];
const arreglo2 = new Array();
arreglo.push("Otro elemento");
arreglo.push(5);
const elemento = 8;
arreglo.push(elemento);
arreglo[10] = "Uno más";
//arreglos asociativos
arreglo["dos"] = 2;

console.log(arreglo);

for (let i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i]);
}

for(let valor of arreglo) {
    console.log(valor);
}
for(let indice in arreglo) {
    console.log(indice);
}


const objeto = { atributo1: "Valor 1", atributo2: "valor 2" };
objeto.atributo3 = 3;
console.log(objeto);