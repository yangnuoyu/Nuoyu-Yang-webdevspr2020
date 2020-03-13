import {combineReducers} from "redux";
import {handleGuess} from "./handleGuess"
import {setDifficulty} from "./setDifficulty";

export const TodoApp = combineReducers({start: setDifficulty, in: handleGuess});