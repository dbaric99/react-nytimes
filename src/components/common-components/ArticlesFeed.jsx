import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Article } from '.';
import axios from "axios";
import LoaderHOC from '../LoaderHOC';
import {Spinner} from './Spinner';
import { TextInput } from "./TextInput";

function ArticlesFeed({ url, setIsLoading }) {

  const [articles, setArticles] = useState();
  const [isLoaded, setIsLoaded] = useState();
  const [error, setError] = useState();

  function fetchFeed() {
    setIsLoading(true);
    axios.get(url)
      .then((res) => {
        setArticles(res.data.results);
        setIsLoaded(true);
        setIsLoading(false);
      })
      .catch((err) => {
        if(!err.message.includes('200')) {
          setError(err.message);
        }
        setIsLoaded(true);
        setIsLoading(false);
      })
  }

  function searchArticles(val) {
    
  }

  useEffect(() => {
    fetchFeed();
  }, [])

  return (
    <div className="article-feed-wrapper">
      <TextInput handleValueChange={searchArticles}/>
      {error && <h1>Error: { error}</h1>}
      {isLoaded && <div>
        {articles.map((el) => <Article articleData={el}/>)}
      </div>}
    </div>
  )
}

ArticlesFeed.propTypes = {
  url: PropTypes.string.isRequired,
  setIsLoading: PropTypes.func
};

ArticlesFeed.defaultProps = {
  setIsLoading: () => {}
}

export default LoaderHOC(ArticlesFeed, { loader: <Spinner type="beat-loader" size={20} /> });
