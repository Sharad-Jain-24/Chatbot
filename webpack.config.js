const path = require('path');
module.exports = {
    context: __dirname,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'sc.js',
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            // use: 'babel-loader',
            use: 'babel-loader',
        }],
    }
};