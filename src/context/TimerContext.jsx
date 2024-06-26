import { createContext, useEffect, useState } from 'react';

const TimerContext = createContext();

function TimerContextProvider({ children }) {
  const [timer, setTimer] = useState(10);
  const [discount, setDiscount] = useState(true);
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 1) {
          clearInterval(interval);
          setPopup(true);
          setDiscount(false);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <TimerContext.Provider
      value={{
        timer,
        discount,
        popup,
        setPopup,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
}

export { TimerContext, TimerContextProvider };
