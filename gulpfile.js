const gulp = require('gulp');
const rev = require('gulp-rev');
const override = require('gulp-rev-css-url');
const sass = require('gulp-sass');
const less = require('gulp-less');
const merge = require('merge-stream');

gulp.task('scss', () => {
  let style = gulp
    .src('src/foo/css/*.scss', { base: 'src' })
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('tmp'));

  let images = gulp
    .src('src/foo/img/*.*', { base: 'src' })
    .pipe(gulp.dest('tmp'));

  return merge(style, images)
    .pipe(rev())
    .pipe(override())
    .pipe(gulp.dest('dist'))
    .pipe(rev.manifest('manifest.json'))
    .pipe(gulp.dest('dist'));
});

gulp.task('less', () => {
  let style = gulp
    .src('src/foo/css/*.less', { base: 'src' })
    .pipe(less())
    .pipe(gulp.dest('tmp'));

  let images = gulp
    .src('src/foo/img/*.*', { base: 'src' })
    .pipe(gulp.dest('tmp'));

  return merge(style, images)
    .pipe(rev())
    .pipe(override())
    .pipe(gulp.dest('dist'))
    .pipe(rev.manifest('manifest.json'))
    .pipe(gulp.dest('dist'));
});
