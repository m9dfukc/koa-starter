// Include gulp
var gulp    = require('gulp');
var eslint  = require('gulp-eslint');
var gutil   = require('gulp-util');
var nodemon = require('gulp-nodemon');

// Global options
var options = {
  dev: true,
  src: 'src'
};

// Es lint javascript
gulp.task('lint', function() {
  return gulp.src(options.src + '/server/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format());
});

// Start node via nodemon
gulp.task('run', function () {
  nodemon({
    script: options.src + '/server.js',
    ext: 'js',
    tasks: ['lint'],
    nodeArgs: ['--harmony']
  })
  .on('restart', function () {
    gutil.log('[nodemon]', 'restarted server!');
  });
});

// Our default task
gulp.task('default', ['run']);
