import styles from './PlanRadioMain.module.css';

export default function PlanRadioMain(data) {
  const {
    id,
    name,
    price,
    isPopular,
    oldPrice,
    discountValue = 50,
  } = data.data;
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
        name === 'навсегда' ? styles.last_frame : ''
      }`}
    >
      <input
        type='radio'
        name='radioData'
        value={JSON.stringify({ id, name, price, isPopular })}
        required
      />
      <div className={styles.item_name}>{name}</div>
      <div className={styles.price_container}>
        {isPopular ? (
          <>
            <div className={styles.item_price}>{price}₽</div>
            <div className={styles.item_price_old}>{oldPrice}₽</div>
          </>
        ) : (
          <div className={styles.item_price}>{oldPrice}₽</div>
        )}
      </div>
      {isPopular && <div className={styles.discount}>-{discountValue}%</div>}
      <div className={styles.item_message}>{message}</div>
    </label>
  );
}
