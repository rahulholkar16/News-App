import React from 'react'
import './Filter.scss'
import ContentWrapper from '../contentWrapper/ContentWrapper'
import { useNavigate } from 'react-router-dom'

const filters = [
  {
    id: 0,
    filter_name: "Country",
    filter_options: [{name: "INDIA", main_query: 'country=IN', sub_option: [
          {
            name: "Business", query: 'top-headlines?country=IN&category=business'
          },
          {
            name: "Technology", query: 'top-headlines?country=IN&category=technology'
          },
          {
            name: "Health", query: 'top-headlines?country=IN&category=health'
          },
          {
            name: "Gernal", query: 'top-headlines?country=IN&category=gernal'
          },
          {
            name: "Science", query: 'top-headlines?country=IN&category=science'
          }
        ]
      }, 

      {name: "USA", main_query: 'country=us', sub_option: [
          {
            name: "Business", query: 'top-headlines?country=IN&category=business'
          },
          {
            name: "Technology", query: 'top-headlines?country=IN&category=technology'
          },
          {
            name: "Health", query: 'top-headlines?country=IN&category=health'
          },
          {
            name: "Gernal", query: 'top-headlines?country=IN&category=gernal'
          },
          {
            name: "Science", query: 'top-headlines?country=IN&category=science'
          }
        ]
      },

      
    ]
  },

  {
    id: 1,
    filter_name: "Compains",
    filter_options: ["APPLE", "TATA", "META", "GOOGLE"]
  }
]

const Filter = () => {

  const nevigate = useNavigate();

  const onClickHandler = (query) => {
    console.log(query);
      nevigate(`/top-headlines/${query}`);
  }

  return (
    <ContentWrapper>
      <div className='filter-container'>
        {filters.map((items) => (
          <li className='country-filter list' key={items.id}>
            <a>{items.filter_name}</a>
            <div className='sub-menu-1'>
                <ul>
                    {items.filter_options.map((item, index) => (
                      <li className='list' key={index} onClick={() => {onClickHandler(item.main_query)}}>{item.name || item}</li>
                    ))}
                </ul>
            </div>
          </li>
        ))}
      </div>
    </ContentWrapper>
    
  )
}

export default Filter