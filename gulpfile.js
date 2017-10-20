'use strict';

var gulp = require('gulp'),
watch = require('gulp-watch'),
sass = require('gulp-sass');

// gulp-sass
gulp.task('sassPatterns', function() {
  return gulp.src('patterns/**/*.scss')
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(gulp.dest(function (file) {
    return file.base;
  }));
});

gulp.task('sassGlobals', function() {
  return gulp.src('scss/app.scss')
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(gulp.dest('assets/css/'));
});

// gulp-watch
gulp.task('watch', function () {
    gulp.watch('patterns/**/*.scss', ['sassPatterns']);    
    gulp.watch('scss/*.scss', ['sassGlobals']);
});

// default
gulp.task('default', [ 'watch' ]);