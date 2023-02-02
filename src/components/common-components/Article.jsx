import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types';
import { generalHelper } from '../../helpers';
import defaultImage from '../../assets/images/nytt.png'

function Article({ articleData }) {

    function handleArticleClick() {
        window.open(articleData.url, '_blank', 'noreferrer');
    }

  return (
    <div className="article layout-spacing">
        <aside className="article__image__wrapper">
            <div className="article__image__holder" style={{backgroundImage: `url(${articleData?.multimedia?.[1]?.url || articleData?.media?.[0]?.["media-metadata"]?.[1]?.url || defaultImage})`, width: "200px", height:"100px"}}></div>
            <span className="article__date">{ generalHelper.formatDateToLocaleString(articleData.created_date) }</span>
            <span className="article__author">{ articleData?.byline }</span>
        </aside>
        <div className="article__content">
            <p className="article__content__title" onClick={handleArticleClick()}>{ articleData?.title }</p>
            <p className="article__content__description">{ articleData?.abstract }</p>
        </div>
    </div>
  )
}

Article.propTypes = {
    articleData: PropTypes.object
}

Article.defaultProps = {
    articleData: ""
}

export { Article };