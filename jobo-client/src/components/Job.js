import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

function Job({job, handleDeleteJob}) {
    function handleDelete(){
        axios.delete(`http://localhost:9292/jobs/${job.id}`)
        .then(()=>{
            
            handleDeleteJob(job)
        })


    }
    const navigate = useNavigate()
    
  
    const setData = (job) => {
        console.log(job);
        let {id,job_title,job_desc, how_to_apply,company_id,category_id} = job
        localStorage.setItem('ID',id)
        localStorage.setItem('JOB_TITLE', job_title)
        localStorage.setItem('JOB_DESC',job_desc)
        localStorage.setItem('HOW_TO_APPLY',how_to_apply)
        localStorage.setItem('COMPANY_ID',company_id)
        localStorage.setItem('CATEGORY_ID',category_id)

        navigate("/editjob")
        
     }
    return (
        <div className='job-item'>
            <div className='job-details'>
            <div className='label-name'>
            <p className='label-txt'>Job title: </p>
            <p>{job.job_title}</p>
            </div>
            <div className='label-name'>
            <p className='label-txt'>Job description:</p>
            <p>{job.job_desc}</p>
            </div>
            <div className='label-name'>
            <p className='label-txt'>How to apply:</p>
            <p>{job.how_to_apply}</p>
            </div>
            <div className='label-name'>
            <p className='label-txt'>Company:</p>
            <p>{job.company_id}</p>
            </div>
            <div className='label-name'>
            <p className='label-txt'>Category:</p>
            <p>{job.category_id}</p>
            </div>
            </div>
            <div className='button-cont'>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={() => setData(job)}>Update</button>
            </div>
        </div>
    );
}

export default Job;