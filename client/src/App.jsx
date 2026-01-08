import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Feed from './pages/Feed.jsx'
import Messages from './pages/Messages.jsx'
import ChatBox from './pages/ChatBox.jsx'
import Connection from './pages/Connection.jsx'
import Discover from './pages/Discover.jsx'
import Profile from './pages/Profile.jsx'
import CreatePost from './pages/CreatePost.jsx'

const App = () => {
  return (
    <>
      <Routes>
        {/* Define your routes here */}
        <Route path='/' element={<Login />}>
          <Route index element={<Feed />} />
          <Route path='messages' element={<Messages />} />
          <Route path='messages/:userId' element={<ChatBox />} />
          <Route path='connections' element={<Connection />} />
          <Route path='discover' element={<Discover />} />
          <Route path='profile' element={<Profile />} />
          <Route path='profile/:profileId' element={<Profile />} />
          <Route path='create-post' element={<CreatePost />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
