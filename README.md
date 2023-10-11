# desafio_tcit

## Instalamos Ruby on Rails:

### primero vamos a la web de Ruby:

> https://rubyinstaller.org/downloads/

y descargamos el instalador de la zona "WITH DEVKIT"

### Instalamos RAILS y BUNDLER desde una consola:

> gem install rails
> gem install bundler

### Instalamos las dependencias para compartir recursos con otras fuentes:

> bundle add rack-cors

#### Como el modelo ya está generado en el código, realizamos la migración a la base de datos:

> rails db:migrate

## Instalamos Postgresql

## Instalamos Node.js

Vamos a la web de Node.js para descargar el instalador:

> https://nodejs.org/en/download

### Instalamos las dependencias para trabajar con react, redux y datatables

> npm install react-router react-router-dom
> npm install datatables.net-dt

##Ejecución de nuestra APP

Esto lo haremos en 2 consolas distintas

#### Ejecutamos el servidor de Rails que nos permite hacer las llamas a la API
> rails s

#### Ejecutamos el servidor de Node.js para el Front, en un puerto distinto al 3000 para que no tenga conflicto con Rails:
> PORT=3001 npm run start

### Finalmente probamos la aplicación en nuestro navegador:

> http://127.0.0.0:3000 
