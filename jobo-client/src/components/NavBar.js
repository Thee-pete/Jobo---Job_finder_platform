import React from 'react';

import {useNavigate} from 'react-router-dom';

function NavBar() {
    const navigate = useNavigate();
    function handleClick(){
        navigate("/");
    }
    return (
        <div className="nav-bar">
            <h1 className="logo-name" onClick={handleClick}>Jobo</h1>
            
        </div>
    );
}

export default NavBar;