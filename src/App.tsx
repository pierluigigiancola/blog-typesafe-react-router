import { BrowserRouter, Route, Routes } from "react-router-dom"
import HSL from "./HSL"
import Layout from "./Layout"
import RBG from "./RGB"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route
            path="/rgb/:red/:green/:blue"
            element={<RBG />}
          />
          <Route
            path="/hsl/:hue/:saturation/:lightness"
            element={<HSL />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
