
import { Outlet } from 'react-router-dom'
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import NavbarComponent from './components/NavbarComponent'
import CategoryComponents from './components/CategoryComponents'

import axios from 'axios'
import FooterComponent from './components/FooterComponent'


axios.defaults.baseURL = 'https://dummyjson.com'


function App() {


  return (
    <>
      <div className=''>
        <HeaderComponent />
        <NavbarComponent />
        <CategoryComponents />
        <Outlet />
        <FooterComponent />
      </div>

    </>
  )
}

export default App
