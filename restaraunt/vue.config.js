const PreloadWebpackPlugin = require('@vue/preload-webpack-plugin');
const PROXY_OPTIONS = {
  target: process.env.PROXY_URL,
  secure: false,
  ws: true,
  changeOrigin: true
}
const path = require('path');

module.exports = {
  configureWebpack: {
    plugins: [
      new PreloadWebpackPlugin({
        rel: 'preload',
        include: {
          type: 'asyncChunks',
          entries: ['index-view']
        }
      })
    ],
    resolve: {
      alias: {
        '@modules': path.resolve(__dirname, './src/modules'),
      },
    },
  },
  pwa: {
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,

      swDest: 'service-worker.js', //имя файла
      importWorkboxFrom: 'cdn', //workbox грузим с cdn
      chunks: ['app', 'chunk-vendors'],//только эти чанки попадут в прекэш
      maximumFileSizeToCacheInBytes: 24 * 1024 * 1024, //максимальный размер файла для перекэша 4mb
      exclude:['service-worker.js', 'manifest.json'], //не когда не кешируем сам sw и manifest
      runtimeCaching: [
        {
          urlPattern: /\.(?:js|css|woff|woff2|png|jpg|jpeg|svg|gif)$/,
          handler: 'cacheFirst', //если будет в кэше то сеть даже не спросят
          options: {
            cacheName: 'cacheSimpleEntry',
            expiration: {
              maxEntries: 100,
              maxAgeSeconds: 30 * 24 * 60 * 60, // 30 дней
              purgeOnQuotaError: true,
            },
          },
        }
      ],
    },
    iconPaths: {
      favicon32: "img/favicon.ico",
      favicon16: "img/favicon.ico",
      appleTouchIcon: "img/icons/icon.svg",
      maskIcon: "img/icons/icon.svg",
      msTileImage: "img/icons/icon.svg"
    }
  },
  chainWebpack: config => {
    config.plugins.delete("prefetch");
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule
      .oneOf('link')
      .resourceQuery(/link/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: '[name].[hash:8].[ext]',
      })
      .end()
      .end()

      .oneOf('inline')
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
      .end();
    const rawLoader = config.module.rule("raw");
    rawLoader.use("raw-loader").loader("raw-loader");
    rawLoader.test(/.graphql$/);
  },
  productionSourceMap: false,
};
