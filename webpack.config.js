var fs = require("fs");

var hints = JSON.parse(fs.readFileSync(".jshintrc"));

module.exports = {
  module: {
    preLoaders: [
         {
           loader: "jshint-loader",
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

  jshint: hints,

  context: __dirname + "/app",
  entry: "./test",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "public/"
  }
};
