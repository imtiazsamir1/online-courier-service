import React from 'react';
import Admin from '../../pages/user-view/Admin';

const ReturnList = () => {
    return (
        <div>
             <h1 className='p-14 text-center text-5xl'>Welcome To Admin Return List...</h1>
             <div><Admin/></div>
             <div className="overflow-x-auto p-8">
  <table className="table table-xs">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Number</th>
        <th>location</th>
        <th>Date</th>
        <th>Product & Quantity</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>ualityontrolpecialist@gmail.com</td>
        <td>01977777777</td>
        <td>Canada</td>
        <td>12/16/2020</td>
        <td>Blue</td>
      </tr>
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>ualityontrolpecialist@gmail.com</td>
        <td>01977777777</td>
        <td>United States</td>
        <td>12/5/2020</td>
        <td>Purple</td>
      </tr>
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>ualityontrolpecialist@gmail.com</td>
        <td>01977777777</td>
        <td>China</td>
        <td>8/15/2020</td>
        <td>Red</td>
      </tr>
      <tr>
        <th>4</th>
        <td>Marjy Ferencz</td>
        <td>ualityontrolpecialist@gmail.com</td>
        <td>01977777777</td>
        <td>Russia</td>
        <td>3/25/2021</td>
        <td>Crimson</td>
      </tr>
      <tr>
        <th>5</th>
        <td>Yancy Tear</td>
        <td>ualityontrolpecialist@gmail.com</td>
        <td>01977777777</td>
        <td>Brazil</td>
        <td>5/22/2020</td>
        <td>Indigo</td>
      </tr>
      <tr>
        <th>6</th>
        <td>Irma Vasilik</td>
        <td>ualityontrolpecialist@gmail.com</td>
        <td>01977777777</td>
        <td>Venezuela</td>
        <td>12/8/2020</td>
        <td>Purple</td>
      </tr>
      <tr>
        <th>7</th>
        <td>Meghann Durtnal</td>
        <td>ualityontrolpecialist@gmail.com</td>
        <td>01977777777</td>
        <td>Philippines</td>
        <td>2/17/2021</td>
        <td>Yellow</td>
      </tr>
      
     
      
    
      
      
     
      
     
      <tr>
        <th>20</th>
        <td>Lorelei Blackstone</td>
        <td>Data Coordiator</td>
        <td>01977777777r</td>
        <td>Kazakhstan</td>
        <td>6/3/2020</td>
        <td>Red</td>
      </tr>
    </tbody>
   
  </table>
</div>
        </div>
    );
};

export default ReturnList;