import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div  >
          <div className="navbar bg-base-300 base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Online Courrier Service</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Link</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="bg-base-300 rounded-t-none p-2">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default Layout;