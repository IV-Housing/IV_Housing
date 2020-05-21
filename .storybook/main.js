const path=require("path")
const getBaseWebpackConfig = require('next/dist/build/webpack-config').default;

module.exports = {
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

