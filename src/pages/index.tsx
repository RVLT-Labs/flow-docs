import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import SearchBar from '@theme/SearchBar';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

// Hand-drawn squiggle underline beneath a key word — the reference
// implementation's own `.uline` device (rvlt-designlanguage/index.html),
// copied verbatim rather than invented (DESIGN.md §10 bans fabricating NEW
// doodles/stickers, not reusing the ones it already ships).
function Squiggle() {
  return (
    <svg viewBox="0 0 90 18" preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M3 11 C 20 4, 45 4, 60 9 S 85 15, 90 6"
        fill="none"
        stroke="#E0363D"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Two of the reference site's own sticker patches (`.stk` recipe — 3px
// cream die-cut border, hard sticker shadow, slight rotation), not new
// art. Decorative only: hidden below 880px, aria-hidden, never overlapping
// the search box or cards (DESIGN.md §10/§16.6).
function HeroStickers() {
  return (
    <>
      <div
        className={clsx('rvlt-sticker rvlt-sticker--round', styles.stickerGaff)}
        style={{background: 'var(--rvlt-dark)'}}
        aria-hidden="true">
        <span className="rvlt-sticker-txt">GAFF</span>
      </div>
      <div
        className={clsx('rvlt-sticker rvlt-sticker--round', styles.stickerAaa)}
        style={{background: 'var(--rvlt-red)'}}
        aria-hidden="true">
        <span className="rvlt-sticker-txt">AAA</span>
      </div>
    </>
  );
}

function HomepageHeader() {
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <HeroStickers />
      <div className="container">
        <span className="rvlt-eyebrow">
          we wrote this so you don't have to ask
        </span>
        <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
          What do you need a hand with?
        </Heading>
        <p className="hero__subtitle">
          <span className="rvlt-uline">
            RTFM. It'll be easier for us all.
            <Squiggle />
          </span>
        </p>
        <div className={styles.searchWrap}>
          <SearchBar />
        </div>
        <p className={styles.secondaryLink}>
          Or just <Link to="https://flow.rvlt.app">open Flow ↗</Link>
        </p>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="The guide for RVLT Flow — built for production companies, by a production company.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
