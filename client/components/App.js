import React, { Component } from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import { BrowserRouter, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionCreators';

class App extends Component {
    constructor() {
        super();
    };

    render() {
        return (
            <div>
                <Link to="/">Go to main</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/info">Go to info</Link>
                <Switch>
                    <Route exact path="/" render={() => <h1>{this.props.count}</h1>} />
                    <Route exact path="/info" render={() => <h1>v kawaii world ;)</h1>} />
                </Switch>
            </div>
        );
    };
};

function mapStateToProps(state) {
    return {
        count: state.count
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));