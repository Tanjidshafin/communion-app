import { Route, Routes } from "react-router"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Events from "./pages/Events"
function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </>
  )
}

export default App
