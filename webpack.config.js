module.exports = {
  module: {

    preLoaders: [
         {
           loader: "eslint-loader",
           test: /\.js$/,
           exclude: /node_modules|bower_components/,
         }
     ],

    loaders: [
      {
        loader: 'babel',
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },

  eslint: {configFile: '.eslintrc'},

  context: __dirname + "/app",
  entry: "./app",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "public/",
    historyApiFallback: true,
    devTool: 'source-map'
  },
};
