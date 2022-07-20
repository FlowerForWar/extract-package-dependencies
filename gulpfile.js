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

        /** Store the package name into `pkgName` variable, to use it later in `rename` */
        pkgName = pkg.name;

        const dependencies = Object.keys(pkg.dependencies || []);
        const devDependencies = Object.keys(pkg.devDependencies || []);
        return [
          '\n',
          dependencies.length && `npm install --save ${dependencies.join(' ')}\n`,
          devDependencies.length && `npm install --save-dev ${devDependencies.join(' ')}\n`,
        ]
          .filter(Boolean)
          .join('');
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
