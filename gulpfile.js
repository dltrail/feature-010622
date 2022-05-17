const gulp = require("gulp");
const gulpIf = require("gulp-if");
const sass = require("gulp-sass")(require("sass"));
const uglify = require("gulp-uglify");
const postcss = require("gulp-postcss");
const autoprefixer = require("gulp-autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const cssnano = require("gulp-cssnano");
const babel = require("gulp-babel");
const browserify = require("gulp-browserify");
const ts = require("gulp-typescript");

const tsProject = ts.createProject("tsconfig.json");

gulp.task("watch", async function () {
  gulp.watch("src/scss/*.scss", gulp.series(["sass"]));
  gulp.watch("dist/js/*.js", gulp.series(["js"]));
  gulp.watch("src/index.html");
});

gulp.task("sass", async function () {
  return gulp.src("src/scss/*.scss").pipe(sass()).pipe(gulp.dest("dist/css"));
});

gulp.task("processCSS", async function () {
  gulp
    .src("dist/css/*.css")
    .pipe(sourcemaps.init())
    .pipe(postcss([require("autoprefixer")]))
    .pipe(sourcemaps.write("."))
    .pipe(gulpIf("*.css", cssnano()))
    .pipe(gulp.dest("build/css"));
});




// gulp.task("processJS", async function () {
//   return gulp
//     .src("src/js/*.js")
//     .pipe(browserify())
//     .pipe(uglify())
//     .pipe(gulp.dest("dist/js"));
// });



gulp.task('ts', async function () {
  return tsProject
    .src("src/ts.*.ts")
    .pipe(tsProject())
    .pipe(gulp.dest('dist/js'));
});

gulp.task("uglify", async function () {
  gulp.src("dist/js/*.js").pipe(uglify()).pipe(gulp.dest("build/js"));
  gulp.src("dist/css/*.css").pipe(uglify()).pipe(gulp.dest("build/css"));
});

gulp.task("js", function () {
  return gulp
    .src("dist/js/*.js")
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest("build/js"));
});



gulp.task(
  "build",
  gulp.series(["watch", "sass", "processCSS", "ts", "js"])
);
