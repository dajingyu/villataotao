// vue.config.js
module.exports = {
  chainWebpack: (config) => {
    config
      .plugin("html")
      .tap((args) => {
        args[0].title =
          "大连分析仪器";
        return args;
      });
  },
};
