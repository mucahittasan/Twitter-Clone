import Home from "./pages/Home";
import LoginPage from "./pages/LoginScreen";
import {Route, Routes} from 'react-router-dom'
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  return (

    <Routes>
      <Route path="/login-screen" element={<LoginPage />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
    </Routes>

  );
}

export default App;
