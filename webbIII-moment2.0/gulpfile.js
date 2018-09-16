const gulp       =require("gulp");
const concat     =require("gulp-concat");
const uglify     =require("gulp-uglify");
const watch      =require("gulp-watch");
const cleanCSS      =require("gulp-clean-css");

/*flytta html filer*/ 
gulp.task("sendhtml", function(){
   return gulp.src("src/*.htm")
    .pipe(gulp.dest("pub/"))
});
/*flytta jpg filer*/ 
gulp.task("sendjpg", function(){
    return gulp.src("src/img/*.JPG")
     .pipe(gulp.dest("pub/img"))
 });

/*flytta png filer*/ 
gulp.task("sendpng", function(){
    return gulp.src("src/img/*.png")
     .pipe(gulp.dest("pub/img"))

 });

/*join and minimize js*/

gulp.task("joinminjs", function(){

    return gulp.src("src/js/*.js")
    .pipe(concat("main.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("pub/js"));
});


/*join and minimize css*/

gulp.task("joinmincss", function(){

    return gulp.src("src/css/*.css")
    .pipe(concat("style.min.css"))
    .pipe(cleanCSS())
    .pipe(gulp.dest("pub/css"));
});


/*contoll changes */

gulp.task("watcher",function(){
    watch("src/js/*.js",function(){

        gulp.start("joinminjs");
    });
    

    watch("src/*.htm",function(){

        gulp.start("sendhtml");
    });

    
    watch("src/img/*.JPG",function(){

        gulp.start("sendjpg");
    });

    
    watch("src/img/*.png",function(){

        gulp.start("sendpng");
    });
});


gulp.task("default",["sendhtml","joinminjs","joinmincss", "sendjpg", "sendpng", "watcher"], function(){});