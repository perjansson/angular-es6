var gulp = require('gulp'),
  connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: './',
    livereload: true
  });
});

gulp.task('resources', function () {
  gulp.src('./app/*.**')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./app/*.**'], ['resources']);
});
