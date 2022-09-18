import { BsThreeDots } from 'react-icons/bs';
import { FaRegComment } from 'react-icons/fa';
import { AiOutlineRetweet } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { MdOutlineIosShare } from 'react-icons/md';
import {AiOutlineDelete} from 'react-icons/ai';

import { useSelector } from 'react-redux';
import { detailCheck, deletePost } from '../redux/post/postSlice';
import { useDispatch } from 'react-redux';

const Post = ({post}) => {
    const currentUser = useSelector(state => state.users.currentUser);
    const dispatch = useDispatch();

    const formatDate = (newDate) => {
        let today = new Date()
        let date = today.getDate() + '-' + parseInt(today.getMonth() + 1) + '-' + today.getFullYear()
        return date
    };


  return (
      <div className='post'>
        <div className="post-image">
            <img src={currentUser.photo} alt="" />
        </div>
        <div className="post-content">
            <div className={`post-header ${post.detailCheck ? "active" : ""}`}>
                <div className="post-header__info">
                    <a href="/">{currentUser.name}</a>
                    <div className='post-header__info-content'>
                        <div className='username'>{currentUser.username}</div>
                        <span>.</span>
                        <div className="time">{formatDate(post.createdAt)}</div>
                    </div>
                </div>
                <button onClick={() => dispatch(detailCheck(post.id))}>
                    <BsThreeDots className='profile-dot' />
                </button>
                <div className="post-detail">
                    <button onClick={() => dispatch(deletePost(post.id))}>
                        <span>Delete post</span>
                        <AiOutlineDelete />
                    </button>
                </div>
            </div>
            <div className="post-text">
                {post.article}
            </div>
            <div className="post-view">
                {post.image ? 
                <img src={post.image} alt="" />
                : ""    
            }
            </div>
            <div className="post-actions">
                <button>
                    <FaRegComment />
                    <span>0</span>
                </button>
                <button>
                    <AiOutlineRetweet />
                    <span>0</span>
                </button>
                <button >
                    <AiOutlineHeart />
                    <span>0</span>
                </button>
                <button>
                    <MdOutlineIosShare />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Post