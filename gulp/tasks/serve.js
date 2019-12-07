'use strict';

module.exports = function() {
  $.gulp.task('serve', function() {
    $.browserSync.init({
      server: $.config.root,
      notify: false
    });

    $.browserSync.watch([$.config.root + '/**/*.*', '!**/*.css', '!**/*.html'], $.browserSync.reload);
  });
};
