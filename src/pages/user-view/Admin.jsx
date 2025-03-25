import React from 'react';
import AdLayout from '../../components/admin-view/AdLayout';
import { Link, Outlet } from 'react-router-dom';

const Admin = () => {
    return (
        <div>
      
      <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
      {/* Sidebar content here */}
      <li className='text-red-500'><Link to='/manageOrder'>Manage Order</Link></li>
      <li className='text-red-500'><Link to='/acceptList'>Accept List</Link></li>
      <li className='text-red-500'><Link to='/returnList'><a>Return List</a></Link></li>
      <li className='text-red-500'><Link to='/adDashboard'><a>Dashboard</a></Link></li>
      <li className='text-red-500'><Link to='/noticeAdmin'><a>Notice</a></Link></li>
      <li className='text-red-500'><Link to='/'><a>Home</a></Link></li>
     
    </ul>
  </div>
</div>
  
  <div><Outlet/></div>
        </div>
    );
};

export default Admin;