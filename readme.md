# **Curso de Node.js y MongoDb**

## **Que es Node?**

Node es un entorno que permite ejecutar javascript en el servidor de manera asincrona, con una arquitectura orientada a eventos basado en el motor V8 de google.

> * ***Asincrono***: se refiere al concepto de que mas de una cosa ocurre al mismo tiempo, o multiples cosas relacionadas ocurren sin esperar a que la previa se haya completado.
> * ***En el mundo del software***: el asincrono amplia el concepto al construir codigo que permita a un programa solicitar que una tarea se realice al mismo tiempo que la tarea(o tareas) original, sin detenerse a esperar a que la primera se haya completado.

Nos permite por ejemplo poder conectarnos a bases de datos, hacer registros, escuchar colas de procesos.

## **Que es MongoDB?**

Es un sistema de bases de datos NoSql orientado a documentos de codigo abierto y escrito en C++, que en lugar de guardar los datos en tablas los hace en estructuras de datos BSON(Bynary JSON) con un esquema dinamico.

> Para el curso de Node utilizaremos la siguiente informacion para administrar nuestra base de datos:
>
> * Usuario: AlanFlores
> * Password: 6RKPjpUQb8qCCaRv

## **Que es un cluster?**

Los clusteres son grupos de servidores que se gestionan juntos y participan en la gestion de cargo de trabajo. Un cluster puede contener nodos o servidores de aplicaciones individuales.

> ***Con mis palabras...*** : En el cluster de nivel gratis de MongoDb nos permite tener mas de 500 colecciones(bd) con lo cual cada collecion correspondria con un nodo o servidor en nuestra definicion...

Basicamente tenemos la BD en la nube.

## **Que es la DB_URI?**

De su traduccion del ingles significa Identificador de Recursos Uniforme (Uniform Resource Identifier).

Es una cadena de caracteres que se utilizan para identificar un recurso o nombre en internet. Su proposito es permitir la interaccion entre diferentes recursos de internet y otro tipo de red.

**DB_URI**: es una URI que describe la conexion a la base de datos, tambien llamada cadena de conexion (*connection string*)

La forma con la cual nosotros nos conectaremos a nuestra BD sera a traves de Node.

Una vez que ya creamos nuestro cluster en MongoDB, nos ofrecera la siguiente cadena para enlazar nuestra base de datos de Mongo con nuestra aplicacion:

```node
mongodb+srv://AlanFlores:<password>@cluster0.4vyj2.mongodb.net/?retryWrites=true&w=majority
```

> En donde password sera la que declaramos al inicio de crear el cluster.

## **Framework de Node.Js, Express**

es el framework web mas popular de Node, y es la libreria subyacente para un gran numero de otros frameworks web de node populares.

* Escritura de manejadores de peticiones con diferentes verbos HTTP en diferentes caminos URL (rutas).

* Integracion con motores de renderizacion de "vistas" para generar respuestas mediante la introduccion de datos en plantillas.

* Establecer ajustes de aplicaciones web como que puerto usar para conectar, y la localizacion de las plantillas que se utilizan para renderizar la respuesta.

* Añadir procesamiento de peticiones "middleware" adicional en cualquier punto dentro de la tuberia de manejo de la peticion.

### **Tipos de peticiones/verbos HTTP***

Cada vez que nosotros damos click en algun enlace/sitio web este realiza una peticion. Una parte de la peticion que se envia hacia el servidor corresponde al metodo HTTP o verbo HTTP.

Estos verbos indican que accion queremos realizar sobre el servidor y son los siguientes:

* `GET`: solicita una representacion de un recurso especifico. Las peticiones que usan metodo `GET` solo deben recuperar datos.
Esto quiere decir, que no importa cuantas veces hagamos una peticion GET, los resultados obtenidos siempre seran los mismos.

* `HEAD`: pide una respuesta identica a la de una peticion GET, pero sin el cuerpo de la respuesta.

* `POST`: se utiliza para enviar una entidad a un recurso especifico, causando a menudo un cambio en el estado o efectos secundarios en el servidor.
Normalmente la accion POST se dirige a un recurso que representa una coleccion, para indicar que el nuevo recurso debe agregarse a dicha coleccion, por ejemplo POST/cursos para agregar un nuevo recurso a la coleccion cursos.

* `PUT`: reemplaza todas las representaciones actuales del recurso de destino con la carga util de la peticion.
Habla de sustituir un elemento por completo.

* `DELETE`: borra un recurso en especifico.

* `CONNECT`: establece un tunel hacia el servidor identificado por un recurso.

* `OPTIONS`: es utilizado para describir las opciones de comunicacion para el recurso de destino.

* `PATCH`: es utilizado para aplicar modificaciones parciales a un recurso.
Habla de sustituir algun recurso del elemento

* `TRACE`: realiza una prueba de bucle de retorno de mensaje a lo largo de la ruta al recurso de destino.

## **Que son las variables de entorno?**

Son variables externas a nuestra aplicacion que residen en el sistema operativo o en el contenedor de la aplicacion que se esta ejecutando. Una variable de entorno es simplemente un nombre asignado a un valor.

Por convencion, el nombre se escribe con mayuscula y los valores son cadenas de texto, por ejemplo: `PORT= 8080`.

Esto porque la implementacion de una aplicacion requiere que los desarrolladores pongan atencion y consideracion en como se configura.

Todas las aplicaciones se implementan en un entorno de desarrollo (development) antes de implementarse en el entorno de produccion (production). Necesitamos asegurarnos de que cada entorno este correctamente configurado, podria ser desastroso si nuestra aplicacion de produccion estuviera utilizando nuestra base de datos de desarrollo, por mencionar un ejemplo.

Los datos que cambian segun el entorno en el que se ejecuta su aplicacion deben configurarse como variables de entorno. Algunos ejemplos comunes son:

* Direccion y puerto HTTP.
* Credenciales a Bases de datos.
* Ubicacion de archivos y carpetas estaticos.
* Credenciales de API externas.

> Es una buena practica tener un archivo ejemplo `.env.example` de un archivo que existira como variable de entorno.
> Tambien es buena practica no subirlos a nuestro repositorio de github incluyendolos en el `.gitignore`

## **Scaffold**

Se podria comparar con su traduccion al español que se define por andamio(un andamio es una construccion provisional con la que se permite el acceso de los obreros a los distintos puntos de una construccion).

En otras palabras lo podemos definir como un tipo de estructura que nos permitira crear un esqueleto del proyecto final. Este concepto no esta casado con algun tipo de tecnologia, la ventaja de este es que podremos administrar desde capas abstractas de BD, hasta la estructura de carpetas de una app web y tambien administrar y generar las dependencias de nuestro proyecto.

## **MVC**

Es una arquitectura de software, utilizada para separar el codigo por sus distintas responsabilidades, manteniendo distintas capaz que se encargan de hacer una tarea muy concreta, lo que ofrece beneficios diversos.

Su fundamento es la separacion del codigo en tres capas diferentes, acotadas por su responsabilidad, en lo que se llaman **Modelos**, **Vistas** y **Controladores** ***(Models, Views & Controllers)***.

### **Modelos**

Es la capa donde se trabaja con los datos, por tanto contendra mecanismos para acceder a la informacion y tambien para actualizar su estado. Los datos los tendremos habitualmente en una base de datos, por lo que en los modelos tendremos todas las funciones que accederan a las tablas y haran los correspondientes *selects, updates, inserts, etc.*

### **Vistas**

Como su nombre nos hace entender, contienen el codigo de nuestra aplicacion que va a producir la visualizacion de las interfaces de usuario, o sea, el codigo que nos permitira renderizar los estados de nuestra aplicacion en HTML. En las vistas nada mas tenemos los codigos HTML que nos permite mostrar salida.

En las vistas generalmente trabajamos con los datos, sin embargo, no se realiza un acceso directo a estos. Las vistas requeriran los datos a los modelos y ellas generaran la salida, tal como nuestra aplicacion requiera.

### **Controladores**

Contiene el codigo necesario para responder a las acciones que se solicitan en la aplicacion, como visualizar un elemento, realizar una compra, una busqueda de informacion, etc.

En realidad es una capa que sirve de enlace entre las vistas y los modelos, respondiendo a los mecanismos que puedan requerirse para implementar las necesidades de nuestra aplicacion.

Sin embargo, su responsabilidad no es manipular directamente datos, ni mostrar un tipo de salida, si no servir de enlace entre los modelos y las vistas para implementar las diversas necesidades del desarrollo.

## **Que es un middleware?**

Basicamente, funciona como una capa de traduccion oculta para permitir la comunicacion y la administracion de datos en aplicaciones distribuidas. A veces, se le denomina "plumbing" (tuberias), porque conecta dos aplicaciones para que se puedan pasar facilmente datos y bases de datos por una "canalizacion". El uso de middleware permite a los usuarios hacer solicitudes como el envio de formularios en un explorador web o permitir que un servidor web devuelva paginas web dinamicas en funcion de un perfil de usuario.

El middleware es un software con el que las diferentes aplicaciones se comunican entre si. Actua como un puente entre tecnologias, herramientas y bases de datos diversas para que puedan integrarlas sin dificultad en un unico sistema. Este sistema unico provee un servicio unificado a sus usuarios. Por ejemplo, una aplicacion frontend de windows envia y recibe datos desde un servidor backend linux, pero los usuarios de la aplicacion no estan al tanto de la diferencia.

## **Que es Postman?**

Basicamente nos permite realizar peticiones de una manera simple para testear APIS de tipo REST propias o de terceros.
