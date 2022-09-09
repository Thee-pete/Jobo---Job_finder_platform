import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

function Company({company, handleDeleteCompany}) {
   

    const navigate = useNavigate()
    
  
    const setData = (company) => {
        console.log(company);
        let {id,company_name,company_desc} = company
        localStorage.setItem('ID',id)
        localStorage.setItem('COMPANY_NAME', company_name)
        localStorage.setItem('COMPANY_DESC',company_desc)

        navigate("/editcompany")
        
     }


    function handleDelete(){
        axios.delete(`http://localhost:9292/companies/${company.id}`)
        .then(()=>{
            handleDeleteCompany(company)
        })
    }

    return (
        <div>
            <p>{company.company_name}</p>
            <p>{company.company_desc}</p>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={() => setData(company)}>Update</button>
        </div>
    );
}

export default Company;