var ExtractTextPlugin = require('extract-text-webpack-plugin');

function getEntrySources(sources) {
    if (process.env.NODE_ENV !== 'production') {
        sources.push('webpack/hot/only-dev-server');
    }
}

module.exports = {
    entry: "./src/app.jsx",
    output: {
        publicPath: 'http://localhost:8080/',
        filename: './public/app-bundle.js'
    },
    module: {
        loaders: [
            { 
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            },
            {
                test: /\.jsx?$/,         // Match both .js and .jsx files
                exclude: /node_modules/, 
                loader: "babel", 
                query:
                {
                    presets:['es2015', 'react']
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('public/css/style.css', {
            allChunks: true
        })
    ]
};
