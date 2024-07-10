
import { Outlet } from 'react-router-dom'
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import NavbarComponent from './components/NavbarComponent'
import axios from 'axios'
import CategoryComponents from './components/CategoryComponents'


axios.defaults.baseURL = 'https://dummyjson.com'


function App() {


  return (
    <>
      <div className=''>
        <HeaderComponent />
        <NavbarComponent />
        <CategoryComponents />
        <Outlet />
        {/*Footer Component*/}
      </div>

    </>
  )
}

export default App
