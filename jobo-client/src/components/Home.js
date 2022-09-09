import React from 'react';
import {useNavigate } from 'react-router-dom';

function Home(props) {
    const navigate = useNavigate();
    function handleAdminClick(){
        navigate("/jobs")

    }
    function handleUserClick(){
        navigate("/user")

    }
    return (
        <div className="home-container">
            <div class="btn-group">
            <button className='admin-button' onClick={handleAdminClick}>Use as Admin</button>
            <button className='user-button' onClick={handleUserClick}>Use as User (Job finder)</button>
           </div>
        </div>
    );
}

export default Home;