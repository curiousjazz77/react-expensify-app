//need to let it know where the entrypoint is and where output is
const path = require('path');

//way to expose object to another file
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'), //relative to your machine
        filename: 'bundle.js'
    },
    module: {
        //webpack.js.org/configuration/module/#module-rules
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    }
};

// loader
