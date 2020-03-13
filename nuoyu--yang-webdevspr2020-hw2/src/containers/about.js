import React from "react";
import {Link} from "react-router-dom";

export default class About extends React.Component {
    render() {
        return (
            <div>
                <h1>Word Guessing Game</h1>
                <p>
                    The goal of the game is to require the player to correctly guess a
                    password from a list of same length words.
                </p>
                <p>
                    The player has only 4 guesses and on each incorrect guess the computer
                    will indicate how many letter positions are correct.
                </p>
                <p>
                    For example, if the password is DANCE and the player guesses DENSE,
                    the game will indicate that 4 out of 5 positions are correct (D_NCE).
                    Likewise, if the password is HOPEFUL and the player guesses DANCING,
                    the game will report 0/7 because while some of the letters match,
                    they're in the wrong position.  The view should maintain both a history
                    of the user’s input as well as a history of how well they did in previous
                    sections.
                </p>
                <p>
                    Ask the player for a difficulty (very easy, easy, average, hard, very hard),
                    then present the player with 5 to 15 words of the same length. The length can be 4 to 15 letters.
                    More words and letters make for a harder puzzle. The player then has 4 guesses,
                    and on each incorrect guess indicate the number of correct positions.
                </p>
                <br />
                <Link exact="true" to={"/"}> Back </Link> <br/>
            </div>
        );
    }
}