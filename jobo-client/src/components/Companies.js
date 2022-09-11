import React, { useEffect} from 'react';
import AdminSideBar from './AdminSideBar';
import { useNavigate } from 'react-router';
import Company from './Company';

function Companies({companies, getCompanies,handleDeleteCompany}) {
    const navigate = useNavigate();
    function handleAddCompany(){
        navigate("/addcompany")
    }

    useEffect(() => {
        fetch(`http://localhost:9292/companies`)
         .then((response) => response.json())
         .then((actualData) => {
            console.log(actualData)
            getCompanies(actualData)})
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
            {renderCompanies}    
            </div>
            <button className='add-new-btn' onClick={handleAddCompany}>Add new company</button>
            </div>
        </div>
    );
}

export default Companies;