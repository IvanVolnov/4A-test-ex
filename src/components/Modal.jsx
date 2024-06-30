import { useContext } from 'react';
import styles from './Modal.module.css';
import { TimerContext } from '../context/TimerContext';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import Button from './UI/Button';
import PlanRadioModal from './UI/PlanRadioModal';
import { DataContext } from '../context/DataContext';

const Modal = ({ onClose }) => {
  const { popup } = useContext(TimerContext);
  const { data } = useContext(DataContext);

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
          <div className={styles.hot}>горячее предложение</div>
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
        </div>
        <div className={styles.content_container}>
          <h2 className={styles.header}>
            Не упусти свой
            <span className={styles.highlight}> последний шанс</span>
          </h2>
          <p className={styles.text}>
            Мы знаем, как трудно начать..
            <span className={styles.bold}> Поэтому!</span>
          </p>
          <div className={`${styles.text} ${styles.text_bordered}`}>
            Дарим скидку для
            <span className={styles.highlight}> лёгкого старта</span> 🏃‍♂️
          </div>
          <p className={styles.text}>
            Посмотри, что мы для тебя приготовили 🔥
          </p>
          <div className={styles.radio_group}>
            {data
              .filter((el) => el.isPopular && el.name !== 'навсегда')
              .map((el) => (
                <PlanRadioModal key={el.id} data={el} />
              ))}
          </div>
          <Button size='small'>Начать тренироваться</Button>
        </div>
      </motion.dialog>
    </div>,
    document.body
  );
};

export default Modal;
