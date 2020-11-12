const path = require('path'),
      htmlWebpackPlugin = require('html-webpack-plugin'),
      extractTextPlugin = require('extract-text-webpack-plugin'),
      copyWebpackPlugin = require('copy-webpack-plugin'),
      envConfig = require('./env.json'),
      FaviconsWebpackPlugin = require( "favicons-webpack-plugin" ),
      CleanWebpackPlugin = require('clean-webpack-plugin'),
      project = envConfig.app_name


module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, project)
  },
  externals: {
    requirejs: 'requirejs'
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.pug$/,
        use: [ "html-loader", "pug-html-loader" ]
      },
      {
        test: /\.scss$/,
        use: extractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
              loader: 'css-loader',
              options: {
                minimize: true,
                sourceMap: true
              }
            },
            {
              loader: 'resolve-url-loader'
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                sourceMapContents: false
              }
            }
          ]
        })
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'img/'
          }
        }]
      },
      {
        test: /\.(ttf|otf|eot|woff|woff2)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'font/'
          }
        }]
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.pug',
      favicon: './src/assets/icons/favicon.png',
    }),
    new extractTextPlugin({
      filename: 'styles.css'
    }),
    new FaviconsWebpackPlugin({
      background: '#fff',
			logo: './src/assets/icons/favicon.png',
			prefix: './assets/icons/favicon/',
    }),
    new copyWebpackPlugin([
      {
        from: './src/config.json'
      },
      {
        from: './src/assets',
        to: 'assets'
      },
      {
        from: './src/project.qext',
        to: `${project}.qext`
      }
    ])
  ]
}
