const { merge } = require('webpack-merge');

const commonConfig = require('./common.config');

module.exports = merge(commonConfig, {
    // Sets process.env.NODE_ENV on DefinePlugin to value production
    // Enables deterministic mangled names for modules and chunks
    // - FlagDependencyUsagePlugin
    // - FlagIncludedChunksPlugin
    // - ModuleConcatenationPlugin
    // - NoEmitOnErrorsPlugin
    // - TerserPlugin.
    mode: 'production',
});
