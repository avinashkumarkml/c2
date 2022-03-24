import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <button
        onClick={() => setShow(show ? false : true)}
        className="toggleForm"
      >
        {/* Show text Add House or Show Rentals based on state */}
        {show ? "Add House" : "Show Data"}
      </button>
      {show ? <Rentals /> : <AddHouse />}
      {/* Show component based on state */}
      <br />
    </div>
  );
}

export default App;
