import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { useState } from "react";
import Poll from './Poll'


const Dashboard = (props) => {
  const { authedUser, questionIds, questions } = props


  const questionsArr = []
  for (let i = 0; i < questionIds.length; i++) {
    questionsArr.push(questions[questionIds[i]])
  }


  const [dispQuestions, setDispQuestions] = useState(
    questionsArr.filter(
    (q) =>
      !q.optionOne.votes.includes(authedUser) && !q.optionTwo.votes.includes(authedUser)
   )
  )

  const showAnswered = () => {
    setDispQuestions(
      questionsArr.filter(
      (q) =>
        q.optionOne.votes.includes(authedUser) || q.optionTwo.votes.includes(authedUser)
     )
    )
  }

  const showUnanswered = () => {
    setDispQuestions(
      questionsArr.filter(
        (q) =>
          !q.optionOne.votes.includes(authedUser) && !q.optionTwo.votes.includes(authedUser)
      )
    )
  }

  return (
    <div className="dashboard">
      <h1>
        <button
          className="UnsnsBtn"
          onClick={showUnanswered}
          
        >
          Unanswered
        </button>
        <button
          className="snsBtn"
          onClick={showAnswered}
        >
          Answered
        </button>
      </h1>

      <li>
        {dispQuestions.length > 0 ? 
          dispQuestions.map((q) => (
            <li key={q.id}>
              <Link to={`/questions/:question_${q.id}`} className="none">
                <Poll id={q.id} />
              </Link>
            </li>
          ))
         : 
          <div>
            <h className="no-polls">No New Polls</h>
            
          </div>
        }
      </li>
    </div>
  )

};

const mapStateToProps = ({ questions, authedUser }) => ({
  questionIds: Object.keys(questions).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  ),
  authedUser,
  questions,
});

export default connect(mapStateToProps)(Dashboard);
