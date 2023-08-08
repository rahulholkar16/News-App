import React, { useState } from "react";
import "./Filter.scss";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { useNavigate } from "react-router-dom";

const filters = [
  {
    id: 0,
    filter_name: "Country",
    filter_options: [
      { name: "INDIA", main_query: "country=IN" },

      {
        name: "USA",
        main_query: "country=us",
      },
    ],
  },

  {
    id: 1,
    filter_name: "Compains",
    filter_options: ["APPLE", "TATA", "META", "GOOGLE"],
  },
];

const sub_option = [
  {
    name: "Business",
    query: "&category=business",
  },
  {
    name: "Technology",
    query: "&category=technology",
  },
  {
    name: "Health",
    query: "&category=health",
  },
  {
    name: "Gernal",
    query: "&category=gernal",
  },
  {
    name: "Science",
    query: "&category=science",
  },
];

const Filter = () => {
  const nevigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

  const onClickHandler = (query) => {
    nevigate(`/top-headlines/${query}`);
    setIsActive(true);
  };

  const catrgory = (query) => {
    nevigate(`/top-headlines/${query}`)
  }

  return (
    <ContentWrapper>
      <div className="filter-container">
        {filters.map((items) => (
          <li className="country-filter list" key={items.id}>
            <a>{items.filter_name}</a>
            <div className="sub-menu-1">
              <ul>
                {items.filter_options.map((item, index) => (
                  <li
                    className="list"
                    key={index}
                    onClick={() => {
                      onClickHandler(item.main_query);
                    }}
                  >
                    {item.name || item}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}

        {isActive && (
          <li className="list country-filter">
            <a>Category</a>
            <div className="sub-menu-1">
              
              <ul>
                {sub_option.map((item, index) => (
                  <li className="list" key={index} onClick={()=>{catrgory(item.query)}}>{item.name}</li>
                ))}
              </ul>
            </div>
          </li>
        )}
      </div>
    </ContentWrapper>
  );
};

export default Filter;
