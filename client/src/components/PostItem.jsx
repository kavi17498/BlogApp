import React from 'react';
import { Link } from 'react-router-dom';
import PostAuthor from './PostAuthor';

function PostItem({ Postid, thumbnail, category, title, desc, authorID }) {
  const shortDescription = desc.length > 145 ? desc.substr(0,145)+'...':desc;
  const PostTitle = title.length > 30 ? title.substr(0,30)+'...':title;

  
  return (
    <article className='post'>
      <div className='post_thumbnail'>
        <img src={thumbnail} alt={title}></img>
      </div>
      <div className='post_content'>
        <Link to={`post/${Postid}`}>
          <h3>{PostTitle}</h3>
        </Link>
        <p>{shortDescription}</p>
        <div className='post__footer'>
          <PostAuthor authorID={authorID} />
          <Link to={`/posts/categories/${category}`} className='btn category' >{category}</Link>
        </div>
      </div>
    </article>
  );
}

export default PostItem;
