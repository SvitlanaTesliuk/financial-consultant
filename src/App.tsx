import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { LanguageProvider } from './context/LanguageProvider'
import Home from './pages/Home/Home'
import ServiceDetails from './pages/ServiceDetails/ServiceDetails'

const ScrollToHash = () => {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) {
      return
    }

    const element = document.getElementById(
      location.hash.substring(1),
    )

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }, [location])

  return null
}
function App() {
  return (
    <BrowserRouter>
    <LanguageProvider>
    <ScrollToHash />
      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/services/:service"
          element={<ServiceDetails />}
        />

      </Routes>
      </LanguageProvider>
    </BrowserRouter>
  )
}

export default App