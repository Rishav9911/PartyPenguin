import "./App.css";
import Login from "./pages/login_user/LoginUser";
import Signup from "./pages/signup_user/SignupUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homeuser from "./pages/Home_user";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home_user" element={<Homeuser/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
