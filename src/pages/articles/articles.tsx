import { useParams } from 'react-router'
import LayoutPage from '../../layoutPage'
import './style.css'
import { articles } from '../../fixture/articlesContainer'

const ArticlesPage = () =>{

    let {id} = useParams()
    function geArticlesID(id:number) {
        const product = articles.find(p => p.id === id)
        return product || { id: null, title: "Заголовок не знайдено", text: "Текст не знайдено" }
    }
    const articlesID = geArticlesID(Number(id))
    return (
      <LayoutPage title='Статті'>
          <h2>{articlesID.title}</h2>
          <p>{articlesID.text}</p>
      </LayoutPage>
    )
}

export default ArticlesPage
