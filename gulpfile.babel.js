'use strict'

import gulp from 'gulp'
import path from 'path'
import pug from 'gulp-pug'
import extReplace from 'gulp-ext-replace'
import data from 'gulp-data'
import folders from 'gulp-folders'

import pugVueConf from './.pug_vue_conf'

const pagesPath = './src/node_modules/pages'
const widgetTemplatePath = './src/node_modules/templates/page.pug'

gulp.task('default', () => {
})

gulp.task('compile', folders(pagesPath, function (folder) {
  return (
    gulp
      .src(widgetTemplatePath)
      .pipe(data(function () {
        return require(path.resolve(pagesPath, folder, 'data.json'))
      }))
      .pipe(pug(pugVueConf))
      .pipe(extReplace('.vue'))
      .pipe(gulp.dest(path.join(pagesPath, folder)))
  )
}))
