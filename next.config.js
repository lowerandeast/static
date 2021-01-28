module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./src/utils/ExportSitemap");
    }

    return config;
  },
};
