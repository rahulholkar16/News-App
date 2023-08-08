import React from 'react'
import './Carousel.scss'
import ContentWrapper from '../contentWrapper/ContentWrapper'
import { useNavigate } from 'react-router-dom'

const Carousel = ({ data, loading }) => {
    const nevigate = useNavigate();
  return (
    <div className="Carousel">
        <ContentWrapper>
            {!loading ? (
                    <div className="CarouselItems">
                        {data?.map((item, index)=>{
                            return (
                                <div className="CarouselItem" key={index} onClick={() => nevigate(`/${item?.title}/${index}`)}>
                                    <div className="posterBlock">
                                        <img src={item?.urlToImage} />
                                    </div>
                                    <div className="textBlock">
                                        <div className="titel">{item?.title}</div>
                                        <div className='description'>{item?.description}</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                ) : ( 
                    <div>
                        <h1>Hello</h1>
                    </div>
                )}
        </ContentWrapper>
    </div>
  )
}

export default Carousel