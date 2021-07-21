const gulp = require('gulp')
const cssimport = require('gulp-cssimport')
const rename = require('gulp-rename')
const sourcemaps = require('gulp-sourcemaps')
const csso = require('gulp-csso')
const postcss = require('gulp-postcss')
const postcssColor = require('postcss-color-mod-function')
const properties = require('postcss-custom-properties')
const sass = require('gulp-sass')

sass.compiler = require('node-sass')
const packageDist = './src/modules/rux-core/dist'

gulp.task('rux-core-static', () => {
    const folders = ['fonts', 'icons']
    return gulp
        .src(
            folders.map((folder) => `./static/${folder}/*`),
            { base: './static/' }
        )
        .pipe(gulp.dest(packageDist + '/static'))
})

gulp.task('rux-icon-svg', () => {
    const folders = ['fonts', 'icons']
    return gulp
        .src('./static/icons/astro.svg', { base: './static/' })
        .pipe(gulp.dest('./src/components/rux-icon'))
})

gulp.task('rux-core-scss', () => {
    return gulp
        .src('./src/scss/**/*.scss', { base: './src/scss' })
        .pipe(gulp.dest(packageDist + '/scss'))
})

gulp.task('rux-core-dist', () => {
    return gulp
        .src('./src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.init())
        .pipe(cssimport())
        .pipe(postcss([properties()]))
        .pipe(gulp.dest(packageDist + '/css'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(csso())
        .pipe(gulp.dest(packageDist + '/css'))
})

gulp.task('sass', () => {
    return gulp
        .src('./src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.init())
        .pipe(cssimport())
        .pipe(postcss([properties()]))
        .pipe(gulp.dest('./static/css'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(csso())
        .pipe(gulp.dest('./static/css'))
})

/*
 * * Handles watching for file changes and triggering a browser reload
 */
function watch() {
    // compile and minify css
    gulp.watch('./src/scss/**/*.scss', gulp.series('sass'))
}

// only used during pre lerna publish
gulp.task(
    'build-rux-core',
    gulp.series('rux-core-static', 'rux-core-scss', 'rux-core-dist')
)

gulp.task('default', gulp.series('sass', watch))

exports.build = gulp.series('sass')
