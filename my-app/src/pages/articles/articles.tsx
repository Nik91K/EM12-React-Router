import { useParams } from 'react-router'
import LayoutPage from '../../layoutPage'
import './style.css'
import { articles } from '../../fixture/articlesContainer'

const ArticlesPage = () =>{

    let {id} = useParams()
    function geArticlesID(id:number) {
        const product = articles.find(p => p.id === id)
        return product || { id: null, title: "Title not found" }
    }
    const articlesID = geArticlesID(Number(id))
    return (
      <LayoutPage title='Статті'>
          <h2>Статті</h2>
          <h2>{articlesID.title}</h2>
      </LayoutPage>
    )
}

export default ArticlesPage