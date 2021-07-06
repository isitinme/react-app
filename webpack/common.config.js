const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { DIST_DIR, STATIC_DIR } = require('./consts');

module.exports = {
    entry: {
        main: './src/index.jsx',
    },
    output: {
        filename: '[name].[fullhash].js',
        path: DIST_DIR,
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(STATIC_DIR, 'index.html'),
            title: 'My Webpack React App',
        }),
    ],
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            esModule: true,
                            modules: {
                                namedExport: true,
                            },
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            esModule: true,
                            modules: {
                                namedExport: true,
                            },
                        },
                    },
                ],
            },
        ],
    },
};
