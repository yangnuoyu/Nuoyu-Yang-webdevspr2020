import {SET_DIFFICULTY} from "../actions/actions";

const initialState = {size:0, length:0};

export function setDifficulty(state = initialState, action) {
    if (action.type !== SET_DIFFICULTY) return state;
    let size, length;
    switch(action.difficulty) {
        case "very easy":
            length = 4;
            size = 5;
            break;
        case "easy":
            length = 7;
            size = 7;
            break;
        case "average":
            length = 10;
            size = 10;
            break;
        case "hard":
            length = 13;
            size = 13;
            break;
        case "very hard":
            length = 15;
            size = 15;
            break;
        default:
            length = 0;
            size = 0;
    }
    return {
        size: size,
        length: length,
    };
}