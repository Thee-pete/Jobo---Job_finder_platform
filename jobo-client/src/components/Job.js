import React from 'react';

function Job({job}) {
    return (
        <div className='job-item'>
            <p>{job.job_title}</p>
        </div>
    );
}

export default Job;