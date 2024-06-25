import { useContext } from 'react';
import styles from './TimerHeader.module.css';
import { TimerContext } from '../context/TimerContext';

export default function TimerHeader() {
  const { timer } = useContext(TimerContext);
  const minutes = Math.trunc(timer / 60)
    .toString()
    .padStart(2, '0');
  const seconds = (timer % 60).toString().padStart(2, '0');
  return (
    <header className={styles.container}>
      <span className={styles.text}>Скидка действует:</span>
      <div className={styles.countdown}>
        <div className={styles.time}>
          <div className={styles.number}>{minutes}</div>
          <div className={styles.label}>минут</div>
        </div>
        <div className={styles.colon}>:</div>
        <div className={styles.time}>
          <div className={styles.number}>{seconds}</div>
          <div className={styles.label}>секунд</div>
        </div>
      </div>
    </header>
  );
}
