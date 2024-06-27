import styles from './CustomCheckbox.module.css';

export default function CustomCheckbox({ children, name, isRequired = false }) {
  return (
    <label className={styles.checkbox_container}>
      <span className={styles.label}>{children}</span>
      <input type='checkbox' name={name} required={isRequired} />
      <span className={styles.checkmark}></span>
    </label>
  );
}
