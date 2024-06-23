import styles from './TimerHeader.module.css';

export default function TimerHeader() {
  return (
    <header className={styles.container}>
      <span className={styles.text}>Скидка действует:</span>
      <div className={styles.countdown}>
        <div className={styles.time}>
          <div className={styles.number}>00</div>
          <div className={styles.label}>минут</div>
        </div>
        <div className={styles.colon}>:</div>
        <div className={styles.time}>
          <div className={styles.number}>00</div>
          <div className={styles.label}>секунд</div>
        </div>
      </div>
    </header>
  );
}
