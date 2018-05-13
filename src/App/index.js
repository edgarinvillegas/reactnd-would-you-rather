import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { LoginScene } from './scenes/LoginScene';
import { MainScene } from './scenes/MainScene';

export default () => {
    const loggedIn = false;
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