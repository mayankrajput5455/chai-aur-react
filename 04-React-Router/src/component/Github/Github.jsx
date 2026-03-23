// import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData()
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/mayankrajput5455')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data)
    //         })
    // }, [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      <h1 className='text-2xl text-center'>Name: {data.name}</h1>
      <h3 className='text-xl text-center'>Github followers: {data.followers}</h3>
      <img className='ml-143 mt-3' src={data.avatar_url} width={300} />
    </div>
  )
}

export default Github

// Loader Method is Fast

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/mayankrajput5455')
  return response.json()
}