import React, { useState } from 'react'
import Thumbnail1 from '../images/photo.jpg'
import Postitem from '../components/PostItem';



function Posts() {
    const DUMMY_POSTS = [
        {
            id: '1',
            thumbnail: Thumbnail1,
            category: 'Education',
            title: 'This is the title of the very first post on this blog',
            desc: 'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur',
            authorID: 3
        },
        {
            id: '2',
            thumbnail: Thumbnail1,
            category: 'Business',
            title: 'Understanding the basics of business management',
            desc: 'Lorem ipsum dolor sit amet consectetur',
            authorID: 1
        },
        {
            id: '3',
            thumbnail: Thumbnail1,
            category: 'Agriculture',
            title: 'The future of farming and sustainable practices',
            desc: 'Lorem ipsum dolor sit amet consectetur',
            authorID: 2
        },
        {
            id: '4',
            thumbnail: Thumbnail1,
            category: 'Art',
            title: 'Exploring the modern art movement in the 21st century',
            desc: 'Lorem ipsum dolor sit amet consectetur',
            authorID: 4
        },
        {
            id: '5',
            thumbnail: Thumbnail1,
            category: 'Invesment',
            title: 'How to start investing for your future',
            desc: 'Lorem ipsum dolor sit amet consectetur',
            authorID: 5
        },
        {
            id: '6',
            thumbnail: Thumbnail1,
            category: 'Weather',
            title: 'Weather patterns and their effects on agriculture',
            desc: 'Lorem ipsum dolor sit amet consectetur',
            authorID: 3
        },
        {
            id: '7',
            thumbnail: Thumbnail1,
            category: 'Uncategorized',
            title: 'Random thoughts on a sunny afternoon',
            desc: 'Lorem ipsum dolor sit amet consectetur',
            authorID: 1
        },
        {
            id: '8',
            thumbnail: Thumbnail1,
            category: 'Entertainment',
            title: 'Top 10 movies to watch this year',
            desc: 'Lorem ipsum dolor sit amet consectetur',
            authorID: 4
        },
        {
            id: '9',
            thumbnail: Thumbnail1,
            category: 'Invesment',
            title: '5 key tips for smarter investment decisions',
            desc: 'Lorem ipsum dolor sit amet consectetur',
            authorID: 2
        },
        {
            id: '10',
            thumbnail: Thumbnail1,
            category: 'Education',
            title: 'Learning new skills in the digital age',
            desc: 'Lorem ipsum dolor sit amet consectetur',
            authorID: 5
        }
    ];
    const [post,setPosts]= useState(DUMMY_POSTS);
  return (
    <section className='posts'>
        <div className='container posts_container'>
        {
            post.map(({id,thumbnail,category,title,desc,authorID})=><Postitem key={id} Postid={id} thumbnail={thumbnail} category={category} title={title} desc={desc} authorID = {authorID} />)
        }
        </div>
    </section>
  )
}

export default Posts