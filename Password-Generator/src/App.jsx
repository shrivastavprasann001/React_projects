import { useRef } from "react"
import { useCallback, useEffect, useState } from "react"

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [CharAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState()
  // useRef
  const PasswordRef = useRef(null)  // for highlighting the selected password 

  // Optimizatiion
  const PasswordGnerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (CharAllowed) str += "!@#$%^&*()"
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass = pass + str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, CharAllowed, setPassword])

  // Copy feature Optimization
  const copyPasswordtoClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password)  //copy the password and we can paste anywhere
    PasswordRef.current?.select()  // implement the select feature using useRef
    PasswordRef.current?.setSelectionRange(0, 24) // for better optimization 
  }, [password])
  // Rerendering
  useEffect(() => {
    PasswordGnerator()
  }, [length, numberAllowed, CharAllowed, setPassword])
  return (
    <>
      <div className="max-w-lg mx-auto pb-4 mt-16 pt-4 shadow-md rounded-lg px-5 my-8 text-gray-800 bg-orange-400 ">
        <h3 className="text-black text-center font-bold text-2xl pb-4"> Password Generator </h3>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text" value={password} className="outline-none w-full py-1 px-3 font-bold" placeholder="Password" readOnly ref={PasswordRef}
          />
          <button className="outline-none bg-blue-700 font-bold text-black px-3 py-0.5 shrink-0" onClick={copyPasswordtoClipboard}> copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range" min={8} max={24} value={length} className="cursor-pointer text-xl " onChange={(e) => setLength(e.target.value)} />
            <label className="font-bold text-xl"> Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={() => setNumberAllowed((prev) => !prev)} />
            <label className="font-bold text-xl">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox" defaultChecked={CharAllowed} id="charInput" onChange={() => setCharAllowed((prev) => !prev)} />
            <label className="font-bold text-xl">Charactor</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
