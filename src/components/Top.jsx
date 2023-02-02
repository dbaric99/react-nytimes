import {ArticlesFeed, Header} from './common-components';

function Top() {
  return (
    <div>
      <Header></Header>
      <ArticlesFeed url="https://api.nytimes.com/svc/topstories/v2/home.json?api-key=h4AzKkB6b6uHAqPH6XQbZUvt8nYGZwEQ" />
    </div>
  )
}

export { Top };