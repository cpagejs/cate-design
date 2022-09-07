module.exports = {
  stories: ["../stories/**/*.stories.mdx",
  "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    '@storybook/preset-scss',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  framework: '@storybook/vue3',
};
