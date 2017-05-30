var gulp = require('gulp'),
    argv = require('yargs').argv,
    gulpif = require('gulp-if'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    filter = require('gulp-filter'),
    _      = require('lodash'),
    plumber = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),
    scss = require('gulp-sass'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    pngquant = require('imagemin-pngquant'),
    rename = require('gulp-rename'),
    svgstore = require('gulp-svgstore'),
    svgmin = require('gulp-svgmin'),
    notification = require('node-notifier'),
    gutil = require('gulp-util');

//JS

var jsFiles = [
  'assets/js/libs/jquery-3.1.1.min.js',
  'assets/js/libs/slick.min.js',
  'assets/js/libs/stylesheet.js',
  'assets/js/main.js',
  ];

function handleError(err){
  // Notification
  var notifier = notification
  notifier.notify({ message: 'Error: ' + err.message });
  // Log to console

  gutil.log(gutil.colors.red('Error'), err.toString());
  this.emit('end')
}

// JavaScript Files concatenation
gulp.task('js', function() {

  return gulp.src(jsFiles)
    .pipe(concat('main.js'))
    .pipe(gulpif(argv.production, uglify()))
    .pipe(gulp.dest('dist/js'))
});


// Scss file compilation
gulp.task('sass', function () {

  return gulp.src('assets/sass/main.scss')
    .pipe(scss({ outputStyle: 'expanded',sourceComments: 'normal' }))
    .on('error',handleError )
    .pipe(autoprefixer('last 2 version', 'ie 9'))
    .pipe(gulpif(argv.production, scss({ outputStyle: 'compressed' })))
    .pipe(gulp.dest('dist/css'))
});

// Watching assets
gulp.task('watch', function() {
  gulp.watch(jsFiles, ['js']);
  gulp.watch('assets/sass/**/*.scss', ['sass']);
});


// Main tasks
//// `gulp` — For production just run `gulp --production`
gulp.task('default', ['js', 'sass', 'watch']);
