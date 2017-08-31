var ExtractTextPlugin = require("extract-text-webpack-plugin");  //css单独打包
var proxy = require('http-proxy-middleware');
var path = require('path');
const devServer = {
  // contentBase: './src/views'  //本地服务器所加载的页面所在的目录
  port: 8888,
  colors: true,  //终端中输出结果为彩色
  historyApiFallback: true,  //不跳转
  inline: true  //实时刷新
};
module.exports = {
    root: "src",
    node: {
      fs: "empty"
    },
    devServer: {
      host: "localhost"
    },
    cache: true,
    watch: true,
    externals: {
      fs: {},
      tls: {},
      net: {},
      console: {}
    },
    devtool: 'eval-source-map',

    entry: __dirname + '/src/entry.js', //唯一入口文件
    output: {
        path: __dirname + '/build', //打包后的文件存放的地方
        filename: 'bundle.js' //打包后输出文件的文件名
    },

    module: {
        loaders: [
            // { test: /\.js$/, loader: "jsx!babel", include: /src/},
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader!transform/cacheable?envify" },
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style", "css!postcss") },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', "css!sass") },
            { test: /\.(png|jpg)$/, loader: 'url?limit=8192' },
            { test: /\.(eot|woff|woff2|ttf|svg)$/, loader: "file-loader" }
        ]
    },
    postcss: [
        require('autoprefixer')    //调用autoprefixer插件,css3自动补全
    ],
    devServer: {
        publicPath: '/',
        port: 8888,
        colors: true,  //终端中输出结果为彩色
        historyApiFallback: true,  //不跳转
        inline: true,  //实时刷新
        proxy: {
          '/list': {
            target: 'https://news-at.zhihu.com',
            changeOrigin: true,
            pathRewrite: {
              '^/list': ''
            }
          }
        }
    },

    plugins: [
        new ExtractTextPlugin('main.css'),
    ]

}
