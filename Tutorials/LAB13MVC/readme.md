# MVC

## MVC (Modelo Vista Controlador)

Con lo que hemos trabajado en nuestro servidor hasta el momento, hemos cargado rutas, hemos trabajado con HTML dinámico y ya podemos crear sitios web, pero nos faltan 2 puntos elementales, conectar datos e información y procesarlas para cargarlo en nuestro HTML.

Con lo que hemos visto hasta ahora en el HTML dinámico, podemos definir lo que llamamos como UI en vistas que es toda la interfaz de HTML, CSS y JS para poder verlo en el navegador.

También hemos experimentado un poco en las rutas cuando no regresamos directamente un HTML y regresamos por ejemplo un JSON de información.

Igualmente ya vimos que dentro de EJS, aunque cargamos el EJS como HTML, podemos pasar un JSON para agregar información desde nuestra ruta.

El punto que empezaremos a ver ahora es uno de los más importantes desde el punto de ingeniería de software, la arquitectura del proyecto.

Cuando hablamos de la arquitectura nos estamos refiriendo a la forma en la que las carpetas del proyecto están estructuradas.

Como ya habrás notado un proyecto grande de desarrollo, incluye archivos HTML, CSS, JS para el cliente, archivos js de back-end, de front-end y sobre ellos viene la lógica de modularizar nuestra aplicación según las funciones que tiene.

Cuando ya tenemos una gran cantidad de archivos, esto se vuelve complicado si no planificamos como estructurar nuestros archivos, y es por ello que viene la primer aproximación en una de las arquitecturas más comúnes utilizadas en desarrollo web.

Hasta ahora cuando hablabamos de arquitectura nos referiamos a cliente-servidor. Pero esta arquiecturas nos habla de como se establece el protocolo de comunicación del sistema.

Ahora la arquitectura de software como ya mencioné habla de la estructura de carpetas del proyecto, si bien existen una gran cantidad de arquitecturas, todas con un propósitos específico, en desarrollo de back-end la más común y simple es MVC o mejor conocida como Modelo-Vista-Controlador.

![lab_13](/Tutorials/LAB13MVC/imgs/001.png)

Un diagrama que explica de manera sencilla como funciona la arquitectura es el siguiente:

Tendremos una petición HTTP, hasta ahora la hemos resuelto directamente en una función de Javascript, pero dentro del servidor lo ideal es separar según la fuente, esto hace más legible el código, estructura mejor la carpeta de archivos y permite probar lo que estamos haciendo.

Al llegar el request HTTP, llegamos a la ruta o lo que ahora conoceremos como el **controlador**, dentro de este lo más común será tener que llamar a algún elemento de información, normalmente una base de datos, lo que sucede en la arquitectura es pasar esta responsabilidad a otro archivo el cual llamaremos el **modelo** que su única función es obtener y manejar la información, por último se regresará al **controlador** y este hara el pre renderizado del HTML con EJS como en nuestro caso y devolverá la petición al cliente habiendo cargado en el código HTML la información que se ocupa de la base de datos.

Todo este camino se realizará para cada ruta de cada función de cada módulo del sistema, hacerlo de manera efectiva nos ayudará a que existan partes del código replicadas y simplificará la llamada de funciones, ya que no necesitamos crear un query a la base de datos para obtener lo usuarios en cada ruta, sino que esto lo delegaremos a un modelo que hará esta llamada y se insertará cada vez que lo utilicemos en un controlador.

Algo adicional que podemos o no añadir en NodeJS y Express, es un archivo de rutas, esto hace más fácil ver que rutas hay disponibles en nuestro proyecto.

Veamos un ejemplo sencillo abarcando toda la arquitectura.

## Rutas y Controladores

Vamos a crear un nuevo proyecto base con **npm init**, aquí vamos a agregar express, body-parser y ejs. También vamos a configurar la carpeta pública como ya hicimos en el laboratorio anterior. Por facilidad en la carpeta pública añadiremos un archivo script.js con un alert como en el laboratorio anterior.

El contenido de **index.js** quedaría como el siguiente:

```
const http    = require('http');
const express = require('express');
const path    = require('path');
const fs      = require('fs');
const app     = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (request, response, next) => {
    response.setHeader('Content-Type', 'text/plain');
    response.send("Hola Mundo");
    response.end(); 
});

const server = http.createServer( (request, response) => {    
    console.log(request.url);
});
app.listen(3000);
```

Al correr el proyecto con pm2 no olvides que el comando es:

```
pm2 start index.js --watch
```

Ahora vamos a configurar un módulo con una ruta como hicimos en laboratorios anteriores.



![lab_13](/Tutorials/LAB13MVC/imgs/002.jpg)

Crearemos la carpeta **routes** y añadiremos un archivo **usuarios.routes.js**.

Ahora dentro de **index.js** añadiremos la ruta creada como si fuera un módulo de usuarios.

```
const rutasUsuarios = require('./routes/usuarios.routes');
app.use('/usuarios', rutasUsuarios);
```

El código de **index.js** quedaría de la siguiente forma:

```
const http    = require('http');
const express = require('express');
const path    = require('path');
const fs      = require('fs');
const app     = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (request, response, next) => {
    response.setHeader('Content-Type', 'text/plain');
    response.send("Hola Mundo");
    response.end(); 
});

const rutasUsuarios = require('./routes/usuarios.routes');
app.use('/usuarios', rutasUsuarios);

const server = http.createServer( (request, response) => {    
    console.log(request.url);
});
app.listen(3000);
```

Si guardas el archivo **index.js** verás muchos errores y es por que aunque ya existe **usuarios.routes.js** aún no estamos soportando express para poderlo llamar. Para ello agrega lo siguiente en **usuarios.routes.js**:

```
const express = require('express');
const path    = require('path');
const fs      = require('fs');
const router = express.Router();

router.get('/obtener_usuarios', ()=>{});

module.exports = router;
```

Aquí estaremos sirviendo una ruta **/obtener_usuarios** que de momento solo incluye una función flecha vacía.

En laboratorios anteriores servimos la ruta desde aquí, pero ahora vamos a incorporar el controlador, para ello vamos a crear una carpeta llamada **controllers**, y a esta vamos a añadirle un archivo **usuarios.controller.js**.

Dentro de **usuarios.routes.js** vamos a añadir el controlador debajo de la definición de route:

```
const controller = require("../controllers/usuarios.controller.js")
```

Ahora vamos a sustituir la función flecha vacía que teníamos en la ruta **/obtener_usuarios** y vamos a llamar a una función dentro de nuestro controller.

```
router.get('/obtener_usuarios', controller.index);
```

Por último en **usuarios.controller.js** vamos colocar lo siguiente:

```
module.exports.index = async(req,res) =>{
    res.status(200).send({status:"success",message:"Get all users"})
}
```

Aquí definimos la función **index** y de momento solo regresamos un json de respuesta.

Es importante que entiendas todo el camino hasta el momento pues ello es la base para lo que viene.

Si entras a la url en el navegador

```
http://localhost:3000/usuarios/obtener_usuarios
```

El resultado será el siguiente:

![lab_13](/Tutorials/LAB13MVC/imgs/003.jpg)

Pero internamente lo que sucede es lo siguiente:

1. Llega un request a index.js a la url /usuarios /obtener_usuarios
2. Index.js encuentra /usuarios definido por lo que lo pasa al archivo **usuarios.routes.js**.
3. Usuarios detecta la url /obtener_usuarios y detecta que se llama de una función index en **usuarios.controller.js**.
4. Desde usuarios.controller.js se llama y ejecuta la respuesta del request.

Con lo anterior a nivel arquitectura hemos segmentado en carpetas nuestras rutas y controladores, por lo que ahora en rutas vamos a tener una lista de urls con funciones que se llaman del controlador.

El controlador es el encargado de hacer el renderizado y servir de **cerebro** para la función solicitada. Aquí lo que nos falta es conectar con un modelo y cargar el EJS de la vista para completar la arquitectura.