# Prueba FrontEnd Almundo.com



Acerca del proyecto
=============

El proyecto está compuesto por dos aplicaciones, un backend escrito en NodeJS el cual expone
una API REST para la interacción con la aplicación frontend.


Requerimientos del sistema
-------------
-  #####  [NodeJS](https://nodejs.org/en/ "NodeJs") - (Node.js es un entorno de ejecución para JavaScript).
-  #####  [MongoDB](https://nodejs.org/en/ "NodeJs") - (MongoDB es una base de datos orientada a documentos).
-  #####  [Lerna Js](https://github.com/lerna/lerna "Lerna Js") - (Lerna es una herramienta que optimiza el flujo de trabajo en la administración de repositorios de paquetes múltiples con git y npm).
-  #####  [Npm](https://www.npmjs.com/ "Npm") o [Yarn](https://yarnpkg.com/en/ "Yarn") - (Ambos son administradores de paquetes para JavaScript).
-  #####  [Postman](https://www.getpostman.com/ "Postman")  - (Postman para probar peticiones al servidor).

Instalación
=============
Para realizar la instalación, tanto Api-rest como del Frontend, se deben realizar los siguientes pasos:


### Clonar Repositorio. 

Para clonar la aplicación, ejecute este comando:

    git clone https://github.com/Fabian-Andres/almundo-app.git



### Configurar y descargar dependencias
Con el siguiente comando se instalarán las librerías del package.js, tanto del Api-rest como del Frontend:

Estando en `cd /almundo-app`

```
$ lerna bootstrap
```

Luego de haber descargado las dependencias, podemos iniciar nuestra aplicación, para ello vamos a iniciar **Mongo** y luego iniciamos nuestra **Api-rest** con el siguiente comando:

Estando en `cd /almundo-app/packages/api-rest`

```
$ npm run start
```

Ahora hay que poblar nuestra base de datos, para ello vamos a utilzar **Postman** :

Mediante el método `POST` iniciamos con la carga de nuestros datos:

Url api `http://localhost:8080/api/` vamos a **body** y seleccionamos **row** luego seleccionamos el tipo de archivo a enviar y seleccionamos **JSON (aplication/json)** ahora insertamos nuestro JSON y damos enviar.

Ejemplo de JSON:

    {
    "id": "236309",
    "name": "Casa Andina Select Miraflores",
    "stars": 4,
    "price": 1545.46,
    "image": "2a5bb415_b.jpg",
    "amenities": [
      "coffe-maker",
      "safety-box",
      "restaurant",
      "garden",
      "children-club"
    ]}


Luego,  en otro tab de nuestra consola iniciaremos el **Fontend**:

Estando en `cd /almundo-app/packages/frontend`

- Para visualizar la aplicación en entorno de  desarrollo 

```
$ npm start 
```

- Para visualizar la aplicación en entorno de  producción

```
$ npm run build 
```

Ahora iniciará nuestra aplicación en nuestro navegador en la ruta:

```
http://localhost:3000/
```

# Autor

Fabián Andres Riascos @fabian-andres
