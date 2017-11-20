var gulp        = require('gulp');
var exec = require('child_process').exec;
var browserSync = require('browser-sync').create();


// cb = function(err) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		browserSync.init({
// 			// server: "./index.html"
// 			proxy: "http://127.0.0.1:8081"

// 		});

// 		gulp.watch("public/css/**/*.css", ['styles']);
// 		gulp.watch("public/*.html").on('change', browserSync.reload);
// 		gulp.watch("index*.html").on('change', browserSync.reload);
// 	}
// }

// Static Server + watching scss/html files
gulp.task('serve', ['styles'], function(cb) {
	exec('polymer serve', function (err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('styles', function() {
    return gulp.src("public/css/**/*.css")
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);