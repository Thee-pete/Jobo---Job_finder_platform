import React,{useEffect, useState} from 'react';
import AdminSideBar from './AdminSideBar';
import { useNavigate } from 'react-router-dom';

function AddJob({onAddJob,companies,getCompanies,categories,getCategories}) {
    const [job_title, setJobTitle] = useState("")
    const [job_desc, setJobDesc] = useState("")
    const [how_to_apply, setHowToApply] = useState("")
    const [company_id, setCompanyId] = useState("")
    const [category_id, setCategoryId] = useState("")

  
 
    useEffect(() => {
        fetch(`http://localhost:9292/companies`)
         .then((response) => response.json())
         .then((actualData) => {
            console.log(actualData)
            getCompanies(actualData)})
         .catch((err) => {
          console.log(err.message);
         });
       }, [getCompanies]);

       useEffect(() => {
        fetch(`http://localhost:9292/categories`)
         .then((response) => response.json())
         .then((actualData) => {
            console.log(actualData)
            getCategories(actualData)})
         .catch((err) => {
          console.log(err.message);
         });
       }, [getCategories]);

    const navigate =useNavigate();
    function handleSubmit(event){
        event.preventDefault();
        
        fetch("http://localhost:9292/jobs", {
             method: "POST",
              body: JSON.stringify({
               job_title:job_title,
               job_desc:job_desc,
               how_to_apply: how_to_apply,
               company_id:company_id,
               category_id:category_id

                
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
    })
    .then(response => response.json())
    .then(data=> onAddJob(data));

        navigate("/jobs")
    }
    
    
    return (
        <div className='add-job-container'>
            <AdminSideBar/>
            <div className='form-container'>
            <h1 className='create-header'>Create new job</h1>  
            <form onSubmit={handleSubmit}>
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

export default AddJob;