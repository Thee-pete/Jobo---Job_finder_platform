import NavBar from "./NavBar";
import Home from "./Home";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";
import UserComponent from "./UserComponent"
import Admin from "./Admin";
import Jobs from "./Jobs";
import AddCategory from './AddCategory';
import AddCompany from './AddCompany';
import AddJob from './AddJob';
import Companies from './Companies';
import Categories from './Categories';
import { useCallback, useState } from "react";
import EditCompany from "./EditCompany";
import EditCategory from "./EditCategory";
import EditJob from "./EditJob";
import UserJobs from "./UserJobs";

function App() {
  const [jobs,setJobs] = useState([]);
  const [companies,setCompanies] = useState([]);
  const [categories,setCategories] = useState([]);
 
  const getJobs = useCallback((jobs) =>{
    setJobs(jobs)
  },[])
  const getCompanies = useCallback((companies) =>{
    setCompanies(companies)
  },[])
  const getCategories = useCallback((categories) =>{
    setCategories(categories)
  },[])

  function onAddCompany(newCompany){
    setCompanies([...companies, newCompany])
  }
  function onAddCategory(newCategory){
    setCategories([...categories, newCategory])
  }
  function onAddJob(newJob){
    setJobs([...jobs, newJob])
  }
  function onUpdateCompany(updatedCompany){
    const newCompanies = companies.map(company => {
      if(company.id === updatedCompany.id){
        return updatedCompany
      }
     return setCompanies([...companies, newCompanies])
    })

    
  }
  function onUpdateCategory(updatedCategory){
    const newCategories = categories.map(category => {
      if(category.id === updatedCategory.id){
        return updatedCategory
      }
     return setCategories([...categories, newCategories])
    })

    
  }
  function onUpdateJob(updatedJob){
    const newJobs = jobs.map(job => {
      if(job.id === updatedJob.id){
        return updatedJob
      }
     return setJobs([...jobs, newJobs])
    })

    
  }
  function handleDeleteCompany(deletedCompany){
    const newCompanies = companies.filter(company => company.id !== deletedCompany.id);
    setCompanies(newCompanies)

    
  }
  function handleDeleteCategory(deletedCategory){
    const newCategories = categories.filter(category => category.id !== deletedCategory.id);
    setCategories(newCategories)

    
  }
  function handleDeleteJob(deletedJob){
    const newJobs = jobs.filter(job => job.id !== deletedJob.id);
    setJobs(newJobs)

    
  }






  return (
    <div className="App">
        <NavBar/>
        <Routes>
            <Route path="/" element= {<Home/>}></Route>
            <Route path="/admin" element= {<Admin/>}></Route>
            <Route path="/user" element= {<UserComponent/>}></Route>
            <Route path="/jobs" element= {<Jobs jobs={jobs} getJobs={getJobs} handleDeleteJob={handleDeleteJob}/>}></Route>
            <Route path="/addcompany" element={<AddCompany onAddCompany={onAddCompany}/>}></Route>
            <Route path="/addcategory" element={<AddCategory onAddCategory={onAddCategory}/>}></Route>
            <Route path="/addjob" element={<AddJob onAddJob={onAddJob}companies={companies} getCompanies={getCompanies}categories={categories} getCategories={getCategories}/>}></Route>
            <Route path="/companies" element={<Companies companies={companies} getCompanies={getCompanies} handleDeleteCompany={handleDeleteCompany}/>} ></Route>
            <Route path="/categories" element={<Categories categories={categories} getCategories={getCategories} handleDeleteCategory={handleDeleteCategory}/>} ></Route>
            <Route path="/editcompany" element={<EditCompany onUpdateCompany={onUpdateCompany}/>}></Route>
            <Route path="/editcategory" element={<EditCategory onUpdateCategory={onUpdateCategory}/>}></Route>
            <Route path="/editjob" element={<EditJob onUpdateJob={onUpdateJob}companies={companies} getCompanies={getCompanies}categories={categories} getCategories={getCategories}/>}></Route>
            <Route path="/userjobs" element= {<UserJobs jobs={jobs} getJobs={getJobs} />}></Route>
        </Routes>

    
    </div>
  );
}

export default App;
