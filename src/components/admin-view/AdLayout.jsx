import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './sideBer/Sidebar';
import Header from './sideBer/Header';
import Admin from '../../pages/user-view/Admin';

const AdLayout = () => {
    return (
        <div>
         <div>
            <Header/>
         </div>
       <div>
        <Admin/>
       </div>
         <div>
           
         </div>
           <div>
            <Outlet/>
           </div>
        </div>
    );
};

export default AdLayout;