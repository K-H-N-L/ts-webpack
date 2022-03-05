// webpack.react.addbabel.js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        "react-babel": "./src/reactbabel.tsx",
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            '@babel/preset-typescript',
                            "@babel/preset-react",
                            "@babel/preset-env"
                        ]
                    }
                },
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
        port: 5901,
        open: true,
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "react.html")
    })]
}