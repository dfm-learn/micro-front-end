const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 9002,
  },
  publicPath: 'auto', // this doesn't appear to be necessary
  configureWebpack: {
    // optimization is required. Particularly, the "chunks: 'async'" portion. Internal to vue-cli will set that to 'initial'
    optimization: {
      splitChunks: {
        cacheGroups: {
          defaultVendors: {
            name: 'chunk-vendors',
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            chunks: 'async',
            reuseExistingChunk: true,
          },
          common: {
            name: 'chunk-common',
            minChunks: 2,
            priority: -20,
            chunks: 'async',
            reuseExistingChunk: true,
          },
        },
      },
    },

    plugins: [
      new webpack.container.ModuleFederationPlugin({
        // name will be used in the host
        // remote2@http://localhost:9002/remoteEntry.js
        name: 'remote2',
        filename: 'remoteEntry.js',
        exposes: {
          // this will be the name of the component that gets consumed
          './RemoteTwoView': './src/views/RemoteTwoView.vue',
          './routes': './src/router/remote2Routes',
        },
        shared: {
          vue: {
            singleton: true,
          },
        },
      }),
    ],
  },
});
