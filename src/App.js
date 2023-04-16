import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage'
import NoPage from './pages/NoPage';
import LogInPage from './pages/LogInPage';


function App() {


  return (

    <div className='bodyy'>
      <BrowserRouter>
      <Routes>
      <Route index element={<HomePage/>} />
      <Route path='/GamePage' element={<GamePage/>} />
      <Route path='/LogInPage' element={<LogInPage/>} />
      <Route path='/*' element={<NoPage/>} />
      </Routes>
        
      

      </BrowserRouter>





    </div>
  );
}

export default App;
