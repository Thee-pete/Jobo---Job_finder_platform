import React, { useEffect} from 'react';
import UserJob from './UserJob';
function UserJobs({jobs, getJobs}) {
    useEffect(() => {
        fetch(`https://jobo-server2.herokuapp.com/jobs`)
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
        <h2>Available jobs</h2>
        {renderJobs}
       </div>
    );
}

export default UserJobs;