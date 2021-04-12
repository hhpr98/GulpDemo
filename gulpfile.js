require('dotenv').config()

const { series, parallel, src, dest } = require('gulp');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

function defaultTask(cb) {
    // place code for your default task here
    return src('./src/*.js')
        .pipe(concat('scripts.js'))
        .pipe(dest('dist'));
}

// The `clean` function is not exported so it can be considered a private task.
// It can still be used within the `series()` composition.
function clean(cb) {
    // body omitted
    cb();
}

// The `build` function is exported so it is public and can be run with the `gulp` command.
// It can also be used within the `series()` composition.
function build(cb) {
    // body omitted
    cb();
}

function transpile(cb) {
    // body omitted
    cb();
}

function bundle(cb) {
    // body omitted
    cb();
}

function javascript(cb) {
    // body omitted
    cb();
}

function css(cb) {
    // body omitted
    cb();
}

function minify(cb) {
    // body omitted
    cb();
}

function livereload(cb) {
    // body omitted
    cb();
}

function streamTask() {
    return src('*.js')
        .pipe(dest('output'));
}

function promiseTask() {
    return Promise.resolve('the value is ignored');
}

exports.default = defaultTask;
//exports.build = build;
//exports.default = series(clean, build);
//exports.build1 = series(transpile, bundle);
//exports.build2 = parallel(javascript, css);
exports.stream = streamTask;
exports.promise = promiseTask;

switch (process.env.NODE_ENV) {
    case 'development':
        exports.build = series(transpile, minify);
        break;
    case 'production':
        exports.build = series(transpile, livereload);
        break;
    case 'test':
        //
        break;
    default:
        //
}