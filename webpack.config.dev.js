const path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports ={
   mode:'development',   //开发文件
   entry:'./src/main.js', //入口文件
   output:{
      path:path.join(__dirname,"dist"),
      filename:'bundle.js'
   },
   module:{
       rules:[
           {
               test:/\.vue$/,
               use:['vue-loader']
           },
           {
               test:/\.css$/,
               use:["style-loader", "css-loader"]
           }
       ]
   },
   plugins: [     //插件
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
        template: './template.html' //参考文件
    })
  ]

}