import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import PlanRadioMain from './UI/PlanRadioMain';
import { TimerContext } from '../context/TimerContext';

export default function MainContent() {
  const { data, loading, error } = useContext(DataContext);
  const { discount } = useContext(TimerContext);
  return (
    <main>
      <h1>Выберите подходящий тарифный план</h1>
      {error && (
        <p>
          произошла ошибка при загрузке данных с сервера:
          {error.message}
        </p>
      )}

      <form>
        {discount
          ? data
              .filter((el) => el.isPopular)
              .map((el) => <PlanRadioMain key={el.id} data={el} />)
          : data
              .filter((el) => !el.isPopular && !el.isDiscount)
              .map((el) => <PlanRadioMain key={el.id} data={el} />)}
      </form>
    </main>
  );
}
