import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Flow',
  titleDelimiter: '·',
  tagline: 'The user guide for RVLT Flow.',
  favicon: 'img/rvlt-mark.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Open decision (see gearflow issue #959): final hosting domain — a
  // subdomain off flow.rvlt.app vs. a standalone docs.* domain. Placeholder
  // until that's settled; update alongside the deploy target.
  url: 'https://docs.flow.rvlt.app',
  baseUrl: '/',

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
          label: 'Open Flow ↗',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Guide',
          items: [
            {
              label: 'Getting started',
              to: '/',
            },
          ],
        },
        {
          title: 'RVLT',
          items: [
            {
              label: 'Open Flow',
              href: 'https://flow.rvlt.app',
            },
            {
              label: 'Design language',
              href: 'https://github.com/RVLT-Labs/rvlt-designlanguage',
            },
          ],
        },
      ],
      copyright: `Built for production companies, by a production company. © ${new Date().getFullYear()} RVLT Labs.`,
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.oneDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
