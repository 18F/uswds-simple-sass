'use strict';

const path = require('path');
const gulp = require('gulp');
const gutil = require('gulp-util');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const express = require('express');

const PORT = process.env.PORT || '8000';
const USWDS_DIST = 'node_modules/uswds/dist';
const USWDS_DIST_DIR = path.join(__dirname, ...USWDS_DIST.split('/'));

gulp.task('copy-uswds-assets', () => {
  return gulp.src(`${USWDS_DIST}/@(js|fonts|img)/**/**`)
  .pipe(gulp.dest('./vendor/uswds'));
});

gulp.task('sass', () => {
  return gulp.src('./sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: [
        path.join(USWDS_DIST_DIR, 'scss'),
      ]
    }).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', () => {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('watch', ['default', 'sass:watch'], done => {
  const app = express();

  app.use(express.static(__dirname));
  app.listen(PORT, () => {
    gutil.log(`Development server listening at`,
              gutil.colors.green(`http://localhost:${PORT}`));
    done();
  });
});

gulp.task('default', ['sass', 'copy-uswds-assets']);
