import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Coins from './pages/Coins';
import CoinItemPage from './pages/CoinItemPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Coins />} index />
        <Route element={<CoinItemPage />} path={'/:id'} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
