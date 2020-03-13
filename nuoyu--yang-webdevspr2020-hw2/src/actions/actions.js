export const SET_GAME = "SET_GAME";
export const SET_DIFFICULTY = "SET_DIFFICULTY";
export const HANDLE_GUESS = "HANDLE_GUESS";


export function addSetDifficulty(difficulty) {
    return { type: SET_DIFFICULTY, difficulty: difficulty }
}
export function addSetGame(text, size, length) {
    return { type: SET_GAME, text: text, length: length, size: size}
}
export function addHandleGuess(guess, length) {
    return { type: HANDLE_GUESS , guess: guess, length: length}
}