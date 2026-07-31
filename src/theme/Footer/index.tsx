import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

// Fully custom — not themeConfig.footer's stock multi-column link grid.
// Five pages don't need a sitemap; a small confident band with the lockup
// and a couple of essential links reads more like the rest of this site
// (and like rvlt-designlanguage's own footer) than a generic docs footer.
export default function Footer(): ReactNode {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <ThemedImage
          alt="RVLT Flow"
          className={styles.logo}
          sources={{
            light: useBaseUrl('/img/rvlt-flow-logo.svg'),
            dark: useBaseUrl('/img/rvlt-flow-logo-dark.svg'),
          }}
        />
        <p className={styles.tagline}>
          Built for production companies, by a production company.
        </p>
        <nav className={styles.links}>
          <Link to="/docs/getting-started">Guide</Link>
          <span className={styles.dot}>·</span>
          <Link to="https://flow.rvlt.app">Open Flow ↗</Link>
        </nav>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} RVLT Labs
        </p>
      </div>
    </footer>
  );
}
