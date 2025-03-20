const { ModuleFederationPlugin } = require("webpack").container;

const homeUrl =
  process.env.NODE_ENV === "production"
    ? process.env.HOME_URL
    : "http://localhost:3001";
const statementUrl =
  process.env.NODE_ENV === "production"
    ? process.env.STATEMENT_URL
    : "http://localhost:3002";
const navBarUrl =
  process.env.NODE_ENV === "production"
    ? process.env.NAV_BAR_URL
    : "http://localhost:3003";

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.plugins.push(
        new ModuleFederationPlugin({
          name: "container",
          remotes: {
            home: `home@${homeUrl}/remoteEntry.js`,
            statement: `statement@${statementUrl}/remoteEntry.js`,
            nav_bar: `nav_bar@${navBarUrl}/remoteEntry.js`,
          },

          shared: {
            react: { singleton: true, eager: true, requiredVersion: "^18.3.1" },
            "react-dom": {
              singleton: true,
              eager: true,
              requiredVersion: "^18.3.1",
            },
            sonner: {
              singleton: true,
              eager: true,
              requiredVersion: "^1.7.2",
            },
            "react-icons": {
              singleton: true,
              eager: true,
              requiredVersion: "^5.4.0",
            },
          },
        })
      );
      return webpackConfig;
    },
  },
};
