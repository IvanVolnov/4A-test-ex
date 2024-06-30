import { createContext, useEffect, useState } from 'react';

const DataContext = createContext();

function DataContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function findInitPrice(data) {
    const dataModified = data.map((el) => {
      const initPrice = data.find(
        (x) => el.name === x.name && !x.isPopular && !x.isDiscount
      ).price;
      const discountValue =
        Math.round(((initPrice - el.price) * 100) / initPrice / 10) * 10;
      return { ...el, initPrice, discountValue };
    });
    console.log(dataModified);
    return dataModified;
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
        setData(findInitPrice(data));
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
