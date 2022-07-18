module.exports = {
  presets: [
    [
      "@babel/preset-react",
      {
        targets: {
          node: "current",
        },
      },
    ],
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: ["last 2 versions", "ie >= 11"],
        },
        corejs: "3.21.3",
        useBuiltIns: "entry",
      },
    ],
  ],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "@": "./src/ds",
        },
      },
    ],
  ],
};
