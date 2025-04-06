import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App.tsx'
import AboutUs from './pages/aboutUs/aboutUs.tsx'
import BlogPage from './pages/blog/blog.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/AboutUs' element={<AboutUs/>}/>
      <Route path='/Blog' element={<BlogPage/>}/>
    </Routes>
  </BrowserRouter>,
)
