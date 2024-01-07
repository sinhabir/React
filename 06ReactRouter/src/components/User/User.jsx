import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams()
  return (
    <div className='text-center p-4 text-3xl bg-gray-500'>User: {userId}</div>
  )
}

export default User