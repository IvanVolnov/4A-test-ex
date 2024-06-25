import './App.css';
import MainContent from './components/MainContent';
import TimerHeader from './components/TimerHeader';
import { DataContextProvider } from './context/DataContext';
import { TimerContextProvider } from './context/TimerContext';

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
