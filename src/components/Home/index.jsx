import { useState } from 'react'
import "./index.css"
import Clone from "./clone.jsx"
import {BsFillMoonFill, BsSunFill} from 'react-icons/bs';

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
        <div className='screen'>
      Screen Mode: {(isLit) ? "Light" : "Dark"}
        </div>
      <button onClick={clickHandler}>{(isLit) ? <BsSunFill/> : <BsFillMoonFill/>} </button>
      </div>
      <Clone />

    </div>
  );
}

export default Home;