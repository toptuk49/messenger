import gulp from "gulp";

import { path } from "./gulp/settings.js";
import { plugins } from "./gulp/plugins.js";

global.app = {
  gulp: gulp,
  path: path,
  plugins: plugins,
};

// tasks
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/gulp-tasks/fonts.js";

const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

gulp.task('fonts', fonts, gulp.watch('./src/assets/fonts/**/*.*', fonts));