import {SET_GAME, HANDLE_GUESS} from "../actions/actions";
import {checkCorrectChar} from "../helper";
let initialState = {
    list:[],
    answer:"",
    isWin: false,
    history:[],
    left: 4,
    isFinished: false
};

export function handleGuess(state=initialState, action) {
    switch(action.type) {
        case SET_GAME:
            if (action.size === 0) return state;
            const list = String(action.text)
                .split("\n")
                .filter((word)=> word.length === action.length)
                .sort(()=>Math.random() - 0.5)
                .slice(0, action.size);
            const answer = list[Math.floor(Math.random() * action.size)].slice();
            return Object.assign({}, state, {
                list: list,
                answer: answer,
                isWin: false,
                history:[],
                left: 4,
                isFinished: false
            });
        case HANDLE_GUESS:
            if (state.isFinished) return state;
            const correct = checkCorrectChar(action.guess, state.answer);
            if (correct === -1) {
                alert("Please provide a word with same length.");
                return state;
            }
            const history = state.history.slice();
            const left = state.left - 1;
            const isWin = correct === action.length;
            const isFinished = isWin || left === 0;
            return Object.assign({}, state, {
                history: history.concat([{guess: action.guess.slice(), correct: correct,}]),
                left: left,
                isWin: isWin,
                isFinished: isFinished
            });
        default:
            return state;
    }
}