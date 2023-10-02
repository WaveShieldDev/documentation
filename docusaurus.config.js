const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'WaveShield Documentation',
  tagline: 'The documentation to help your anticheat.',
  favicon: 'img/favicon.ico',
  url: 'https://docs.waveshield.xyz/',
  baseUrl: '/',
  organizationName: 'WaveShieldDev',
  projectName: 'documentation',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          editUrl:
            'https://github.com/WaveShieldDev/documentation/tree/master',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'WaveShield Documentation',
        logo: {
          alt: 'Waveshield Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            href: 'https://github.com/WaveShieldDev/documentation',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;