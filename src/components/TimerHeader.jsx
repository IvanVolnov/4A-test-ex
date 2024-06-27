import { useContext } from 'react';
import styles from './TimerHeader.module.css';
import { TimerContext } from '../context/TimerContext';
import { motion } from 'framer-motion';

export default function TimerHeader() {
  const { timer } = useContext(TimerContext);
  const minutes = Math.trunc(timer / 60)
    .toString()
    .padStart(2, '0');
  const seconds = (timer % 60).toString().padStart(2, '0');

  const variants = {
    normal: { color: 'var(--accent-color)' },
    alert: { color: 'var(--alert-color)' },
    blink: {
      opacity: [1, 0, 1],
      transition: { duration: 1, repeat: Infinity },
    },
  };

  return (
    <header className={styles.container}>
      <span className={styles.text}>Скидка действует:</span>
      <div className={styles.countdown}>
        <div className={styles.time}>
          <motion.div
            animate={timer <= 5 ? ['blink', 'alert'] : 'normal'}
            variants={variants}
            className={styles.number}
          >
            {minutes}
          </motion.div>
          <div className={styles.label}>минут</div>
        </div>
        <motion.div
          animate={timer <= 5 ? ['blink', 'alert'] : ['blink', 'normal']}
          variants={variants}
          className={styles.colon}
        >
          :
        </motion.div>
        <div className={styles.time}>
          <motion.div
            animate={timer <= 5 ? ['blink', 'alert'] : 'normal'}
            variants={variants}
            className={styles.number}
          >
            {seconds}
          </motion.div>
          <div className={styles.label}>секунд</div>
        </div>
      </div>
    </header>
  );
}
