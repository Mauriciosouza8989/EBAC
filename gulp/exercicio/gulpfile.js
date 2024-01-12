const path = require('path');
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass')(require('sass'));

const compileSass = () =>{
    return gulp.src(path.join(__dirname, 'source/styles/style.scss'))
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(gulp.dest(path.join(__dirname, '/build/styles')))
}

const compileJavascript = () =>{
    return gulp.src(path.join(__dirname, '/source/scripts/*.js'))
    .pipe(uglify())
    .pipe(gulp.dest(path.join(__dirname, '/build/scripts')))
}

const imageCompress = () =>{
    return gulp.src(path.join(__dirname, '/source/images/*'))
    .pipe(imagemin())
    .pipe(gulp.dest(path.join(__dirname, '/build/images')))
}

exports.default =  function(){
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compileSass));
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false}, gulp.series(compileJavascript));
    gulp.watch('./source/images/*', {ignoreInitial: false}, gulp.series(imageCompress));
}