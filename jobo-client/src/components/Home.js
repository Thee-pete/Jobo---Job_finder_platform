import React from 'react';
import {useNavigate } from 'react-router-dom';
import Footer from './Footer';

function Home(props) {
    const navigate = useNavigate();
    function handleAdminClick(){
        navigate("/jobs")

    }
    function handleUserClick(){
        navigate("/userjobs")

    }
    return (
        <div className="home-container">
            <div class="btn-group">
            <button className='admin-button' onClick={handleAdminClick}>Use as Admin</button>
            <button className='user-button' onClick={handleUserClick}>Use as Job seeker</button>
           </div>
           <Footer/>
        </div>
    );
}

export default Home;