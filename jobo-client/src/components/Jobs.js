import React, { useEffect, useState} from 'react';
import AdminSideBar from './AdminSideBar';
import { useNavigate } from 'react-router';
import Loading from './Loading';
import Job from './Job';

function Jobs({jobs, getJobs, handleDeleteJob}){
   
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://jobo-server2.herokuapp.com/jobs`)
         .then((response) => response.json())
         .then((actualData) => {
            console.log(actualData)
            getJobs(actualData)
            setIsLoading(false)
        
        })
            
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
           {isLoading ? <Loading/> : renderJobs }
           </div>
            <button className='add-new-btn' onClick={handleAddJob}>Add new job</button>
            </div>
        
            
        </div>
    );
}

export default Jobs;