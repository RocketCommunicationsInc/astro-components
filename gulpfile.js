const gulp = require('gulp');
const spawn = require('child_process').spawn;
const browserSync = require('browser-sync').create();



// Static Server + watching scss/html files
gulp.task('serve', ['styles'], (cb) => {
  var process = spawn('polymer serve', [], {
    shell: true
  });
  // should maybe put this in a callback, but whatever 
  process.stdout.on('data', (data) => {

    if (data.toString().includes('info')) {
      browserSync.init({
        proxy: "http://127.0.0.1:8081"
      });

      gulp.watch("public/css/**/*.css", ['styles']);
      gulp.watch("public/*.html").on('change', browserSync.reload);
      gulp.watch("src/**/*").on('change', browserSync.reload);
      gulp.watch("index*.html").on('change', browserSync.reload);
    }
  });
});



// Force CSS to trigger browser injection typically 
// ignored when using CSS @import directives
gulp.task('styles', function () {
  return gulp.src("public/css/**/*.css")
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
