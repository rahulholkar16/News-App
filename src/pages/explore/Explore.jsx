import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hook/useFetch'
import Carousel from '../../component/carousel/Carousel'
import Filter from '../../component/filter/Filter'


const Explore = () => {
    const { query } = useParams();
    const { data, loading } = useFetch(`everything?${query}`)
    return (
        <>
            <Filter />
            <Carousel data={data?.articles} loading={loading}/>
        </>
    )
}

export default Explore