//need to let it know where the entrypoint is and where output is

console.log(__dirname);

//way to expose object to another file
module.exports = {
    entry: './src/app.js',
    output: {
        path: '', //relative to your machine
        filename: 'bundle.js'
    }
};