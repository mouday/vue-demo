const publicPath = '/vue-demo/packages/vue-directive/dist/'

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? publicPath : '/',
}
