module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue_intropage/' : '/',
  outputDir: 'docs',
  transpileDependencies: ['vuetify'],
};
