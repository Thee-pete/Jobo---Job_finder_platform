import React from 'react';
import AdminSideBar from './AdminSideBar';
import { useNavigate } from 'react-router';

function Companies(props) {
    const navigate = useNavigate();
    function handleAddCompany(){
        navigate("/addcompany")
    }
    return (
        <div className='companies-container'>
            <AdminSideBar/>
            <div>
            <p>show list of all companies using company component which can be updated/deleted</p>
            <button onClick={handleAddCompany}>Add new company</button>
            </div>
        </div>
    );
}

export default Companies;