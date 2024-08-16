import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/pageLogin';
import HomePage from './pages/pageHome';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Login' element={<Login />} />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;