import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './component/header/Header'
import Home from './pages/home page/Home'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
