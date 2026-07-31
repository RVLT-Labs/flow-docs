import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Flow',
  titleDelimiter: '·',
  // Voice pulled from rvlt-designlanguage's own site (dry wit, concrete,
  // production-crew vocabulary) rather than generic docs-site copy.
  tagline: "RTFM. It'll be easier for us all.",
  favicon: 'img/rvlt-mark.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Deploy target: GitHub Pages (project site, no custom domain yet — see
  // gearflow #959's open "subdomain off flow.rvlt.app vs. docs.* domain"
  // decision). A project site with no custom domain is served under
  // /<repo>/, hence baseUrl below. If a custom domain lands later, both
  // of these need to change together: url -> the custom domain, baseUrl
  // -> '/' (custom domains serve from root) — plus a static/CNAME file.
  url: 'https://rvlt-labs.github.io',
  baseUrl: '/flow-docs/',

  organizationName: 'RVLT-Labs',
  projectName: 'flow-docs',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/RVLT-Labs/flow-docs/tree/main/',
        },
        // No blog track yet — this site is the end-user guide (gearflow #959),
        // a separate audience from dev-facing FEATUREDOCS. Revisit if/when
        // release notes need a home here.
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  // Local search — resolves the "search provider" open decision (gearflow
  // #959) for now. A help center leads with search (see every Mobbin
  // reference: Navan, Zendesk, Bard, Revolut) — this is that affordance,
  // not just a nice-to-have. Revisit for Algolia DocSearch if/when content
  // volume outgrows a client-side index.
  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        docsRouteBasePath: '/docs',
        language: 'en',
      },
    ],
  ],

  themeConfig: {
    image: 'img/rvlt-labs-logo.svg',
    // Dark "espresso" is the brand's primary surface (DESIGN.md §3.1); Paper
    // (light) is the documented alternate, not the OS-driven default.
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      // Official RVLT Flow lockup (mirrored from gearflow's
      // src/components/brand/rvlt-flow-logo.tsx — the same asset the app
      // itself uses in its sidebar/auth screens), not a hand-composed
      // mark + text approximation. No separate `title` — the wordmark is
      // baked into the image.
      logo: {
        alt: 'RVLT Flow',
        src: 'img/rvlt-flow-logo.svg',
        srcDark: 'img/rvlt-flow-logo-dark.svg',
        width: 130,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Guide',
        },
        {
          href: 'https://flow.rvlt.app',
          label: 'Open Flow',
          position: 'right',
        },
      ],
    },
    // No `footer` config here — src/theme/Footer fully replaces the classic
    // theme's footer component with a custom one (a 5-page site doesn't
    // need the stock multi-column link-grid layout), so themeConfig.footer
    // would just be dead config.
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.oneDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
