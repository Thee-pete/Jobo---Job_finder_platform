import React from 'react';
import {useNavigate} from 'react-router-dom';

function AdminSideBar(props) {
    const navigate = useNavigate();
 
    function handleCategories(){
        navigate("/categories")
    }
    function handleCompanies(){
        navigate("/companies")
    }
    function handleJobs(){
        navigate("/jobs")
    }
    return (
        <div>
            <p>Hello sidebar</p>
            <div className= 'admin-btn-group'>
                <button onClick={handleJobs}>Jobs</button>
                <button onClick={handleCompanies}>Companies</button>
                <button onClick={handleCategories}>Categories</button>
                
               

            </div>
        </div>
    );
}

export default AdminSideBar;