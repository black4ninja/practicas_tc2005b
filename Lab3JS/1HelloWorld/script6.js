//VARIABLES

/*
    Una variable es información guardada a través de un nombre.
    Podemos usar las variables para guardar productos, visitantes y otro tipo de información.
*/

//Para crear una variable en Javascript usarmos la plabra reservada "let"

let message;

//Ahora podemos asignar información a nuestra variable usando el operador "=""

message = 'Hello'; //Almacena el string 'Hello' en la variable message

//El string ahora guardado en memoria se asocia con esa variable. Podemos acceder a la variable usando el nombre de la misma.

alert(message);

//Para se concisos, podemos combinar la declaración de la variable y su asignación en una sola línea.
//let message2 = 'Hello!';
//alert(message2);

//También podemos declarar múltiples variables en una sola línea
//let user = 'John', age = 25, message = 'Hello';

//Esta forma anterior puede ser corta pero no es recomendada. Por legibilidad es mejor usar una línea por variable
/*
let user = 'John';
let age = 25;
let message = 'Hello';
*/

//Algunas personas definen múltiples variables en este estilo multilínea
/*
let user = 'John',
  age = 25,
  message = 'Hello';
*/

//Incluso este estilo "comma-first"
/**
let user = 'John'
  , age = 25
  , message = 'Hello';
*/

//Tecnicamente todas estas variantes hacen lo mismo, entonces en más un estilo personal y de estética

//VAR EN LUGAR DE LET
//En scripts antigüos, también puedes encontrar el uso de la palabra reservada "var" en lugar de "let"
var message3 = 'Hello';

/* 
    La palabra reservada "var" es casi igual a "let". Este tipo de declaración es la forma "old-school".

    Hay unas sutiles diferencias entre "let" y "var", pero esas diferencias todavía no nos van a interesar.

*/

//Declaraciones dobles lanzan un error
//let message4 = "This";

// 'let' repetido puede llevar a un error
//let message4 = "That"; // SyntaxError: 'message' has already been declared

//NOMBRADO DE VARIABLES
//Existen 2 limitaciones al nombrado de variables
// 1. El nombre contiene solo letras, dígitos o símbolos $ y _.
// 2. El primer caracter no debe ser un dígito.
let userName;
let test123;

/* 
Cuando el nombre contiene múltiples palabras se utiliza el estilo camelCase.
Esto significa: Las palabras van seguidas, cada palabra excepto excepto la primera inician con mayúscula: myVeryLongName.

Lo que es interesante es que el signo de dólar '$' y el guión bajo '_' también pueden usarse en nombre.
Estos son símbolos regulares, justo como letras, sin ningún significado especial.
*/
let $ = 1; // declarar la variable con el nombre "$"
let _ = 2; // y ahora la variable con el nombre "_"

alert($ + _); // 3

//Ejemplos de variables con nombre incorrectos
//let 1a; // No puede iniciar con un dígito

//let my-name; // hyphens '-' no son permitidos

//Las mayúsculas y minúsculas importan
//Las variables nombradas apple y APPLE son 2 variables diferentes.

//Caracteres no latinos son permitidos, pero no recomendados.
//Es posible usar cualquier lenguaje, incluyendo letras Cirílicas, logogramas Chinos
//let имя = '...';
//let 我 = '...';
//Técnicamente no existe un error. Pero la convención internacional usa Inglés para el nombre de variables.

//Una asignación sin usar use strict
/* 
    // Nota: No se usa "use strict" en este ejemplo
    num = 5; // La variable "num" es creada si no existe.
    alert(num); // 5
*/
//Esta es una mala práctica y es causa de error con el strict mode
/*
    "use strict";

    num = 5; // error: num is not defined
*/

//CONSTANTES
//Para declarar constantes, valores que no cambian, se usa la palabra reservada 'const' en lugar de 'let'
const myBirthday = '18.04.1982';

//Las variables declaradas usando 'const' son llamadas "constantes". Estas no pueden ser reasignadas. Un intento para hacerlo causará un error
/* 
    const myBirthday2 = '18.04.1982';
    myBirthday2 = '01.01.2001'; // error, can't reassign the constant!
*/

//Constantes en mayúsculas
/*
    La buena práctica para el uso de constantes difíciles de recordad es usar valores conocidos antes de su ejecución.
    Tales constantes son nombrados usando mayúsculas y guines bajos. 
*/
/* 
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00
*/
/*
    Beneficios:
    - COLOR_ORANGE es más fácil de recordar que #FF7F00
    - Es más fácil equivocarse escribiendo "#FF7F00" que COLOR_ORANGE
    - Cuando leemos el código, COLOR_ORANGE es mas significativo que #FF7F00
*/

//¿Reusar o crear?
/*
    Algunos programadores tienden a reusar las variables en lugar re declarar nuevas.

    Como resultado, sus variables son como cajas donde avientan cosas sin cambiar sus nombres. Como resultado, ¿qué hay dentro de la caja?¿quién sabe?
    Necesitamos ir a detalle y verificar, esto consume mucho tiempo.

    Una variable extra es buena, no mala. Preguntate lo siguiente: ¿Cuánto te cobran por una nueva variable? NADA, SON GRATIS.

    Los optimizadores modernos de Javascript optimizan muy bien el código, entonces no habrá problemas de rendimiento.
    Usar diferentes nombre de variables ayuda incluso al motor de Javascript a optimizar más tu código.
*/