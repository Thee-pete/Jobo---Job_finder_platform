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






  return (
    <div className="App">
        <NavBar/>
        <Routes>
            <Route path="/" element= {<Home/>}></Route>
            <Route path="/admin" element= {<Admin/>}></Route>
            <Route path="/user" element= {<UserComponent/>}></Route>
            <Route path="/jobs" element= {<Jobs jobs={jobs} getJobs={getJobs}/>}></Route>
            <Route path="/addcompany" element={<AddCompany onAddCompany={onAddCompany}/>}></Route>
            <Route path="/addcategory" element={<AddCategory onAddCategory={onAddCategory}/>}></Route>
            <Route path="/addjob" element={<AddJob onAddJob={onAddJob}/>}></Route>
            <Route path="/companies" element={<Companies companies={companies} getCompanies={getCompanies}/>} ></Route>
            <Route path="/categories" element={<Categories categories={categories} getCategories={getCategories}/>} ></Route>
        </Routes>

        <Footer/>
    
    </div>
  );
}

export default App;
