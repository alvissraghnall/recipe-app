module.exports = {
  publicPath: /* process.env.NODE_ENV === "production" ? "/vue/dist/" :*/ "",

  runtimeCompiler: true,
  // NOTE: set alias via `configureWebpack` or `chainWebpack`
  configureWebpack: {
    resolve: {
      alias: {
        "balm-ui-plus": "balm-ui/dist/balm-ui-plus.js",
        "balm-ui-css": "balm-ui/dist/balm-ui.css",
        "balm-ui-next": "balm-ui/dist/balm-ui-next"
      },
    },
  },

  pluginOptions: {},

  transpileDependencies: [],
};
