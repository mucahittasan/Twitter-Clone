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

import { useSelector } from 'react-redux';
import { detailCheck, deletePost, commentCheck, addComment, likeCheck, likePost } from '../redux/post/postSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';


const Post = ({ post }) => {
    const currentUser = useSelector(state => state.users.currentUser);
    const dispatch = useDispatch();

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
        e.preventDefault();

        const postComment = {
            id: nanoid(),
            postId: post.id,
            actionName: "comment",
            article: text,
            image: file,
            detailCheck: false,
            likeCheck: false
        };

        dispatch(addComment(postComment));
        dispatch(commentCheck(post.id))

        clearStates()

    }

    const handleLike = (post, e) => {
        e.preventDefault();

        dispatch(likeCheck(post));
        dispatch(likePost(post))
    }

    const handleComment = (e, post) => {
        e.preventDefault();

        dispatch(commentCheck(post.id))
    }

    const handleDetail = (e, post) => {
        e.preventDefault();

        dispatch(detailCheck(post))
    }

    const handleDelete = (e, post) => {
        e.preventDefault();
        dispatch(deletePost(post.id))
    }

    return (
        <Link to={`/post/${post.id}`} className='post'>
            <div className={`post-comment ${post.commentCheck ? "active" : ""}`}>
                <div className="post-comment__inner">
                    <button className='post-comment__close' onClick={(e) => handleComment(e, post)}>X</button>
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
                <div className={`post-header ${post.detailCheck ? "active" : ""}`}>
                    <div className="post-header__info">
                        <a href="/">{currentUser.name}</a>
                        <div className='post-header__info-content'>
                            <div className='username'>{currentUser.username}</div>
                            <span>.</span>
                            <div className="time">{formatDate(post.createdAt)}</div>
                        </div>
                    </div>
                    <button onClick={(e) => handleDetail(post, e)}>
                        <BsThreeDots className='profile-dot' />
                    </button>
                    <div className="post-detail">
                        <button onClick={(e) => handleDelete(post, e)}>
                            <span>Delete post</span>
                            <AiOutlineDelete />
                        </button>
                    </div>
                </div>
                <div>
                    <div className="post-text">
                        {post.article}
                    </div>
                </div>
                <div className="post-view">
                    {post.image ?
                        <img src={post.image} alt="" />
                        : ""
                    }
                </div>
                <div className="post-actions">
                    <button onClick={(e) => handleComment(e, post)}>
                        <FaRegComment />
                        <span>{post.comments.length}</span>
                    </button>
                    <button>
                        <AiOutlineRetweet />
                        <span>0</span>
                    </button>
                    <button className={`${post.likeCheck ? 'like-active' : ""}`} onClick={(e) => handleLike(post, e)}>
                        <AiOutlineHeart />
                        <span>{post.likeCount}</span>
                    </button>
                    <button>
                        <MdOutlineIosShare />
                    </button>
                </div>
            </div>
        </Link>
    )
}

export default Post