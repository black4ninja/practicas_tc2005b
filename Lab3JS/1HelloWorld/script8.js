//INTERACCIÓN: ALERT, PROMPT, CONFIRM
//Como vamos a estar utilizando el navegador para visualizar nuestro ambiente de demostración, vamos a ver algunas funciones para interactuar con el usuario.

//ALERT
//Este lo hemos estado utilizando  previamente. Aquí se muestra un mensaje que espera a que el usuario presione "OK".

//alert("Hello");

//PROMPT
//La función prompt acepta 2 argumentos. Es una ventana de texto y un campo de texto para el visitante, el resultado contiene los botones OK/Cancel
//result = prompt(title, [default]);

//title - Es el texto que se muestra al visitante.
//default - Como opcional es el segundo parámetro, el valor inicial para el campo de entrada de texto

/*
    Las llaves cuadrada en la sintáxis[...]

    Las llaves cuadradas al rededor de default en la sintáxis denotan que el parámetro es opcional, no requerido.
*/
/*
    let age = prompt('How old are you?', 100);
    alert(`You are ${age} years old!`); // You are 100 years old!
*/

//Para IE siempre coloca un default
/*
    let test = prompt("Test", ''); // <-- for IE
*/

//CONFIRM
//La función confirm muestra una ventana modal con una pregunta y dos botones de OK y Cancel.
/* 
    let isBoss = confirm("Are you the boss?");
    alert( isBoss ); // true if OK is pressed
*/