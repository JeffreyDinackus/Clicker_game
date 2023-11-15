import './App.css'
import React from 'react'






function App() {
  const [TenButtonTrue, setTenButtonTrue] = React.useState(true);

  const [count, setCount] = React.useState(0);



  function handleClick(num) {
    setCount(count + num);
  }
  function unlock(num) {

    if (count > (num * -1 - 1)) {
      handleClick(num);

      setTenButtonTrue(false)
    }




  }


  return (
    <>
      <div className='flex flex-row'>
        <p className='text-3xl basis-1/4 text-red-800'>{count} Cookies!</p>
        <button className="m-5 basis-1/2" onClick={() => handleClick(1)}>add 1 cookie</button>

      </div >
      <div className="flex flex-row">
        {TenButtonTrue ? <p onClick={() => unlock(-1)}>click to spend 10 cookies and unlock a +10 button</p> : <button onClick={() => handleClick(10)}>Add 10 cookies</button>};


      </div>



    </>
  )
}

export default App
