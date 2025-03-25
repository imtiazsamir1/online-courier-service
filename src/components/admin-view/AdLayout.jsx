import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './sideBer/Sidebar';
import Header from './sideBer/Header';

const AdLayout = () => {
    return (
        <div>
          
         <Sidebar/>
         <div>
            <Header/>
         </div>
           <div>
            <Outlet/>
           </div>
        </div>
    );
};

export default AdLayout;