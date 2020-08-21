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
      .pipe(gulp.dest('./src/components/rux-assets/css'))
      // in an upcoming major release, we should deprecate distributing .mins, that's not our concern
      .pipe(rename({ suffix: '.min' }))
      .pipe(csso())
      .pipe(gulp.dest('./src/components/rux-assets/css'))
      .pipe(sourcemaps.write('./'));
}

/*
 * * Cleans the distribution folder before building
 */
function clean() {
  return del(['./src/components/rux-assets/css/']);
}

/*
 * * NOTE: watching doesn't work with Storybook right now
 */
function watch() {
  // watch for color changes and generate palette
  gulp.watch('./src/css/common/__variables.css', gulp.series('color'));

  // compile and minify css
  gulp.watch(
      './src/css/**/*.css',
      {
        ignored: ['./src/css/common/__variables.css'],
      },
      gulp.series(css)
  );
}

const defaultTasks = gulp.series(clean);
gulp.task('default', defaultTasks);
gulp.task('css:colors', gulp.series(color, css));

exports.css = css;
exports.color = color;
exports.watch = watch;
exports.build = gulp.series(clean, css, color);
// exports.start = start;
// exports.dev = dev;
exports.clean = clean;
