import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Pricing from './pages/Pricing'
import Customer from './pages/Customer'
import Resource from './pages/Resource'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={
            <>
              <Hero />
              <Footer />
            </>
          } />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/customers' element={<Customer />} />
          <Route path='/resources' element={<Resource />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
