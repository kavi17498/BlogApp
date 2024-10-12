import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../images/girl.jpg'

function PostAuthor() {
  return (
    <Link to={'/posts/users/sdfsf'} className='post_author'>
      <div className='post__author-avatar'>
      <img src={Avatar} alt='post' />
      </div>
      <div className='post__author-details'>
      <h5>By: Ernest Achiever</h5>
      <small>Just Now</small>

      </div>
    </Link>
  )
}

export default PostAuthor