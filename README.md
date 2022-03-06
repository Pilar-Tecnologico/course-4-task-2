# "Backend with Node.js" - Task 3
Trabajo Práctico 3

En base al código realizado en el trabajo práctico 2:
    Agregar conectividad a base de datos MongoDB. Recordar que los valores de conexión deben estar en .env y usando config.
    Implementar lógica para que con cada apicall del endpoint:
    GET :: /mars/manifest/:roverName
    Guarde una copia del resultado en una colección mongodb llamada: "manifests".
    Solo se deben guardar en la base de datos si la request al servicio de la NASA fue exitoso (HTTP  Code 200), en caso contrario, seguir el tratamiento de errores normal.
Entregar link del fork del repositorio resuelto (no Pull request).

 ---------------------------------------------------------------
 /*----//learning topics:  --*/

/*----// commit: JOI VALIDATION: create fields marsSchema, 
/*-----// commit: Instalaciones: npm install mongoose
/*----// commit: Create variables enviroment MONGODB_DB: .env'
/*-----// commit: Read environment variables: config: database:{mongodb:{VARIABLES}} 
/*-----// commit: Connect db:  create field database.js
/*----// commit: MONGOOSE MODELS: create field Nasa.models.js 
/*-----// commit: mongodb - Save data:  new model({}), await db.Nasa.save() 