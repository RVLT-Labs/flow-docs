import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// Lucide-style line icons (2px stroke, round caps) — DESIGN.md §9.2 locks
// the icon set to Lucide/Phosphor, never emoji/glyphs. Inlined rather than
// pulled from a package since this Docusaurus site has no Lucide dependency.
function RocketIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function ReceiptIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
      <path d="M8 7h6" />
      <path d="M8 11h8" />
      <path d="M8 15h6" />
    </svg>
  );
}

function WarehouseIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M22 8.35V20a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8.35a2 2 0 0 1 .84-1.63l8-5.71a2 2 0 0 1 2.32 0l8 5.71A2 2 0 0 1 22 8.35Z" />
      <path d="M6 18h12" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </svg>
  );
}

type Topic = {
  title: string;
  description: string;
  to: string;
  icon: ReactNode;
  patchColor: 'blue' | 'amber' | 'green' | 'purple' | 'coral';
};

// Getting started is the one entry point every new user needs — a hero-style
// banner (DESIGN.md's "Live card": --elev + a resting --lit edge, the one
// card allowed to stay permanently "lifted" rather than only on hover)
// pulls it out of the topic grid instead of making it a fifth equal card.
const GETTING_STARTED: Topic = {
  title: 'Getting started',
  description: 'Set up your org, invite your crew, run your first job.',
  to: '/docs/getting-started',
  icon: <RocketIcon />,
  patchColor: 'blue',
};

// Topic cards, not a nested dev-docs tree — mirrors how help centers
// (Navan "Browse top categories", Revolut's topic list) organize by task,
// not module hierarchy. Maps 1:1 to the product's own modules, not invented
// content — each links to a "guide is being written" placeholder.
const TOPICS: Topic[] = [
  {
    title: 'Projects & quotes',
    description: 'Build quotes, track status, get client sign-off.',
    to: '/docs/projects-quotes',
    icon: <ReceiptIcon />,
    patchColor: 'amber',
  },
  {
    title: 'Warehouse & fulfillment',
    description: 'Pack, dispatch, and return gear without a clash.',
    to: '/docs/warehouse-fulfillment',
    icon: <WarehouseIcon />,
    patchColor: 'green',
  },
  {
    title: 'Crew',
    description: 'Schedule crew, check availability, send call sheets.',
    to: '/docs/crew',
    icon: <UsersIcon />,
    patchColor: 'purple',
  },
  {
    title: 'Assets & kits',
    description: 'Manage inventory, build kits, track maintenance.',
    to: '/docs/assets-kits',
    icon: <LayersIcon />,
    patchColor: 'coral',
  },
];

function TopicCard({title, description, to, icon, patchColor}: Topic) {
  return (
    // 4 remaining topics (Getting started got promoted to the hero banner
    // above) -> col--3 fills one clean row of 4 instead of orphaning a
    // fourth card alone under a 3-per-row col--4 grid.
    <div className="col col--3">
      <Link to={to} className={styles.card}>
        <div className={`rvlt-patch rvlt-patch--${patchColor}`}>{icon}</div>
        <div>
          <Heading as="h3" className={styles.cardTitle}>
            {title}
          </Heading>
          <p className={styles.cardDescription}>{description}</p>
        </div>
      </Link>
    </div>
  );
}

function GettingStartedHero({title, description, to, icon, patchColor}: Topic) {
  return (
    <Link to={to} className={styles.heroCard}>
      <div className={`rvlt-patch rvlt-patch--${patchColor} ${styles.heroPatch}`}>
        {icon}
      </div>
      <div className={styles.heroCardBody}>
        <Heading as="h3" className={styles.heroCardTitle}>
          {title}
        </Heading>
        <p className={styles.heroCardDescription}>{description}</p>
      </div>
      <span className={styles.heroCardCta}>Start here →</span>
    </Link>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <GettingStartedHero {...GETTING_STARTED} />
        <Heading as="h2" className={styles.sectionHeading}>
          Browse by topic
        </Heading>
        <div className="row">
          {TOPICS.map((topic) => (
            <TopicCard key={topic.to} {...topic} />
          ))}
        </div>
      </div>
    </section>
  );
}
