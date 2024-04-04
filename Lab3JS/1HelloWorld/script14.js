//FUNCIONES

//Declaración de funciones
/*
    function showMessage() {
        console.log( 'Hello everyone!' );
    }
    showMessage();
    showMessage();
*/

/* 
    function name(parameter1, parameter2, ... parameterN) {
       // código
    }
*/

//Variables locales
/*
    function showMessage() {
        let message = "Hello, I'm JavaScript!"; // local variable

        console.log( message );
    }

    showMessage(); // Hello, I'm JavaScript!

    console.log( message ); // <-- Error! The variable is local to the function
*/

//Variables externas
/* 
    let userName = 'John';

    function showMessage() {
    let message = 'Hello, ' + userName;
    alert(message);
    }

    showMessage(); // Hello, John
*/

/* 
    let userName = 'John';

    function showMessage() {
        userName = "Bob";

        let message = 'Hello, ' + userName;
        console.log(message);
    }

    console.log( userName );
    showMessage();
    console.log( userName );
*/

//Parámetros
/* 
    function showMessage(from, text) { // parameters: from, text
        console.log(from + ': ' + text);
    }

    showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
    showMessage('Ann', "What's up?"); // Ann: What's up? (**)
*/

//Valores default
/*
    function showMessage(from, text = "no text given") {
        console.log( from + ": " + text );
    }

    showMessage("Ann"); // Ann: no text given
    showMessage("Ann", undefined);
*/

//Regresando valores
/*
    function sum(a, b) {
        return a + b;
    }

    let result = sum(1, 2);
    console.log( result ); // 3
*/

//Nombrado de funciones
/* 
    Las funciones sona cciones. Su nombre por lo general es un verbo. Este debe ser breve, tan preciso como sea posible y describir lo que la función hace, para que quien lea el código entienda que hace.

    Por ejemplo, las funciones que empiezan con "show" por lo general muestran algo.

    Otros ejemplos serían:
    "get..." - regresa un valor
    "calc..." - calcula algo
    "create..." - crea algo
    "check..." - checa algo y regresa un boolean, etc.

    showMessage(..)     // shows a message
    getAge(..)          // returns the age (gets it somehow)
    calcSum(..)         // calculates a sum and returns the result
    createForm(..)      // creates a form (and usually returns it)
    checkPermission(..) // checks a permission, returns true/false

*/
