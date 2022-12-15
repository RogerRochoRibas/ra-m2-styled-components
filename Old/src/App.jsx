import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages";

function App() {
  return (
    <Router className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
