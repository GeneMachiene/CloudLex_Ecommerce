import React from 'react'
import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'
import { motion } from "framer-motion"
import Slider from '@mui/material/Slider';



function Demo() {
  const [count, setCount] = useState(0)
  const goLeft = () => {
    setCount(count - 100);
  }
  const goRight = () => {
    setCount(count + 100);
  }
  const handleChange = (event, newValue) => {
    setCount(newValue);
  };
  return (
    <div style={{height:'100vh', padding:'20px', boxSizing:'border-box', userSelect:'none'}}>
    <center>
      <h1>Framer Motion Demo</h1>
      <button onClick={goLeft}>◀ Left</button>
      <button onClick={goRight}>Right ▶</button><br/>
      <Slider className='slide'
        defaultValue={0}
        min={-300}
        max={300}
        value={count}
        color='secondary'
        valueLabelDisplay="auto"
        onChange={handleChange}
      />
      <motion.div
        className="box"
        initial={{ opacity: 1 }}
        animate={{ x: count }}
        transition={{ type: "spring" }}
      >
          
        <img src="https://freedesignfile.com/image/preview/16768/astronaut-drawing-black-and-white-clipart.png" height={150}/>
      </motion.div>
    </center>
    </div>
  )
}

export default Demo