import { connect } from "react-redux";
import Author from "./Author";
import formatDate from "../utils/formatDate";
import { handleAnswerQuestion } from "../actions/questions";
import { updateUsersAnswers } from "../actions/users"; //هنا ليش مافي ابديت يوزر كوسشنز مثلا في اليوزر اكشن ليش بس انسرز 

const UnDonePoll = (props) => {
    const { poll, users, authedUser } = props;
    const { id, author, optionOne, optionTwo, timestamp } = poll;
    const avatar = users[author].avatarURL;
    const name = users[author].name;

    const date = formatDate(timestamp);

    const usersVote = (e) => {
        const answer = e.target.value;
        const qid = id;
        props.dispatch(handleAnswerQuestion({ authedUser, qid, answer }));
        props.dispatch(updateUsersAnswers({ authedUser, qid, answer }));
    };




    return (
        <div >
            <div className="undnPolls" >
                <h1 className="center"> Would you rather </h1>
                <div data-testid="test-radiobuttons"
                    className="radiobuttons"
                    onChange={usersVote}>
                    <div >
                        <input type="radio" name="options" value="optionOne" />
                        {optionOne.text}
                        <p> or</p>
                    </div>
                    {" "}
                    <div >
                        <input type="radio" name="options" value="optionTwo" />
                        {optionTwo.text}
                        <p> ?</p>
                    </div>

                </div>
                <div className="author" >
                    <Author name={name} date={date} avatar={avatar} />
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = ({ users, authedUser }, { poll }) => {
    return {
        users,
        poll,
        authedUser,
    };
};

export default connect(mapStateToProps)(UnDonePoll);