const path = require('path')                // 引入node内置模块path
const htmlwebpackPlugin = require('html-webpack-plugin') // 构建html文件
const VueLoaderPlugin = require('vue-loader/lib/plugin') // 构建vue文件

module.exports ={
  mode: "development",                      // 开发模式
  entry:'./src/main.js',                    // 入口文件，entry 是告诉 Webpack 从哪里开始构建你的应用程序
  output:{                                  // 出口文件
    path:path.resolve(__dirname,'dist'),    // 出口路径和目录
    filename: "[name].js",                  // 编译后的名称
  },
  devServer: {
    port: 8080,                             // 端口
    open: true,                             // 运行自动打开浏览器
    hot: true,                              //热服务
  },
  module: {
    rules: [
      {
        test: /\.vue$/i,
        use: 'vue-loader'
      },
      {
        test: /\.s[ac]ss$/i,
        use: [                              // 这个顺序是从右往左的
          'style-loader',                   // 将 JS 字符串生成为 style 节点
          'css-loader',                     // 将 CSS 转化成 CommonJS 模块
          'sass-loader',                    // 将 Sass 编译成 CSS
        ]
      }
    ]
  },
  plugins: [
    new htmlwebpackPlugin({                 // 自动插入到dist目录中
      title: 'webpack项目',
      // favicon: './public/favicon.ico',   // 网页图标配置
      template: './src/index.html'          // 模板文件（默认根目录下的index.html）是告诉 Webpack 如何生成最终的 HTML 文件 并将构建的输出包含进去
    }),
    new VueLoaderPlugin()
  ]
}
