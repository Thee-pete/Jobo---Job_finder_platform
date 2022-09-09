import React from 'react';
import axios from 'axios';

function Company({company, handleDeleteCompany}) {
   
    function handleDelete(){
        axios.delete(`http://localhost:9292/companies/${company.id}`)
        .then(()=>{
            console.log(company)
            handleDeleteCompany(company)
        })
    }
    
    return (
        <div>
            <p>{company.company_name}</p>
            <button onClick={handleDelete}>Delete</button>
            <button>Edit</button>
        </div>
    );
}

export default Company;