import './index.css'

const LeaderBoard = ({leaderBoardData}) => {
    return(
        <div className='leaderBoard'>
        <h1>LeaderBoard</h1>
        <div className='list-item'>
          <h3>Username</h3>
          <h3>Wins</h3>
          <h3>Played</h3>
        </div>
        <ul className='leaderboard-list'>
            {leaderBoardData.map(user=>(
                <li className='list-item' key={user.id}>
                    <p>{user.username}</p>
                    <p>{user.wins}</p>
                    <p>{user.played}</p>
                </li>
            ))}
        </ul>
        </div>
    )
}

export default LeaderBoard