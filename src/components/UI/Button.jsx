import classes from './Button.module.css';

export default function Button({
  children,
  variant = 'dark',
  size = 'medium',
  type = 'submit',
}) {
  return (
    <button
      type={type}
      className={`${classes.btn} ${classes[size]} ${classes[variant]}`}
    >
      {children}
    </button>
  );
}
