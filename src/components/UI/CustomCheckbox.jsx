import styles from './CustomCheckbox.module.css';

export default function CustomCheckbox({ children, name, isRequired = false }) {
  return (
    <label className={styles.checkbox_container}>
      <input type='checkbox' name={name} required={isRequired} />
      <span className={styles.checkmark}></span>
      <span className={styles.label}>{children}</span>
    </label>
  );
}
