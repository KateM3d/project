import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [services, setServises] = useState(true);

  const handleSet = () => {
    setServises(!services);
  };
  return (
    <div className="App">
      <p> {services} </p> <button onClick={() => handleSet()}> click </button>
      {services ? (
        ""
      ) : (
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      )}
    </div>
  );
}

export default App;
