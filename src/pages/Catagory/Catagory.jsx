import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SpecificCatagories from '../../Shared/SpecificCatagories/SpecificCatagories';

const Catagory = () => {
    const allNews = useLoaderData();
    console.log(allNews);
    
    return (
      <div>
        <h3>This is home Catagory :{allNews.length}</h3>
        {allNews.map((news) => (
          <SpecificCatagories key={news._id} news={news}></SpecificCatagories>
        ))}
      </div>
    );
};

export default Catagory;