import React from 'react';

const Login = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
           <div className="card bg-base-100 w-96 shadow-sm">
            <h1 className='flex justify-center items-center '>Login please!!!</h1>
          <div>
          <label className="input ">
  <svg className="h-[1em] opacity-50"  viewBox="0 0 24 24"></svg>
  <input type="text" className="grow" placeholder="Name" />
 
</label>
<label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path></g></svg>
  <input type="text" className="grow" placeholder="index.php" />
</label>
<label className="input">
  Path
  <input type="text" className="grow" placeholder="src/app/" />
  <span className="badge badge-neutral badge-xs">Optional</span>
</label>
  <div className="card-body">
          </div>
    
    
    <div className="card-actions flex justify-center items-center">
      <button className="btn btn-soft">Log-in</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;