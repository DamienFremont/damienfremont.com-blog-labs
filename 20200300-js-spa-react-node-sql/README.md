js-spa-app-react-express-node-sql
==============

## Getting started

You need to install:
- nodejs 12+
- postgres 10 (user:password:port = postgres:potsgres:5432)

Local Dev
``` bash
# install dependencies
npm install
npm run build

# serve with hot reload at localhost:8080
npm run dev-database
npm run dev
```

Production
``` bash
# build for production with minification
npm run build

# start all
npm run start
```

## Usage

http://localhost:3000

http://localhost:5000

## More

Client: WebApp built on ReactJS, Bootstrap [README](./client/README.md)

Server: HTTP server built on NodeJS, ExpressJS [README](./server/README.md)

Database: SQL built on Postgres [README](./database/README.md)

## Env vars

Search for `process.env.*` in source code.

- PORT
- HOSTNAME
- NODE_ENV
- NODE_PUBLIC
- DATABASE_URL
- DATABASE_SSL