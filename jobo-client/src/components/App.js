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


function App() {
  return (
    <div className="App">
        <NavBar/>
        <Routes>
            <Route path="/" element= {<Home/>}></Route>
            <Route path="/admin" element= {<Admin/>}></Route>
            <Route path="/user" element= {<UserComponent/>}></Route>
            <Route path="/jobs" element= {<Jobs/>}></Route>
            <Route path="/addcompany" element={<AddCompany/>}></Route>
            <Route path="/addcategory" element={<AddCategory/>}></Route>
            <Route path="/addjob" element={<AddJob/>}></Route>
            <Route path="/companies" element={<Companies/>}></Route>
            <Route path="/categories" element={<Categories/>}></Route>
        </Routes>

        <Footer/>
    
    </div>
  );
}

export default App;
