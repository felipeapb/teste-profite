'use strict';
 
var gulp = require('gulp');
var html = require('gulp-htmlmin')
var sass = require('gulp-sass');
var notify= require('gulp-notify');
var browserSync = require('browser-sync').create();
var  imagemin = require('gulp-imagemin');
 


gulp.task('default', function() {
    console.log('Rodando...');
  });


//sass
  gulp.task('sass', function () {
    return gulp.src('src/scss/**/*.scss')
    .pipe(sass({outputStyle:"compressed"}))
    .on("error", notify.onError("Error: <%= error.message%>"))
      //.pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css/'))
    .pipe(browserSync.stream());
  });
//html
  gulp.task('html', () => {
    return gulp.src('src/index.html')
      .pipe(html({ collapseWhitespace: true }))
      .on("error", notify.onError("Error: <%= error.message%>"))
      .pipe(gulp.dest('dist'))
      .pipe(browserSync.stream());
  });
 

 
// gulp.task('sass:watch', function () {
 // gulp.watch('src/scss/**/*.scss', ['sass']);
//}); 
//Browser sync
gulp.task('BS', ['sass', 'html',  ] ,function() {
    browserSync.init({
        server: {
            baseDir: "./dist/"
        }
    })
    gulp.watch('src/index.html',['html']);
    gulp.watch('src/scss/style.scss',['sass']);
});

gulp.task('img', () =>
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
);

gulp.task('default', ['BS']);