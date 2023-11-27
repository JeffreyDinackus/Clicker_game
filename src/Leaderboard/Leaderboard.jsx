import LeaderboardInside from './LeaderboardInside.jsx'


function Leaderboard(props) {
  return (
    <><div className='text-5xl mb-3'>Leaderboard</div>

      <ul>
        {props.list.map((item) => (
          <LeaderboardInside key={item.objectID} item={item} />
        ))}
      </ul>

      <p className='text-5xl'>NOW GET CRACKIN</p></>
  )
}
export default Leaderboard