let message;
message = 'Hello'; 
alert(message);


let message2 = 'Hello!';
alert(message2);


let user = 'John', age = 25, message3 = 'Hello';


let user2 = 'John';
let age2 = 25;
let message4 = 'Hello';

let user3 = 'John',
  age3 = 25,
  message5 = 'Hello';

let user4 = 'John'
  , age4 = 25
  , message6 = 'Hello';

var message7 = 'Hello';


/*
    let message = "This";
    let message = "That"; // SyntaxError: 'message' has already been declared
*/

//NOMBRADO DE VARIABLES
//Existen 2 limitaciones al nombrado de variables
// 1. El nombre contiene solo letras, dígitos o 
//símbolos $ y _.
// 2. El primer caracter no debe ser un dígito.
let userName;
let test123;

let $ = 1; // declarar la variable con el nombre "$"
let _ = 2; // y ahora la variable con el nombre "_"

alert($ + _); // 3

//Ejemplos de variables con nombre incorrectos
/*
    let 1a; // No puede iniciar con un dígito
    let my-name; // hyphens '-' no son permitidos
*/

let имя = '...';
let 我 = '...';
//Técnicamente no existe un error. Pero la convención internacional usa Inglés para el nombre de variables.

// Nota: No se usa "use strict" en este ejemplo
num = 5; // La variable "num" es creada si no existe.
alert(num); // 5

//Esta es una mala práctica y es causa de error con el strict mode
/*
    "use strict";
    num = 5; // error: num is not defined
*/


const myBirthday = '18.04.1982';

 
const myBirthday2 = '18.04.1982';
myBirthday2 = '01.01.2001'; // error, can't reassign the constant!

 
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00
