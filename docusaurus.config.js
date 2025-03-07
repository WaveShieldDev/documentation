import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'WaveShield Documentation',
  tagline: 'The documentation to help your anticheat.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.waveshield.xyz/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'WaveShieldDev', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
