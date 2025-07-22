import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import {Register} from '../src/Learners/Register'
import {AdminHome} from './Admin/AdminHome'
import {Home} from '../src/Learners/Home'
import {CreatorHome} from './Creator/CreatorHome'
import Login from './Learners/Login';
import Menu from './Learners/menu';
// import { AuthProvider } from './contexts/useAuth';
// import { PrivateRoutes } from './components/private_routes/PrivateRoutes'

function App() {
  return (
    <>
      <Router>
        {/* <AuthProvider> */}
          <Routes>
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>}/>
            <Route path='/' element={<Menu/>}/> 
            <Route path='/learnerhome' element={<Home/>}/>  
            <Route path='/adminhome' element={<AdminHome/>}/>   
            <Route path='/creatorHome' element={<CreatorHome/>}/>
          </Routes>
        {/* <PrivateRoutes></PrivateRoutes> */}
        {/* </AuthProvider> */}
        
      </Router>
    </>
  );
}

export default App;