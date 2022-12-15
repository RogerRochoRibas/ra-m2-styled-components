import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Text } from './components/atoms'
import { Body } from './components/layout'

function App() {
  return (
    <Router className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Body>
              <Text as="h1">Hola a todos</Text>
              <Text>Buenas tardes</Text>
              <ul>
                <Text as="li">A</Text>
                <Text as="li">B</Text>
                <Text as="li">C</Text>
              </ul>
            </Body>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
