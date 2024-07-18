# CodeSphere

## Descripción
CodeSphere es una red social diseñada para desarrolladores, centrada en fomentar la colaboración en proyectos y el intercambio de conocimientos. En codesphere, los usuarios pueden registrarse, crear y personalizar sus perfiles, y unirse o iniciar proyectos. La plataforma permite a los desarrolladores compartir publicaciones, discutir ideas y trabajar juntos para construir soluciones innovadoras.

## Instalación
Para descargar y poder trabajar es necesario clonar el repositorio.
Crear el archivo .env con la variable que aparece en el archivo .env.example.
Y usar el comando **pnpm dev** para ejectuar en local.

## Estructura
~~~
 ├─ node_modules
 ├─ nodemon
 ├─ .env
 ├─ .env.example
 ├─ .gitignore
 ├─ package.json
 ├─ README.md
 ├─ package-lock.json
 └─ src
     ├─ config
     ├─ controllers
     ├─ middlewares
     ├─ models
     ├─ services
     ├─ types
     ├─ utils
     └─ index.ts
~~~

Hacemos uso de MVC como arquitectura, separando y modularizando roles.
* En **models** van archivos de la forma nombre.schema.ts y nombre.methods.ts donde se establecen los esquemas para las tablas en la base de datos y los metodos para realizar las peticiones a la base de datos, respectivamente.
* En **controllers** van los controladores, funciones que se ejecutan dependiendo del endpoint.
* En **routes** se definen el mainRouter(*/api*) y las diferentes rutas accesibles.
