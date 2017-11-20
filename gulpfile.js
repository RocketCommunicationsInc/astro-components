var gulp        = require('gulp');
// var exec = require('child_process').exec;
var spawn = require('child_process').spawn;
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

// cb = function(err) {
// 	console.log('asdf');
// 	browserSync.init({
// 		// server: "./index.html"
// 		proxy: "http://127.0.0.1:8081"

// 	});
// 	gulp.watch("public/css/**/*.css", ['styles']);
// 	gulp.watch("public/*.html").on('change', browserSync.reload);
// 	gulp.watch("index*.html").on('change', browserSync.reload);
// }

// Static Server + watching scss/html files
gulp.task('serve', ['styles'], function(cb) {
	var process = spawn('polymer serve', [], { shell: true });
			process.stdout.on('data', (data) => {
				console.log('data',data);
				if(data) {
					browserSync.init({
						proxy: "http://127.0.0.1:8081"
					});

					gulp.watch("public/css/**/*.css", ['styles']);
					gulp.watch("public/*.html").on('change', browserSync.reload);
					gulp.watch("index*.html").on('change', browserSync.reload);
				}
			})
	
})


// Compile sass into CSS & auto-inject into browsers
gulp.task('styles', function() {
    return gulp.src("public/css/**/*.css")
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);