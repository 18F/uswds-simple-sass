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

// If moving assets to a sub-directory, change '.' to that sub-directory.
// e.g. 'assets', or 'public/assets'.
const ASSETS_DIR = path.join(__dirname, '.');

gulp.task('copy-uswds-assets', () => {
  return gulp.src(`${USWDS_DIST}/@(js|fonts|img)/**/**`)
  .pipe(gulp.dest(`${ASSETS_DIR}/vendor/uswds`));
});

gulp.task('sass', () => {
  return gulp.src(`${ASSETS_DIR}/sass/**/*.scss`)
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: [
        path.join(USWDS_DIST_DIR, 'scss'),
      ]
    }).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(`${ASSETS_DIR}/css`));
});

gulp.task('sass:watch', () => {
  gulp.watch(`${ASSETS_DIR}/sass/**/*.scss`, ['sass']);
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
