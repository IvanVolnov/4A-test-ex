import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import PlanRadioMain from './UI/PlanRadioMain';
import { TimerContext } from '../context/TimerContext';
import Modal from './Modal';
import LoadingComponent from './UI/LoadingComponent';
import manImg from '/manImg.png';
import manImgMobile from '/manImgMobile.png';
import { handleSubmit } from '../helpers/helpers';
import styles from './MainContent.module.css';
import CustomCheckbox from './UI/CustomCheckbox';
import Button from './UI/Button';
import { AnimatePresence } from 'framer-motion';

export default function MainContent() {
  const { data, loading, error } = useContext(DataContext);
  const { discount, popup, setPopup } = useContext(TimerContext);

  function closeModal() {
    setPopup(false);
  }

  return (
    <main className={styles.main_container}>
      <AnimatePresence>
        {popup && <Modal onClose={closeModal} />}
      </AnimatePresence>

      <h1>Выберите подходящий тарифный план</h1>
      <div className={styles.content_container}>
        <picture>
          <source media='(max-width: 1050px)' srcSet={manImgMobile} />
          <source media='(min-width: 1050px)' srcSet={manImg} />
          <img
            className={styles.photo}
            src={manImg}
            alt='a picture of the muscular man'
          />
        </picture>

        <form className={styles.form_container} onSubmit={handleSubmit}>
          <div className={styles.radio_group}>
            {error && (
              <p>
                произошла ошибка при загрузке данных с сервера:
                {error.message}
              </p>
            )}
            {loading && <LoadingComponent />}
            {discount
              ? data
                  .filter((el) => el.isPopular)
                  .map((el) => <PlanRadioMain key={el.id} data={el} />)
              : data
                  .filter((el) => !el.isPopular && !el.isDiscount)
                  .map((el) => <PlanRadioMain key={el.id} data={el} />)}
          </div>
          <p className={styles.stats}>
            Следуя плану на 3 месяца, люди получают в 2 раза лучший результат,
            чем за 1 месяц
          </p>
          <CustomCheckbox
            name='termsAccepted'
            isRequired={true}
            className={styles.checkbox}
          >
            Я соглашаюсь с <a href='#'>Правилами сервиса</a> и условиями{' '}
            <a href='#'>Публичной оферты.</a>
          </CustomCheckbox>
          <Button type='submit'>Купить</Button>
          <p className={styles.terms}>
            Нажимая «Купить», Пользователь соглашается на автоматическое
            списание денежных средств по истечению купленного периода.
            Дальнейшие списания по тарифам участвующим в акции осуществляются по
            полной стоимости согласно оферте.
          </p>
        </form>
      </div>
    </main>
  );
}
