import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import { Home, Fpmovement, Catalog } from './pages/index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='catalog/:type'>
            <Route index element={<Catalog />}></Route>
            <Route path=':subType' element={<Catalog />}></Route>
          </Route>
          <Route path='fpmovement' element={<Fpmovement />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
