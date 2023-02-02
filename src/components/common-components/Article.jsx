import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { generalHelper } from "../../helpers";
import defaultImage from "../../assets/images/nytt.png";

function Article({ articleData }) {
  const [mediaUrl, setMediaUrl] = useState();
  const [date, setDate] = useState();

  function handleArticleClick() {
    window.open(articleData.url, "_blank", "noreferrer");
  }

  useEffect(() => {
    setMediaUrl(
      articleData?.multimedia?.[1]?.url ||
        articleData?.media?.[0]?.["media-metadata"]?.[1]?.url ||
        defaultImage
    );
    setDate(generalHelper.formatDateToLocaleString(articleData.created_date));
  }, []);

  return (
    <div className="article layout-spacing">
      <aside className="article__image__wrapper">
        <div
          className="article__image__holder"
          style={{
            backgroundImage: `url(${mediaUrl})`,
            width: "200px",
            height: "100px",
          }}
        ></div>
      </aside>
      <div className="article__content">
        <p className="article__content__title" onClick={handleArticleClick}>
          {articleData?.title}
        </p>
        <p className="article__content__description">{articleData?.abstract}</p>

        <div className="article__image__details">
        <span className="article__date">
          {date !== 'Invalid Date' ? date : ''}
        </span>
        <span className="article__author">{articleData?.byline}</span>
      </div>
      </div>
    </div>
  );
}

Article.propTypes = {
  articleData: PropTypes.object,
};

Article.defaultProps = {
  articleData: "",
};

export { Article };
