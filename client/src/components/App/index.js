import * as React from 'react';
import { Route, Routes } from 'react-router';
import LogIn from '../LogIn';
import SignUp from '../SignUp';
import './index.css';

function App() {
  return (
    <Routes>
      <Route path='signup' element={ <SignUp /> } />
      <Route path='login' element={ <LogIn /> } />
    </Routes>
  );
}

export default App;
