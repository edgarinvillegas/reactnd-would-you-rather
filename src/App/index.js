import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LoginScene from './scenes/LoginScene/components';  // TODO: evaluate to remove /components in import
import MainScene from './scenes/MainScene/components'   // TODO: evaluate to remove /components in import

export default () => {
    const loggedIn = true;
    return (
        <Router>
            <Fragment>
                {loggedIn ? (
                    <Route path={'/'} component={MainScene} />
                ) : (
                    <LoginScene/>
                )}
            </Fragment>
        </Router>
    );
}