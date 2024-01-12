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


//Tarefas públicas
function presentation(callback){
    console.log("Hello world");
    callback();
}

function sayHello(callback){
    console.log("Hello man!");
    sayBye();
    callback();
}

//tarefas privadas
const sayBye = () =>{
    console.log("goodbye");
}

//executando em série
exports.default = gulp.series(presentation, sayHello);

exports.sayHello = sayHello;

exports.sass = compileSass;

