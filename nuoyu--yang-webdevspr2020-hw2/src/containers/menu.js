import React from "react";
import {Link} from "react-router-dom";
import {connect} from 'react-redux'
import {addSetDifficulty} from "../actions/actions";

class Menu extends React.Component {
    render() {
        let d= "";
        return (
            <div className={"center"}>
                <h1>Word Guessing Game</h1>
                <Link exact="true" to={"/about"}> Rule of the game </Link> <br/>
                <label> Choose difficulty:</label>
                <select onChange={(e)=> {d = e.target.value}}>
                    <option className="default" value="">select</option>
                    <option value="very easy">very easy</option>
                    <option value="easy">easy</option>
                    <option value="average">average</option>
                    <option value="hard">hard</option>
                    <option value="very hard">very hard</option>
                </select>
                <Link to={"/game"} onClick={(e)=>{
                    if (d === "") {
                        alert("Please select difficulty of the game!");
                        e.preventDefault();
                    } else this.props.onClick(d)}} >
                    <button type={"submit"}>Submit</button>
                </Link>
            </div>
        );
    }
}

let mapDispatchToProps = function (dispatch) {
    return {
        onClick: (difficulty) => {
            dispatch(addSetDifficulty(difficulty))
        }
    }
};

export default connect(null, mapDispatchToProps)(Menu)