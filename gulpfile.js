var browserify = require('browserify');
var concat = require('gulp-concat');
var gulp = require('gulp');
var less = require('gulp-less');
var react = require('gulp-react');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var watchify = require('watchify');
var cache = require('gulp-cached');

// Config
var config = {
    'jsx-source': './**/*.jsx',
    'less-source': ['./app/**/*.less'],
    'less-target': './app/static/',
    'js-source': './app/main.js',
    'js-target': './app/static/'
};

var paths = {
    //jsxSrc: './app/**/*.jsx',
    //jsxOutput: './',
    //lessSrc: './app/style/*.less',
    //lessSrc: './app/**/*.less',
    //lessOutput: './server/static',
    browserifyEntry: './app/main.js',
    browserifyBundleName: 'bundle.js',
    browserifyOutput: './server/static'
};

gulp.task('jsx', function (fn) {
    return gulp.src(config['jsx-source'])
        .pipe(cache('jsx'))
        .pipe(react())
        .pipe(gulp.dest('./'));
});

gulp.task('less', function () {
    return gulp.src(config['less-source'])
        .pipe(sourcemaps.init())
        .pipe(less({compress: false}))
        .pipe(concat('bundle.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config['less-target']))
});

gulp.task('browserify', function () {
    var b = browserify({debug: true});
    b.add(config['js-source']);
    return b.bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config['js-target']))
});

gulp.task('watch', function () {
    gulp.watch(config['jsx-source'], ['jsx']);
    gulp.watch(config['less-source'], ['less']);

    var b = browserify({debug: true});
    b.add(config['js-source']);
    var w = watchify(b, watchify.args);

    w.on('update', rebundle);

    function rebundle() {
        return w.bundle()
            .pipe(source('bundle.js'))
            .pipe(gulp.dest(config['js-target']))
    }

    return rebundle();
});

gulp.task('dev', ['less', 'jsx', 'browserify', 'watch']);
gulp.task('default', ['jsx']);
