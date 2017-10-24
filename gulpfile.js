const gulp = require('gulp');
const babel = require('gulp-babel');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const {noop} = require('gulp-util');
const livereload = require('gulp-livereload');
const cleanCSS = require('gulp-clean-css');

const DEST = './public/';
let isProd = false;

gulp.task('css', () => gulp
  .src('src/style.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(isProd ? cleanCSS() : noop())
  .pipe(gulp.dest(DEST))
  .pipe(isProd ? noop() : livereload())
);

gulp.task('js', () => gulp
  .src('src/scripts.js')
  .pipe(babel({
    presets: [
      ['env', {
        targets: {
          browsers: [
            '> 1%',
            '> 1% in AU',
            'IE >= 9',
            'Safari >= 9',
            'iOS >= 8',
            'Android >= 5',
          ]
        }
      }]
    ]
  }))
  .pipe(isProd ? uglify() : noop())
  .pipe(gulp.dest(DEST))
  .pipe(isProd ? noop() : livereload())
);

gulp.task('img', () => gulp
  .src('src/images/*')
  .pipe(imagemin())
  .pipe(gulp.dest(DEST + 'images/'))
);

gulp.task('watch', () => {
  livereload.listen();

  gulp.watch('src/**/*.{css,sass,scss}', ['css']);
  gulp.watch('src/**/*.js', ['js']);
});

gulp.task('production', () => isProd = true);

gulp.task('build', ['production', 'css', 'js', 'img']);
gulp.task('default', ['watch', 'css', 'js', 'img']);
