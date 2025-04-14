import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Deliveries from './pages/Deliveries';
import Main from './pages/Main';
import './styles.css'

export const App = () => {
  return (    
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/deliveries" element={<Deliveries />} />
          <Route path='*' element={<h1>404 <br/>Ресурс не найден</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};



