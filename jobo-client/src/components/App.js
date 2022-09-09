import NavBar from "./NavBar";
import Home from "./Home";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";
import UserComponent from "./UserComponent"
import Admin from "./Admin"

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Routes>
            <Route path="/" element= {<Home/>}></Route>
            <Route path="/admin" element= {<Admin/>}></Route>
            <Route path="/user" element= {<UserComponent/>}></Route>
        </Routes>

        <Footer/>
    
    </div>
  );
}

export default App;
