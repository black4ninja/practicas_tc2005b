//USE STRICT
/*
Por un largo tiempo, Javascript evolucionó sin problemas de compatibilidad. Nuevas funcionalidades fueron añadidas al lenguaje
mientras mientras que funcionalidad antigüa no cambió.

Eso tuvo el beneficio de nunca romper el código. Sin embargo, un problema de ello es que el lenguaje se quedó atrapado en el tiempo.

Esto cambio en 2009 con la llegada de ECMAScript5 (ES5) apareció. Agregó nuevas funcionalidades al lenguaje y modificar algunas de las existentes.
Para poder mantener el código viejo funcionando esas modificaciones fueron apagadas por default.

Para ello debes habilitar estas directivas usando: "use strict"

La directiva debe colocarse al inicio de un script, para que todo el script funcione de la forma "moderna".
*/

"use strict";

// Este código va a trabajar de la forma moderna

/* 
    Asegurate que "use strict" este hasta arriba, de otra forma no se habilitarán las funciones.

    alert("some code");
    // "use strict" below is ignored--it must be at the top

    "use strict";

    // strict mode is not activated
*/

/* 
    No existe dirextiva como "no use strict" que regrese el engine a su conducta anterior.
    Una vez usado el strict mode no hay vuelta atrás.
*/

//¿QUÉ DEBO USAR?
//El Javascript moderno soporta "clases" y "módulos" que veremos más adelante.
//Lo interesante es que no necesitamos de "use strict para usarlos"

//Por ahora "use strict;" es bienvenido como invitado al inicio de tus scripts.
//Después, cuando tu código este todo en clases y módulos podrías omitirlo.