import { useState } from "react"

function App() {
  const [color, setColor] = useState('olive')
  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-col items-center bottom-12 inset-x-0 px-2 gap-60">
        <h4 className="bg-amber-200 px-3 py-2 rounded-xl flex flex-wrap">Creator - Mayank Singh</h4>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <button className="outline-none rounded-full shadow-lg px-3 py-2" style={{backgroundColor: "red"}} onClick={() => setColor('red')}>Red</button>
          <button className="outline-none rounded-full shadow-lg px-3 py-2" style={{backgroundColor: "green"}} onClick={() => setColor('green')}>Green</button>
          <button className="outline-none rounded-full shadow-lg px-3 py-2" style={{backgroundColor: "blue"}} onClick={() => setColor('blue')}>Blue</button>
          <button className="outline-none rounded-full shadow-lg px-3 py-2" style={{backgroundColor: "yellow"}} onClick={() => setColor('yellow')}>Yellow</button>
          <button className="outline-none rounded-full shadow-lg px-3 py-2" style={{backgroundColor: "brown"}} onClick={() => setColor('Brown')}>Brown</button>
          <button className="outline-none rounded-full shadow-lg px-3 py-2" style={{backgroundColor: "cyan"}} onClick={() => setColor('cyan')}>Cyan</button>
          <button className="outline-none rounded-full shadow-lg px-3 py-2" style={{backgroundColor: "purple"}} onClick={() => setColor('purple')}>Purple</button>
          <button className="outline-none rounded-full shadow-lg px-3 py-2" style={{backgroundColor: "pink"}} onClick={() => setColor('pink')}>Pink</button>
          <button className="outline-none rounded-full shadow-lg px-3 py-2" style={{backgroundColor: "magenta"}} onClick={() => setColor('magenta')}>Magenta</button>
          <button className="outline-none rounded-full shadow-lg px-3 py-2" style={{backgroundColor: "violet"}} onClick={() => setColor('violet')}>Violet</button>
          <button className="outline-none rounded-full shadow-lg px-3 py-2" style={{backgroundColor: "orange"}} onClick={() => setColor('orange')}>Orange</button>
          <button className="outline-none rounded-full shadow-lg px-3 py-2" style={{backgroundColor: "navy"}} onClick={() => setColor('navy')}>Navy</button>
          <button className="outline-none rounded-full shadow-lg px-3 py-2" style={{backgroundColor: "gray"}} onClick={() => setColor('grey')}>Grey</button>
          <button className="outline-none rounded-full shadow-lg px-3 py-2" style={{backgroundColor: "silver"}} onClick={() => setColor('silver')}>Silver</button>
          <button className="outline-none rounded-full shadow-lg px-3 py-2" style={{backgroundColor: "maroon"}} onClick={() => setColor('maroon')}>Maroon</button>
        </div>
      </div>
    </div>
  )
}

export default App
