import './App.css';
import AppRouter from './Router';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <AppRouter />
      </header>
    </div>
  );
}

export default App;
