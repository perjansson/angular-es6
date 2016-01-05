var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');

gulp.task('build', function() {
  return gulp.src('src/**/*.js')
    .pipe(babel())
    .pipe(concat('app.js'))
    .pipe(gulp.dest('build'));
});
