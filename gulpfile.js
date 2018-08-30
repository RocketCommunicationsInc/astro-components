const gulp = require("gulp");
const spawn = require("child_process").spawn;
var concatCss = require("gulp-concat-css");
var concat = require("gulp-concat");
var clean = require("gulp-clean");
var rename = require("gulp-rename");
var watch = require("gulp-watch");
var postcss = require("gulp-postcss");
var cssnext = require("postcss-cssnext");
var order = require("gulp-order");
var hwb = require("postcss-color-hwb");
var properties = require("postcss-custom-properties");
var color = require("postcss-color-function");
var sourcemaps = require("gulp-sourcemaps");
var autoprefixer = require("gulp-autoprefixer");
var csso = require("gulp-csso");
const browserSync = require("browser-sync").create();

// Static Server + watching scss/html files
gulp.task("serve", cb => {
  var process = spawn("polymer serve --port 8082", [], {
    shell: true
  });
  // should maybe put this in a callback, but whatever
  process.stdout.on("data", data => {
    if (data.toString().includes("info")) {
      browserSync.init({
        proxy: "http://127.0.0.1:8082"
      });

      gulp.watch("public/css/**/*.css", ["concatCss"]);
      gulp.watch("public/*.html").on("change", browserSync.reload);
      gulp.watch("packages/**/*").on("change", browserSync.reload);
      gulp.watch("src/**/*").on("change", browserSync.reload);
      gulp.watch("index*.html").on("change", browserSync.reload);
    }
  });
});

const AUTOPREFIXER_BROWSERS = [
  "ie >= 11",
  "ff >= 30",
  "chrome >= 34",
  "safari >= 7"
];

// gulp.task("watch", function() {
//   gulp.watch("public/css/src/**/*.css", ["concatCss"]);
// });

gulp.task("concatCss", function() {
  return gulp
    .src("public/css/src/**/*.css")
    .pipe(
      order([
        "public/css/src/_colors--light.css",
        "public/css/src/_colors--dark.css",
        "public/css/src/_fonts.css",
        "public/css/src/_variables.css",
        "public/css/src/_theme--light.css",
        "public/css/src/_theme--dark.css",
        "public/css/src/_typography.css",
        "public/css/src/_global.css",
        "public/css/src/**/*.css"
      ])
    )
    .pipe(sourcemaps.init())
    .pipe(autoprefixer({ browsers: AUTOPREFIXER_BROWSERS }))
    .pipe(postcss([properties()]))
    .pipe(concat("astro.css"))
    .pipe(gulp.dest("public/css"))
    .pipe(rename({ suffix: ".min" }))
    .pipe(csso())
    .pipe(gulp.dest("public/css"))
    .pipe(sourcemaps.write("."))
    .pipe(browserSync.stream());
});

// Force CSS to trigger browser injection typically
// ignored when using CSS @import directives
// gulp.task("styles", function() {
//   return gulp.src("public/css/**/*.css").pipe(browserSync.stream());
// });

gulp.task("default", ["serve"]);
