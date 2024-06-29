import { createContext, useEffect, useState } from 'react';

const DataContext = createContext();

function DataContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function findInitPrice(el, data) {
    console.log('Finding initial price for:', el); // Log the element
    console.log('Data:', data); // Log the data

    const initPlan = data.find(
      (x) => el.name === x.name && !x.isPopular && !x.isDiscount
    );
    console.log('Initial plan found:', initPlan); // Log the found initial plan

    if (!initPlan) return;
    return initPlan.price;
  }

  useEffect(() => {
    fetch('https://t-pay.iqfit.app/subscribe/list-test')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <DataContext.Provider
      value={{
        data,
        loading,
        error,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export { DataContext, DataContextProvider };
