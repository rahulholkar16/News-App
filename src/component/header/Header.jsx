import React, { useEffect, useState } from 'react'
import './Header.scss'
import ContentWrapper from '../contentWrapper/ContentWrapper'
import { useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
  const [ show, setShow ] = useState('top');
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const nevigate = useNavigate()
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location])

  const conrolNavbar = () => {
    if(window.scrollY > 200){
      if(window.scrollY > lastScrollY) {
          setShow("hide")
      }else{
          setShow("show")
      }
    }else {
        setShow("top")
    }
    setLastScrollY(window.scrollY);
  }

  useEffect(()=>{
    window.addEventListener("scroll", conrolNavbar)
    return ()=>{
        window.removeEventListener("scroll", conrolNavbar)
    }
  }, [lastScrollY])

  return (
    <header className={`header ${show}`}>
      <ContentWrapper>
        <div className="logo">
          <h1>NEWS APP</h1>
        </div>

        <ul className='menuItems'>
          <li className="menuItem" onClick={()=>nevigate('/')}>Home</li>
          <li className="menuItem" onClick={()=> nevigate(`q=all&sortBy=popularity`)}>All</li>
          <li className="menuItem" onClick={()=>nevigate('/about')}>About</li>
        </ul>
      </ContentWrapper>
    </header>
  )
}

export default Header