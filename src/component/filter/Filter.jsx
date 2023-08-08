import React, { useState } from "react";
import "./Filter.scss";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { useNavigate } from "react-router-dom";

const filters = [
  {
    id: 0,
    filter_name: "Country",
    filter_options: [
      { name: "CHINA", main_query: "q=china" },

      {
        name: "USA",
        main_query: "q=usa",
      },
    ],
  },

  {
    id: 1,
    filter_name: "Compains",
    filter_options: [
      { name: "APPLE", main_query: "q=apple" },
      { name: "MICROSOFT", main_query: "q=microsoft" },
      { name: "META", main_query: "q=meta" },
      { name: "GOOGLE", main_query: "q=google" },
    ],
  },
];

const sub_option = [
  {
    name: "IPL",
    query: "q=ipl",
  },
  {
    name: "BITCOIN",
    query: "q=bitcoin",
  },
  {
    name: "CRICKET",
    query: "q=cricket",
  },
  {
    name: "TECHNOLOGY",
    query: "q=technology",
  },
  {
    name: "Science",
    query: "q=science",
  },
];

const Filter = () => {
  const nevigate = useNavigate();

  const onClickHandler = (query) => {
    nevigate(`${query}`);
  };

  const catrgory = (query) => {
    nevigate(`${query}`);
  };

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

        <li className="list country-filter">
          <a>More</a>
          <div className="sub-menu-1">
            <ul>
              {sub_option.map((item, index) => (
                <li
                  className="list"
                  key={index}
                  onClick={() => {
                    catrgory(item.query);
                  }}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </li>
      </div>
    </ContentWrapper>
  );
};

export default Filter;
