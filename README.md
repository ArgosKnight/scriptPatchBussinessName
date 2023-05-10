# SCRIPT - Update BussinesName by companyId using PATCH

**Descripción:**

Este proyecto nos permite mediante un script el poder modificar el bussinesName o en el español 
la razon social de una compañia.

## INSTALAR Y COMO USAR EL PROYECTO

**INSTALAR EL PROYECTO**

Iniciamos el proyecto con el siguiente codigo
``` shell
$ npm install
```
Al hacer realizar esto ya tienes acceso a todo la funcionalidad del codigo


## Que hace este codigo:

Como bien su titulo lo dice, lo que buscamos con este codigo es poder realizar y optimizar la actualizacion de la razon social de una compañia mediante un metodo PATCH
En donde nuestro URL que usaremos en la herramienta de POSTMAN, colocaremos el ID de la compañia  ('companyId') de la siguiente forma: 

```
localhost:PORT/api/:companyId/business-name
``` 

## Observaciones:

Cuando inices el programa debes crear un archivo .env en donde debes configurar las siguientes varibles

``` .env
PORT = 
DB_URL =  
```
De esta forma podras utilizar al 100% el script de este codigo.
