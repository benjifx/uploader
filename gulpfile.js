var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('default', function() {
    browserSync.init({
        proxy: "localhost:8080"
    });
     gulp.watch("public/**.*").on('change', browserSync.reload);
});