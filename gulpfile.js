

var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
gulp.task('default',['watch']);
gulp.task('sass', function(){
  return gulp.src('/scss/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError)) // Converts Sass to CSS with gulp-sass
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('scss/'))
});

gulp.task('watch', function(){
  gulp.watch('amina-global/scss/*.scss', ['sass']);
});
