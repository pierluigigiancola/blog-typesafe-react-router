import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Routes as RoutePaths } from './router'
import HSL from "./HSL"
import Layout from "./Layout"
import RBG from "./RGB"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route
            path={RoutePaths.RGB}
            element={<RBG />}
          />
          <Route
            path={RoutePaths.HSL}
            element={<HSL />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
