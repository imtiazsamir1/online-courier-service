import React from 'react';
import Admin from '../../../pages/user-view/Admin';

const Header = () => {
    return (
        <div>
          <h1 className='p-14 text-center text-5xl'>Welcome To Admin Pannel</h1>
          <div><Admin/></div>
        </div>
    );
};

export default Header;