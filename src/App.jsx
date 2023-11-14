import './App.css'
import React from 'react'






function App() {
  const [count, setCount] = React.useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <div className='flex flex-row'>
        <p className='text-3xl basis-1/4 text-red-800'>{count} Cookies!</p>
        <button className="m-5 basis-1/2" onClick={handleClick}>add 1 cookie</button>
      </div >

    </>
  )
}

export default App
