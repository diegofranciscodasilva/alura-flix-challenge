import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import OverLay from '../components/Card/Modal/Overlay'
import Modal from '../components/Card/Modal'

const PaginaPadrao = () => {

  return (
    <>
      <OverLay />
      <NavBar />
      <Outlet />
      <Footer />
      <Modal />
    </>
  )
}

export default PaginaPadrao
