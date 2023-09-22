import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' />
      </Routes>
      <Navbar />

    </div>
  );
}

export default App;