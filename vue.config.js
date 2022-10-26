module.exports = {
  chainWebpack: (config) => {
    // config.module.rule('images')
    //   .use('url-loader')
    //   .tap(options => {
    //     options = {
    //       limit: 1024*25
    //     };
    //     return options
    //   })

    config.module
      .rule("images")
      .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
      .use("image-webpack-loader")
      .loader("image-webpack-loader")
      .options({
        mozjpeg: { progressive: true, quality: 65 },
        optipng: { enabled: false },
        pngquant: { quality: [0.65, 0.9], speed: 4 },
        gifsicle: { interlaced: false },
      })
      .end();
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: ["./src/assets/styles/variable.scss"],
    },
  },
};
