import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Pricing from './pages/Pricing'


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
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
