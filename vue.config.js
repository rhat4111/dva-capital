module.exports = {
  pluginOptions: {
    s3Deploy: {
      registry: undefined,
      awsProfile: "dvacapital",
      overrideEndpoint: false,
      region: "us-east-1",
      // bucket: "staging-dvacapital",
      bucket: "dva-capital-home",
      createBucket: true,
      staticHosting: true,
      staticIndexPage: "index.html",
      staticErrorPage: "index.html",
      assetPath: "dist",
      assetMatch: "**",
      deployPath: "/",
      acl: "public-read",
      pwa: false,
      enableCloudfront: false,
      pluginVersion: "4.0.0-rc3",
      uploadConcurrency: 5
    }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");

    svgRule.uses.clear();

    svgRule
      .oneOf("inline")
      .resourceQuery(/inline/)
      .use("vue-loader")
      .loader("vue-loader") // or `vue-loader-v16` if you are using a preview support of Vue 3 in Vue CLI
      .end()
      .use("vue-svg-loader")
      .loader("vue-svg-loader")
      .options({
        svgo: {
          plugins: [{ removeDimensions: true }, { removeViewBox: false }]
        }
      })
      .end()
      .end()
      .oneOf("external")
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: "assets/[name].[hash:8].[ext]"
      });
  },
  transpileDependencies: ["vuetify"]
};
