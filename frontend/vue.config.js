module.exports = {
    chainWebpack: config => {
      config
        .module
        .rule("csv")
        .test(/\.csv$/)
        .use("file-loader")
        .loader("file-loader")
        .options({
            name: "[path][name].[ext]"
        })
        .end();
    },
    devServer: {
      proxy: 'http://localhost:3001'
    }
  }