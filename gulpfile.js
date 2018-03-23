const gulp = require('gulp');
const babel = require('gulp-babel');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const {noop} = require('gulp-util');
const cleanCSS = require('gulp-clean-css');
const connect = require('gulp-connect');
const ejs = require('gulp-ejs');
const autoprefixer = require('gulp-autoprefixer');
const htmlmin = require('gulp-htmlmin');

const DEST = './public/';
let isProd = false;

gulp.task('html', () => gulp
  .src('src/index.ejs')
  .pipe(ejs({}, {}, {ext: '.html'}))
  .pipe(isProd ? htmlmin({collapseWhitespace: true}) : noop())
  .pipe(gulp.dest(DEST))
  .pipe(connect.reload())
);

gulp.task('css', () => gulp
  .src('src/style.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(isProd ? cleanCSS() : noop())
  .pipe(isProd ? autoprefixer() : noop())
  .pipe(gulp.dest(DEST))
  .pipe(connect.reload())
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
  .pipe(connect.reload())
);

gulp.task('img', () => gulp
  .src('src/images/*')
  .pipe(imagemin())
  .pipe(gulp.dest(DEST + 'images/'))
  .pipe(connect.reload())
);

gulp.task('fonts', () => gulp
  .src('src/fonts/*')
  .pipe(gulp.dest(DEST + 'fonts/'))
  .pipe(connect.reload())
);

gulp.task('watch', () => {
  gulp.watch('src/**/*.{css,sass,scss}', ['css']);
  gulp.watch('src/**/*.js', ['js']);
  gulp.watch('src/**/*.ejs', ['html']);
});

gulp.task('connect', function() {
  connect.server({root: 'public', livereload: true});
});

gulp.task('production', () => isProd = true);

gulp.task('build', ['production', 'html', 'css', 'js', 'img', 'fonts']);
gulp.task('default', ['watch', 'html', 'css', 'js', 'img', 'fonts', 'connect']);
