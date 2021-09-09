const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/styles/_global.scss";'
        // 注意键名 (data) 7.x
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('img', resolve('src/assets/img'))
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '天任项目管理系统'
        return args
      })
  }
}
