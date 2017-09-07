const path = require('path');

module.exports = {
    entry: {
        app: [
            path.resolve(__dirname, 'src/app.js')
        ]
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }],
            exclude: /node_modules/
        }]
    }
};