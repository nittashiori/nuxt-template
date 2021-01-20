const path = require('path')
const rootPath = path.resolve(__dirname, '../src/')

module.exports = {
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
        },
        {
          loader: 'sass-resources-loader',
          options: {
            resources: [
              path.resolve(__dirname, '../src/assets/scss/variables.scss'),
              path.resolve(__dirname, '../src/assets/scss/mixins.scss'),
              path.resolve(__dirname, '../src/assets/scss/reset.scss'),
            ],
          }
        }
      ]
    });

    config.resolve.extensions = ['.js', '.vue', '.json']
    config.resolve.alias['~'] = rootPath
    config.resolve.alias['@'] = rootPath

    // Return the altered config
    return config;
  },
  stories: [
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-knobs'
  ]
};
