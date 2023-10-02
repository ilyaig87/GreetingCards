import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Logos from "./components/Logos"
import Nav from "./components/Nav"
import GreetingCards from "./pages/GreetingCards"
import Footer from "./components/Footer"
import SponsersFooter from "./components/SponsersFooter"
import GreetingCard from "./pages/GreetingCard"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Logos />
      <Nav />
      <Routes>
        <Route
          path="/greeting-cards/:id"
          element={<GreetingCard />}
        />
        <Route
          path="/greeting-cards"
          element={<GreetingCards />}
        />
      </Routes>

      <SponsersFooter />
      <Footer />
    </BrowserRouter>
  )
}

export default App
