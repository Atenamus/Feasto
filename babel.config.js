module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@component": "./components",
            "@context": "./context",
            "@hooks": "./hooks",
            "@services": "./services",
            "@assets": "./assets",
          },
        },
      ],
    ],
  };
};
