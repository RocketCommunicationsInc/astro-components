const gulp = require('gulp');
const cssimport = require('gulp-cssimport');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const csso = require('gulp-csso');
const postcss = require('gulp-postcss');
const postcssColor = require('postcss-color-mod-function');
const properties = require('postcss-custom-properties');
const sass = require('gulp-sass');


sass.compiler = require('node-sass');
const packageDist = './src/modules/rux-core/dist';

gulp.task('rux-core-static', () => {
  const folders = ['fonts', 'icons', 'img'];
  return gulp.src(folders.map((folder) => `./static/${folder}/*`), {base: './static/'})
      .pipe(gulp.dest(packageDist + '/static'));
});

gulp.task('rux-core-scss', () => {
  return gulp.src('./src/scss/**/*.scss', {base: './src/scss'})
      .pipe(gulp.dest(packageDist + '/scss'));
});

gulp.task('rux-core-dist', () => {
  return gulp.src('./src/scss/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(sourcemaps.init())
      .pipe(cssimport())
      .pipe(postcss([properties()]))
      .pipe(gulp.dest(packageDist + '/css'))
      .pipe(rename({ suffix: '.min' }))
      .pipe(csso())
      .pipe(gulp.dest(packageDist + '/css'));
});

gulp.task('sass', () => {
  return gulp.src('./src/scss/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(sourcemaps.init())
      .pipe(cssimport())
      .pipe(postcss([properties()]))
      .pipe(gulp.dest('./static/css'))
      .pipe(rename({ suffix: '.min' }))
      .pipe(csso())
      .pipe(gulp.dest('./static/css'));
});


/*
 * * The color method handles the generation of the tint/shade
 * * color palettes using the CSS4 color-mod function (no longer)
 * * part of the spec. It takes a base color and increases the
 * * tint or shade by 20% increments
 */

gulp.task('color', () => {
  return gulp
      .src('./src/scss/common/__variables.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(postcss([postcssColor()]))
      .pipe(rename('_variables.scss'))
      .pipe(gulp.dest('./src/scss/common'));
});


/*
 * * Handles watching for file changes and triggering a browser reload
 */
function watch() {
  // watch for color changes and generate palette
  gulp.watch('./src/css/common/__variables.scss', gulp.series('color'));

  // compile and minify css
  gulp.watch(
      './src/scss/**/*.scss',
      {
        ignored: ['./src/scss/common/__variables.scss'],
      },
      gulp.series('sass')
  );
}

gulp.task('build-rux-core', gulp.series('rux-core-static', 'rux-core-scss', 'rux-core-dist'));

gulp.task('default', gulp.series('sass', watch));
gulp.task('css:colors', gulp.series('color', 'sass'));

exports.watch = watch;
exports.build = gulp.series('color', 'sass', 'build-rux-core');
