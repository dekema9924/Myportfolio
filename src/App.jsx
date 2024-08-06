import { useEffect, useState } from "react"
import Header from "./Components/Header"
import Home from "./Components/Home/Home"
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Allprojects from "./Components/Projects/Allprojects";

function App() {
  const [isloading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <>
      {
        isloading ? <>
          <div className="flex items-center justify-center bg-[#befafd] h-screen">
            <ClimbingBoxLoader color={"#137B47"} loading={isloading} size={15} />
          </div>
        </> :
          <>
            <Header />
            <Routes>
              <Route path="/about" element={<About/>} />
              <Route path="/" element={<Home />} />
              <Route path="/allprojects" element={<Allprojects />} />

            </Routes>


          </>
      }

    </>
  )
}

export default App
