const gulp = require('gulp');
const run = require('gulp-run');
const newer = require('gulp-newer');
const typescript = require('gulp-typescript');
const tslint = require('gulp-tslint');
const clean = require('gulp-clean');

const tsConfig = require('./tsconfig.json');

const ts = {
  src: tsConfig.filesGlob,
  dest: 'dist',
}

gulp.task('test:lint', () => {
  return gulp.src(['src/**/*.ts'])
    .pipe(tslint({formatter: 'stylish'}))
    .pipe(tslint.report({emitError: false}));
});

gulp.task('test:unit', () => {
  return run('jest').exec();
});

gulp.task('compile:typescript', () => {
  return gulp.src(ts.src)
    .pipe(newer({dest: ts.dest, ext: '.js'}))
    .pipe(typescript(tsConfig.compilerOptions))
    .pipe(gulp.dest(ts.dest));
});

gulp.task('clean:typescript', () => {
  return gulp.src(ts.dest, {read: false})
    .pipe(clean());
});

gulp.task('test', ['test:lint', 'test:unit']);
gulp.task('compile', ['compile:typescript']);
gulp.task('clean', ['clean:typescript']);

gulp.task('build', ['test', 'compile']);
