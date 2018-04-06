const gulp = require('gulp');
const rev = require('gulp-rev');
const override = require('gulp-rev-css-url');
const sass = require('gulp-sass');
const less = require('gulp-less');
const merge = require('merge-stream');

gulp.task('scss', () => {
  let scss = gulp
    .src('src/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('tmp'));
  let images = gulp.src('src/*.jpg').pipe(gulp.dest('tmp'));
  return merge(scss, images)
    .pipe(rev())
    .pipe(override())
    .pipe(gulp.dest('dist'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('dist'));
});

gulp.task('less', () => {
  let scss = gulp
    .src('src/*/css/*.less')
    .pipe(less())
    .pipe(gulp.dest('tmp'));
  let images = gulp.src('src/*/img/*').pipe(gulp.dest('tmp'));
  return merge(scss, images)
    .pipe(rev())
    .pipe(override())
    .pipe(gulp.dest('dist'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('dist'));
});
