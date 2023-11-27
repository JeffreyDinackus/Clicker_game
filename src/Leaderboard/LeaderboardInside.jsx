const LeaderboardInside = (props) => (
  <li>

    <p className="text-3xl text-red-900">{props.item.name}</p>
    <p className="text-orange-300">Rank: {props.item.rank}</p>
    <p className="text-yellow-400">Score: {props.item.score}</p>

  </li>
);

export default LeaderboardInside