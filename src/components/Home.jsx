import { Header } from './common-components';
import ArticlesFeed from './common-components/ArticlesFeed';

function Home() {
  return (
    <div>
      <Header />
      <ArticlesFeed url="https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=h4AzKkB6b6uHAqPH6XQbZUvt8nYGZwEQ"/>
    </div>
  )
}

export { Home };