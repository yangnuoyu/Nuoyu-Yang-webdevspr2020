import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {TodoApp} from './reducers/reducers'
import Menu from "./containers/menu";
import Game from "./containers/game";
import About from "./containers/about"

const store = createStore(TodoApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
// ========================================
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                {/* exact makes sure to render ONLY the given component, since this behaves like a switch case logic */}
                <Route exact path={"/"} component={Menu}/>
                <Route exact path={"/menu"} component={Menu}/>
                <Route exact path={"/game"} component={Game}/>
                <Route exact path={"/about"} component={About}/>
                {/* This last case is essentially the default case.  Good to have
                if someone types in an incorrect URL.  A component can also be passed here*/}
                <Route render={() => <h1>Not found!</h1>} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);