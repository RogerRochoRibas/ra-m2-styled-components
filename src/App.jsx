import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Body } from './components/layout'
import Buscador from './pages/Buscador'

function App() {
  return (
    <Router className="App">
      <Body>
      <Routes>
        <Route
          path="/"
          element={
            <Buscador />
          }
        />
      </Routes>
      </Body>
    </Router>
  )
}

export default App
