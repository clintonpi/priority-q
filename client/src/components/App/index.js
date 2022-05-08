import * as React from 'react';
import { Route, Routes } from 'react-router';
import SignUp from '../SignUp';
import './index.css';

function App() {
  return (
    <Routes>
      <Route path='signup' element={ <SignUp /> } />
    </Routes>
  );
}

export default App;
