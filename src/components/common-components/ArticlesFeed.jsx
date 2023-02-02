import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Article } from '.';
import axios from "axios";
import LoaderHOC from '../LoaderHOC';
import {Spinner} from './Spinner';

function ArticlesFeed({ url, setIsLoading }) {

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
    return <h1>Error: {error}</h1>;
  } else if(!isLoaded) {
    return <Spinner />;
  } else {
    return (
      <div>
        {articles.map((el) => <Article articleData={el}/>)}
      </div>
    );
  }
}

ArticlesFeed.propTypes = {
  url: PropTypes.string.isRequired,
  setIsLoading: PropTypes.func
};

ArticlesFeed.defaultProps = {
  setIsLoading: () => {}
}

//export { ArticlesFeed };
export default LoaderHOC(ArticlesFeed, { loader: <Spinner type="beat-loader" size={10} message={null} /> });
