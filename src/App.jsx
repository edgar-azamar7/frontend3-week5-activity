import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import GameDetails from './pages/GameDetails';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<GameDetails />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
      <footer className="app-footer">
        <p>&copy; 2026 TechStore - Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

export default App;
