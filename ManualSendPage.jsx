import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SwapPage from './pages/SwapPage';
import ManualSendPage from './pages/ManualSendPage';
import './styles.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SwapPage />} />
        <Route path="/manual-send" element={<ManualSendPage />} />
      </Routes>
    </BrowserRouter>
  );
}
