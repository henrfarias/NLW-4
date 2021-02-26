import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/CompletedChallenges.module.css';

export function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext);

  const showChallengesCompleted = String(challengesCompleted).padStart(2, '0');

  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>{showChallengesCompleted}</span>
    </div>
  );
}