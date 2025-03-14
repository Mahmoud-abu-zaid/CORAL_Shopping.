import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import DetailsProdect from './components/pages/DetailsProdect.jsx'
import FollowProdcts from './components/pages/FollowProdects.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/product/:id' element={<DetailsProdect/>}/>
      
    </Routes>
    <FollowProdcts/>
    <Footer/>
    </BrowserRouter>
    
  </StrictMode>,
)
