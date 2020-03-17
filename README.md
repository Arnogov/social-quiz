# Installation d'un projet ExpressJS

## Création du dossier avec les fichiers ExpressJS :

```shell script
npx express-generator --view pug --css sass [nom-du-projet]
```

Ensuite aller dans le fichier et installer les dépendances :

```shell script
npm install
```

## Utiliser SCSS à la place de SASS :

```js
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: false, // true = .sass and false = .scss
  sourceMap: true
}));
```

Renommer le fichier public/stylesheets/style.sass en style.scss et corriger le code à l'intérieur.

## Installation de Nodemon

```shell script
npm install --save-dev nodemon
```

Puis modifier le fichier package.json :

```json
"scripts": {
  "start": "nodemon ./bin/www"
},
```

## Installation de dotenv

```shell script
npm install dotenv
```

Puis ajouter tout en haut du fichier app.js :

```js
require('dotenv').config();
```