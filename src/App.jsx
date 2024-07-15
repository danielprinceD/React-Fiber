import { useState } from "react";
import "./App.css";
import MyCanvas from "./Three/MyCanvas";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MyCanvas />
    </>
  );
}

export default App;
