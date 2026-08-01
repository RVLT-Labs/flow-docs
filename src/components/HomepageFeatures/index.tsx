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

function RouteIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <circle cx="6" cy="19" r="3" />
      <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
      <circle cx="18" cy="5" r="3" />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
    </svg>
  );
}

function BotIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  );
}

function LifeBuoyIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="m4.93 4.93 4.24 4.24" />
      <path d="m14.83 9.17 4.24-4.24" />
      <path d="m14.83 14.83 4.24 4.24" />
      <path d="m9.17 14.83-4.24 4.24" />
      <circle cx="12" cy="12" r="4" />
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
// (Navan "Browse top categories", Revolut's topic list) organize by
// business function, not literal nav labels. Each card links to a section
// overview in the scaffolded guide tree (gearflow#959); the long tail
// (clients/suppliers, maintenance, settings) is reachable from the sidebar
// and search rather than crowding the grid.
const TOPICS: Topic[] = [
  {
    title: 'The rental workflow',
    description: 'The whole job, end to end — enquiry to invoice.',
    to: '/docs/rental-workflow',
    icon: <RouteIcon />,
    patchColor: 'amber',
  },
  {
    title: 'Projects',
    description: 'Build the job: gear, dates, crew, paperwork.',
    to: '/docs/projects',
    icon: <FolderIcon />,
    patchColor: 'blue',
  },
  {
    title: 'Quotes & invoicing',
    description: 'Price it, send it, get paid.',
    to: '/docs/quotes-invoicing',
    icon: <ReceiptIcon />,
    patchColor: 'green',
  },
  {
    title: 'Assets & inventory',
    description: 'Models, assets, bulk stock, and kits.',
    to: '/docs/assets-inventory',
    icon: <LayersIcon />,
    patchColor: 'coral',
  },
  {
    title: 'Warehouse',
    description: 'Prep, deploy, and return gear without a clash.',
    to: '/docs/warehouse',
    icon: <WarehouseIcon />,
    patchColor: 'purple',
  },
  {
    title: 'Crew',
    description: 'Schedule people, spot the gaps, track the hours.',
    to: '/docs/crew',
    icon: <UsersIcon />,
    patchColor: 'green',
  },
  {
    title: 'Integrations & AI',
    description: 'Xero, WooCommerce, webhooks, and AI agents.',
    to: '/docs/integrations',
    icon: <BotIcon />,
    patchColor: 'blue',
  },
  {
    title: 'Fix a problem',
    description: "Why Flow said no, and what to do about it.",
    to: '/docs/troubleshooting',
    icon: <LifeBuoyIcon />,
    patchColor: 'amber',
  },
];

function TopicCard({title, description, to, icon, patchColor}: Topic) {
  return (
    // 8 topics (Getting started got promoted to the hero banner above)
    // -> col--3 fills two clean rows of 4.
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
