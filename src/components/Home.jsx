import { Header, ArticlesFeed } from './common-components';

function Home() {
  return (
    <div>
      <Header />
      <ArticlesFeed url="https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=h4AzKkB6b6uHAqPH6XQbZUvt8nYGZwEQ"/>
    </div>
  )
}

export { Home };