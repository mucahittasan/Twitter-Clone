import Home from "./pages/Home";
import LoginPage from "./pages/LoginScreen";
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PostDetail from "./components/PostDetail";
import { useSelector } from "react-redux";
import NotFound from "./pages/NotFound";


const App = () => {

  const currentUser = useSelector(state => state.users.currentUser);

  return (
    <Routes>
      <Route path="/" element={currentUser ? <Home /> : <Navigate to="/login-screen " />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/login-screen" element={<LoginPage />} />
      <Route path="/post/:id" element={currentUser ? <PostDetail /> : <Navigate to="/login" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )

}

export default App;
