import { RECEIVE_USERS,
         UPDATE_USERS_ANSWERS,
         UPDATE_USERS_QUESTIONS,

} from "../actions/users";


function userQuestion(state = {}, action) {
  const { id } = action;
  const { questions } = state;

  return {
    ...state,
    questions: questions.concat(id),
  }
}

function userAnswer(state = {}, action) {
  const { qid, answer } = action;
  const { answers } = state;

  return {
    ...state,
     answers: {
     ...answers,
     [qid]: answer,
    },
  };
}




export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS: {
      return {
        ...state,
        ...action.users,
      };
    }

    case UPDATE_USERS_ANSWERS: {
      const { authedUser } = action;

      return {
        ...state,
        [authedUser]: userAnswer(state[authedUser], action),
      }
    }

    case UPDATE_USERS_QUESTIONS: {
      const { authedUser } = action;

      return {
        ...state,
        [authedUser]: userQuestion(state[authedUser], action),
      }
    }

    default:
      return state;
  }
};

