const publicPath = '/vue-demo/packages/vue-axios/dist/'

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? publicPath : '/',
}
