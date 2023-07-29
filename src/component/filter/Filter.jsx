import React from 'react'
import './Filter.scss'
import ContentWrapper from '../contentWrapper/ContentWrapper'

const filter_option = [
  {
    filter_name: "Country",
    filter_option: ["INDIA", "USA", "RUSSIA", "CHAINA"]
  },
  {
    filter_name: "Country",
    filter_option: ["INDIA", "USA", "RUSSIA", "CHAINA"]
  }
]

const Filter = () => {
  return (
    <ContentWrapper>
      <div className='filter-container'>
        
        <li className='country-filter list'>
            <a>Country</a>
            <div className='sub-menu-1'>
                <ul>
                    <li className='list'>INDIA</li>
                    <li className='list'>USA</li>
                    <li className='list'>RUSSIA</li>
                    <li className='list'>CHAINA</li>
                </ul>
            </div>
        </li>


      </div>
    </ContentWrapper>
    
  )
}

export default Filter