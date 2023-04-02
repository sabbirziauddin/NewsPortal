import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SpecificCatagories from '../../Shared/SpecificCatagories/SpecificCatagories';

const Home = () => {
    const allNews = useLoaderData();
    return (
        <div>
            <h3>This is home : {allNews.length} </h3>
            {allNews.map(news =><SpecificCatagories key={news._id} news={news}></SpecificCatagories>)}

        </div>
    );
};

export default Home;