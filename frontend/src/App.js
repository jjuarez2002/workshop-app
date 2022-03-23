import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import { Landing, Main } from "./pages";

function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/*" element={<Landing />} />
          <Route path="/main/*" element={<Main />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
