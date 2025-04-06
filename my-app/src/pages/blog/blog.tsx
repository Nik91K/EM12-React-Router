import LayoutPage from '../../layoutPage'
import './style.css'
import { articles } from '../../fixture/articlesContainer'

const BlogPage = () =>{
  return (
    <LayoutPage title='Блог'>
        <div className='blog-content'>
         {articles.map((article) => (
           <div>
              <a href={`/Articles/${article.id}`}>{article.title}</a>
           </div>
         ))}
        </div>
    </LayoutPage>
  )
}

export default BlogPage
