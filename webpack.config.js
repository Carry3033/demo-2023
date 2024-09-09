const path = require('path')                // 引入node内置模块path
const htmlwebpackPlugin = require('html-webpack-plugin') // 构建HTML文件，该插件不仅可以加载HTML文件，还可以自动注入JavaScript和CSS文件
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
    // 注意执行顺序，loader 的执行顺序是从下到上，从右到左
    rules: [
      {
        test: /\.vue$/i,
        loader: 'vue-loader'                    // 使用该插件处理vue文件，配置后可在js文件中直接引入vue文件
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',                  // 使用该插件处理html文件，配置后可在js文件中直接引入html文件
        // options: {                           // 如果HTML文件中包含了图片、CSS、JavaScript文件的路径，需要配置
        //   // 处理图片路径
        //   attrs: ['img:src', 'link:href']
        //   // 其他选项
        // }
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
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
}
