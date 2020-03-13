import React from "react";
export class Record extends React.Component {
    render() {
        return (
            <ul>
                {this.props.history.map((step, move) => {
                    return (
                        <li key={move}>
                            User input: {step.guess}<br/>
                            {step.correct} / {this.props.length} correct<br/>
                        </li>
                    )
                })}
            </ul>
        )
    }
}