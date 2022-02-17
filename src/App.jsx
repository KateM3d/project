import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Planets from "./components/Planets";
import Facts from "./components/Facts";
import Notes from "./components/Notes";
import "./app.scss";

//general info
//planets
//facts
//your notes

const App = () => {
  return (
    <BrowserRouter>
      <nav className="nav">
        <Link to="/">
          <img
            src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGxhbmV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
            alt="img"
            width="120px"
          />
        </Link>
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/planets" className="nav-link">
          Planets
        </Link>
        <Link to="/facts" className="nav-link">
          Facts
        </Link>
        <Link to="/notes" className="nav-link">
          Notes
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/facts" element={<Facts />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
