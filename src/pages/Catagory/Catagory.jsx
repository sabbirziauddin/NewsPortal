import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SpecificCatagories from '../../Shared/SpecificCatagories/SpecificCatagories';

const Catagory = () => {
    const allNews = useLoaderData();
    console.log(allNews);
    
    return (
      <div>
        <h3>
          {" "}
          <span className="text-primary">{allNews.length}</span> News has this
          catagory
        </h3>
        {allNews.map((news) => (
          <SpecificCatagories key={news._id} news={news}></SpecificCatagories>
        ))}
      </div>
    );
};

export default Catagory;