import { createContext, useEffect, useState } from 'react';
import { POPUP_DELAY, TIMER_VALUE } from '../config';

const TimerContext = createContext();

function TimerContextProvider({ children }) {
  const [timer, setTimer] = useState(TIMER_VALUE);
  const [discount, setDiscount] = useState(true);
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 1) {
          clearInterval(interval);
          setTimeout(() => {
            setPopup(true);
          }, POPUP_DELAY * 1000);
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
