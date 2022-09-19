import { Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import "./components/style.css";
function App() {
  return (
    <div className="App">
      <nav className="nav">
        <h1 className="name">Lisha's Pizza</h1>
        <ul>
          <li>
            <Link className="links" to="/">
              <h4>Home</h4>
            </Link>
          </li>
          <li>
            <Link className="links" to="/menu">
              <h4>Menu</h4>
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
