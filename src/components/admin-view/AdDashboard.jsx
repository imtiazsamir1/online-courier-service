import React from 'react';
import Dashboard from '../../pages/dashboard/Dashboard';
import Admin from '../../pages/user-view/Admin';

const AdDashboard = () => {
    return (
        <div>
            <h1 className='p-14 text-center text-5xl'>Welcome To Admin Dashboard...</h1>
            <div><Admin/></div>
            <div> <div>
        <div><h1 className='p-14 text-center text-5xl'></h1></div>
      <div className="flex gap-4 p-8">
  <div className="card w-1/2 bg-base-300 text-black p-4 shadow-lg"><h1>0</h1><br /><p>Parsel Deliverd</p></div>
  <div className="card w-1/2 bg-base-300  text-black p-4 shadow-lg"><div className="bg-base-300 text-black p-4 shadow-lg"><h1>0</h1><br /><p>In Progress</p></div>
  <div className=" bg-base-300 text-black p-4 shadow-lg"><h1>0</h1><br /><p>Return In Progress</p></div> <div className=" bg-base-300 text-black p-4 shadow-lg"><h1>0</h1><br /><p>Returned</p></div></div>
  
  
</div>
<div>
<div className="flex gap-4 p-8">
  <div className="card w-1/2 bg-base-300 text-black p-4 shadow-lg"><h1>$0.00</h1><br /><p>Disbursement due</p></div>
  <div className="card w-1/2 bg-base-300  text-black p-4 shadow-lg"><div className="bg-base-300 text-black p-4 shadow-lg"><h1>$0.00</h1><br /><p>Payment disbursed already</p></div>
  <div className=" bg-base-300 text-black p-4 shadow-lg"><h1>$0.00</h1><br /><p>Payment in process</p></div> </div>
  
  
</div>
</div>
      </div></div>
        </div>
    );
};

export default AdDashboard;