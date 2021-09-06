module.exports = {
  productionSourceMap: false,
  publicPath: '/',
  transpileDependencies: [
    'vuetify',
  ],
  pages: {
    index: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'NewsDemo',
      chunks: [
        'chunk-vendors',
        'chunk-common',
        'index',
      ],
    },
  },
};
