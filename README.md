# WEBPACK TEMPLATE

## Requirements & Setup
You need to have **node.js** installed. 

Start with `npm run init`

This command will init a git repository on your machine, install dependencies and remove useless files and directories for your project.
After that, this command won't be available anymore.

## Development
Run the local webpack-dev-server with hotreload and autocompile on:
- local: [http://localhost:8080/](http://localhost:8080/)
- network: http://your-local-ip:8080/

```sh
$ npm run dev
```

## Alias
- **@**: `src/`
- **@js**: `src/js/`
- **@style**: `src/style/`
- **@fonts**: `src/fonts/`
- **@assets**: `src/assets/`

## Features
- eslint
- prettier
- babel
- stylus

## Deployment
Build the current application (default output in `dist/`).
```sh
$ npm run build
```

## Template link
[https://github.com/Lissandre/webpack_template](https://github.com/Lissandre/webpack_template)