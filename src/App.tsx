import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Coins from './pages/Coins';
import CoinItemPage from './pages/CoinItemPage';

function App() {
  return (
    <BrowserRouter>
      <div className='mt-14 text-white'>
        <Routes>
          <Route element={<Coins />} index />
          <Route element={<CoinItemPage />} path={'/:id'} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
