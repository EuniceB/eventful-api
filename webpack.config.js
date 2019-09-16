const path = require('path')
const devMode = process.env.NODE_ENV === 'development'


// ====== PLUGINS ======
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// =====================

// ====== RULES ======
const ES6toES5 = {
    test: [/.js$/],
    exclude: /(node_modules)/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: [
                '@babel/preset-env',
                '@babel/preset-react'
            ]
        }
    }
};

const dealWithStyles = {
    test: /\.scss$/i,
    use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader',
        'sass-loader'
    ],
}

const dealWithImages = {
    test: /\.(png|jpg|gif|svg)$/,
    use: [{
        loader: 'file-loader',
        options: {
            name: '[name].[ext]',
            outputPath: 'images'
        }
    }]
}



const dealWithFonts = {
    test: /\.(woff(2)?|ttf|eot)$/,
    use: [{
        loader: 'file-loader',
        options: {
            name: '[name].[ext]',
            outputPath: 'fonts'
        }
    }]
}
// ==================

module.exports = {
    entry: './client/index.js',
    output: {
        filename: 'main.js',
        publicPath: '',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [dealWithStyles, ES6toES5, dealWithImages, dealWithFonts]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "style.css"
        }),
        new HtmlWebpackPlugin({
            template: "./client/index.html"
        })
    ],
    resolve: {
        alias: {
            Root: path.resolve(__dirname),
            Images: path.resolve(__dirname,'client','media'),
            Queries: path.resolve(__dirname,'client','graphql')
        }
    }
}