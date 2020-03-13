import React from "react";
export class Status extends React.Component {
    render() {
        let status;
        if (this.props.isWin) {
            status = "You Win!"
        } else if (this.props.isFinished) {
            status = "You Lost!"
        } else {
            status = this.props.left + " times left."
        }
        return (
            <ul>
                <li>{status}</li><br />
            </ul>
        )
    }
}