const Dotenv = require('dotenv-webpack');

module.exports = {
  // ...
  plugins: [
    new Dotenv()
  ],
  // ...
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
    ]
  },
};
