import { useState } from 'react'
import "./index.css"
import Clone from "./clone.jsx"

function Home() {
  const [isLit, setLit] = useState(true);

  const clickHandler = () => {
    console.log("click handler")
    setLit(!isLit)
  }

  return (
    <div className={`room ${(isLit) ? "Lit" : "Dark"} `}>
      Screen Mode {(isLit) ? "Lit" : "Dark"}
      <br />
      <button onClick={clickHandler}>Toggle</button>
      <Clone />

    </div>
  );
}

export default Home;