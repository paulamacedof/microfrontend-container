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
            statement: "statement@http://localhost:3002/remoteEntry.js",
            nav_bar: "nav_bar@http://localhost:3003/remoteEntry.js",
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
