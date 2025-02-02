import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Netflix from './pages/Netflix';
import Player from './pages/Player';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/player' element={<Player/>}></Route>
      <Route path='/' element={<Netflix/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

