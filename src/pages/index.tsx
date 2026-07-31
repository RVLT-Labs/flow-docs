import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import SearchBar from '@theme/SearchBar';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <span className="rvlt-eyebrow">the RVLT Flow guide</span>
        <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
          What do you need a hand with?
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
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
      description="The user guide for RVLT Flow — production operations software.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
