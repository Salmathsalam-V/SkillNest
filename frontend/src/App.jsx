import React from 'react';
import { Button } from '@/components/ui/button';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import {Register} from '../src/Learners/Register'
import Login from './Learners/Login';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;