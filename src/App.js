import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const addData = () => {};

  return (
    <div className="App">
      <p>
        name :{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </p>
      <input type="button" value="Add Data" onClick={addData} />
    </div>
  );
}

export default App;
