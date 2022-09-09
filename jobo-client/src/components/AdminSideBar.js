import React from 'react';
import {useNavigate} from 'react-router-dom';

function AdminSideBar(props) {
    const navigate = useNavigate();
    function handleAddJob(){
        navigate("/addjob")
    }
    function handleAddCategory(){
        navigate("/addcategory")
    }
    function handleAddCompany(){
        navigate("/addcompany")
    }
    function handleJobs(){
        navigate("/jobs")
    }
    return (
        <div>
            <p>Hello sidebar</p>
            <div className= 'admin-btn-group'>
                <button onClick={handleJobs}>All Jobs</button>
                <button onClick={handleAddCompany}>Add Company</button>
                <button onClick={handleAddCategory}>Add Category</button>
                <button onClick={handleAddJob}>Add Job</button>
               

            </div>
        </div>
    );
}

export default AdminSideBar;