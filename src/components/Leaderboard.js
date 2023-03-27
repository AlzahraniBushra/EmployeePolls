import { connect } from 'react-redux'

const Leaderboard = (props) => {
    const {users, userIds } = props; 
    
    const addNumsToUser = (user, numQanswered, numQasked, sum) => {
        return {
            ...user,
            numQanswered,
            numQasked,
            sum,
        }
    }

    let usersArr = []
    for (let i = 0; i < userIds.length; i++) {
        const user = users[userIds[i]]

        const { questions, answers } = user
        const total = Object.keys(answers).length + questions.length

        const userstat = addNumsToUser(user, Object.keys(answers).length, questions.length, total)

        usersArr.push(userstat)
    }

    const sortedArr = usersArr.sort((a, b) => b.sum - a.sum)



    return(
        <div className="leaderboard">
            <h1 className="ledb-Head"> Leaderboard </h1>
            <ul>
                {sortedArr.map((user) => {
                    return (
                        <li key={user.id}>
                            <div >
                                <div className="board-left">
                                    <img
                                        className="board-img"
                                        src={user.avatarURL}
                                        alt={`${user.name.toLowerCase()} avatar`}

                                    />
                                    <p className="board-name">{user.name}</p>
                                </div>
                                <div className="board-right">
                                    <p className="board-stat">Questions: {user.numQasked}</p>
                                    <p className="board-stat">Answers: {user.numQanswered}</p>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )}


const mapStateToProps = ({ users }) => {
    const userIds = Object.keys(users)

    return { users, userIds }
}

export default connect(mapStateToProps)(Leaderboard)

