import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/pageLogin';
import HomePage from './pages/pageHome';
import Produtos from './pages/pageProdutos';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Produtos' element={<Produtos />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;