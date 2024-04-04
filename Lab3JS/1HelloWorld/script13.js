//LOOPS

//Ciclo while

/*
    while (condición) {
        // código
    }
*/

/* 
    let i = 0;
    while (i < 3) { 
        console.log( i );
        i++;
    }

    let i = 3;
    while (i) { 
        console.log( i );
        i--;
    }

    let i = 3;
    while (i) alert(i--);
*/

//Ciclo Do..while

/*
    do {
        // código
    } while (condition);
*/

/*
    let i = 0;
    do {
        alert( i );
        i++;
    } while (i < 3);
*/

//Ciclo for
/*
    for (begin; condition; step) {
        //code
    }
*/

/*
    for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
       console.log(i);
    }
*/

//Break o rompiendo el ciclo
/*
    let sum = 0;

    while (true) {

    let value = +prompt("Enter a number", '');

    if (!value) break; // (*)

        sum += value;

    }
    console.log( 'Sum: ' + sum );
*/

//Continuar la siguiente iteración
/*
    for (let i = 0; i < 10; i++) {

        // si es verdadero, saltar lo que queda del cuerpo
        if (i % 2 == 0) continue;

        console.log(i); // 1, luego 3, 5, 7, 9
    }
*/