import React from 'react'
import { useLocation } from 'react-router-dom'
import './User-Home.css'

function UserHome() {
  const location=useLocation()
  return (
    <div className='user-homepage'>
      <h1>Hello {location.state.id}👋</h1>
    </div>
  )
}

export default UserHome
