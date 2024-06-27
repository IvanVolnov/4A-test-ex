import { useContext } from 'react';
import styles from './Modal.module.css';
import { TimerContext } from '../context/TimerContext';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

const Modal = ({ children, onClose }) => {
  const { popup } = useContext(TimerContext);

  if (!popup) {
    return null;
  }

  return createPortal(
    <div className={styles.modalBackdrop} onClick={onClose}>
      <motion.dialog
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate='visible'
        open
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modalHeader}>
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
        </div>
        <div className={styles.modalBody}>{children}</div>
      </motion.dialog>
    </div>,
    document.body
  );
};

export default Modal;
