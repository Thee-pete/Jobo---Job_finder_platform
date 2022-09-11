import React from 'react';


function UserJob({job}) {
    return (
        <div className='user-job-item'>
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
        </div>
);
  
}

export default UserJob;