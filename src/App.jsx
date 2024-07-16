import { useState } from "react";
import "./App.css";
import MyCanvas from "./Three/MyCanvas";
import { Leva } from "leva";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Leva />
      <MyCanvas />
    </>
  );
}

export default App;
