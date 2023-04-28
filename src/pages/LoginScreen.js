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
              <Link to="/register"> Sign up with email</Link>
            </button>
            <p className='signup-paragraph'>
              By signing up, you agree to the <a>Terms of Service</a> and <a>Privacy Policy</a>, including <a>Cookie Use</a>.
            </p>

            <div className="signin">
              <p>Already have an account?</p>
              <button>
                <Link to="/login">Sign in</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="login-footer">
        <a>About</a>
        <a>Help Center</a>
        <a>Terms of Service</a>
        <a>Cookie Policy</a>
        <a>Imprint</a>
        <a>Accessbility</a>
        <a>Ads Info</a>
        <a>Blog</a>
        <a>Status</a>
        <a>Careers</a>
        <a>Brand Resources</a>
        <a>Advertising</a>
        <a>Marketing</a>
        <a>Twitter for Business</a>
        <a>Developers</a>
        <a>Directory</a>
        <a>Settings</a>
        <a>© 2022 Twitter, Inc.</a>
      </div>
    </div>
  )
}

export default Login