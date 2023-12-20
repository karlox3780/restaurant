import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage.jsx';
import WineCellarPage from './pages/WineCellarPage/WineCellarPage.jsx';
import MenusPage from './pages/MenusPage/MenusPage.jsx';
import MenuPage from './pages/MenuPage/MenuPage.jsx';
import BookingandContactPage from './pages/BookingandContactPage/BookingandContact.jsx';

function App() {
  return (
    <div className="App">
      <div className='App-container absolute h-fit right-0'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutUsPage />} />
          <Route path='/winecellar' element={<WineCellarPage />} />
          <Route path='/menus' element={<MenusPage />} />
          <Route path='/menu' element={<MenuPage />} />
          <Route path='/bookingandcontact' element={<BookingandContactPage />} />
        </Routes>
      </div>
      <Navbar />
    </div>
  );
}

export default App;