import React from 'react';
import { Route, Routes } from "react-router-dom";
import Layout from './components/auth/layout/Layout';
import Login from './components/auth/layout/Login';
import Register from './components/auth/layout/Register';
import AdLayout from './components/admin-view/AdLayout';
import Dashboard from './pages/dashboard/Dashboard';
import Products from './pages/Products';
import Orders from './pages/Orders';
import Featurs from './pages/Featurs';
import ShopLayout from './components/user-view/ShopLayout';
import NotFound from './pages/not-found/NotFound';
import Home from './pages/user-view/Home';
import Listing from './pages/user-view/Listing';
import Payment from './pages/user-view/Payment';
import Account from './pages/user-view/Account';
import CheckAuth from './components/common/CheckAuth';
import Unauth from './pages/unauth-pages/unauth';
import Order from './pages/user-view/Order';
import Return from './pages/user-view/Return';
import Contact from './pages/user-view/Contact';
import Admin from './pages/user-view/Admin';
import ManageOrder from './components/admin-view/ManageOrder';

const App = () => {

  const isAuthenticated= false;
  const user=null;

  return (
    <div>
     <Routes>
      <Route path='/auth' element={
        <CheckAuth isAuthenticated={isAuthenticated} user={user}>
          <Layout/>
        </CheckAuth>
      }>
      <Route path='login' element={<Login/>}/>
      <Route path='register' element={<Register/>}/>
      <Route/>
      </Route>
      <Route path='/admin' element={
        <CheckAuth
        isAuthenticated={isAuthenticated} user={user}>
          <AdLayout/>
        </CheckAuth>
      }>
      <Route path='dashboard' element={<Dashboard/>}/>
      <Route path='products' element={<Products/>}/>
      <Route path='orders' element={<Orders/>}/>
      
      <Route path='featurs' element={<Featurs/>}/>
      </Route>

<Route>
<Route path='/' element={<Home/>}/>
  


<Route path='listing' element={<Listing/>}/>
<Route path='order' element={<Order/>}/>
<Route path='payment' element={<Payment/>}/>
<Route path='account' element={<Account/>}/>
</Route>
<Route path='/' element={<Home/>}/> 
<Route path='/dashboard' element={<Dashboard/>}/> 
<Route path='/return' element={<Return/>}/> 
<Route path='/contact' element={<Contact/>}/> 
<Route path='/adminView' element={<Admin/>}/> 
<Route path='/manageOrder' element={<ManageOrder/>}/> 
 
<Route path='*' element={<NotFound/>}/>
<Route path='/unauth-page' element={<Unauth/>}/>
     </Routes>
    </div>
  );
};

export default App;