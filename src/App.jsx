
import { Outlet } from 'react-router-dom'
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import NavbarComponent from './components/NavbarComponent'
function App() {


  return (
    <>
      <div className=''>
        <HeaderComponent />
        <NavbarComponent />
        <Outlet />
        {/*Footer Component*/}
      </div>

    </>
  )
}

export default App
