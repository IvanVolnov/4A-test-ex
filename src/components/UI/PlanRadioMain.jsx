import styles from './PlanRadioMain.module.css';

export default function PlanRadioMain(data) {
  const { id, name, price, isPopular } = data.data;
  return (
    <label className={styles.item_frame}>
      <input
        type='radio'
        name='radioData'
        value={JSON.stringify({ id, name, price, isPopular })}
        required
      />
      <span>{name}</span>
      <span>{price}</span>
      {isPopular && <span>Skidon!!!</span>}
    </label>
  );
}
