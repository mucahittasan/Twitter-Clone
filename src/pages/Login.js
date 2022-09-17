import { BsTwitter } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import {useFormik} from 'formik';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/user/userSlice';
import { useNavigate, useLocation } from 'react-router-dom';

const Login = () => {

  const location = useLocation();
  console.log(location)

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const users = useSelector(state => state.users.users);


  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values) => {
      users.forEach(user => {
        if(user.email === values.email && user.password === values.password) {
          dispatch(loginUser({...user}))
          navigate("/");
        }
      })
    }
  })


  return (
    <div className="signup-form">
    <form onSubmit={formik.handleSubmit}>
      <div className="form-header">
        <Link to="/">
          <button className='close-button'>X</button>
        </Link>
        <BsTwitter /> 
        <div></div>
      </div>
      <div className="form-content">
        <h3>Login to Twitter</h3>
        <input value={formik.email} name='email' onChange={formik.handleChange} type="email" placeholder='Email'/>
        <input value={formik.password} name='password' onChange={formik.handleChange} type="password" min={8}  placeholder='Password'/>
       
        <button type='submit'>Sign in</button>
      </div>
      <div className="form-footer">
          <p>Don't you have an account? <Link to="/register">Sign up</Link> </p>
      </div>
    </form>
  </div>
  )
}

export default Login;