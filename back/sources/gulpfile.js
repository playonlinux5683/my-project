const gulp = require('gulp');

const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');

// console.log(tsProject);
gulp.task('scripts', () => {  
    return tsProject.src()
        .pipe(tsProject())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', () => {  
    return gulp.watch(tsProject.config.include, ['scripts']);
});