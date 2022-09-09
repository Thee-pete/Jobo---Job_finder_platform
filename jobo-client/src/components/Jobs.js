import React, { useEffect} from 'react';
import AdminSideBar from './AdminSideBar';
import { useNavigate } from 'react-router';

import Job from './Job';

function Jobs({jobs, getJobs, handleDeleteJob}){

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
        return <Job key={job.id} job={job} jobId = {job.id} handleDeleteJob={handleDeleteJob}/>
    })

    const navigate = useNavigate();
    function handleAddJob(){
        navigate("/addjob")
    }
    return (
        <div className='jobs-container'>
          
            <AdminSideBar/>
            <div>
           <div>
            {renderJobs}
           </div>
            <button onClick={handleAddJob}>Add new job</button>
            </div>
        
            
        </div>
    );
}

export default Jobs;