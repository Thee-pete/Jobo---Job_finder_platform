import React from 'react';
import AdminSideBar from './AdminSideBar';
import AdminDashBoard from "./AdminDashBoard";


function Admin(props) {
    return (
        
        <div className='admin-container'>
          <AdminSideBar/>
          <AdminDashBoard/> 
          
        </div>
    );
}

export default Admin;