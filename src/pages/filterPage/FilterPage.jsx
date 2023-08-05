import React from 'react'
import Carousel from '../../component/carousel/Carousel'
import useFetch from '../../hook/useFetch'
import { useParams } from 'react-router-dom'

function FilterPage() {
  const {query}  = useParams();
  
  const { data, loading } = useFetch(`top-headlines?${query}`)
  console.log(data);
  
  return (
    <Carousel data={data?.articles} loading={loading}/>
  )
}

export default FilterPage