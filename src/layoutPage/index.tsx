import './index.css'

const LayoutPage = ({title, children} : {title: string, children:React.ReactNode}) =>{
    return (
        <div className="wrapper">
            <header className="header">
                <ul className='menu-ul'>
                    <li><a className='menu-a' href="/">Головна</a></li>
                    <li><a className='menu-a' href="/aboutUs">Про нас</a></li>
                    <li><a className='menu-a' href="/Blog">Блоги</a></li>
                </ul>
            </header>
            <main className='layout-main'>
                <div className='layout-container'>
                    <h2 className='layout-h2'>{title}</h2>
                    <div className="content">
                        {children}
                    </div>
                </div>
            </main>
            <footer className='footer-layout'>
                <p>EM12 React Router</p>
            </footer>
        </div>
    )
}

export default LayoutPage
