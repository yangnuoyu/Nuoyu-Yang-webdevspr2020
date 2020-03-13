export function checkCorrectChar(guess, answer) {
    if (guess.length !== answer.length) return -1;
    let count = 0;
    for (let i = 0; i < guess.length; i++) {
        if (guess[i] === answer[i])
            count += 1;
    }
    return count;
}