import {type ReactNode, useState} from 'react';
import styles from './styles.module.css';

type Vote = 'up' | 'down' | null;

// Help-center convention (Intercom, Sprig) that a reference-docs sidebar
// tree doesn't have — a per-article feedback prompt. Local UI state only;
// no backend to send it to yet, so it doesn't pretend to persist anything.
export default function HelpfulWidget(): ReactNode {
  const [vote, setVote] = useState<Vote>(null);

  if (vote) {
    return (
      <div className={styles.widget}>
        <p className={styles.thanks}>
          {vote === 'up'
            ? "Good to hear — thanks for the feedback."
            : "Noted — we'll get this sorted."}
        </p>
      </div>
    );
  }

  return (
    <div className={styles.widget}>
      <p className={styles.prompt}>Was this page helpful?</p>
      <div className={styles.buttons}>
        <button
          type="button"
          className={styles.voteButton}
          aria-label="Yes, this page was helpful"
          onClick={() => setVote('up')}>
          Yes
        </button>
        <button
          type="button"
          className={styles.voteButton}
          aria-label="No, this page was not helpful"
          onClick={() => setVote('down')}>
          No
        </button>
      </div>
    </div>
  );
}
