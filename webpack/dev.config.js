const { merge } = require('webpack-merge');

const commonConfig = require('./common.config');
const { DIST_DIR } = require('./consts');

module.exports = merge(commonConfig, {
    // Sets process.env.NODE_ENV on DefinePlugin to value development.
    // Enables useful names for modules and chunks.
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        contentBase: DIST_DIR,
        port: 8081,
        open: true,
        historyApiFallback: true,
    },
});
