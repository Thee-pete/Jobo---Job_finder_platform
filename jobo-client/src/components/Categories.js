import React from 'react';
import AdminSideBar from './AdminSideBar';
import { useNavigate } from 'react-router';
function Categories(props) {
    const navigate =useNavigate();
    function handleAddCategory(){
        navigate("/addcategory")
    }
    return (
        <div className='categories-container'>
            <AdminSideBar/>
            <div>
            <p>show list of all categories using category component which can be updated/deleted</p>
            <button onClick={handleAddCategory}>Add new category</button>
            </div>
            
        </div>
    );
}

export default Categories;