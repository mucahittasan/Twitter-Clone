import {BsTwitter} from 'react-icons/bs'
import {RiHome7Fill} from 'react-icons/ri'
import {FiHash} from 'react-icons/fi'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {FiMail} from 'react-icons/fi'
import {HiOutlineUser} from 'react-icons/hi'
import {HiOutlineDotsCircleHorizontal} from 'react-icons/hi'
import {BsThreeDots} from 'react-icons/bs'

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../redux/user/userSlice'

const MenuBar = () => {

  const [profile, setProfile] = useState(false);
  const dispatch = useDispatch()

  const currentUser = useSelector(state => state.users.currentUser);

  const handleLogout = () => {
    dispatch(logoutUser())
  }

  return (
    <div className='menubar'>
      <ul>
        <li>
          <a href="/" className='twitter-logo'>
            <BsTwitter />
          </a>
        </li>
        <li className='menu-item'>
          <a href="/">
            <RiHome7Fill />
            <span>Anasayfa</span>
          </a>
        </li>
        <li className='menu-item'>
          <a href="/">
            <FiHash />
            <span>Keşfet</span>
          </a>
        </li>
        <li className='menu-item'>
          <a href="/">
            <IoMdNotificationsOutline />
            <span>Bildirimler</span>
          </a>
        </li>
        <li className='menu-item'>
          <a href="/">
            <FiMail />
            <span>Mesajlar</span>
          </a>
        </li>
        <li className='menu-item'>
          <a href="/">
            <HiOutlineUser />
            <span>Profil</span>
          </a>
        </li>
        <li className='menu-item'>
          <a href="/">
            <HiOutlineDotsCircleHorizontal />
            <span>Daha fazla</span>
          </a>
        </li>
        <li className='tweet-button'>
          <button>
            Tweetle
            <svg viewBox="0 0 24 24" aria-hidden="true" class="r-jwli3a r-4qtqp9 r-yyyyoo r-1472mwg r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp"><g><path d="M8.8 7.2H5.6V3.9c0-.4-.3-.8-.8-.8s-.7.4-.7.8v3.3H.8c-.4 0-.8.3-.8.8s.3.8.8.8h3.3v3.3c0 .4.3.8.8.8s.8-.3.8-.8V8.7H9c.4 0 .8-.3.8-.8s-.5-.7-1-.7zm15-4.9v-.1h-.1c-.1 0-9.2 1.2-14.4 11.7-3.8 7.6-3.6 9.9-3.3 9.9.3.1 3.4-6.5 6.7-9.2 5.2-1.1 6.6-3.6 6.6-3.6s-1.5.2-2.1.2c-.8 0-1.4-.2-1.7-.3 1.3-1.2 2.4-1.5 3.5-1.7.9-.2 1.8-.4 3-1.2 2.2-1.6 1.9-5.5 1.8-5.7z"></path></g></svg>
          </button>
          
        </li>
      </ul>

      <div onClick={() => setProfile(!profile)} className={`profile-area ${profile ? 'active' : ''}`}>
        <div className="profile-login">
          <div className="profile-content-mobile">
            <img className='profile-image' src={currentUser.photo}/>
            <div className="profile-information">
              <span className="name">{currentUser.name}</span>
              <span className='username'>{currentUser.username}</span>
            </div>
            <BsThreeDots className='profile-dot' />
          </div>
          <Link to="/login">
            <button>Var olan bir hesap ekle</button>
          </Link>
          <button onClick={handleLogout}>
            <Link to="/login-screen">
              Cikis yap
            </Link>
          </button>
        </div>
        <div className="profile-content">
          <img className='profile-image' src={currentUser.photo} />
          <div className="profile-information">
            <span className="name">{currentUser.name}</span>
            <span className='username'>{currentUser.username}</span>
          </div>
          <BsThreeDots className='profile-dot' />
        </div>

      </div>
    </div>
  )
}

export default MenuBar