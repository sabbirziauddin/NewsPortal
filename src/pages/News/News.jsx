import React from 'react';
import { useLoaderData } from 'react-router-dom';

const News = () => {
   const selectedNews = useLoaderData();
   console.log(selectedNews);
    return (
        <div>
            This is news catagory
            <p>{selectedNews?.title}</p>
        </div>
    );
};

export default News;