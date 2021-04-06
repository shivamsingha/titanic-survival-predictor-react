const { src, dest, series } = require('gulp');
const ts = require('gulp-typescript');
const nodemon = require('gulp-nodemon');

const tsProject = ts.createProject('tsconfig.json');

const build = () =>
  tsProject
    .src()
    .pipe(tsProject())
    .pipe(src(['src/**', '!src/**/*.tsx', '!src/**/*.ts', '!src/**/*.js']))
    .pipe(dest('dist'));

function nodemonTask() {
  nodemon({
    script: 'dist/index.js',
    tasks: ['build'],
    ext: 'ts',
    watch: 'src'
  });
}

exports.start = series(build, nodemonTask);
exports.build = build;
exports.default = build;
