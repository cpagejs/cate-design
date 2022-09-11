module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    '@storybook/preset-scss',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    "@storybook/addon-interactions"
  ],
  framework: '@storybook/vue3',
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
};