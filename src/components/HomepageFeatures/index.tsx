import type {ReactNode} from 'react';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

// Placeholder orientation only — mirrors the proposed v1 information
// architecture in gearflow#959, not finished content. Swap for real
// getting-started / core-concept / per-module doc links as they land.
const FeatureList: FeatureItem[] = [
  {
    title: 'Getting started',
    description: 'Set up your org and run your first job. Coming soon.',
  },
  {
    title: 'Core concepts',
    description:
      'Projects, warehouse & fulfillment, crew, assets & kits. Coming soon.',
  },
  {
    title: 'Per-module guides',
    description: 'Deep dives into each part of Flow. Coming soon.',
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className="col col--4">
      <div className={styles.card}>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
