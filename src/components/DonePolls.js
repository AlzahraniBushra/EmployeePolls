import { connect } from "react-redux";
import formatDate from "../utils/formatDate";
import Author from "./Author";

const AnsweredPoll = (props) => {
    const { poll, authedUser, users } = props;
    const { author, optionOne, optionTwo, timestamp } = poll;
    const avatar = users[author].avatarURL;
    const name = users[author].name;

    const date = formatDate(timestamp);

    const total = optionOne.votes.length + optionTwo.votes.length;
    const userChoiceO = optionOne.votes.includes(authedUser);

    return (
        <div className="dnPolls">
            <div >
                <h1 className="center"> Would you rather </h1>
                <div
                    className="radiobuttons"
                    >
                    
                        <span />
                        {optionOne.text}

                        <p> or</p>
                     {" "}
                     
                        <span  />
                        {optionTwo.text}
                        
                </div>
                <h3 className="radiobuttons">
                    My answer: {userChoiceO ? optionOne.text : optionTwo.text}
                </h3>
                <div >
                <div className="radiobuttonsfirst" >
                    <div>Users Votes first option: {optionOne.votes.length}</div>
                    <div >This Vote Percentage:
                         
                        {
                            (Math.round((optionOne.votes.length / total) * 100))
                            }{" "}
                            %
                    </div>
                </div>
                <div className="radiobuttonssec" >
                    <div>Users Votes second option: { optionTwo.votes.length}</div>
                    <div >This Vote Percentage:
                        {
                            (Math.round((optionTwo.votes.length / total) * 100))
                        }{" "}
                        %
                    </div>
                </div>
                </div>
            </div>
            <div className="dn-author">
                <Author name={name} date={date} avatar={avatar} />
            </div>
        </div>
    );
};

const mapStateToProps = ({ authedUser, users }, { poll }) => {
    return { authedUser, poll, users };
};

export default connect(mapStateToProps)(AnsweredPoll);
