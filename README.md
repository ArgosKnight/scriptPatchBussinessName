Script realizado con TypeScript  y NodeJs
Este codigo modifica mediante un query -> UpdateOne la razon social de una empresa


Tener en cuenta que en POSTMAN usar PATCH.

URL en POSTMAN: PATCH -> localhost:PORT/api/company/:comanyId/business-name


VARIAFLES CONFIGURABLES DEL PROYECTO:
Crear archivo .env -> Dentro de este archivo se tiene las variables de configuración para el proyecto:
DB_URL = ' '  -> Colocar la URL de la base de datos
PORT  =       -> Puerto configurable.


PUNTOS IMPORTANTES AL USAR ESTE PROYECTO
no vas a encontrar el archivo node_modules por ende tendras que usar "npm i" 
Una vez realizado eso, tendras un error en app.ts 
Para solucionar este error -> 
Entra a app.ts
en el url = URL -> darle a URL click derecho ->Go to definition 
te mandara al archivo env.ts -> aca tendras una constante URL 
export const URL = process.env.DB_URL -> dale click derecho a BR_URL -> go to definition
en el codigo mostrado, elimina el " | Undefined" -> de esta forma solucionaras el error obtenido.