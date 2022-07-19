/* eslint-disable no-unused-vars */

const { src, dest, series } = require('gulp');
const modifyContent = require('gulp-modifier');
const rename = require('gulp-rename');
const del = require('del');

function cleanTask() {
  return del('dist');
}

let pkgName = '123';
function extractTask() {
  return src('./src/package.json')
    .pipe(
      modifyContent((content) => {
        const pkg = JSON.parse(content);
        // console.log(pkg.name);
        // console.log(pkgName);
        pkgName = pkg.name;
        // console.log(pkgName);
        const dependencies = Object.keys(pkg.dependencies || []);
        const devDependencies = Object.keys(pkg.devDependencies || []);
        return `
npm install --save ${dependencies.join(' ')}

npm install --save-dev ${devDependencies.join(' ')}
`;
      })
    )

    .pipe(
      rename((pathObject) => {
        console.log(pkgName);
        return {
          ...pathObject,
          basename: `${pkgName}-dependencies`,
          // dirname
          extname: '.txt',
        };
      })
    )
    .pipe(dest('dist'));
}

exports.default = series(
  //
  cleanTask,
  extractTask
);
