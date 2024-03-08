> [!WARNING]
> Tener conexiona a internet, la base de datos esta en la nube


> EduFly, una plataforma con el objetivo de consumir cursos digitales de acuerdo a los permisos de acceso que tenga, podría verse como la licencia que haya comprado.

> [!NOTE]
> Tener las versiones estables de Node y npm
> Versiones usadas:
> Node: v20.9.0
> npm: 8.6.0

> [!NOTE]
> npm install cuando se clona el repo para instalar las dependencias, npm run dev para levantar el proyecto, recordar antes de levantarlo poner las variables de entorno en un .env en la raiz del proyecto

> [!IMPORTANT]
> Crear el .env y poner la/s siguientes variables de entorno:
> 
> PORT=4000
> 
> USER=edufly
> 
> PASSWORD=edufly
> 
> DBNAME=edufly
>
> En caso de querer entrar a mongo atlas donde esta la base de datos pueden logearse con:
>
> oquendogabriel18@gmail.com
>
> password:3146648407Gabriel
>
> he ir al proyecto edufly


> [!WARNING]
> Asegurar que la conexion de wifi que tengan a la hora de levantar back y front no bloquee los puertos y hayan problemas

### Tecnologias
> Node JS, Express JS, Mongoose

### Estructura de Carpetas

- */modules*: archivos y modulos de node
- */src*: Carpeta principal.
  - */controllers*: Controladores de las peticiones del servidor
      - */controllers.js*
  - */models*: Modelos de datos
    - */models.js*
  - */routes*: Rutas de los endpoints
    - */routes.js*
  - */app.js*: Importacion de express y uso de rutas
  - */config.js*: importacion de los dotenv
  - */db.js*: Conexiona la base de datos
  - */app.js*: configuracion de las rutas
  - */index.js*: Punto de entrada del servidor
- */json*: DEpendencias
- */docs*: Documentación adicional.
