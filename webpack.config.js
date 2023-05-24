const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    resolve: {
        extensions: [".js",".jsx",".ts",".tsx",".css",".json"],
        alias: {
            '@src': path.resolve(__dirname, 'src'), // Set '@src' as an alias for the 'src' folder
            '@components': path.resolve(__dirname,'src/components'), // Set '@components' as an alias for the 'components' folder
            '@pages': path.resolve(__dirname,'src/pages'), // Set '@pages' as an alias
            '@services': path.resolve(__dirname,'src/services'), // Set '@services' as an alias
            '@assets': path.resolve(__dirname,'src/assets'), // Set 'assets' as an alias
            '@redux' : path.resolve(__dirname,'src/redux'), // Set 'redux' as an alias

        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
                        plugins: [
                            '@babel/plugin-proposal-class-properties',
                            '@babel/plugin-proposal-object-rest-spread',
                        ],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'static/media/[name].[hash:8].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 3000,
        historyApiFallback: true,
        hot: true,
    },
};
