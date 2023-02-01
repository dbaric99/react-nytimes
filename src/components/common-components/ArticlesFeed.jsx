import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {Article} from '.';

function ArticlesFeed({ list }) {

  useEffect(() => {
    
  }, [list]);

  return (
    <div>
      <Article articleData={list[0]}/>
    </div>
  );
}

ArticlesFeed.propTypes = {
  list: PropTypes.array,
};

ArticlesFeed.defaultProps = {
  list: [],
};

export { ArticlesFeed };
