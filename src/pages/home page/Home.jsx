import React from 'react'
import useFetch from '../../hook/useFetch'
import Carousel from '../../component/carousel/Carousel'

const Home = () => {
  const { data, loading } = useFetch('top-headlines?country=IN')
  const DATA = data?.articles.filter(item => item.urlToImage != null)
  return ( 
    <>
      <Carousel data={DATA} loading={loading}/>
    </>
  )
}

export default Home