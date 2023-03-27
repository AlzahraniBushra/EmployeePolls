import {
    _saveQuestion,
    _saveQuestionAnswer,
} from "../utils/_DATA";
import { _getInitialData } from "../utils/api"; 
import "@testing-library/jest-dom/extend-expect";


describe("_getInitialData", () => {
    test("returns users and questions", async () => {
        const { users, questions } = await _getInitialData();

        expect(Object.keys(users).length === 4 && Object.keys(questions).length === 6).toBe(true);
    });
});




describe("_saveQuestion",() =>{
    test("save the questions, the author,and the two options", async()=> {

        const testQuestion ={
            author: "name of the author",
            optionOneText: "first option",
            optionTwoText: "second option",
        }

        const actual = await _saveQuestion(testQuestion);
        const { author, optionOne, optionTwo} = actual;
        
        expect(author).toEqual("name of the author")
        expect(optionOne.text).toEqual("first option")
        expect(optionTwo.text).toEqual("second option")
    })
});

// eslint-disable-next-line jest/no-identical-title
describe("_saveQuestion", () => {
    test("display an error when its wrong input", async () => {
        const mockQ = {
            author: null,
            optionOneText: null,
            optionTwoText: null,
        };

        await expect(_saveQuestion(mockQ)).rejects.toEqual(
            "Please provide optionOneText, optionTwoText, and author"
        );
    });
});



describe("_saveQuestionAnswer", () => {
    test("returns the saved answer with all its belong data", async () => {
        const mockAns = {
            authedUser: "sarahedo",
            qid: "am8ehyc8byjqgar0jgpub9",
            answer: "optionTwo",
        };

        const { users, questions } = await _saveQuestionAnswer(mockAns);

        expect(users[mockAns.authedUser].answers[mockAns.qid] === mockAns.answer).toBe(true);
        expect(questions[mockAns.qid][mockAns.answer].votes.includes(mockAns.authedUser)).toBe(true);
    });
});

// eslint-disable-next-line jest/no-identical-title
describe("_saveQuestionAnswer", () => {
    test("display an error when its wrong input", async () => {
        const mockAnswer = {
            authedUser: 'optionOne',
            qid: null,
            answer: null,
        };

        await expect(_saveQuestionAnswer(mockAnswer)).rejects.toEqual(
            "Please provide authedUser, qid, and answer"
        );
    });
});
