// You can put this into index.js to demo it!

import React from 'react';
import ReactDOM from 'react-dom';


class Todos extends React.Component {
  // PROPS from the parent are first pass
  // down from the parent.  In super,
  // a new attribute (this.props = props)
  // is set, so props are accessible elsewhere in the
  // component
  constructor(props) {
    super(props);
    this.state = {
      items: props.items
    };
  }

  render() {
    return (
      <div>
      <h2>My ToDo List:</h2>
    <ol>
    {/* NOTE: outside of the constructor, props are accesible anywhere in the component*/ }
    {/* so this can ALSO BE this.props.items.map... */ }
    {this.state.items.map(item => (
      <li key={item.id}>
      <label>
      <input type="checkbox" disabled readOnly checked={item.done} />
    <span className={item.done ? "done" : ""}>{item.text}</span>
      </label>
      </li>
    ))}
  </ol>
    </div>
  )
  }
}

class App extends React.Component {

  render() {
    let itemsList = [
      { text: "Learn JavaScript", done: false },
      { text: "Learn React", done: false },
      { text: "Play around in JSFiddle", done: true },
      { text: "Build something awesome", done: true }
    ];

    // NOTE: 'items' is an argument, and itemsList is an argument
    // passed into it.
    // You can think of the attribute list as a functional argument
    // You can add other arguments, such as
    // banana={"yellow"} or whatever
    // and it's up to the child component to do whatever it
    // wants with it
    return (<Todos items={itemsList} ></Todos>);
    // Another common way to view this is as an object getting passed
    // into the tag.  So this also often written as:
    // const arg = {banana: 'yellow,
    //              items: itemsList}
    // return (<Todos {...itemsList} ></Todos>);
    // (do you recognize what the ... is doing above?)
  }

}


ReactDOM.render(<App />, document.querySelector("#root"))
