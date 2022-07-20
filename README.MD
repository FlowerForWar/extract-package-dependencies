# extract-package-dependencies

Extract Node package dependencies as string, to be installed later.

- `npm install`
- Input: `src/package.json`

```json
{
  "name": "userscript-gulp-template",
  "version": "0.0.1",
  "description": "User script template that acts as module and tries to simulate imports",
  "author": "FlowerForWar",
  "main": "src/index.js",
  "scripts": {
    "start": "gulp"
  },
  "license": "MIT",
  "devDependencies": {
    "@rollup/plugin-node-resolve": "^13.3.0",
    "browserify": "^17.0.0",
    "cssnano": "^5.1.12",
    "del": "^6.1.1",
    "eslint": "^8.19.0",
    "eslint-config-airbnb-base": "^15.0.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-import": "^2.26.0",
    "eslint-plugin-prettier": "^4.2.1",
    "gulp": "^4.0.2",
    "gulp-append-prepend-no-trim": "^1.1.0",
    "gulp-debug": "^4.0.0",
    "gulp-file": "^0.4.0",
    "gulp-flatten": "^0.4.0",
    "gulp-htmlmin": "^5.0.1",
    "gulp-if": "^3.0.0",
    "gulp-modifier": "^1.0.1",
    "gulp-noop": "^1.0.1",
    "gulp-postcss": "^9.0.1",
    "gulp-rename": "^2.0.0",
    "gulp-replace": "^1.1.3",
    "gulp-sass": "^5.1.0",
    "lazypipe": "^1.0.2",
    "paint-console": "0.0.1",
    "postcss": "^8.4.14",
    "prettier": "^2.7.1",
    "rollup": "^2.77.0",
    "sass": "^1.53.0",
    "userscript-meta-f4w": "^1.0.2",
    "vinyl-source-stream": "^2.0.0"
  },
  "dependencies": {
    "dayjs": "^1.11.3"
  }
}
```

- `npm start`
- Output: `dist/userscript-gulp-template-dependencies.txt`

```
npm install --save dayjs
npm install --save-dev @rollup/plugin-node-resolve browserify cssnano del eslint eslint-config-airbnb-base eslint-config-prettier eslint-plugin-import eslint-plugin-prettier gulp gulp-append-prepend-no-trim gulp-debug gulp-file gulp-flatten gulp-htmlmin gulp-if gulp-modifier gulp-noop gulp-postcss gulp-rename gulp-replace gulp-sass lazypipe paint-console postcss prettier rollup sass userscript-meta-f4w vinyl-source-stream
```
