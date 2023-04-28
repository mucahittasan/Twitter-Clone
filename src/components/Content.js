import Post from './Post'
import TweetForm from './TweetForm'

import { useSelector } from 'react-redux';


const Content = () => {

  const posts = useSelector(state => state.posts.posts);

  return (
    <div className='content'>
      <TweetForm />
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  )
}

export default Content