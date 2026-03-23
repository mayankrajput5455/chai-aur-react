import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userid} = useParams()
  return (
    <div className='bg-amber-400 p-3 text-center text-xl font-bold'>
      User: {userid}
    </div>
  )
}

export default User
