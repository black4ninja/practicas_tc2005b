function showMessage() {
    console.log( 'Hello everyone!' );
}
showMessage();
showMessage();



function name(parameter1, parameter2, ... parameterN) {
    // código
}



function showMessage() {
    let message = "Hello, I'm JavaScript!"; // local variable

    console.log( message );
}

showMessage(); // Hello, I'm JavaScript!

console.log( message ); // <-- Error! The variable is local to the function



let userName = 'John';

function showMessage() {
let message = 'Hello, ' + userName;
alert(message);
}

showMessage(); // Hello, John



let userName2 = 'John';

function showMessage() {
    userName = "Bob";

    let message = 'Hello, ' + userName2;
    console.log(message);
}

console.log( userName );
showMessage();
console.log( userName );


function showMessage(from, text) { // parameters: from, text
    console.log(from + ': ' + text);
}

showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
showMessage('Ann', "What's up?"); // Ann: What's up? (**)



function showMessage(from, text = "no text given") {
    console.log( from + ": " + text );
}

showMessage("Ann"); // Ann: no text given
showMessage("Ann", undefined);



function sum(a, b) {
    return a + b;
}

let result = sum(1, 2);
console.log( result ); // 3


let sayHi = function() {
    console.log( "Hello" );
};


function sayHi() {
    console.log( "Hello" );
}
console.log( sayHi ); // shows the function code


function sayHi() {   // (1) crear
    console.log( "Hello" );
}

let func = sayHi;    // (2) copiar

func(); // Hello     // (3) ejecutar la copia (funciona)!
sayHi(); // Hello    //     esto aún funciona


function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

function showOk() {
    console.log( "You agreed." );
}

function showCancel() {
    console.log( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);


function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}
  
  ask(
    "Do you agree?",
    function() { console.log("You agreed."); },
    function() { console.log("You canceled the execution."); }
);


let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

alert( sum(1, 2) ); // 3


let double = n => n * 2;
// roughly the same as: let double = function(n) { return n * 2 }
alert( double(3) ); // 6



let sayHi = () => alert("Hello!");
sayHi();



let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => console.log('Hello!') :
  () => console.log("Greetings!");

welcome();


console.log("Hello World");


console.log("Hello World");
console.info("Clash of clans");
console.warn("This is a warning");
console.error("This is an error");


console.assert(1 === "1");
console.assert(1 == true);

console.assert(2 == "1");


const objeto = {atributo1: "Valor 1", atributo2: "valor 2"};
objeto.atributo3 = 3;
console.log(objeto);