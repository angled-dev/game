/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
    [
      '@snowpack/plugin-webpack',
      {
        extendConfig: (config) => {
          // Edit webpack config here
          return config;
        },
      },
    ],
  ],
  alias: {
    atoms: './src/components/atoms',
    molecules: './src/components/molecules',
    organisms: './src/components/organisms',
    context: './src/context',
    resources: './src/resources',
    types: './src/types',
  },
};
