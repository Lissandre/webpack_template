# WEBPACK TEMPLATE

## Features
- eslint
- prettier
- babel
- stylus
- alias
- init command

## Alias
- **@**: ```src/```
- **@js**: ```src/js/```
- **@style**: ```src/style/```
- **@fonts**: ```src/fonts/```

## Requirements
You need to have **node.js** installed. 

## Setup
```sh
$ npm init
```
This command will init a git repository on your machine, install dependencies and remove useless files and directories for your project.
After that, this command won't be available anymore.

## Development
Run the local webpack-dev-server with hotreload and autocompile on:
- local: [http://localhost:8080/](http://localhost:8080/)
- network: http://your-local-ip:8080/
```sh
$ npm run dev
```

## Deployment
Build the current application
```sh
$ npm run build
```
