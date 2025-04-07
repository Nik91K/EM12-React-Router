import LayoutPage from '../../layoutPage'
import './style.css'
import { articles } from '../../fixture/articlesContainer'

const BlogPage = () =>{
  return (
    <LayoutPage title='Блог'>
        <ol className='blog-content'>
         {articles.map((article) => (
           <li className='blog-list'>
              <a href={`/Articles/${article.id}`}>{article.title}</a>
           </li>
         ))}
        </ol>
    </LayoutPage>
  )
}

export default BlogPage
