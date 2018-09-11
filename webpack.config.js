//need to let it know where the entrypoint is and where output is
const path = require('path');

//way to expose object to another file
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'), //relative to your machine
        filename: 'bundle.js'
    }
};