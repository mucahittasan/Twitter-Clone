import { BsTwitter } from 'react-icons/bs'
import LoginBg from '../images/login-bg.png'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login-container'>
     <div className="login-content">
      <div className="login-container__left">
          <img src={LoginBg} alt="" />
        </div>
        <div className="login-container__right">
          <div className="login-logo">
            <BsTwitter />          
          </div>
          <div className="login-header">
            <h2> Happening Now</h2>
              <p>
              Join Twitter today
            </p>
          </div>
          <div className='login-area'>
            <button className='signup-button'>
              <Link to="/login"> Sign up with email</Link>
            </button>
            <p className='signup-paragraph'>
            By signing up, you agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>, including <a href="#">Cookie Use</a>.
            </p>

            <div className="signin">
              <p>Already have an account?</p>
              <button>
                <Link to="/register">Sign in</Link>
              </button>
            </div>
          </div>
        </div>
     </div>
     <div className="login-footer">
      <a href="#">About</a>
      <a href="#">Help Center</a>
      <a href="#">Terms of Service</a>
      <a href="#">Cookie Policy</a>
      <a href="#">Imprint</a>
      <a href="#">Accessbility</a>
      <a href="#">Ads Info</a>
      <a href="#">Blog</a>
      <a href="#">Status</a>
      <a href="#">Careers</a>
      <a href="#">Brand Resources</a>
      <a href="#">Advertising</a>
      <a href="#">Marketing</a>
      <a href="#">Twitter for Business</a>
      <a href="#">Developers</a>
      <a href="#">Directory</a>
      <a href="#">Settings</a>
      <a href="#">© 2022 Twitter, Inc.</a>
     </div>
    </div>
  )
}

export default Login