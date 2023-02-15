# Intro to Unit Test with Jest

### Iniciar proyecto con npm

```shell
$ npm init -y
```

### nstalar Jest en las dependencias de desarrollo

```shell
$ npm i jest --save-dev
```

### Modificar el ***package.json*** y modificar la seccion de scripts y agregar jest en el comando "test"

```json
...
"scripts": {
    "test": "jest"
},
...
```

### Crear la carpeta ***__tests__***

```shell
$ mkdir __tests__
```

### Activar el modo observar de jest

```json
...
"scripts": {
    "test": "jest --watchAll"
},
...
```