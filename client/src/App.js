import "./App.css";
import Login from "./pages/login_user/LoginUser";
import Signup from "./pages/signup_user/SignupUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home_user from "./pages/Home_user";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home_user" element={<Home_user/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
