const gulp = require('gulp');
const gulpNotify = require('gulp-notify');
const gulpPlumber = require('gulp-plumber');
const gulpSourcemaps = require('gulp-sourcemaps');
const gulpTypescript = require('gulp-typescript');
const runSequence = require('run-sequence');

// task names
const tsTranspileTask = ':ts:transpile';
const watchTask = ':watch';
const developTask = 'develop';
const buildTask = 'build';


gulp.task(tsTranspileTask, () => {
  // ts options
  const pathToTsconfig = './tsconfig.json';
  const tsOptions = { typescript: require('typescript') };
  const tsProject = gulpTypescript.createProject(pathToTsconfig, tsOptions);

  return tsProject.src()
    .pipe(gulpPlumber({
      errorHandler: gulpNotify.onError({
        title: 'TS Error',
        message: '<%= error.message %>',
        onLast: true,
        timeout: 1,
      })
    }))
    .pipe(gulpSourcemaps.init())
    .pipe(tsProject(gulpTypescript.reporter.defaultReporter()))
    .js
    .pipe(gulpSourcemaps.write())
    .pipe(gulp.dest('src'))
    .pipe(gulpNotify({
      title: 'TypeScript',
      message: 'Finish transpiling',
      onLast: true,
      timeout: 1,
    }));
});

gulp.task(watchTask, (done) => {
  gulp.watch('src/**/*.ts', [tsTranspileTask]);
  done();
});

gulp.task(developTask, () => {
  runSequence(
    tsTranspileTask,
    watchTask
  );
});

gulp.task(buildTask, () => {
  // ts options
  const pathToTsconfig = './production.tsconfig.json';
  const tsOptions = { typescript: require('typescript') };
  const tsProject = gulpTypescript.createProject(pathToTsconfig, tsOptions);

  return tsProject.src()
    .pipe(tsProject())
    .js
    .pipe(gulp.dest('src'));
});
