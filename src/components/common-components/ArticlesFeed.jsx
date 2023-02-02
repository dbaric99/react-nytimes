import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Article } from '.';
import axios from "axios";
import { Spinner } from "react-bootstrap";

function ArticlesFeed({ url }) {

  const [articles, setArticles] = useState();
  const [isLoaded, setIsLoaded] = useState();
  const [error, setError] = useState();

  function fetchFeed() {
    axios.get(url)
      .then((res) => {
        setArticles(res.data.results);
        setIsLoaded(true);
      })
      .catch((err) => {
        if(!err.message.includes('200')) {
          setError(err.message);
        }
        setIsLoaded(true);
      })
  }

  useEffect(() => {
    fetchFeed();
  }, [])

  if(error) {
    console.log("USLO ERR");
    return <h1>Error: {error}</h1>;
  } else if(!isLoaded) {
    console.log("USLO LOAD");
    return <Spinner />;
  } else {
    console.log("USLO DATA: ", articles);
    return (
      <div>
        {articles.map((el) => <Article articleData={el}/>)}
      </div>
    );
  }
}

ArticlesFeed.propTypes = {
  url: PropTypes.string.isRequired
};

export { ArticlesFeed };
