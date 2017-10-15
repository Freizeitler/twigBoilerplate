var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('build', function() {
  // place code for your default task here
});

gulp.task('stream', function () {
    // Endless stream mode 
    return watch('patterns/**/*.scss', { ignoreInitial: false })
        .pipe(gulp.dest('build'));
});