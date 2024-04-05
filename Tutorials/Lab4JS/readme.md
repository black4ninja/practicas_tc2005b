# Intro a Javascript

Para este laboratorio tendras aparte los archivos HTML y JS correspondientes para poder verlos desde tu navegador y podrás ver cada concepto dentro de este documento.

Javascript es el lenguaje de programación por exelencia para usarse dentro del navegador, cuando hablamos de desarrollo web, tenemos que el código HTML, le da estructura a nuestr página, el CSS le da el estilo y JS nos permite dotar de funcionalidad a nuestro sitio.

Visto de otra forma, JS nos va a ayudar a que en la arquitectura cliente-servidor, sea el cliente el que tenga mayor capacidad de solicitar al servidor de información ya sea a través de la petición de la misma o el guardado.

Comenzaremos desde la base de como declarar el javascript para poder trabajar con él, hasta los conceptos generales que tiene el lenguaje de programación.

> Nota: este curso no está orientado a ser una clase de programación de javascript, solamente se toman las nociones básicas para poder empezar a construir sitios web, se te pide que poco a poco entiendas el lenguaje con práctica e investigando por tu cuenta las peculiaridades y especializaciones del lenguaje.

## Inline Scripting
Cuando hablamos de empezar a trabajar con Javascript vamos a tener varias formas de hacerlo.

La primera de ellas es a través del inline sripting o dentro del mismo archivo HTML donde estemos trabajando. Esta forma nos permite visualizar el código en cualquier parte del archivo.

Por lo general aunque se puede realizar la buena práctica nos dice que debemos separar en archivos diferentes la funcionalidad, pero eso lo veremos poco a poco.

Los programas de Javascript pueden ser insertados en cualquier parte del HTML usando la etiqueta

```    
<script></script>
```

Antes era necesarios añadir el atributo **type** pero en las nuevas versiones esto ya no es necesario pues el navegador lo hace de manera automática.
    
```
<script type="text/javascript">
    ...
</script>
```

Para tener una base de donde comenzar podemos tener el siguiente código:

```
<!DOCTYPE HTML>
<html>

<body>

  <p>Before the script...</p>

  <script>
    alert( 'Hello, world!' );
  </script>

  <p>...After the script.</p>

</body>

</html>
```
En el ejemplo anterior vemos como con el uso de la etiqueta **script** podemos añadir en su interior el código de javascript que queramos ejecutar.

La declaración que usamos es una llamada a la función **alert()**, la cual recibe como parámetro un string, y al momento de ejecutarse en el navegador nos muestra un modal de alerta simple con el texto que hayamos pasado como parámetro.

[Ver ejemplo completo HTML](/Tutorials/Lab4JS/1HelloWorld/inline_script.html)

## Estructura de Código
También podemos añadir el código de javascript en archivos separados, en general siempre esta es la mejor práctica que debemos seguir.

Una buena práctica es colocarlos en la parte de abajo afuera del body por cuestiones de carga y velocidad de la página.

En el siguiente archivo HTML vamos a hacer uso de un archivo javascript externo, para ello el nombre del archivo será **script** y la extensión del mismo será .js el cual justamente delimita los archivos de javascript.

```
<!DOCTYPE HTML>
<html>

<body>

  <p>Before the script...</p>


  <p>...After the script.</p>

</body>
<script src="./1_separate_file_script.js"></script>

</html>
```
Observa que colocamos la etiqueta del **script** fuera de la etiqueta **body**, esto es una buena práctica recomendada por lo navegadores, y esto se debe a la carga de la página.

Cuando trabajamos con Javascript es muy común que este realice procesamiento, si la página contiene estilos e imágenes su tiempo de carga puede empezar a aumentar entre más cosas tenga, si a eso le añadimos el tiempo de procesamiento de Javascript hay páginas que tardan hasta 1 minuto en cargar. Si hablamos de páginas web optimizadas son segundos los que tarda un usuario en salirse sin haber visto nuestro contenido. Por ello al colocar el script fuera del body hacemos que esta carga se realice de manera paralela a cuando el usuario ya está navegando esto ayuda a recuperar valiosos segundos de navegación.

Debe existir un equilibrio entre cuando cargar de manera paralela y la carga inicial de la página, pero todo esto se refiere a un tema de optimización para pocisionamiento de la página en buscadores y es todo un tema de estudio.

Ahora bien dentro del nuevo archivo **script.js** podemos empezar directamente a escribir el código de javascript sin necesidad de escribir alguna directiva o etiqueta adicional como se muestra a continuación.

```
alert( 'Hello, world!' );
```

Observa que estamos usando nuevamente la misma declaración que cuando hicimos el **inline scripting**, solo que ahora lo hacemos desde el archivo separado, el resultado final será el mismo que el anterior pero abremos realizado una buena práctica separando nuestros códigos.

[Ver ejemplo completo HTML](/Tutorials/Lab4JS/2CodeStructure/1SeparateFiles/index.html)

[Ver ejemplo completo JS](/Tutorials/Lab4JS/2CodeStructure/1SeparateFiles/script.js)

Podemos cargar tantos archivos de javascript como necesitemos y pueden o no  estar en la carpeta o utilizar algún CDN.

>Nota: Un CDN es un tipo de servidor especial que esta orientado a servir archivos públicos como HTML, CSS, JS, imágenes, etc. Estos servidores tienen la peculiaridad que al no procesar información como un servidor normal son más baratos y tienen un mayor alcance, la idea es poder generar múltiples al rededor del mundo para dar mayor acceso a las aplicaciones. Un ejemplo es que se recomienda que las aplicaciones en React utilicen estos servidores para servir rápidamente la interfaz de usuario independientemente de como se procese la información tal y como lo hace Facebook.

```
<!DOCTYPE HTML>
<html>

    <body>

        <p>Before the script...</p>


        <p>...After the script.</p>

    </body>
    <script src="./script2.js"></script>
    <script src="./script3.js"></script>

</html>
```

Aquí el contenido de **script2** es el siguiente

```
alert( 'Hello' );
```

Y para **script3** el contenido es el siguiente

```
alert( 'world!' );
```

El resultado final es que la ejecución de las instrucciones viene dada por el orden en que colocamos los archivos, entonces para el navegador la fila de instrucciones quedaría de la siguiente forma:

```
alert( 'Hello' );
alert( 'world!' );
```

Si cambiamos de orden los archivos, entonces la fila de instrucciones se invertiría dejando un resultado como:

```
alert( 'world!' );
alert( 'Hello' );
```

> Este último punto es importante ya que si en algún momento necesitamos cargar una librería y ejecutar un código en un archivo separado dependiente de esa librería, debemos asegurarnos que el código se ejecuta después de haberla cargado. Es un error muy común al inicio perder esto de vista y por lo mismo podemos perder tiempo validando código funcional cuando que el verdadero problema es que la librería ni siquiera se ha cargado correctamente al momento de ejecutar el código.

[Ver ejemplo completo HTML](/Tutorials/Lab4JS/2CodeStructure/2MultipleScripts/index.html)
<br>
[Ver ejemplo completo JS 2](/Tutorials/Lab4JS/2CodeStructure/2MultipleScripts/script2.js)
<br>
[Ver ejemplo completo JS 3](/Tutorials/Lab4JS/2CodeStructure/2MultipleScripts/script3.js)

Como adicional obser lo que pasa cuando intentamos cargar un archivo externo de javascript y adentro de esa misma etiqueta ejecutar código también.

```
<!DOCTYPE HTML>
<html>

  <body>

    <p>Before the script...</p>


    <p>...After the script.</p>

  </body>
  
  <script src="./script.js">
      alert(1);
  </script>

</html>
```

Esta forma nos va a generar conflictos, pues si bien no vamos a ver un error en consola, el código que está dentro de la etiqueta no se va a ejecutar, pues una vez declarada la propiedad src de la etiqueta se da prioridad al archivo externo en este caso **script.js**.

Así bien la forma correcta de hacer lo anterior sería la siguiente

```
<!DOCTYPE HTML>
<html>

  <body>

    <p>Before the script...</p>


    <p>...After the script.</p>

  </body>
  <script src="./script.js"></script>
  <script>
    alert(1);
  </script>

</html>
```

Donde de manera continua separamos el código del archivo y en otra etiqueta el inline sripting que queremos ejecutar.

[Ver ejemplo completo HTML](/Tutorials/Lab4JS/2CodeStructure/3CombinedScripting/index.html)

[Ver ejemplo completo JS](/Tutorials/Lab4JS/2CodeStructure/3CombinedScripting/script.js)

**Nota: Para los siguiente ejemeplos seguiremos con el entendido que el archivo HTML no se modifica y solo el contenido del script.js va cambiando**

La base del archivo HTML es la siguiente

```
<!DOCTYPE HTML>
<html>

<body>

  <p>Before the script...</p>


  <p>...After the script.</p>

</body>
<script src="./script.js"></script>

</html>
```

### Declaraciones
Las declaraciones son sintáxis y comandos que ejecutan acciones

Ya vimos la primer declaración alert('Hello World') que muesta el mensaje Hello World.

Podemos tener tantas declaraciones en nuestro código como queramos. Las declaraciones se separan con ;

Por ejemplo podemos separar "Hello World" en 2 alertas

```
alert('Hello'); alert('World');
```

Usualmente las declaraciones se escriben en líneas separadas para hacer el código más legible

```
alert('Hello');
alert('World');
```

### Punto y coma
El punto y coma puede ser omitido en la mayoría de los casos cuando un salto de línea exista.

```
alert('Hello')
alert('World')
```
Aquí Javascript interpreta el salto de línea como un punto y coma "implicito", a esto se le llama inserción automática de punto y coma.

>Nota: La mayoría de los casos una nueva línea implica un punto y coma. Pero en la mayoría de los casos no significa siempre.

Existen casos que una nueva línea no significa un punto y coma. Ejemplo:

```
alert(3 +
1
+ 2);
```

El código tiene una salida de 6 por que javascript no inserta el punto y coma aquí. Es obvio en este caso que si la línea termina con un +
entonces se tiene una expresión incompleta, por lo que un punto y coma sería incorrecto.


Ejemplo de un error, remover el punto y coma del alert para ver el cambio:

```
alert("Hello");

[1, 2].forEach(alert);
```

```
alert("Hello") //Aquí se genera el error

[1, 2].forEach(alert);
```

### Comentarios
Conforme el tiempo pasa los programas se hacen más y más complejos, entonces se vuelve necesario agrega comentarios que describen como funciona el código y por qué.

Los comentarios pueden ser colocados en cualquier lugar del script. Ellos no afectan su ejecución porque el engine simplemente lo ignora.

```
//One-line comments
```

```
/*
    Multiline comments
*/
```

```
//Comentarios anidados no son soportados
/*
  /* nested comment ?!? */
// */
```

Se recomienda el uso de estándares para la documentación del código para Javascript se utiliza [JSDoc](https://jsdoc.app/)

[Ver ejemplo completo HTML](/Tutorials/Lab4JS/2CodeStructure/4CodeStructure/index.html)

[Ver ejemplo completo JS](/Tutorials/Lab4JS/2CodeStructure/4CodeStructure/script.js)

## UseStrict

Por un largo tiempo, Javascript evolucionó sin problemas de compatibilidad. Nuevas funcionalidades fueron añadidas al lenguaje
mientras mientras que funcionalidad antigüa no cambió.

Eso tuvo el beneficio de nunca romper el código. Sin embargo, un problema de ello es que el lenguaje se quedó atrapado en el tiempo.

Esto cambio en 2009 con la llegada de ECMAScript5 (ES5) apareció. Agregó nuevas funcionalidades al lenguaje y modificar algunas de las existentes.
Para poder mantener el código viejo funcionando esas modificaciones fueron apagadas por default.

Para ello debes habilitar estas directivas usando: "use strict"

La directiva debe colocarse al inicio de un script, para que todo el script funcione de la forma "moderna".


```
"use strict";
```

Este código va a trabajar de la forma moderna
 
Asegurate que "use strict" este hasta arriba, de otra forma no se habilitarán las funciones.

```
alert("some code");
// "use strict" below is ignored--it must be at the top

"use strict";
// strict mode is not activated
```

No existe dirextiva como "no use strict" que regrese el engine a su conducta anterior.
Una vez usado el strict mode no hay vuelta atrás.


¿QUÉ DEBO USAR?

El Javascript moderno soporta "clases" y "módulos" que veremos más adelante. Lo interesante es que no necesitamos de "use strict" para usarlos.

Por ahora "use strict;" es bienvenido como invitado al inicio de tus scripts.

Después, cuando tu código este todo en clases y módulos podrías omitirlo.

[Ver ejemplo completo HTML](/Tutorials/Lab4JS/3UseStrict/index.html)

[Ver ejemplo completo JS](/Tutorials/Lab4JS/3UseStrict/script.js)

## Variables

### Uso de let
Una variable es información guardada a través de un nombre.

Podemos usar las variables para guardar productos, visitantes y otro tipo de información.


Para crear una variable en Javascript usarmos la plabra reservada **let**

```
let message;
```

Ahora podemos asignar información a nuestra variable usando el operador **=**

```
message = 'Hello'; //Almacena el string 'Hello' en la variable message
```

El string ahora guardado en memoria se asocia con esa variable. Podemos acceder a la variable usando el nombre de la misma.

```
alert(message);
```

Para se concisos, podemos combinar la declaración de la variable y su asignación en una sola línea.

```
let message2 = 'Hello!';
alert(message2);
```

También podemos declarar múltiples variables en una sola línea

```
let user = 'John', age = 25, message = 'Hello';
```

Esta forma anterior puede ser corta pero no es recomendada. Por legibilidad es mejor usar una línea por variable

```
let user = 'John';
let age = 25;
let message = 'Hello';
```

Algunas personas definen múltiples variables en este estilo multilínea

```
let user = 'John',
  age = 25,
  message = 'Hello';
```

Incluso este estilo "comma-first"

```
let user = 'John'
  , age = 25
  , message = 'Hello';
```

Tecnicamente todas estas variantes hacen lo mismo, entonces en más un estilo personal y de estética.

### Var en lugar de let

En scripts "antigüos", también puedes encontrar el uso de la palabra reservada **var** en lugar de **let**

```
var message3 = 'Hello';
```

La palabra reservada **var** es casi igual a **let**. Este tipo de declaración es la forma **old-school**.

Hay unas sutiles diferencias entre **let** y **var**"**, pero esas diferencias todavía no nos van a interesar.

### Declaraciones dobles

La declaraciones dobles generan error
```
let message4 = "This";
let message4 = "That"; // SyntaxError: 
```
**let** repetido puede llevar a un error
message' has already been declared

### Nombrado de variables

Existen 2 limitaciones al nombrado de variables
1. El nombre contiene solo letras, dígitos o símbolos $ y _.
2. El primer caracter no debe ser un dígito.

```
let userName;
let test123;
```


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
//const myBirthday = '18.04.1982';

//Las variables declaradas usando 'const' son llamadas "constantes". Estas no pueden ser reasignadas. Un intento para hacerlo causará un error
 
//const myBirthday2 = '18.04.1982';
//myBirthday2 = '01.01.2001'; // error, can't reassign the constant!

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