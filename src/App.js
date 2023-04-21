import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/*<Route path="/" element={<LoginForm />} />*/}
        </Routes>
      </Router>
    </>
  );
}

export default App;
