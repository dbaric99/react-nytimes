import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types';
import { generalHelper } from '../../helpers';

function Article({ articleData }) {

    const isFirstMount = useRef(true);
    const [date, setDate] = useState();
    const [imagePath, setImagePath] = useState({path: "", width: 0, height: 0});

    useEffect(() => {
        if(isFirstMount.current) {
            isFirstMount.current = false;
            return;
        }
        setImagePath(articleData.multimedia[0].url);
        setDate(generalHelper.formatDateToLocaleString(articleData.created_date));
    }, [articleData])

    useEffect(() => {
        console.log("IMG: ", imagePath?.path);
        console.log("FULL ARTICLE: ", articleData);
    }, [imagePath])

  return (
    <div className="article">
        <aside className="article__image__wrapper">
            <div className="article__image__holder" style={{backgroundImage: `url(${imagePath})`, width: "75px", height:"75px"}}></div>
            <span className="article__date">{ date }</span>
            <span className="article__author">{ articleData?.byline }</span>
        </aside>
        <div className="article__content">
            <p className="article__content__title">{ articleData?.title }</p>
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