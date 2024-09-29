# C8288--Desarrollo-Sistemas-Web

Crea un nuevo proyecto Express.js.

- Inicializa un nuevo proyecto Node.js en esta carpeta utilizando **npm init** y sigue las indicaciones
para crear el archivo package.json. Acepta los valores predeterminados.

**npm install express@4.18.2**

• Modifica el archivo package.json para especificar que el proyecto utilizará módulos ES.
Asegúrate de que el archivo contenga la siguiente configuración:
```
{
 "name": "sample-express",
 "version": "1.0.0",
 "description": "sample express server",
 "license": "ISC",
 "type": "module",
 "dependencies": {
 "express": "^4.18.2",
 "node-fetch": "^3.2.6"
 },
 "devDependencies": {}
}
```
Instala las dependencias necesarias ejecutando **npm install** en tu terminal.

---------------------------------------------------------------------------------------

**Parte 1: Configuración del proyecto con TypeScript**

1. Instalación de TypeScript y definiciones de tipos de Express:
   
• Abre una terminal en el directorio de tu proyecto Express.js.

• Ejecuta los siguientes comandos para instalar TypeScript y las definiciones de tipo para
Express.js:

 **npm install --save-dev typescript @types/express**

 2. Archivo package.json:
• Verifica que tu archivo package.json ahora incluya TypeScript y las definiciones de tipo de
Express.js en las devDependencies:
```
 {
 "name": "sample-express",
 "version": "1.0.0",
 "description": "sample express server",
 "license": "ISC",
 "type": "module",
 "dependencies": {
 "express": "^4.18.2",
 "node-fetch": "^3.2.6"
 },
"devDependencies": {
 "@types/express": "^4.17.15",
 "typescript": "^4.9.4"
 }
 }
```
**3. Archivo tsconfig.json:**
• Crea un archivo tsconfig.json en el directorio raíz de tu proyecto y agrega la siguiente
configuración para que TypeScript transpile tu código correctamente:

**npx tsc --init**

 {
 "compilerOptions": {
 "esModuleInterop": true,
 "module": "es6",
 "moduleResolution": "node",
 "target": "es6",
 "noImplicitAny": true
 }
 }

Para compilar tu proyecto TypeScript, ejecuta:
**npx tsc**
Después de la transpilación: node (nombre del archivo .js)
