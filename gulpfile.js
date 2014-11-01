// Dependencies
var gulp = require('gulp');
var react = require('gulp-react');
var rename = require("gulp-rename");
var cache = require('gulp-cached');

// Config
var config = {
    'jsx-source': './**/*-jsx/*.jsx'
};

gulp.task('jsx', function (fn) {
    return gulp.src(config['jsx-source'])
        .pipe(cache('jsx'))
        .pipe(react())
        .pipe(rename(function (path) {
            path.dirname = path.dirname.replace('-jsx', '');
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
    gulp.watch(config['jsx-source'], ['jsx']);
});

gulp.task('default', ['jsx','watch']);