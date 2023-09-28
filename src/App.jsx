import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import WineCellarPage from './pages/WineCellarPage/WineCellarPage';

function App() {
  return (
    <div className="App">
      <div className='App-container absolute h-fit right-0'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutUsPage />} />
          <Route path='/winecellar' element={<WineCellarPage />} />
        </Routes>
      </div>
      <Navbar />
    </div>
  );
}

export default App;