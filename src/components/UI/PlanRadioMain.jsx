import styles from './PlanRadioMain.module.css';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PlanRadioMain({ data }) {
  const { id, name, price, isPopular, initPrice, discountValue } = data;

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1050);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const message =
    name === '1 неделя'
      ? 'Чтобы просто начать 👍🏻'
      : name === '1 месяц'
      ? 'Привести тело впорядок 💪🏻'
      : name === '3 месяца'
      ? 'Изменить образ жизни 🔥'
      : name === 'навсегда'
      ? 'Всегда быть в форме и поддерживать своё здоровье ⭐️'
      : '';

  return (
    <label
      className={`${styles.item_frame} ${
        name === 'навсегда' && !isMobile ? styles.last_frame : ''
      }`}
    >
      <input
        type='radio'
        name='radioData'
        value={JSON.stringify({ id, name, price, isPopular, initPrice })}
        required
      />
      <div className={styles.item_name}>{name}</div>
      <AnimatePresence>
        <motion.div
          key={`price-${id}`}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{
            duration: 1, // время анимации
            type: 'spring', // тип анимации
          }}
          className={styles.price_container}
        >
          {isPopular ? (
            <>
              <div className={styles.item_price}>{price}₽</div>
              <div className={styles.item_price_old}>{initPrice}₽</div>
            </>
          ) : (
            <div className={styles.item_price}>{initPrice}₽</div>
          )}
        </motion.div>
      </AnimatePresence>

      {isPopular && (
        <div className={styles.discount_container}>
          <div className={styles.discount_text}>-{discountValue}%</div>
        </div>
      )}
      {isMobile && name === 'навсегда' ? (
        <div className={styles.item_message}>Всегда быть в форме⭐️</div>
      ) : (
        <div className={styles.item_message}>{message}</div>
      )}
    </label>
  );
}
