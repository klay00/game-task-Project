import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import React, { lazy, Suspense } from 'react';
import LodingComp from './components/loding';
const HomePage = lazy(() => import('./pages/HomePage'))
const GamePage = lazy(() => import('./pages/GamePage'))
const NoPage = lazy(() => import('./pages/LogInPage'))
const LogInPage = lazy(() => import('./pages/LogInPage'))

function App() {


  return (

    <div className='bodyy'>
      <BrowserRouter>
        <Suspense fallback={<LodingComp/>}>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path='/GamePage' element={<GamePage />} />
            <Route path='/LogInPage' element={<LogInPage />} />
            <Route path='/*' element={<NoPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>





    </div>
  );
}

export default App;
