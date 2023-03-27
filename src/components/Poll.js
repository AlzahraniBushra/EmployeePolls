import { connect } from 'react-redux'
import DonePolls from './DonePolls'
import UnDonePolls from './UnDonePolls'

const Poll = (props) => {
    const { authedUser, poll } = props
    const { optionOne, optionTwo } = poll

    const answered = optionTwo.votes.includes(authedUser) || optionOne.votes.includes(authedUser)

    

    return (
        <div >
            {answered ? <DonePolls poll={poll} /> : <UnDonePolls poll={poll} />}
        </div>
    )
}

const mapStateToProps = ({ authedUser, questions }, { id }) => {
    const poll = questions[id]
    return { authedUser, poll }
}

export default connect(mapStateToProps)(Poll)
