import Home from "./pages/Home";
import LoginPage from "./pages/LoginScreen";
import {Route, Routes} from 'react-router-dom'
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PostDetail from "./components/PostDetail";

const App = () => {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/login-screen" element={<LoginPage />} />
      <Route path="/post/:id" element={<PostDetail />} />
    </Routes>

  );
}

export default App;
