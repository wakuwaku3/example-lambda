const glob = require('glob');
const path = require('path');
const entries = {};
const srcDir = './src/functions';
glob
  .sync('**/index.ts', {
    cwd: srcDir
  })
  .map(function(key) {
    const dir = path.dirname(key);
    const name = dir + '/' + path.basename(key, '.ts');
    entries[name] = path.resolve(srcDir, key);
  });

module.exports = {
  entry: entries,
  target: 'node',
  output: {
    path: path.join(__dirname, 'functions'),
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  externals: {
    'aws-sdk': 'aws-sdk',
    'spawn-sync': 'spawn-sync'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader']
      }
    ]
  }
};
