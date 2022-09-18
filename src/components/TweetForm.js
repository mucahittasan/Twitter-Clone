import {BsImage} from 'react-icons/bs'
import {BsEmojiSmile} from 'react-icons/bs'
import {TbCalendarStats} from 'react-icons/tb'

import { createPost } from '../redux/post/postSlice'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import FileBase64 from 'react-file-base64';
import { nanoid } from 'nanoid';


const TweetForm = () => {

    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.users.currentUser)
    const [article, setArticle] = useState('');
    const [file, setFile] = useState(null)


    const clearForm = () => {
        setArticle('')
        setFile(null)
    }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const post = {
        id: nanoid(),
        article: article,
        image: file,
        detailCheck: false,
        likeCheck: false,
        likeCount: 0,
    }

    dispatch(createPost(post))
    clearForm();
  }


  return (
    <>
    <div className="tweet-header">
        <h2>Anasayfa</h2>
    </div>
    <div className='tweet-form'>
        <form>
            <div className="form-input">
                <img src={currentUser.photo} alt="" />
                <input max={20} onChange={(e) => setArticle(e.target.value)} value={article} type="text" placeholder="Neler oluyor?" />
            </div>
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
    </>
    
  )
}

export default TweetForm