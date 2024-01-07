import React from 'react'

import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
  return (
    <div className='text-center bg-orange-600 text-3xl m-4 p-3'>Github Followers:{data.followers}</div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const res= await fetch('https://api.github.com/users/hiteshchoudhary')
  return res.json();
}