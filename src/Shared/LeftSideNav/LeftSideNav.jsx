import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const LeftSideNav = () => {
    const [catagories,setCatagories] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:3000/catagory`)
          .then((res) => res.json())
          .then((data) =>setCatagories(data));
    },[])
    return (
      <div className=" header-container">
        {catagories.map((catagory) => (
          <p key={catagory.id}>
            <Link to={`catagory/${catagory.id}`}>{catagory.name}</Link>
          </p>
        ))}
      </div>
    );
};

export default LeftSideNav;