import React from 'react'
import useFetch from '../../hook/useFetch'
import Carousel from '../../component/carousel/Carousel'

const Home = () => {
  const { data, loading } = useFetch('top-headlines?country=IN')

  return ( 
    <>
      <Carousel data={data?.articles} loading={loading}/>
    </>
  )
}

export default Home