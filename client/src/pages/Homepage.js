import React, { useEffect, useState } from 'react'
import Post from '../components/Post'

export const Homepage = () => {

  const [posts, setPosts] = useState([])

  // Get all the posts from db 
  useEffect(() => {
    fetch('https://blog-backend-0it9.onrender.com/post').then(response => {
      response.json().then(posts => {
        setPosts(posts);
      });
    });

  }, [])



  return (
    <div>

       {posts.length > 0 && posts.map(posts => (
        <Post {...posts} />
       ))}

    </div>
  )
}
