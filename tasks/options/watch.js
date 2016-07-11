module.exports = {
	options: {
      livereload: 12345,
  },
	sass: {
      files: ['sass/*.scss'],
      tasks: ['sass']
  },
    devWatchCSS: {
      files: ['css/*.css']
      // tasks: ['sftp:uploadCSS']
  },
    devWatchJS: {
      files: ['js/*.js'],
      tasks: ['sftp:uploadJS']
  }
}
