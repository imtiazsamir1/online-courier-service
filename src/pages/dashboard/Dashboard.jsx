import React from 'react';
import Layout from '../../components/auth/layout/Layout';

const Dashboard = () => {
    return (
        <div >
            <div><Layout/></div>
      <div>
        <div><h1 className='p-14 text-center text-5xl'>User Dashboard</h1></div>
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
      </div>
        </div>
    );
};

export default Dashboard;