import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <div className='App-container absolute h-full right-0'>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </div>
      <Navbar />
    </div>
  );
}

export default App;