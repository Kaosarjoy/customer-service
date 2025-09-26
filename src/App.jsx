
import './App.css'
import Banner from './component/Banner/Banner'
import CustomerTickets from './component/CustomerTickets/CustomerTickets'
import Footer from './component/Footer/Footer'
import Navbar from './component/Navbar/Navbar'

 import { ToastContainer,  } from 'react-toastify';

function App() {
    
  return (
    <>
     <Navbar></Navbar>
     <Banner></Banner>
     <CustomerTickets></CustomerTickets>
     
     <Footer></Footer>
     <ToastContainer />
    </>
  )
}

export default App
