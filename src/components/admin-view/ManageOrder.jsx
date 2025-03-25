import React from 'react';
import Admin from '../../pages/user-view/Admin';
import AdLayout from './AdLayout';

const ManageOrder = () => {
    return (
        <div>
           <h1 className='p-14 text-center text-5xl'>Admin Manage Order</h1>
          <div><Admin/></div>
           <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Accept</th>
        <th>Return</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Qualityontrolpecialist@gmail.com</td>
        <td><button className="btn">Confirm</button></td>
        <td>
        <button className="btn btn-neutral">Confirm</button></td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktopupportechnician@gmail.com</td>
        <td><button className="btn">Confirmn</button></td>
        <td>
        <button className="btn btn-neutral">Confirm</button></td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Taxccountant@gmail.com</td>
        <td><button className="btn">Confirm</button></td>
        <td>
        <button className="btn btn-neutral">Confirm</button></td>
      </tr>
    </tbody>
  </table>
</div> 
        </div>
    );
};

export default ManageOrder;