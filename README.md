[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=5423313&assignment_repo_type=AssignmentRepo)


Inicializacion de proyecto

Instalacion
   npm init  // Esto nos agregara los modulos de node necesarios.
   npm i browser-sync  // Nos permitira iniciar nuestro proyecto y levantarlo en el localhost
   npm install -D tailwindcss@latest postcss@latest autoprefixer@latest // Para utilizar estilos de Tailwind
   npm install uglify-js // Sera necesario para poder deformar nuestro codigo js


Plugins
Tailwind Css Intellisens // Recomendado para que nos muestre opciones de clases al escribirlas

Comandos de interez
- npm start : Levanta el proyecto en el localhost.
- npm uglify : Actualiza los js.


Instructivo nuevo archivo js
Al agregar un archivo js, se debe hacer en la carpeta src/js/. Una vez hecho esto, se debera modificar el package.json.
se debe agregar el caracter '&', seguido por el comando "npx uglify-js src/js/NOMBRE.js -o docs/NOMBRE.js".
Luego se debe correr el comando "npm uglify" en la terminal. Esto creara un archivo con el mismo nombre, pero transformado para que nuestro codigo javascript no sea leible desde la consola.

Descripcion
Comence este proyecto con una 