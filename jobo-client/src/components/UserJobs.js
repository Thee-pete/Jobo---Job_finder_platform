import React, { useEffect} from 'react';
import UserJob from './UserJob';
function UserJobs({jobs, getJobs}) {
    useEffect(() => {
        fetch(`http://localhost:9292/jobs`)
         .then((response) => response.json())
         .then((actualData) => {
            console.log(actualData)
            getJobs(actualData)})
         .catch((err) => {
          console.log(err.message);
         });
       }, [getJobs]);

    const renderJobs = jobs.map((job)=>{
        return <UserJob key={job.id} job={job} jobId = {job.id} />
    })
    return (
        <div>
        {renderJobs}
       </div>
    );
}

export default UserJobs;