import React, { useState } from 'react';
import AdminSideBar from './AdminSideBar';
import { useNavigate } from 'react-router-dom';

function AddCompany({onAddCompany}) {
    const [company_name, setCompanyName] = useState("");
    const [company_desc, setCompanyDesc] = useState("");

    const navigate = useNavigate();
    function handleSubmit(event){
        event.preventDefault();
      
        fetch("http://localhost:9292/companies", {
             method: "POST",
              body: JSON.stringify({
               company_name:company_name,
               company_desc:company_desc,
            
                
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
    })
    .then(response => response.json())
    .then(data=> onAddCompany(data));

        navigate("/companies")

    }
    return (
        <div className='add-company-container'>
            <AdminSideBar/>
            <div className='form-container'>
            <h1 className='create-header'>Create new company</h1>  
            <form onSubmit={handleSubmit}>
              <label>
                Company name:
               <input type="text" name="name" value={company_name} onChange={(e)=> setCompanyName(e.target.value)}/>
               </label>
               <br></br>
               <label>
                Company description:
                <input type="text" name="name" value={company_desc} onChange={(e)=> setCompanyDesc(e.target.value)}/>
               </label>
               <br></br>
              <button type="submit" value="Submit">SAVE</button>
             </form>  
             </div>
        </div>
    );
}

export default AddCompany;