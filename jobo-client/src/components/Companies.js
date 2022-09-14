import React, { useEffect, useState} from 'react';
import AdminSideBar from './AdminSideBar';
import { useNavigate } from 'react-router';
import Company from './Company';
import Loading from './Loading';

function Companies({companies, getCompanies,handleDeleteCompany}) {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    function handleAddCompany(){
        navigate("/addcompany")
    }

    useEffect(() => {
        fetch(`https://jobo-server2.herokuapp.com/companies`)
         .then((response) => response.json())
         .then((actualData) => {
            console.log(actualData)
            getCompanies(actualData)
            setIsLoading(false)
        })
         .catch((err) => {
          console.log(err.message);
         });
       }, [getCompanies]);

    const renderCompanies = companies.map((company)=>{
        return <Company key={company.id} company={company} companyId = {company.id} handleDeleteCompany={handleDeleteCompany}/>
    })




    return (
        <div className='companies-container'>
            <AdminSideBar/>
            <div>
            <div>
            {isLoading ? <Loading/> : renderCompanies } 
            </div>
            <button className='add-new-btn' onClick={handleAddCompany}>Add new company</button>
            </div>
        </div>
    );
}

export default Companies;