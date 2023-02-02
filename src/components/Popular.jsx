import {Header} from './common-components';
import ArticlesFeed from './common-components/ArticlesFeed';

function Popular() {
  return (
    <div>
      <Header></Header>
      <ArticlesFeed url="https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=h4AzKkB6b6uHAqPH6XQbZUvt8nYGZwEQ" />
    </div>
  )
}

export { Popular };