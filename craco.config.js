// No arquivo craco.config.js do microfrontend-container
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.plugins.push(
        new ModuleFederationPlugin({
          name: "container",
          remotes: {
            home: "home@http://localhost:3001/remoteEntry.js",
            transaction: "transaction@http://localhost:3002/remoteEntry.js",
          },
          shared: {
            react: { singleton: true, eager: true, requiredVersion: "^18.3.1" },
            "react-dom": {
              singleton: true,
              eager: true,
              requiredVersion: "^18.3.1",
            },
          },
        })
      );
      return webpackConfig;
    },
  },
};
