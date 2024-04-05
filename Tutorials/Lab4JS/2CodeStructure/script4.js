//DECLARACIONES
//Las declaraciones son sintáxis y comandos que ejecutan acciones
//Ya vimos la primer declaración alert('Hello World') que muesta el mensaje Hello World.

//Podemos tener tantas declaraciones en nuestro código como queramos. Las declaraciones se separan con ;
//Por ejemplo podemos separar "Hello World" en 2 alertas
//alert('Hello'); alert('World');

//Usualmente las declaraciones se escriben en líneas separadas para hacer el código más legible
//alert('Hello');
//alert('World');

//PUNTO Y COMA
//El punto y coma puede ser omitido en la mayoría de los casos cuando un salto de línea exista.
//alert('Hello')
//alert('World')
//Aquí Javascript interpreta el salto de línea como un punto y coma 
//"implicito", a esto se le llama inserción automática de punto y coma.
//Nota: La mayoría de los casos una nueva línea implica un punto y coma. Pero en la mayoría de los casos no significa siempre.

//Existen casos que una nueva línea no significa un punto y coma. Ejemplo:

/*alert(3 +
1
+ 2);*/


/*
El código tiene una salida de 6 por que javascript no inserta el punto y coma aquí. Es obvio en este caso que si la línea termina con un +
entonces se tiene una expresión incompleta, por lo que un punto y coma sería incorrecto.
*/

//Ejemplo de un error, 
//remover el punto y coma del alert para ver 
//el cambio
/*
alert("Hello");

[1, 2].forEach(alert);
*/

//COMENTARIOS
//Conforme el tiempo pasa los programas se hacen más y más complejos, entonces se vuelve necesario agrega comentarios que describen como funciona el código y por qué.
//Los comentarios pueden ser colocados en cualquier lugar del script. Ellos no afectan su ejecución porque el engine simplemente lo ignora.

//One-line comments

/*
    Multiline comments
*/

//Comentarios anidados no son soportados
/*
  /* nested comment ?!? */
// */

//Se recomienda el uso de estándares para la 
//documentación del código
//https://jsdoc.app/