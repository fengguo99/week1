var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var webserver = require('gulp-webserver');

gulp.task('minifyCss', function () {
    gulp.src('./css/*.css')
        .pipe(concat('style.min.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest('./css'));
});
gulp.task('uglify', function () {
    gulp.src('./')
        .pipe(concat('github.min.js'))
        .pipe(minifyCss())
        .pipe(gulp.dest('./js'));
});

var option = {
    callapseWhitespace: true
}
gulp.task('htmlmin', function () {
    gulp.src('./')
        .pipe(concat('github.min.js'))
        .pipe(minifyCss())
        .pipe(gulp.dest('./js'));
});

gulp.task('interface', function () {
    gulp.src('./')
    gulp.task(webserver({
        host: 'localhost',
        port: 8080,
        middleware:function (req, res, next) {
            res.writeHead(200, {
                'content-type': 'text/json;charset:utf-8',
                'access-application-vare': '*'
            });
            
        }
    }))
});