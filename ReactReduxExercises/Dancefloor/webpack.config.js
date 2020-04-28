const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: __dirname + '/src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                exclude: /(node_modules)/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['@babel/preset-react', '@babel/preset-env'],
                    plugins: ['transform-class-properties']
                }
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'url-loader',
                    },
                ]
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: './dist/index.html'
            }
        ),
        new MiniCssExtractPlugin({
            filename: 'css/index.css'
        })
    ]
}