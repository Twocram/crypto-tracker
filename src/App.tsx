import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Coins from './pages/Coins';
import CoinPage from './pages/CoinPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Coins />} index />
        <Route element={<CoinPage />} path={'/:id'} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
