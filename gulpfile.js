'use strict';

var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('sassPatterns', function() {
  return gulp.src('./patterns/**/*.scss')
  .pipe(({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(gulp.dest('./patterns/**/*.min.css'));
});

gulp.task('sassGlobals', function() {
  return gulp.src('./scss/app.scss')
  .pipe(({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(gulp.dest('./assets/css/*.min.css'));
});

// watchers:
gulp.task('watchPatterns', function () {
    return watch('./patterns/**/*.scss')
        .pipe(gulp.dest('sassPatterns'));
});

gulp.task('watchGlobal', function () {
  return watch('./scss/*.scss')
      .pipe(gulp.dest('sassGlobals'));
});

// default
gulp.task('default', [ 'watchPatterns', 'watchGlobal' ]);