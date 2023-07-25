import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './component/header/Header'
import Home from './pages/home page/Home'
import Detail from './pages/detail page/Detail'
import Explore from './pages/explore/Explore'
import About from './pages/about page/About'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path=':query' element = {<Explore />}/>
        <Route path='/:query/:id' element = {<Detail />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
