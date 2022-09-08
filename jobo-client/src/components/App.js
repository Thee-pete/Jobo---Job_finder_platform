import NavBar from "./NavBar";
import Home from "./Home";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">

        <NavBar/>
        <Routes>
            <Route path="/" element= {<Home/>}></Route>
        </Routes>

        <Footer/>
    
    </div>
  );
}

export default App;
