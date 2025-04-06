import './index.css'

const LayoutPage = ({title, children} : {title: string, children:React.ReactNode}) =>{
    return (
        <div className="wrapper">
            <header className="header">
                <ul className='menu-ul'>
                    <li><a href="/">Головна</a></li>
                    <li><a href="/aboutUs">Про нас</a></li>
                    <li><a href="/Blog">Блоги</a></li>
                </ul>
            </header>
            <main>
                <h1>{title}</h1>
                <div className="content">
                    {children}
                </div>
            </main>
            <footer>
                <p>EM12 React Router</p>
            </footer>
        </div>
    )
}

export default LayoutPage
