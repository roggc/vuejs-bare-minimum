const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin= require('mini-css-extract-plugin')

module.exports={
    entry:'./main.js'
    ,module:{
        rules:[
            {
                test: /\.vue$/,
                loader: 'vue-loader'
              },
            {
                test:/\.js$/,
                loader:"babel-loader"
            },
              {
                test: /\.css$/,
                use: [
                  MiniCssExtractPlugin.loader,
                'css-loader'
                ]
              }
        ]
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template:'index.html'
        }),
        new MiniCssExtractPlugin({
          filename: 'style.css'
      }),
      ]
}