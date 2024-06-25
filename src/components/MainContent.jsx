import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import PlanRadioMain from './UI/PlanRadioMain';

export default function MainContent() {
  const { data, loading, error } = useContext(DataContext);
  // console.log(data, loading, error);
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
        {data.map((el) => (
          <PlanRadioMain key={el.id} data={el} />
        ))}
      </form>
    </main>
  );
}
