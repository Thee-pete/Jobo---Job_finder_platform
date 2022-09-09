import React from 'react';
import {NavLink} from 'react-router-dom';

function AdminSideBar(props) {
    return (
        <div>
            <p>Hello sidebar</p>
            <div className= 'admin-btn-group'>
                <button>Add Company</button>
                <button>Add Category</button>
                <button>Add Job</button>
                <NavLink className="jobs-link" to="/jobs">Jobs</NavLink>

            </div>
        </div>
    );
}

export default AdminSideBar;