// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion


// Конфигурацию подвала выношу в отдельный файл с модулем и затягиваю сюда
// целиком:
// import footerConfig from "./footer.config"; не заработало...
const footerConfig = require("./footer.config.js");

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'eduxio',
  tagline: 'Учись любить учиться!',
  url: 'https://goryntsev.github.com',
  baseUrl: '/eduxio/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'goryntsev', // Usually your GitHub org/user name.
  projectName: 'eduxio', // Usually your repo name.
  trailingSlash: false,
  // deploymentBranch: 'main',

  i18n: {
    defaultLocale: "ru",
    locales: ["ru", "en"],
    localeConfigs: {
      ru: {
        htmlLang: "ru-RU",
      },
    },
  },


  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          breadcrumbs: false,
          routeBasePath: "/",
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // autoCollapseSidebarCategories: true,
      // hideableSidebar: true,
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: "Eduxio",
        hideOnScroll: true,
        // Лого для сайта пока нет, но потом надо будет всставить и
        // раскомментить эти строчки.
        // logo: {
          // alt: 'My Site Logo',
          // src: 'img/logo.svg',
        // },
        items: [
          {
            type: 'doc',
            docId: 'brecht',
            position: 'left',
            label: "Библиотека",
          },

          // Блога пока нет, поэтому закрываю ссылку не него в меню:
          // {to: '/blog', label: 'Blog', position: 'left'},

          // Ссылку на репозиторий тоже не вижу пока смысла давать, но оставляю
          // её закомментированной для образца:
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },

      footer: footerConfig, // конфигурация подвала из отдельного файла-модуля
      
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      /** @type {import('@docusaurus/plugin-ideal-image').PluginOptions} */
      ({
        quality: 85,
        max: 1030,
        min: 640,
        steps: 2,
      }),
    ],
  ],
};

module.exports = config;
