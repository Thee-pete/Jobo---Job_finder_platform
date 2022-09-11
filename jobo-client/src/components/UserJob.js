import React from 'react';


function UserJob({job}) {
    return (
        <div className='job-item'>
        <p>{job.job_title}</p>
    </div>
);
  
}

export default UserJob;