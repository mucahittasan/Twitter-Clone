import React from 'react'
import MenuBar from './MenuBar'
import Post from './Post'
import Sidebar from './SideBar'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PostDetail = () => {

  const params = useParams();
  const posts = useSelector(state => state.posts.posts);

  const post = posts.find(post => post.id === params.id)
  console.log(post)


  return (
    <div className='post-detail'>
      <MenuBar />
      <div className='post-detail__container'>
        {posts.map((post, index) => (
          post.id === params.id ? <Post key={index} post={post} /> : ''
        ))}
      </div>
      <Sidebar />
    </div>
  )
}

export default PostDetail