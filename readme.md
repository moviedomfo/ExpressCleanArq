# Express API implementing clean architecture DDD using

## This api use

- typescript
- node-dependency-injection
- nodemom
- babel

DevOp

- nginx
- Docker
- docker-compose

## Scaffolding / Folder Structure

├── dist # Compiled files (alternatively `dist`)
├── src  
├── app # Application bussiness rules(`saervices.ts`)
├── domain
├────── useCases-interfases
├────── repo-interfases
├────── DTOs
├────── Entities
├── infra # All implementations of interfases
├──────controllers
├──────routes  
├──────models # schemes,sequalize prisma to databases (`mongo`, postgres , sql server etc)
├──────DependenciInjection.ts # iOC container ( `inversify`, `node-dependency-injection`)
└── README.md
├── docs # Documentation files (alternatively `doc`)

## Geting start

Run: - yarn dev or yarn start - browse --> http://localhost:3011/api/items

https://auth0.com/blog/node-js-and-typescript-tutorial-build-a-crud-api/

# What to install ?

yarn add helmet
yarn add cors
yarn add express
npm dotenv
or
yarn add express dotenv cors helmet

## Typescript

[link](https://github.com/tsconfig/bases/)
[Typescript+Babel](https://lemoncode.net/lemoncode-blog/2020/12/29/nodejs-typescript)

yarn add typescript

### type definitions `for the packages you installed previously`

yarn add @types/node @types/express @types/dotenv @types/cors @types/helmet

### ts-node-dev

Improve TypeScript Development Workflow : you don't need to recompile the entire project whenever there's a change in its source code. You can set up ts-node-dev to significantly decrease the time it takes to restart your application when you make a change.

yarn add -D ts-node-dev

### Initialize TypeScript in Node.js

[1] generate the tsconfig.json
npx tsc --init

### A base TSConfig for working with Node 14. [link](https://github.com/tsconfig/bases/)

    yarn add --save-dev @tsconfig/node14
    Add to your tsconfig.json: "extends": "@tsconfig/node14/tsconfig.json"

## Install authorization dependencies

npm i express-jwt jwks-rsa
npm i -D @types/express-jwt

## Babel

yarn add --save-dev @babel/core @babel/cli @babel/preset-env

### @babel/preset-typescript

This preset is recommended if you use TypeScript, a typed superset of JavaScript. It includes the following plugins:

yarn add --save-dev @babel/preset-typescript

### @babel/plugin-transform-typescript

This plugin adds support for the types syntax used by the TypeScript programming language.

yarn add --save-dev @babel/plugin-transform-typescript

- Genera por linea de comando una carpeta dist con todo el fuente transpilado
  npx babel --extensions ".ts" src/ -d dist
- Genera por linea de comando una carpeta dist con solo [index.ts] transpilado
  npx babel --extensions ".ts" index.ts -d dist

###

Si hay Error : Requires Babel "^7.0.0-0", but was loaded with "6.26.3". If you are sure you have a compatible version of @babel/core, it is likely that something i 1) remove node_modules 2) remove babel-cli, babel-core from your package.json, keep @babel/core, @babel/cli 3) yarn add

# Create Authentication Middleware

Express will execute an **authorization middleware** function before it executes the callback function of the controller that handles the request.

The business logic within authorizationFunction can perform two tasks:

    (a) invoke the next function in the middleware chain, the router handler function, if it can determine that the user has the authorization to access the resource or,

    (b) close the request-response cycle by responding with a 401 Unauthorized message, which prevents your API from executing the route handler.

# Microservices

## Dockerfile

Se utiliza multi stage build con dos imagenes una con el SDK AS build y otra optimizada

- generate image

```
    docker image build -t moviedomfo/express_auth .
```

- run container

```
docker run -d -p 3008:80 --name express_auth moviedomfo/express_auth
```

- Navigate to this url to check the if correctly docker container is running
  http://localhost:3008/api/menu/items

## Docker Composer : Alternatly, you can use compose. Just run these two commands consecutively

```
docker image build -t moviedomfo/express_auth
**wait**  for image creation and next run..

docker-compose up -d
```

# Dockerizing a Node.js app with NGINX using Docker-Compose

### References

    https://ashwin9798.medium.com/nginx-with-docker-and-node-js-a-beginners-guide-434fe1216b6b
    https://www.youtube.com/watch?v=4zUQEkDdNR0

### Steps

    1 - Ceate our own Nginx server configuration
     An instance of Nginx will be running inside the container.



     The one thing to point out is the proxy_pass directive. We are proxying requests to
     “http://nodeserver:5000” instead of localhost:5000.



    2 - create a Dockerfile inside the nginx folder
        2.1 Inside the nging/Dockerfile we copy our nginx.conf file to NIGINX folder
        called conf.d which stores all custom configurations

        2.1 Create a file called default.conf inside the nginx folder to store the configuration for the proxy.

         COPY default.conf /etc/nginx/conf.d/default.conf

### docker-compose

    Using docker-compose to coordinate the containers

    Inside the docker-cpompose.yaml file we´ll to set 3 containers, tho for our Express servers and
    another for aur reverse proxy, NGINX.

    Execute this command to run these containers

    docker-compose up --build
