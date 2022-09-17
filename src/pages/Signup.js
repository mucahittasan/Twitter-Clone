import { BsTwitter } from 'react-icons/bs'
import { BiUserCircle } from 'react-icons/bi'

import FileBase64 from 'react-file-base64';
import { Link, useNavigate } from 'react-router-dom'
import {useFormik} from 'formik';
import { useState } from 'react';
import { createUser, loginUser } from '../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const Signup = () => {

  const [file, setFile] = useState(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const users = useSelector(state => state.users.users)

  const formik = useFormik({
    initialValues: {
      username: '',
      name: '',
      email: '',
      password: ''
    },
    onSubmit: (values) => {
      users?.forEach(user => {
        if(user.email === values.email || user.username === values.username) {
          alert("Username or email already using!")
        }else{
          dispatch(createUser({...values, photo: file}));
          dispatch(loginUser({...values, photo: file}));
          navigate("/")
        }
      });
    }
  });

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
              <h3>Sign up to Twitter</h3>
              <input value={formik.username} name='username' onChange={formik.handleChange} type="text" placeholder='Username'/>
              <input value={formik.name} name='name' onChange={formik.handleChange} type="text" placeholder='Name'/>
              <input value={formik.email} name='email' onChange={formik.handleChange} type="email" placeholder='Email'/>
              <input value={formik.password} name='password' onChange={formik.handleChange} type="password" min={8}  placeholder='Password'/>
              <label>
                <BiUserCircle />
                <span>Choose a photo</span>
                <FileBase64 multiple={false} onDone={({base64}) => setFile(base64)} />
              </label>
              <button type='submit'>Sign in</button>
            </div>
            <div className="form-footer">
                <p>Do you have an account? <Link to="/login">Login</Link> </p>
            </div>
          </form>
        </div>
  )
}

export default Signup