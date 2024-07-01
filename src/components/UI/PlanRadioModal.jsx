import styles from './PlanRadioModal.module.css';

export default function PlanRadioModal(data) {
  const { id, name, price, initPrice, discountValue } = data.data;

  return (
    <label className={styles.item_frame}>
      <input
        type='radio'
        name='radioData'
        value={JSON.stringify({ id, name, price, initPrice })}
        required
      />
      <div className={styles.item_name}>{name}</div>
      <div className={styles.radio_custom} />
      <div className={styles.item_price_old}>{initPrice}₽</div>
      <div className={styles.new_price_container}>
        <div className={styles.item_price}>{price}₽</div>
        <div className={styles.discount_container}>
          <div className={styles.discount_text}>-{discountValue}%</div>
        </div>
      </div>
    </label>
  );
}
