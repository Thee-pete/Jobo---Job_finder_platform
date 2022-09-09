import React from 'react';
import Jobs from './Jobs';
import AddCompany from './AddCompany'
import { Route, Routes } from "react-router-dom";

function AdminDashBoard(props) {
    return (
        <div>
           <p>hello dashboard</p>
          
           
           <Routes>
             <Route path="/jobs" element= {<Jobs/>}></Route>
             <Route path="/addcompany" element= {<AddCompany/>}></Route>
            </Routes>
        </div>
    );
}

export default AdminDashBoard;