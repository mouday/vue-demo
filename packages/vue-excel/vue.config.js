const publicPath = '/vue-demo/packages/vue-excel/dist/'

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? publicPath : '/',
}
