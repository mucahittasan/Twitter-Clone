import { BsThreeDots } from 'react-icons/bs';
import { FaRegComment } from 'react-icons/fa';
import { AiOutlineRetweet } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { MdOutlineIosShare } from 'react-icons/md';
import {AiOutlineDelete} from 'react-icons/ai';
import {BsImage} from 'react-icons/bs'
import {BsEmojiSmile} from 'react-icons/bs'
import {TbCalendarStats} from 'react-icons/tb'

import FileBase64 from 'react-file-base64';

import { useSelector } from 'react-redux';
import { detailCheck, deletePost, commentCheck, addComment } from '../redux/post/postSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const currentUser = useSelector(state => state.users.currentUser);
    const dispatch = useDispatch();

    const [file, setFile] = useState("");
    const [text, setText] = useState("");

    const formatDate = (newDate) => {
        let today = new Date()
        let date = today.getDate() + '-' + parseInt(today.getMonth() + 1) + '-' + today.getFullYear()
        return date;
    };

    const handleSubmit = (e) => {

        const postComment = {
            id: post.id,
            article: text,
            image: file
        };

        dispatch(addComment(postComment));
        dispatch(commentCheck(post.id))

        e.preventDefault();
    }

    console.log(post);

  return (
      <div className='post'>
        <div className={`post-comment ${post.commentCheck ? "active" : ""}`}>
            <div className="post-comment__inner">
             <button className='post-comment__close' onClick={() => dispatch(commentCheck(post.id))}>X</button>
               <div className="post-comment__content">
                    <div className="image">
                        <img src={currentUser.photo} alt="" />
                    </div>
                    <form className="form">
                        <textarea value={text} onChange={(e) => setText(e.target.value)} maxLength="280" placeholder='Yanitini Tweetle'></textarea>
                        <div className="form-footer">
                            <div className="form-footer__icons">
                                <label>
                                    <BsImage />
                                    <FileBase64 multiple={false} onDone={({base64}) => setFile(base64)} />
                                </label>
                                <button>
                                    <BsEmojiSmile />
                                </button>
                                <button>
                                    <TbCalendarStats />
                                </button>
                            </div>
                            <button onClick={(e) => handleSubmit(e) }  type='submit' className='tweet-button'>Tweetle</button>
                        </div>
                    </form>
               </div>
            </div>
        </div>
        <div className="post-image">
            <img src={currentUser.photo} alt="" />
        </div>
        <div className="post-content">
            <Link to={`/post/${post.id}`}>
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
            </Link>
            <div className="post-view">
                {post.image ? 
                <img src={post.image} alt="" />
                : ""    
            }
            </div>
            <div className="post-actions">
                <button onClick={() => dispatch(commentCheck(post.id))}>
                    <FaRegComment />
                    <span>{post.comments.length}</span>
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