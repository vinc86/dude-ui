const path = require("path");
const prod = process.env.NODE_ENV === "production";
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
/*We are basically telling webpack to take index.js from entry. Then check for all file extensions in resolve. 
After that apply all the rules in module.rules and produce the output and place it in main.js in the public folder.*/

module.exports = {
  /** "mode"
   * the environment - development, production, none. tells webpack
   * to use its built-in optimizations accordingly. default is production
   */
  mode: "development",
  /** "entry"
   * the entry point
   */
  entry: "./index.tsx",
  output: {
    /** "path"
     * the folder path of the output file
     */
    path: path.resolve(__dirname, "dist"),
    /** "filename"
     * the name of the output file
     */
    filename: "[main].js",
  },
  /** "target"
   * setting "node" as target app (server side), and setting it as "web" is
   * for browser (client side). Default is "web"
   */
  target: "web",
  devtool: prod ? undefined : "source-map",
  devServer: {
    /** "port"
     * port of dev server
     */
    port: "3000",
    /** "static"
     * This property tells Webpack what static file it should serve
     */
    static: ["./public"],
    /** "open"
     * opens the browser after server is successfully started
     */
    open: true,
    /** "hot"
     * enabling and disabling HMR. takes "true", "false" and "only".
     * "only" is used if enable Hot Module Replacement without page
     * refresh as a fallback in case of build failures
     */
    hot: true,
    /** "liveReload"
     * disable live reload on the browser. "hot" must be set to false for this to work
     */
    liveReload: true,
  },
  resolve: {
    /** "extensions"
     * If multiple files share the same name but have different extensions, webpack will
     * resolve the one with the extension listed first in the array and skip the rest.
     * This is what enables users to leave off the extension when importing
     */
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
  module: {
    /** "rules"
     * This says - "Hey webpack compiler, when you come across a path that resolves to a '.js or .jsx'
     * file inside of a require()/import statement, use the babel-loader to transform it before you
     * add it to the bundle. And in this process, kindly make sure to exclude node_modules folder from
     * being searched"
     */
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/, //kind of file extension this rule should look for and apply in test
        exclude: /node_modules/, //folder to be excluded
        resolve: {
          extensions: [".ts", ".tsx", ".js", ".json"],
        },
        use: "ts-loader", //loader which we are going to use
      },
      {
        test: /\.sa?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
};

/* 

- Setting a NODE_ENV var is the typical way of setting a dev/prod mode. See later how to set it in your script.
- HtmlWebpackPlugin generates index.html from a template which we are going to create shortly
- MiniCssExtractPlugin extracts styles to a separate file which otherwise remain in index.html
- mode tells webpack if your build is for development or production. In production mode webpack minifies the bundle.
- entry is a module to execute first after your app is loaded on a client. That's a bootstrap that will launch your application.
- output sets the target dir to put compiled files to
- module.rules describes how to load (import) different files to a bundle
    test: /\.(ts|tsx)$/ item loads TS files with ts-loader
    test: /\.css$/ item loads CSS files
- devtool sets the config for source maps
- plugins contains all plugins with their settings


*/

/* 

// webpack.config.js

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = ({ mode } = { mode: "production" }) => {
    console.log(`mode is: ${mode}`);

    return {
            mode,
            entry: "./src/index.js",
            output: {
                publicPath: "/",
                path: path.resolve(__dirname, "build"),
                filename: "bundled.js"
            },
            plugins: [
                new HtmlWebpackPlugin({
                    template: "./public/index.html"
                }),
            ]
        }
};

*/
