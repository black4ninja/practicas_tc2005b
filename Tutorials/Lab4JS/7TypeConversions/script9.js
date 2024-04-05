//CONVERSIONES DE TIPO

//Conversión de Strings
/*
    Conversiones de strin suceden cuando necesitamos convertir un valor en un string.
*/

/*
    let value = true;
    alert(typeof value); // boolean

    value = String(value); // now value is a string "true"
    alert(typeof value); // string
*/

//Las conversiones de string son las más obvias. Un false se convierte en "false", null se convierte en "null", etc.

//Conversión Numérica
//La conversión numérica es una función matemática y las expresiones se dan de manera automática.

//alert( "6" / "2" ); // 3, strings are converted to numbers

//Podemos usar la función Number(value) para convertir explícitamente un valor a número
/*
let str = "123";
alert(typeof str); // string

let num = Number(str); // becomes a number 123

alert(typeof num); // number
*/

//La conversión explícita es requerida  cuando se lee un valor desde string como texto pero se espera un número para ser guardado.
//Si el string no es un número válido, el resultado de la conversión es un NaN.
/*
    let age = Number("an arbitrary string instead of a number");
    alert(age); // NaN, conversion failed
*/

/* 
    alert( Number("   123   ") ); // 123
    alert( Number("123z") );      // NaN (error reading a number at "z")
    alert( Number(true) );        // 1
    alert( Number(false) );       // 0
*/

//Conversión Booleana
//Esta es la más sencilla
/*
    alert( Boolean(1) ); // true
    alert( Boolean(0) ); // false

    alert( Boolean("hello") ); // true
    alert( Boolean("") ); // false
*/