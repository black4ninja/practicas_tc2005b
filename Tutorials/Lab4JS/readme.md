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

[Ver ejemplo completo HTML](/Tutorials/Lab4JS/1HelloWorld/inline_script.html)
