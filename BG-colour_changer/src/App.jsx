
import { useState } from 'react'
import './App.css'

function App() {
  let [color, setColor] = useState("white")

  return (
    <div className='w-full h-screen ' style={{ backgroundColor: color }}>
      <div className='flex flex-wrap  justify-center bottom-12 px-2 inset-x-0 fixed'>
        <div className='flex flex-wrap gap-3 bg-orange-200 justify-center px-3 py-2 rounded-3xl '>
          <button className='outline-none px-4 py-1 rounded-full text-white cursor-pointer ' style={{ backgroundColor: "red" }} onClick={() => setColor("red")}>Red</button>
          <button className='outline-none px-4 py-1 rounded-full text-white cursor-pointer' style={{ backgroundColor: "blue" }} onClick={() => setColor("blue")}>Blue</button>
          <button className='outline-none px-4 py-1 rounded-full text-white cursor-pointer' style={{ backgroundColor: "olive" }} onClick={() => setColor("olive")}>olive</button>
          <button className='outline-none px-4 py-1 rounded-full text-black cursor-pointer ' style={{ backgroundColor: "pink" }} onClick={() => setColor("pink")}>Pink</button>
          <button className='outline-none px-4 py-1 rounded-full text-white cursor-pointer' style={{ backgroundColor: "orange" }} onClick={() => setColor("orange")}>Orange</button>
          <button className='outline-none px-4 py-1 rounded-full text-white cursor-pointer' style={{ backgroundColor: "black" }} onClick={() => setColor("black")}>Black</button>
          <button className='outline-none px-4 py-1 rounded-full text-black cursor-pointer ' style={{ backgroundColor: "yellow" }} onClick={() => setColor("yellow")}>Yellow</button>
          <button className='outline-none px-4 py-1 rounded-full text-black cursor-pointer ' style={{ backgroundColor: "White" }} onClick={() => setColor("White")}>Reset</button>

        </div>
      </div>
    </div>

  )
}

export default App
