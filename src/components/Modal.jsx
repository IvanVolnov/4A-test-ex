import { useContext } from 'react';
import styles from './Modal.module.css';
import { TimerContext } from '../context/TimerContext';
import { createPortal } from 'react-dom';

const Modal = ({ children }) => {
  const { popup, setPopup } = useContext(TimerContext);
  function closeModal() {
    setPopup(false);
  }

  if (!popup) {
    return null;
  }

  return createPortal(
    <div className={styles.modalBackdrop} onClick={closeModal}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <button className={styles.closeButton} onClick={closeModal}>
            &times;
          </button>
        </div>
        <div className={styles.modalBody}>{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
