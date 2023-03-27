import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading-bar";
import NewPoll from "./NewPoll";
import Nav from "./Nav";
import { Routes, Route } from "react-router-dom";
import Leaderboard from "./Leaderboard";
import Login from "./Login";
import PollPage from "./PollPage";


const App = (props) => {
  
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, [props]);


  return (
    <Fragment>
      <LoadingBar />
      <div className="container">
        <Nav className="nav" />
        
        {props.loading === true ?   (
          <Login />):(
          
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/LeaderBoard" element={<Leaderboard/>}/>
            <Route path="/questions/:question_id" element={<PollPage />} />
            <Route path="/add" element={<NewPoll />} />
            Poll
          </Routes>
        )}
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
});

export default connect(mapStateToProps)(App);
