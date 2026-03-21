import './App.css'
import Card from './Components/card'

function App() {
  

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center">
      {/* <h1 className="text-5xl bg-green-400 text-black p-4 mb-2 rounded-xl ">
        Tailwind Testing
      </h1> */}
      <Card username="AYUSH SINGH" btnText='Visit Instagram'/>
    </div>
  )
}

export default App
