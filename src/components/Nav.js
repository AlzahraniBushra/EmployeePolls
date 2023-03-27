import { Link } from "react-router-dom";
import LoginInfo from "./LoginInfo";
import {connect} from "react-redux";

const Nav = (props) => {
  return (
    <div>
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Leaderboard">Leaderboard</Link>
        </li>
        <li>
          <Link to="/Add">New</Link>
        </li>
      </ul>
        {!props.loading && <LoginInfo />}
    </nav>
    </div>
  );
};


const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
})

export default connect(mapStateToProps)(Nav)
