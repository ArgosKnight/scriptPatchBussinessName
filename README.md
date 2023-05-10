# SCRIPT update BussinesName by companyId usingPATCH

Descripción:
Este proyecto nos permite mediante un script el poder modificar el bussinesName o en el español 
la razon social de una compañia.

## INSTALAR Y COMO USAR EL PROYECTO

**INSTALAR EL PROYECTO**
Iniciamos el proyecto con el siguiente codigo
```
npm install
```

Instalamos las librerias y dependencias que vamos a utilizar para este proyecto:
```
npm i ajv body-parser dotenv express mongodb
```
```
npm i --save-dev œtypes/express  typescript
```

## Tener en cuenta:
Como ya cuentas con el codigo, lo que debes hacer para 
iniciar el proeycto e instalar las librerias solo debes usar el siguiente comando:
```
npm install
```

Al hacer realizar esto ya tienes acceso a todo la funcionalidad del codigo

## Que hace este codigo:
Como bien su titulo lo dice, lo que buscamos con este codigo es poder realizar y obtimizar la actualizacion de la razon social de una compañia mediante un metodo PATCH

en donde nuestro URL que usaremos en POSTMAN, colocaremos el ID de la compañia  ('companyId')

```
localhost:PORT/api/:companyId/business-name
``` 

## Observaciones:
Cuando inices el programa y hagas la instalcion de las dependencias y librerias que vamos a utilizar 
vas a obtener un error en el app.ts

Para solucionar este error solo debes realizar lo siguiente:

Entra al archivo env.ts 
donde tendras vas ver la siguiente linea de codigo:
```
export const URL = process.env.DB_URL
```

Aca vas a darles click derecho a DB_URL, que te va a dirigir al siguiente arichivo mostrandote el siguiente codigo

```
interface Dict<T> {
        [key: string]: T | Undefined
    }
```

Lo unico que debes hacer es eliminar el | Undefined 
Y esto quedaria de la siguiente forma y solucionara el error mostrado:

```
interface Dict<T> {
        [key: string]: T
    }
```