const path=require("path")
const getBaseWebpackConfig = require('next/dist/build/webpack-config').default;

module.exports = {
  // webpackFinal: async (config, { configType }) => {
  //   // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  //   // You can change the configuration based on that.
  //   // 'PRODUCTION' is used when building the static version of storybook.

  //   // const config2 = loadConfig(__dirname);
  //   const nextConfig=await getBaseWebpackConfig(__dirname, {entrypoints: {}})

  //   // Return the altered config
  //   return nextConfig;
  // },
  stories: ["../stories/**/*.stories.js"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-storysource",
    "@storybook/addon-viewport/register",
    "@storybook/addon-a11y/register",
    "@storybook/addon-knobs/register",
  ],
};

