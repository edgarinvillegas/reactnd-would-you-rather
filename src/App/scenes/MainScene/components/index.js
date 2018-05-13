import React, { Fragment } from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import NavBar from "./NavBar";
import { HomeScene } from '../scenes/HomeScene';
import { QuestionScene } from '../scenes/QuestionScene';

export default () => {
    return (
        <Fragment>
            <NavBar /> {/*Always show navbar*/}
            <Switch>
                <Route path={'/'} exact render={() => <Redirect to={'/home'} />}/>
                <Route path={'/home'} component={HomeScene} />
                <Route path={'/question/:questionId'} component={QuestionScene} />
            </Switch>
        </Fragment>
    );
}