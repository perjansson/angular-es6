var gulp = require('gulp');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');

gulp.task('build', function() {
  var bundler = watchify(browserify('./src/app.js', {
    debug: true
  }).transform(babelify));

  bundler.bundle()
    .on('error', function(err) {
      console.error(err);
      this.emit('end');
    })
    .pipe(source('app.bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest('build'));
});
