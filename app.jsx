import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <nav className="nav">
        <h2 className="brand">TReact • Juan Yanza</h2>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/counter">Counter</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
}
