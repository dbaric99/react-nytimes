import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types';
import { generalHelper } from '../../helpers';

function Article({ articleData }) {

    const isFirstMount = useRef(true);
    const [date, setDate] = useState();

    useEffect(() => {
        if(isFirstMount.current) {
            isFirstMount.current = false;
            return;
        }
        console.log("ARTICLE: ", articleData);
        setDate(generalHelper.formatDateToLocaleString(articleData.created_date))
    }, [articleData])

  return (
    <div className="article">
        <aside className="article__image__wrapper">
            <div className="article__image__holder"></div>
            <span className="article__date">{ date }</span>
            <span className="article__author">{ articleData?.byline }</span>
        </aside>
        <div className="article__content">
            <p className="article__content__title"></p>
            <p className="article__content__description"></p>
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