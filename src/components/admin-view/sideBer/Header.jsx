import React from 'react';
import Admin from '../../../pages/user-view/Admin';
import Layout from '../../auth/layout/Layout';

const Header = () => {
    return (
        <div className='justify content-inline'>
          <div><Layout/></div>
          <h1 className='p-14 text-center text-5xl'>Welcome To Admin Pannel...</h1>
         
        </div>
    );
};

export default Header;