import React from "react";
export class List extends React.Component {
    render() {
        const printout = this.props.list.map((word, idx) => {
            return (
                <li key={idx}> {word} </li>
            );
        });
        return (
            <ul>
                <li>Word List:</li><br />
                {printout}
            </ul>
        )
    }
}