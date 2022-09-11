import React, { useState, useEffect } from 'react';
import AdminSideBar from './AdminSideBar';
import { useNavigate } from 'react-router';

function EditJob({onUpdateJob,companies,getCompanies,categories,getCategories}) {
    const  [job_title,setJobTitle] = useState('')
    const  [job_desc,setJobDesc] = useState('')
    const  [how_to_apply,setHowToApply] = useState('')
    const  [company_id,setCompanyId] = useState('')
    const  [category_id,setCategoryId] = useState('')
    const  [id, setID] = useState(null);
    const navigate = useNavigate()

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setJobTitle(localStorage.getItem('JOB_TITLE'));
        setJobDesc(localStorage.getItem('JOB_DESC'))
        setHowToApply(localStorage.getItem('HOW_TO_APPLY'));
        setCompanyId(localStorage.getItem('COMPANY_ID'))
        setCategoryId(localStorage.getItem('CATEGORY_ID'));
        
    }, []);
    useEffect(() => {
        fetch(`https://jobo-server2.herokuapp.com/companies`)
         .then((response) => response.json())
         .then((actualData) => {
            console.log(actualData)
            getCompanies(actualData)})
         .catch((err) => {
          console.log(err.message);
         });
       }, [getCompanies]);

       useEffect(() => {
        fetch(`https://jobo-server2.herokuapp.com/categories`)
         .then((response) => response.json())
         .then((actualData) => {
            console.log(actualData)
            getCategories(actualData)})
         .catch((err) => {
          console.log(err.message);
         });
       }, [getCategories]);
    function handleUpdate(event){
      event.preventDefault()
          fetch(`https://jobo-server2.herokuapp.com/jobs/${id}`, {
          method: 'PATCH',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            job_title: job_title,
            job_desc: job_desc,
            how_to_apply: how_to_apply,
            company_id: company_id,
            category_id: category_id
          })
        })
        .then(r => r.json())
        .then(data => onUpdateJob(data))

        navigate("/jobs")
    
      }
    return (
        <div className='edit-container'>
             <AdminSideBar/>
            <div className='form-container'>
            <h1 className='create-header'>Update job</h1>  
            <form onSubmit={handleUpdate}>
                <div>
            <select value={company_id} onChange = {(e)=> setCompanyId(e.target.value)}>
                {companies.map((company) => {
                   
                     return <option value={company.id}>{company.company_name}</option>

                })}

            </select>
            <select value={category_id} onChange = {(e)=> setCategoryId(e.target.value)}>
                {categories.map((category) => {
                return <option value={category.id}>{category.category_name}</option>
                })}

            </select>
            <br></br>
            </div>
              <label>
                Job title:
               <input type="text" name="name" value={job_title} onChange={(e)=> setJobTitle(e.target.value)}/>
               </label>
               <br></br>
               <label>
                Job description:
                <input type="text" name="name" value={job_desc} onChange={(e)=> setJobDesc(e.target.value)}/>
               </label>
               <br></br>
               <label>
                How to apply:
                <input type="text" name="name" value={how_to_apply} onChange={(e)=> setHowToApply(e.target.value)}/>
               </label>
               <br></br>
              <button type="submit" value="Submit">SAVE</button>
             </form>  
             </div>
        </div>
    );
}

export default EditJob;