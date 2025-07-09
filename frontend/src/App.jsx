import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="p-8 bg-blue-500 text-white">
      <h1 className="text-2xl font-bold">Tailwind Test</h1>
    </div>
    </>
  )
}

export default App
