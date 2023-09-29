import { Route, Routes } from "react-router-dom"

import NavbarSection from "./components/NavbarSection"
import HomePage from "./views/HomePage"
import ContactPage from "./views/ContactPage"
import NotFound from "./views/NotFound"

function App() {
  

  return (
    <>
      <NavbarSection />
      <Routes>
        <Route 
        path="/"
        element={<HomePage />}
        />
        <Route 
        path="/contact"
        element={<ContactPage />}
        />
        <Route 
        path="*"
        element={<NotFound />}
        />
      </Routes>
    </>
  )
}

export default App
