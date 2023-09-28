const config = {
    mode: 'production',
    entry: {
        // index: './src/js/index.js',
        // contacts: './src/js/contacts.js',
        // about: './src/js/about.js'
        main: './src/js/main.js',
        // lib: './src/lib/**/*.js'
    },
    output: {
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    }
};

module.exports = config;