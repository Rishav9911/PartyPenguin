import "./App.css";
import Login from "./pages/login_user/LoginUser";
import Signup from "./pages/signup_user/SignupUser";
import OSignup from "./pages/SignUpOrganiser/SignUpOrganiser";
import OLogin from "./pages/LoginOrganiser/LoginOrganiser"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homeuser from "./pages/Home/HomeUser";
import Landing from "./pages/Landing/Landing";
import Navbar from "./pages/Navbar/Navbar";
import HostEvent from "./pages/Host Event/HostEvent";
import ShowDetails from "./components/ShowDetails";
import OrgDashboard from "./pages/OrganiserDashboard/OrgDashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path="/usersignup" element={<Signup />} />
          <Route path="/organisersignup" element={<OSignup />} />
          <Route path="/userlogin" element={<Login />} />
          <Route path="/organiserlogin" element={<OLogin />} />
          <Route path="/home_user" element={<Homeuser/>}/>
          <Route path="/hostEvent" element={<HostEvent/>}/>
          <Route path="/showdetails" element={<ShowDetails/>}/>
          <Route path="/dashboard" element={<OrgDashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
