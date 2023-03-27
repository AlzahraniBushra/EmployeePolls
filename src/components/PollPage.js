import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import Poll from './Poll'


const PollPage = (props) => {
    const { idsArr ,} = props

    const { question_id } = useParams()
    const id = question_id.replace(':question_', '')

    return (
        <div className="poll-page">
            {idsArr.includes(id) ? 
            (<Poll id={id} />)
             : 
                (<div className="not-found">
                    <h> 404 </h>
                    <p>This poll does not exist :(</p>
                </div>)
            }
        </div>
    )
}

const mapStateToProps = ({ questions }) => {
    const idsArr = Object.keys(questions)
    return {
        idsArr,
    }
}

export default connect(mapStateToProps)(PollPage)
