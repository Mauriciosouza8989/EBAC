//import para execução em série
const gulp = require('gulp');


//compilação do sass como gulp
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

function compileSass(){
    return gulp.src('./source/styles/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/styles'));
}

// compilar js e comprimir
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
function compileJavascript(){
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/scripts'))
}

//comprimir imagens
const imagemin = require('gulp-imagemin');
function imageCompress(){
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
}


//executando em série

exports.default =  function(){
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compileSass));
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false}, gulp.series(compileJavascript));
    gulp.watch('./source/images/*', {ignoreInitial: false}, gulp.series(imageCompress));
}