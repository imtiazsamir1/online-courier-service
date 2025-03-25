import React from 'react';
import AdLayout from '../../components/admin-view/AdLayout';
import { Link, Outlet } from 'react-router-dom';

const Admin = () => {
    return (
        <div>
            <AdLayout/>
            <div><h1>hello</h1>
                <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
      Get Started
    </label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
      {/* Sidebar content here */}
      <li><Link to="/manageOrder">Manage order</Link></li>
      <li><a>Admin Report</a></li>
      <li><a>Dashboard</a></li>
      <li><a>Return List</a></li>
    </ul>
  </div>
</div></div>
<div><Outlet/></div>
        </div>
    );
};

export default Admin;