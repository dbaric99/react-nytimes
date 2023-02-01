import { useEffect, useState } from 'react';
import { Header, ArticlesFeed } from './common-components';
import axios from 'axios';

function Home() {

  const [homeArticles, setHomeArticles] = useState();

  function fetchCurrentFeed() {
    axios.get('https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=h4AzKkB6b6uHAqPH6XQbZUvt8nYGZwEQ')
      .then((res) => {
        setHomeArticles(res.data.results);
      })
      .catch((err) => {
        console.warn("Error! ", err);
      })
  }

  useEffect(()=>{
    fetchCurrentFeed();
  }, [])

  return (
    <div>
      <Header />
      <ArticlesFeed list={homeArticles} />
      Home
    </div>
  )
}

export { Home };