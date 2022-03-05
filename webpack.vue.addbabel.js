// webpack.vue.addbabel.js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    entry: "./src/main.ts",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "babel-preset-typescript-vue3",
                            "@babel/preset-typescript",
                        ]
                    }
                },
                exclude: /node_modules/,
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            }
        ],
    },
    resolve: {
        extensions: [".vue", ".tsx", ".ts", ".jsx", ".js"],
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
        port: 5903,
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "vue.html"),
        }),
        new VueLoaderPlugin()
    ],
}