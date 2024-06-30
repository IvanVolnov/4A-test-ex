import styles from './PlanRadioMain.module.css';

import { useState, useEffect } from 'react';

export default function PlanRadioMain(data) {
  const { id, name, price, isPopular, initPrice, discountValue } = data.data;

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
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
      <div className={styles.price_container}>
        {isPopular ? (
          <>
            <div className={styles.item_price}>{price}₽</div>
            <div className={styles.item_price_old}>{initPrice}₽</div>
          </>
        ) : (
          <div className={styles.item_price}>{initPrice}₽</div>
        )}
      </div>
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
