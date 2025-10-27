const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/cytoscape-html.ts",
  output: {
    filename: "cytoscape-html.js",
    path: path.resolve(__dirname, "dist"),
    library: "cytoscapeHtml",
    libraryTarget: "umd",
    libraryExport: "default",
    globalObject: "this",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: [/node_modules/, /example/],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  node: {
    global: false,
    __filename: false,
    __dirname: false,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    hot: true,
    port: 9000,
  },
};