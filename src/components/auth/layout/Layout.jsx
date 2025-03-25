//import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const Layout = () => {
  const {user,logOut} = AuthContext;

  const handleLogOut=()=>{
logOut()
.then(()=>{})
.catch(error=>console.log(error));
  }
    return (
        <div  >
          <div className="navbar bg-base-300 base-100 shadow-sm">
  <div className="flex-1">
    <Link to='/'><a className="btn btn-ghost text-xl">Online Courrier Service</a></Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/order' >Order</Link></li>
      <li><Link to='/return'>Return</Link></li>
      <li><Link to='/contact'>contact</Link></li>
      <li><Link to='/dashboard'>Dashboard</Link></li>
      <li><Link to='/adminView'>Admin</Link></li>
      <li><Link to='/auth/login'>Login</Link></li>
      {
        user ? <>
        <button onClick={handleLogOut} className='btn btn-ghost'>Logout</button>
        </>:<>
        <li><Link to='/auth/login'></Link></li>
        </>
      }
     
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