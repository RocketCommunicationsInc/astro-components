const gulp = require('gulp');
const cssimport = require('gulp-cssimport');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const csso = require('gulp-csso');
const postcss = require('gulp-postcss');
const postcssColor = require('postcss-color-mod-function');
const del = require('del');
const gulpif = require('gulp-if');
const properties = require('postcss-custom-properties');
// const autoprefixer = require('gulp-autoprefixer');

/*
 * * NOTE
 * * The following code seems to introduce minor off-by-one RGB
 * * values. Avoid using. Removed from standard build. 
 * *
 * * The color method handles the generation of the tint/shade
 * * color palettes using the CSS4 color-mod function (no longer)
 * * part of the spec. It takes a base color and increases the
 * * tint or shade by 20% increments
 */
function color() {
  return gulp
      .src('./src/css/common/__variables.css')
      .pipe(postcss([postcssColor()]))
      .pipe(rename('_variables.css'))
      .pipe(gulp.dest('./src/css/common'));
}

function css() {
  const condition = (file) => file !== 'astro.css';

  return gulp
      .src('./src/css/*.css')
      .pipe(sourcemaps.init())
      .pipe(cssimport())
      .pipe(gulpif(condition, postcss([properties()])))
      .pipe(gulp.dest('./static/css'))
      .pipe(rename({ suffix: '.min' }))
      .pipe(csso())
      .pipe(gulp.dest('./static/css'))
      .pipe(sourcemaps.write('./'));
}

/*
 * TODO: readd browser prefix
 */

/*
 * * Cleans the distribution folder before building
 */
function clean() {
  return del(['./static/css/dist/']);
}

/*
 * * Handles watching for file changes and triggering a browser reload
 */
function watch() {
  // watch for color changes and generate palette
  gulp.watch('./src/css/common/__variables.css', gulp.series('color'));

  // compile and minify css
  gulp.watch(
      './src/css/**/*.css',
      {
        ignored: ['./src/css/common/__variables.css', './src/css/astro.core.css', './src/css/astro.css'],
      },
      gulp.series(css)
  );
}

const defaultTasks = gulp.series(clean, watch);
gulp.task('default', defaultTasks);
gulp.task('css:colors', gulp.series(color, css));

exports.css = css;
exports.color = color;
exports.watch = watch;
exports.build = gulp.series(clean, css);
// exports.start = start;
// exports.dev = dev;
exports.clean = clean;
