require('dotenv').config();
import {themes as prismThemes} from 'prism-react-renderer';


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
  plugins: [
    [
      "@orama/plugin-docusaurus-v3",
      {
        searchbox: {
          placeholder: "Search...",
        },
        searchButton: {
          text: "Click here to search...",
        },
        plugins: {
          analytics: {
            enabled: true,
            apiKey: process.env.ORAMA_ANALYTICS_API_KEY,
            indexId: process.env.ORAMA_ANALYTICS_INDEX_ID,
          },
        },
      },
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          editUrl:
            'https://github.com/WaveShieldDev/documentation/blob/master/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo.png',
      navbar: {
        title: 'WaveShield Documentation',
        logo: {
          alt: 'WaveShield Logo',
          src: 'img/logo.png',
        },
      },
      footer: {
        links: [
          {
            title: 'Links',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/waveshield',
              },
              {
                label: 'Website',
                href: 'https://waveshield.xyz',
              },
              {
                label: 'Web Panel',
                href: 'https://cloud.waveshield.xyz',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/WaveShieldDev/documentation',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} WaveShield Anticheat`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      }
    }),
};

export default config;
