'use strict';

var gulp = require('gulp'),
  watch = require('gulp-watch'),
  sass = require('gulp-sass'),
  uglify = require('gulp-uglify'),
  pump = require('pump'),
  concat = require('gulp-concat');
  

// gulp-sass
gulp.task('sassPatterns', function () {
  return gulp.src('patterns/**/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest(function (file) {
      return file.base;
    }));
});
gulp.task('sassGlobals', function () {
  return gulp.src('scss/app.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest('assets/css/'));
});

// gulp-uglify
gulp.task('compressJs', function (cb) {
  pump([
      gulp.src('patterns/**/*.js'),
      uglify(),
      gulp.dest(function (file) {
        return file.base;
      })
    ],
    cb
  );
});

// gulp-concat
gulp.task('concatScripts', function() {
  return gulp.src('patterns/**/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./assets/js/'));
});

// gulp-watch
gulp.task('watch', function () {
  gulp.watch('patterns/**/*.scss', ['sassPatterns']);
  gulp.watch('scss/*.scss', ['sassGlobals']);  
  gulp.watch('patterns/**/*.js', ['compressJs', 'concatScripts']);
});

// default
gulp.task('default', ['watch']);
