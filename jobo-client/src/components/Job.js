import React from 'react';
import axios from 'axios';

function Job({job, handleDeleteJob}) {
    function handleDelete(){
        axios.delete(`http://localhost:9292/jobs/${job.id}`)
        .then(()=>{
            
            handleDeleteJob(job)
        })


    }
    return (
        <div className='job-item'>
            <p>{job.job_title}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default Job;