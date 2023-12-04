import React, { useContext, useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { UserContext } from '../UserContext'





function Header() {

  const {setUserInfo, userInfo} = useContext(UserContext);

  useEffect(() => {
    fetch('https://blog-backend-0it9.onrender.com/profile', {
      credentials: 'include',
    }).then (response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      })
    })
  }, [])

  function logout() {
    fetch('https://blog-backend-0it9.onrender.com/logout', {
      credentials: 'include',
      method: 'POST'
    });

    setUserInfo(null);
    console.log("after logout")
  };

  const username = userInfo?.username;
  console.log(username)
  if (!username) {
    return (<Navigate to={'/login'}/>)
  }

  return (
    <header>
    <Link to='/' className='logo'> <span style={{color: "red"}}>Gamer</span>Post</Link>
    
    <nav>
      {username && (
        <>
          <Link to="/create">Create new post</Link>
          <a onClick={logout}>Logout</a>
        </>
      )}

    </nav>
  </header>
  )
}

export default Header