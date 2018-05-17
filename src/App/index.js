import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';

import { LoginScene } from './scenes/LoginScene';
import { MainScene } from './scenes/MainScene';
import {  selectors as appDataSelectors } from 'App/data/reducer';

class App extends Component {
    render() {
        const loggedIn = !!this.props.authedUserId;
        return (
            <Router>
                <Fragment>
                    {loggedIn ? (
                        /*<Route path={'/'} component={MainScene} />*/
                        <MainScene />
                    ) : (
                        <LoginScene/>
                    )}
                </Fragment>
            </Router>
        );
    }
}

function mapStateToProps(state){
    return {
        authedUserId: appDataSelectors.getAuthedUserId(state.data)
    };
}

export default connect(mapStateToProps)(App);