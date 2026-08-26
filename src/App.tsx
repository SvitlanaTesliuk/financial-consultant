import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import ServiceDetails from './pages/ServiceDetails/ServiceDetails'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/services/:service"
          element={<ServiceDetails />}
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App