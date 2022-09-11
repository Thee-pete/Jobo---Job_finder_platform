import React, { useState, useEffect } from 'react';
import AdminSideBar from './AdminSideBar';
import { useNavigate } from 'react-router';

function EditCompany({onUpdateCompany}) {
    const  [company_name,setCompanyName] = useState('')
    const  [company_desc,setCompanyDesc] = useState('')
    const  [id, setID] = useState(null);

    const navigate = useNavigate()

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setCompanyName(localStorage.getItem('COMPANY_NAME'));
        setCompanyDesc(localStorage.getItem('COMPANY_DESC'))
        
    }, []);
    function handleUpdate(){
          fetch(`https://jobo-server2.herokuapp.com/companies/${id}`, {
          method: 'PATCH',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            company_name: company_name,
            company_desc: company_desc
          })
        })
        .then(r => r.json())
        .then(data => onUpdateCompany(data))

        navigate("/companies")
    
      }

    return (
        <div className='edit-container'>
             <AdminSideBar/>
            <div className='form-container'>
            <h1 className='create-header'>Update company</h1>  
            <form onSubmit={handleUpdate} >
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

export default EditCompany;