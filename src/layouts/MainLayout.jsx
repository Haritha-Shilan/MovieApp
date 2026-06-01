
import AppNavbar from '../components/AppNavbar'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <>
    <AppNavbar/>
    <Outlet/>
    </>
  )
}

export default MainLayout