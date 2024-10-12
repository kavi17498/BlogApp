import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbanail1 from "../images/photo.jpg"

function PostDetails() {
  return (
    <section className='post-detail'>
    <div className='container post-detail__container'>
      <div className='post-detail__header'>
        <PostAuthor />
        <div className='post-detail_buttons'>
        <Link to={'post/werwer/edit'} className='btn sm primary'>Edit</Link>
        <Link to={'post/werwer/delete'} className='btn sm danger'>Delete</Link>
        </div>
      </div>
      <h1>This is the post title!</h1>
      <div className='post-detail_thumbnail'>
        <img src={Thumbanail1} alt=''></img>
      </div>
      <p>
      Consectetur minim id nulla veniam occaecat commodo qui minim reprehenderit ea est. Deserunt sunt eu magna mollit reprehenderit aute commodo. Veniam veniam nostrud Lorem deserunt culpa sint laborum cupidatat occaecat.
      </p>
      <p>
        Sunt incididunt enim quis eiusmod anim quis. Proident ullamco laborum tempor voluptate laborum ullamco eu velit amet mollit laboris. Officia duis in proident ipsum do elit fugiat reprehenderit velit. Id reprehenderit culpa sit nisi duis labore. Aliquip reprehenderit pariatur veniam ut voluptate proident non. Ex enim dolore velit incididunt et aute aliqua enim elit elit aliquip nostrud quis non.
        Sit eiusmod in cillum sunt reprehenderit fugiat consequat. Eiusmod ut enim exercitation ea. Irure laborum exercitation labore proident proident sint qui ipsum amet.
        Aute deserunt culpa sit culpa adipisicing laboris dolor sint. Incididunt in sit qui sint aliquip officia culpa et Lorem eu. Voluptate irure quis labore voluptate reprehenderit exercitation tempor ea anim nulla Lorem irure. Et anim consequat eu ut ad eu officia officia sint elit. Ut culpa cupidatat enim consectetur aliqua irure dolore.
      </p>
   
    <p>
      Sint veniam duis dolore aliqua deserunt aliqua ut commodo incididunt non esse. Ipsum minim sit est ea sint est laboris in sunt incididunt. Dolore reprehenderit ea sunt non amet magna. Occaecat dolor do velit nostrud cillum minim aliqua duis aliqua velit commodo aute magna esse. Tempor amet et proident incididunt nulla do consequat id nisi qui. Reprehenderit qui dolore nulla reprehenderit non duis non est duis sint ut. Excepteur irure labore fugiat sit culpa occaecat officia commodo ea aliquip.
    </p>
    </div>
    </section>
  )
}

export default PostDetails