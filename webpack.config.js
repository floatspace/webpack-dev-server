/**
 * Created by cd on 2017/10/31.
 */
var path=require('path');

module.exports = {
    entry: {
        app: ['./app/main.js']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/assets/'
    },
    devServer: {
        inline: true,
        proxy: {
            '/api/*': {  // http://127.0.0.1:3000/api/*
                target: 'http://127.0.0.1:3000',
                changeOrigin: true
            }
        }
    }
}