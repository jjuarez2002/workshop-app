import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Main, Landing } from "./pages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/main/*" element={<Main />} />
        <Route path="/*" element={<Landing />} />
      </Routes>
    </Router>
  );
};

export default App;
