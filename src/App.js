import logo from './logo.svg';
import './App.css';
import { useToast } from './hooks/useToast';

function App() {
  const toast = useToast();

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <button onClick={() => toast.addToast("This is a very long test message 123 123 12312 3123 123 ")}>addToast</button>
      </main>
    </div>
  );
}

export default App;
