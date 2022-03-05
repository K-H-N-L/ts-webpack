// webpack.react.js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        react: "./src/react.tsx",
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js"],
    },
    output: {
        filename: "bundle.[name].js",
        path: path.resolve(__dirname, "dist"),
    },
    devServer: {
        host: '0.0.0.0',
        static: {
            directory: path.resolve(__dirname, "dist"),
        },
        port: 5900,
        open: true,
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "react.html")
    })]
}