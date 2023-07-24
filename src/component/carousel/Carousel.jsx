import React from 'react'
import './Carousel.scss'
import ContentWrapper from '../contentWrapper/ContentWrapper'

const Carousel = ({ data, loading }) => {
    console.log(data);
  return (
    <div className="Carousel">
        <ContentWrapper>
            {
                !loading ? (
                    <div className="CarouselItems">
                        {data?.map((item, index)=>{
                            return (
                                <div className="CarouselItem" key={index}>
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
                )
            }
        </ContentWrapper>
    </div>
  )
}

export default Carousel