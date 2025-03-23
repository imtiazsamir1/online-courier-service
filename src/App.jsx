import React from 'react';
import { Route, Routes } from "react-router-dom";
import Layout from './components/auth/layout/Layout';
import Login from './components/auth/layout/Login';
import Register from './components/auth/layout/Register';

const App = () => {
  return (
    <div>
     <Routes>
      <Route path='/auth' element={<Layout/>}>
      <Route path='login' element={<Login/>}/>
      <Route path='Register' element={<Register/>}/>
      <Route/>

      </Route>
     </Routes>
    </div>
  );
};

export default App;