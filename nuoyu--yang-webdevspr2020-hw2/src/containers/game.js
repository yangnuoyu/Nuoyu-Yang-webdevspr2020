import React from "react";
import {addSetGame, addHandleGuess} from "../actions/actions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {List} from "./list"
import {Record} from "./record"
import {Status} from "./status";
import "../style.css"

class Game extends React.Component {
    constructor(props) {
        super(props);
        const size = this.props.size;
        const length = this.props.length;
        const url = "https://gist.githubusercontent.com/hunterjorgensen167/4478cd2ca4bfa2062ed0f1d2dfb08ee1/raw/cd5a597fd303088903131134c76c91b8359c47b0/word_list";
        fetch(url)
            .then(res=>res.text())
            .then((text)=>{this.props.setGame(text, size, length)});
    }

    render() {
        let guessWord = "";
        return (
            <div className={'center'}>
                <h1>Word Guessing Game</h1>
                <List list={this.props.list}/>
                <ul>
                    <li> Your guess:
                        <input type="text" onChange={(event) => {
                            guessWord = event.target.value
                        }}/>
                        <button type="submit" onClick={
                            ()=>{this.props.handleGuess(guessWord, this.props.length)}}>
                            Submit
                        </button>
                    </li>
                </ul>
                <Record history={this.props.history} length={this.props.length}/>
                <Status isWin={this.props.isWin}
                        isFinished={this.props.isFinished}
                        left={this.props.left}
                        history={this.props.history}
                />
                <Link exact="true" to={"/"}> Back </Link> <br/>
            </div>
        );
    };
}

function mapStateToProps(state) {
    const last = state.in.history.length-1;
    return {
        list: state.in.list,
        size: state.start.size,
        length: state.start.length,
        history: state.in.history,
        answer: state.in.answer,
        correct: last > -1 ? state.in.history[last].correct : -1,
        isWin:state.in.isWin,
        left: state.in.left,
        isFinished: state.in.isFinished
    };
}

let mapDispatchToProps = function(dispatch) {
    return {
        setGame: (text, size, length) => {
            dispatch(addSetGame(text, size, length))
        },
        handleGuess: (guess, length) => {
            dispatch(addHandleGuess(guess, length))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Game)
