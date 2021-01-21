import React, {useState} from 'react'

function App() {

  const [count, setCount] = useState(0);


  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => {setCount(count + 1)}}>Add</button>
      <button onClick={() => {setCount(count - 1)}}>Sub</button>
      <h3>Hey dude I am the last change</h3>
    </div>
  )
}

export default App
