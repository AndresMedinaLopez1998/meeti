const { src, dest, watch, parallel } = require("gulp");
const sass = require("gulp-sass")(require('sass'));
const plumber = require('gulp-plumber');

function css(done) {
    
    src('src/scss/**/*.scss') // Identificar el archivo de SASS 
        .pipe(plumber())
        .pipe(sass()) // Compilarlo 
        .pipe(dest('build/css')); // Almacenar en el disco duro 

    done() //Callback cque avisa a gulp cuando llegamos al final
}

function dev(done) {
    watch('src/scss/**/*.scss', css)

    done();
}


exports.css = css;
exports.dev = parallel(css, dev);