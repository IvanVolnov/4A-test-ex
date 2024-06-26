import './App.css';
import MainContent from './components/MainContent';
import TimerHeader from './components/TimerHeader';
import Modal from './components/Modal';
import { DataContextProvider } from './context/DataContext';
import { TimerContextProvider } from './context/TimerContext';

function App() {
  return (
    <TimerContextProvider>
      <DataContextProvider>
        <TimerHeader />
        <MainContent />
        <Modal />
      </DataContextProvider>
    </TimerContextProvider>
  );
}

export default App;
