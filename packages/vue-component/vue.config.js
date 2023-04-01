const publicPath = '/vue-demo/packages/vue-component/dist/'

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? publicPath : '/',
}
