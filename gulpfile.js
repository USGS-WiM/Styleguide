var gulp = require('gulp');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var del = require('del');
var runSequence = require('run-sequence');
var cacheBuster = require('gulp-cache-bust');
var replace = require('gulp-replace');
var less = require('gulp-less');
var browserSync = require("browser-sync").create();
var reload = browserSync.reload;


///////////////////////
// Minify CSS and JS //
///////////////////////
gulp.task('useref', function(){
    return gulp.src('app/*.html')
        .pipe(useref())
        // Minifies only if it's a JavaScript file
        .pipe(gulpIf('*.js', uglify({ mangle: false }).on('error', function(e){
            console.log(e);
        })))
        // Minifies only if it's a CSS file
        // .pipe(gulpIf('*.css', cssnano()))

        .pipe(gulp.dest('public'))
});

////////////////////////
// Clean build folder //
////////////////////////
gulp.task('clean:dist', function() {
    return del.sync('public');
})

///////////////////////
// Move static files //
///////////////////////
var filesToMove = [
        // '/app/assets/**/*',
        // '/app/assets/fontawesome/*',
        // '/app/assets/publicsans/*',
        // '/app/assets/slackmojis/*',
		'./app/assets/**/*',
        './app/manifest.json'
];
gulp.task('static', function(){
    gulp.src(filesToMove, { base: './app/' })
        .pipe(gulp.dest('public'));
});


//////////////////
// Cache Buster //
//////////////////
gulp.task('cacheBuster', function () {
    return gulp.src('public/index.html')
        .pipe(cacheBuster())
        .pipe(gulp.dest('public'));
});

////////////////////
// Build sequence //
////////////////////
// Clean first, then the rest
gulp.task('build', function (callback) {
    runSequence(
        'clean:dist',
		'static',
        ['useref'],
        // ['useref', 'static'],
        // ['cacheBuster'],
        callback
    )
})



/////////////////
// Browsersync //
/////////////////
// Watch for less changes
// Compile less on save
// inject CSS to browser
// Live reload for HTML and JS
// Also has UI for controlling browsersync

// Styleguide LESS -> CSS
gulp.task('compile-styleguide-less', function () {
    gulp.src('./app/stylesheets/styleguide/styleguide.less')
        .pipe(less())
        .pipe(gulp.dest('./app/stylesheets/etc/'))
        .pipe(browserSync.stream());
}); 
// Compile LESS for styleguide UI seperately
gulp.task('compile-ui-less', function () {
    gulp.src('./app/stylesheets/etc/ui/ui.less')
        .pipe(less())
        .pipe(gulp.dest('./app/stylesheets/etc/'))
        .pipe(browserSync.stream());
}); 


////////////////////
// Serve from Dev //
////////////////////
gulp.task('serve', function () {

    // Serve files from the root of this project
    browserSync.init({
        server: "./app/"
    });

    gulp.watch("app/stylesheets/styleguide/**/*.less", ['compile-styleguide-less']);
    gulp.watch("app/stylesheets/etc/**/*.less", ['compile-ui-less']);
    gulp.watch("./app/**/*.html").on("change", reload);
    gulp.watch("./app/**/*.js").on("change", reload);
});

//////////////////
// Default Task //
//////////////////
// When running `gulp` in the terminal
gulp.task('default', ['serve']);


//////////////////////
// Serve From Build //
//////////////////////
gulp.task('serve-build', function () {

    // Serve files from the root of this project
    browserSync.init({
        server: "./public/"
    });

});
