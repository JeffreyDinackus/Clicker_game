import './App.css'
import React from 'react'






function App() {
  const [count, setCount] = React.useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <p>{count}</p>
      <button onClick={handleClick}>add 1 cookie</button>


    </>
  )
}

export default App
