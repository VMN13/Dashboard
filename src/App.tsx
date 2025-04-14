import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ClickCounter } from './ClickCounter';
import './styles.css'
import IMAGE from './image.png';
import LOGO from './react.svg'
export const App = () => {
  return (    
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ClickCounter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};



