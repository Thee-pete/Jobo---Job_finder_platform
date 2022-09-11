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
        <div className='company-item'>
            <div className='label-name'>
            <p className='label-txt'>Company name:</p>
            <p>{company.company_name}</p>
            </div>
            
            <div className='label-name'>
            <p className='label-txt'>Company description:</p>
            <p>{company.company_desc}</p>
            </div>
            <div className='button-cont'>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={() => setData(company)}>Update</button>
            </div>
        </div>
    );
}

export default Company;