const gulp = require('gulp');
const tsconfig = require('../tsconfig.json');
const tsOpts = tsconfig.compilerOptions;
const $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*', 'del', '@jswork/gulp-*'],
});

gulp.task('scripts:cjs', function() {
  return gulp
    .src('src/index.ts')
    .pipe($.jswork.pkgHeader())
    .pipe($.typescript({ ...tsOpts, module: 'commonjs' }))
    .pipe(gulp.dest('dist/cjs'))
    .pipe($.size({ title: '[ minimize size ]:' }));
});

gulp.task('scripts:esm', function() {
  return gulp
    .src('src/index.ts')
    .pipe($.jswork.pkgHeader())
    .pipe($.typescript({ ...tsOpts, module: 'esnext' }))
    .pipe(gulp.dest('dist/esm'))
    .pipe($.size({ title: '[ minimize size ]:' }));
});
