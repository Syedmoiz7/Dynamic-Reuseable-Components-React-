import { useState } from 'react'
import "./index.css"
import Clone from "./clone.jsx"

function Home() {
  const [isLit, setLit] = useState(true);

  const clickHandler = () => {
    console.log("click handler")
    setLit(!isLit)
    localStorage.setItem("class", `${isLit}`)
  }

  return (
    <div className={`room ${(isLit) ? "Lit" : "Dark"} `}>
      <div className='logo'>
      Screen Mode: {(isLit) ? "Light" : "Dark"}
      <br />
      <button onClick={clickHandler}>Toggle</button>
      </div>
      <Clone />

    </div>
  );
}

export default Home;