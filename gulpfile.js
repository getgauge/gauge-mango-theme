var gulp = require('gulp'),
  gulpLoadPlugins = require('gulp-load-plugins'),
  plugins = gulpLoadPlugins();
  plugins.livereload({ start: true });


gulp.task('js', function(){
  gulp.src('assets/js/vendor/*.js')
      .pipe(plugins.order([
          "jquery-3.1.0.min.js",
          "auto-complete.js",
          "clipboard.min.js",
          "lightbox.js",
          "search_index.js"
      ]))
      .pipe(plugins.concat('vendor.js'))
      .pipe(gulp.dest('dist/assets/js'))
  gulp.src('assets/js/*.js')
    .pipe(gulp.dest('dist/assets/js'))
});

gulp.task('css', function(){
  gulp.src('assets/stylesheets/sass/app.scss')
      .pipe(plugins.sass())
      .pipe(gulp.dest('assets/stylesheets/css'))
      .pipe(plugins.concat('app.css'))
      .pipe(gulp.dest('assets/stylesheets/css'))
      .pipe(gulp.dest('dist/assets/css'))
  gulp.src('assets/stylesheets/css/vendor/*.css')
      .pipe(plugins.concat('vendor.css'))
      .pipe(gulp.dest('../'))
      .pipe(gulp.dest('dist/assets/css'))
})

gulp.task('generateHTML', function(){
  var handlebars = require('handlebars');
  var gulpHandlebars = require('gulp-handlebars-html')(handlebars);

  var templateData = {
  },options = {
        partialsDirectory : ['./templates/partials'],
        allowedExtensions: (['hb', 'hbs', 'handlebars', 'html'])
    };
  gulp.src('templates/*.hbs')
        .pipe(gulpHandlebars({}, options))
        .pipe(plugins.rename({
            extname: ".html"
          }))
        .pipe(gulp.dest('dist'));


});

gulp.task('copyOtherAssets', function(){
  gulp.src('assets/images/**/*.*')
    .pipe(gulp.dest('dist/assets/images'));
  gulp.src('assets/fonts/**/*.*')
    .pipe(gulp.dest('dist/assets/fonts'));
});

gulp.task('minify', function(){
  gulp.src('assets/js/app.js')
      .pipe(plugins.uglify())
      .pipe(gulp.dest('build/assets/js'));
  gulp.src('assets/stylesheets/css/*.css')
      .pipe(plugins.uglify())
      .pipe(gulp.dest('dist/assets/css'));
});

gulp.task('watch', function(){
   gulp.watch('templates/**/*.*', ['default']);
   gulp.watch('assets/**/*.*', ['default']);
});

gulp.task('publish', ['minify']);
gulp.task('default', ['js', 'css', 'generateHTML']);
