import React from 'react';
import AdminSideBar from './AdminSideBar';
import { useNavigate } from 'react-router';

function Jobs(props) {
    const navigate = useNavigate();
    function handleAddJob(){
        navigate("/addjob")
    }
    return (
        <div className='jobs-container'>
          
            <AdminSideBar/>
            <div>
            <p>show list of all jobs using jobs component which can be updated/deleted</p>
            <button onClick={handleAddJob}>Add new job</button>
            </div>
        
            
        </div>
    );
}

export default Jobs;