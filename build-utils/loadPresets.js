const webpackMerge = require('webpack-merge')

const loadPresets = env => {
  const { presets } = env
  // This turns our presets into an array of strings
  const mergedPresets = [].concat(...[presets])
  const mergedConfigs = mergedPresets.map(presetName =>
    require(`./presets/webpack.${presetName}`)(env)
  )
  // This creates an object with each config as a property
  return webpackMerge({}, ...mergedConfigs)
}

module.exports = loadPresets
