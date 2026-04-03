// tailwind
import Navbar from './compotants/navbar'
import Header from './compotants/header'
import Ratings from './compotants/ratings'
import Details from './compotants/details'
import Steps from './compotants/steps'
import Pricing from './compotants/pricing'
import Ready from './compotants/ready'
import Footer from './compotants/footer'
import Container from './compotants/container'
import { ToastContainer} from 'react-toastify';

import './App.css'
import { useState } from 'react'

function App() {
  const [selectCard, setSelectedCard]=useState([])
  return (
    <>
        <div className='space-y-5 mt-4 '>
<Navbar selectCard={selectCard} setSelectedCard={setSelectedCard}></Navbar>
<Header></Header>
<Ratings></Ratings>
<Details></Details>

<Container selectCard={selectCard} setSelectedCard={setSelectedCard}></Container>


<Steps></Steps>
<Pricing></Pricing>
<Ready></Ready>
<Footer></Footer>



<ToastContainer />
   </div>
    </>
  )
}

export default App
