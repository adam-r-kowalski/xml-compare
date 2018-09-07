const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "production",
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: `${__dirname}/dist`
    },
    devtool: "source-map",
    devServer: {
        contentBase: `${__dirname}/dist`,
        compress: true,
        port: 3000,
        open: true
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            template: require("html-webpack-template"),
            appMountId: "app",
            mobile: true,
            title: "XML-Compare",
            links: [
                "https://fonts.googleapis.com/css?family=Roboto:300,400,500"
            ]
        })
    ]
}