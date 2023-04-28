import React from 'react'
import MenuBar from './MenuBar'
import Post from './Post'
import Sidebar from './SideBar'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { deletePost, commentCheck, addComment } from '../redux/post/postSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react'

import { AiOutlineArrowLeft } from "react-icons/ai"
import { BsThreeDots } from 'react-icons/bs';
import { FaRegComment } from 'react-icons/fa';
import { AiOutlineRetweet } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { MdOutlineIosShare } from 'react-icons/md';
import { AiOutlineDelete } from 'react-icons/ai';
import { BsImage } from 'react-icons/bs'
import { BsEmojiSmile } from 'react-icons/bs'
import { TbCalendarStats } from 'react-icons/tb'
import FileBase64 from 'react-file-base64';

const PostDetail = () => {
  const currentUser = useSelector(state => state.users.currentUser);
  const dispatch = useDispatch();
  const params = useParams();
  const posts = useSelector(state => state.posts.posts);


  const post = posts.find(post => post.id === params.id) ? posts.find(post => post.id === params.id) : {}
  const postComments = post.comments ? post.comments : [];

  const [file, setFile] = useState("");
  const [text, setText] = useState("");



  const formatDate = (newDate) => {
    let today = new Date()
    let date = today.getDate() + '-' + parseInt(today.getMonth() + 1) + '-' + today.getFullYear()
    return date;
  };

  const clearStates = () => {
    setText("")
    setFile("")
  }

  const handleSubmit = (e) => {

    const postComment = {
      id: post.id,
      article: text,
      image: file
    };

    dispatch(addComment(postComment));
    dispatch(commentCheck(post.id))

    clearStates()

    e.preventDefault();
  }


  return (
    <div className='post-detail-wrapper'>
      <MenuBar />
      <div className='post-detail-wrapper__container'>
        <div className="content-header">
          <Link to="/">
            <AiOutlineArrowLeft />
            <span>Tweet</span>
          </Link>
        </div>
        {posts.map((post, index) => (
          post.id === params.id ? <Post key={index} post={post} /> : ''
        ))}
        <div className="post-comments">
          <h2 className='comments-header'>Comments</h2>

          <div className="post-comments__container">
            {postComments.map(comment => (
              <div className='post'>
                <div className="post-comment">
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
                              <FileBase64 multiple={false} onDone={({ base64 }) => setFile(base64)} />
                            </label>
                            <button>
                              <BsEmojiSmile />
                            </button>
                            <button>
                              <TbCalendarStats />
                            </button>
                          </div>
                          <button onClick={(e) => handleSubmit(e)} type='submit' className='tweet-button'>Tweetle</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="post-image">
                  <img src={currentUser.photo} alt="" />
                </div>
                <div className="post-content">
                  <div className='post-header'>
                    <div className="post-header__info">
                      <a href="/">{currentUser.name}</a>
                      <div className='post-header__info-content'>
                        <div className='username'>{currentUser.username}</div>
                        <span>.</span>
                        <div className="time">{formatDate(post.createdAt)}</div>
                      </div>
                    </div>
                    <button /*onClick={() => dispatch(detailCheck(post))} */>
                      <BsThreeDots className='profile-dot' />
                    </button>
                    <div className="post-detail">
                      <button onClick={() => dispatch(deletePost(post.id))}>
                        <span>Delete post</span>
                        <AiOutlineDelete />
                      </button>
                    </div>
                  </div>
                  <Link to={`/post/${comment.id}`}>
                    <div className="post-text">
                      {comment.article}
                    </div>
                  </Link>
                  <div className="post-view">
                    {comment.image ?
                      <img src={comment.image} alt="" />
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
            ))}
          </div>
        </div>
      </div>
      <Sidebar />
    </div>
  )
}

export default PostDetail