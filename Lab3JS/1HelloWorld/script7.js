//TIPOS DE DATOS
//Un valor en Javascript siempre es de cierto tipo. Por ejemplo, un string o un número

//Existen 8 TIPOS BÁSICOS de datos en Javascript.

//Podemos colocar cualquier tipo en una variable. Por ejemplo. una variable puede ser un strin y después almacenar un número.
// no error
let message = "hello";
message = 123456;

/*
    Los lenguajes de programación que permiten esto tales como Javascript son conocidos como dinámicamente tipados, esto significa que existen tipos de datos, pero las variables
    no están ligados a ninguno de ellos.
*/

//NUMBER
let n = 123;
n = 12.345;

//El tipo number representa tanto enteros como flotantes.

//Existen muchos tipos de operación para los numeros. ej. multiplicación *, división /, suma +, resta -, etc.

/*
    Además de los números regulares, también tenemos valores especiales que son: Infinity, -Infinity y NaN.

    - Infinity: Representa el ∞ infinito matemático. Es un valor especial que es mayor a cualquier número.
    alert( 1 / 0 ); // Infinity
    alert( Infinity ); // Infinity
    -NaN: representa un error computacional. Es el resultado de una operación matemática incorrecta o no definida
    alert( "not a number" / 2 ); // NaN, tal división es errónea

    NaN es continua. Cualquier operación matemática en NaN regresa NaN
    alert( NaN + 1 ); // NaN
    alert( 3 * NaN ); // NaN
    alert( "not a number" / 2 - 1 ); // NaN

    Así que si una operación matemática devuelve NaN, se propaga el resultado.
*/

//Realizar operaciones matemáticas en Javascript es "seguro", podemos hacer lo que sea: dividir por 0, tratar valores no numéricos como números, etc.
//El script no fallará con un erro fatal. Lo más que puede suceder es obtener un NaN como resultado.

//BIGINT
/* 
    En Javascript los números se representand por valores enteros (253-1) (eso es 9007199254740991), o menores que -(253-1) para negativos.

    Para ser precisos los números puede soportar hasta 1.7976931348623157 ^ 10308, pero fuera de ese rango existirá un error de precisión, porque no todos los dígitos
    caben en 64-bits. Por lo que un valor aproximado será guardado.
*/
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992

//Para ello el BigInt fue agregado recientemente y se usan agregando una n al final del número.

//La n al final representa el BigInt
const bigInt = 1234567890123456789012345678901234567890n;

//Nota: No es muy común utilizar este tipo de números pero es bueno conocerlos en caso de necesitarlos.

//STRING
//Un string en Javascript se rodea por comillas
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

/*
    En Javascript existen 3 tipos de comillas
    1. Dobles: "Hello".
    2. Simples: 'Hello'.
    3. Backticks: `Hello`.
*/

//Dobles y simples son comillas "sencillas". Practicamente no existe diferencia en Javascript.

/*
    Backticks son comillas de "funcionalidad extendida". Estas nos permiten meter variables y expresiones dentro de un string usando
    la simbología ${...}, por ejemplo

    let name = "John";

    // embed a variable
    alert( `Hello, ${name}!` ); // Hello, John!

    // embed an expression
    alert( `the result is ${1 + 2}` ); // the result is 3
*/


//BOOLEAN
//El tipo boolean tiene los valores true y false
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

//Los valores booleanos son resultado de comparaciones
let isGreater = 4 > 1;

alert( isGreater ); // true

//NULL
//El valor especial null no pertenece a ninguno de los tipos descritos previamente
// Forma parte de un tipo separado de tipos que contienen el valor null
let age = null;

//En Javascript, null es una referencia a un objeto no existente, o un apuntador nulo como en otros lenguajes.
//Es un valor especial el cual representa "nada", "vacío" o "desconocido"
//El código de arriba indica que age es desconocido.

//UNDEFINED
//El valor especial undefined también es un tipo aparte. Es un tipo en sí mismo, como null.
//El significado de undefined es "valor no asignado"
//Si una variable es declarada, pero no asignada, entonces su valor es undefined
/*
    let age;
    alert(age); // shows "undefined"
*/

//Técnicamente es posible asignar undefined a una variable
/*
    let age = 100;

    // change the value to undefined
    age = undefined;

    alert(age); // "undefined"
*/

//Pero no te recomiendo realizar esta acción. Normalmente, uno utiliza null para asignar "vació" o "desconocido" a una variable, mientras que undefined está reservado al valor inicial default para desasignar cosas.

//OBJETOS Y SÍMBOLOS
/*
    El tipo especial Object:
    Todos los otros tipos son llamados "primitive" por que sus valores pueden contener solo una cosa (un string o un número). En contraste, los objetos son usados para almacenar colecciones de datos y entidades más complejas.

    Por lo mismo, los objetos merecen un tratamiento especial.

    El tipo symbol:
    Se usa para crear identificadores únicos para objetos. Tenemos que mencionarlos pero vamos a posponer sus detalles para más adelante.
*/

//EL OPERADOR typeof
/*
    El operador typeof regresa un tipo de operando. Es útil cuando queremos procesar valores de diferens tipos o solo verificar.

    La llamada a typeof x regresa un string con el nombre del tipo de valor de la variable
*/
/* 
    typeof undefined // "undefined"

    typeof 0 // "number"

    typeof 10n // "bigint"

    typeof true // "boolean"

    typeof "foo" // "string"

    typeof Symbol("id") // "symbol"

    typeof Math // "object"  (1)

    typeof null // "object"  (2)

    typeof alert // "function"  (3)
*/

/* 
    Los últimos 3 necesitan una explicación adicional
    1. Math - provee operaciones matemáticas, de momento nos sirve como ejemplo de un objeto.
    2. El resultado del typeof null es "object". Ese es un error oficial reconocido que viene desde las versiones antiguas de Javascript.
    3. El resultado de typeof alert es "function", por que la alerta es una función. Las funciones son un tipo especial.
*/