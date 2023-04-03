import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SpecificCatagories from "../../Shared/SpecificCatagories/SpecificCatagories";

const Home = () => {
  const allNews = useLoaderData();
  // const firstLoad = allNews.slice(0, 9);
  // const [newsPaper, setNews] = useState([firstLoad]);
  // console.log(newsPaper);
  // useEffect(() => {
  //   function handleScroll() {
  //     if (
  //       window.innerHeight + window.scrollY >= document.body.offsetHeight &&
  //       newsPaper < allNews.length
  //     ) {
  //       setNews(allNews);
  //     }
  //   }
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [newsPaper, allNews.length]);
  return (
    <div>
      <h3>
        {" "}
        <span className="text-primary"> {allNews.length}</span> News in this
        page
      </h3>
      {
        allNews.map((news) => (
          <SpecificCatagories key={news._id} news={news}></SpecificCatagories>
        ))

        /* {newsPaper.map((n) => (
        <SpecificCatagories key={n._id} news={n}></SpecificCatagories>
      ))} */
      }
    </div>
  );
};

export default Home;
