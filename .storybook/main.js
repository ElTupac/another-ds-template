const path = require("path");

module.exports = {
  /**
   * Storybook comes with Webpack@4, we must upgrade it to Webpack@5. Because
   * we use Webpack@5 for the rest of our application (e.g. in Next.js).
   *
   * @see https://storybook.js.org/blog/storybook-for-webpack-5/
   * @see https://gist.github.com/shilman/8856ea1786dcd247139b47b270912324#upgrade
   */
  core: {
    builder: "webpack5",
  },
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(ts|tsx|js|jsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      /**
       * Storybook + PostCSS@8 fix
       * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
       */
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  webpackFinal: (config) => {
    /**
     * Add *.scss support
     * @see https://nebulab.it/blog/nextjs-tailwind-storybook/
     */
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
    });

    // @see https://github.com/storybookjs/storybook/issues/11989#issuecomment-715524391
    config.resolve.alias = {
      ...config.resolve?.alias,
      "@": [
        path.resolve(__dirname, "../src/ds"),
        path.resolve(__dirname, "../src/"),
        path.resolve(__dirname, "../"),
      ],
    };
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, "../"),
      path.resolve(__dirname, "../src/ds"),
    ];
    return config;
  },
};
