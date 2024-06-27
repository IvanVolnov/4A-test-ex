import './App.css';
import MainContent from './components/MainContent';
import TimerHeader from './components/TimerHeader';
import Modal from './components/Modal';
import { DataContextProvider } from './context/DataContext';
import { TimerContextProvider } from './context/TimerContext';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <TimerContextProvider>
      <DataContextProvider>
        <TimerHeader />
        <MainContent />
      </DataContextProvider>
    </TimerContextProvider>
  );
}

export default App;
