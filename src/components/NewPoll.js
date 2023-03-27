import { useState } from "react";
import { connect } from "react-redux";
import { handleSaveQuestion } from "../actions/questions";
import { useNavigate } from "react-router-dom";

const NewPoll = (props) => {
  const { authedUser, dispatch}= props;
  const navigate = useNavigate();
 
  const inQuestionOb = {
    author: authedUser,
    optionOneText: '',
    optionTwoText: '',
  }
  const [question, setQuestion] = useState(inQuestionOb)



  const handleInputChange = (e) => {
    const { name, value } = e.target
    setQuestion({ ...question, [name]: value })
  }

  const handleSubmit = (e) => {

    e.preventDefault();
    dispatch(handleSaveQuestion(question));
    setQuestion(inQuestionOb);
      navigate('/');
    
  }


  return (
    <div data-testid='undone-polls'>
      <h3 className="center">Would you rather?</h3>
      
      <form className="new-poll" onSubmit={handleSubmit}>
        <input
          data-testid="test-opOne"
          className="inopto"
          type="text"
          placeholder="First Option"
          name="optionOneText"
          value={question.optionOneText}
          onChange={handleInputChange}
          maxLength={1000}
        />
        <h3 className="centerr">or </h3>
        <input
          data-testid="test-opTwo"
          className="inoptt"
          type="text"
          placeholder="Second Option"
          name="optionTwoText"
          value={question.optionTwoText}
          onChange={handleInputChange}
          maxLength={1000}
        />
        
        <button data-testid="test-btn" className="submit-btn" type="submit" disabled={question.optionOneText === "" || question.optionTwoText === ""}>
          Create Poll
        </button>
      </form>
    </div>
  );
};


const mapStateToProps = ({ authedUser }) => {
  return { authedUser }
}

export default connect(mapStateToProps)(NewPoll);
