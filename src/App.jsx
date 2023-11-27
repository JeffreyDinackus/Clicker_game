import './App.css'
import React from 'react'
import Leaderboard from './Leaderboard/Leaderboard.jsx'





function App() {
  const [TenButtonTrue, setTenButtonTrue] = React.useState(true);
  const [TwentyButtonTrue, setTwentyButtonTrue] = React.useState(true);

  const [count, setCount] = React.useState(0);



  function handleClick(num) {
    setCount(count + num);
  }
  function unlock(num, identifier) {

    if (count > ((num * -1) - 1) && identifier == 0) {
      handleClick(num);

      setTenButtonTrue(false)
    } else if (count > ((num * -1) - 1) && identifier == 1) {
      handleClick(num);
      setTwentyButtonTrue(false)
    }




  }
  const top = [
    {
      name: "Magic Mike",
      rank: 1,
      score: 300000
      ,
      objectID: 1,

    },
    {
      name: "The XD kid",
      rank: 2,
      score: 250000
      ,
      objectID: 2,

    },
    {
      name: "Duke",
      rank: 3,
      score: 210000,
      objectID: 3,

    }

  ]

  return (
    <>
      < Leaderboard list={top} />
      <div className='flex flex-row'>

        <p className='text-3xl basis-1/4 text-red-800'>{count} Cookies!</p>
        <button className="m-5 basis-1/2" onClick={() => handleClick(1)}>add 1 cookie</button>

      </div >
      <div className="flex flex-row">
        {TenButtonTrue ? <button onClick={() => unlock(-10, 0)}>Spend 10 cookies</button> : <button onClick={() => handleClick(10)}>Add 10 cookies</button>};
        {TwentyButtonTrue ? <button onClick={() => unlock(-20, 1)}>Spend 20 cookies</button> : <button onClick={() => handleClick(20)}>Add 20 cookies</button>};

      </div>



    </>
  )
}

export default App
