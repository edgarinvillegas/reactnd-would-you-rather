import React, { Fragment, Component } from 'react';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import { connect } from "react-redux";

import NavBar from "./NavBar";
import { HomeScene } from '../scenes/HomeScene';
import { QuestionScene } from '../scenes/QuestionScene';
import { LeaderboardScene } from '../scenes/LeaderboardScene';
import { operations } from '../data/redux';
import { selectors as loadingSelectors } from '../redux';
import { NewQuestionScene } from '../scenes/NewQuestionScene';

import withSpinner from '../common/components/withSpinner';

const RouteWithSpinner = withSpinner(Route);

class MainScene extends Component {
    componentDidMount(){
        this.props.dispatch(operations.loadUsersAndQuestionsThunk());
    }

    render() {
        const { loading } = this.props;

        return (
            <Fragment>
                <NavBar />
                <Switch>
                    <Route path={'/'} exact render={() => <Redirect to={'/home'} />}/>
                    {/*<Redirect from={'/'} to={'/home'} />*/}
                    <Route path={'/home'} component={HomeScene} />
                    <RouteWithSpinner isLoading={loading} path={'/question/:questionId'} component={QuestionScene} />
                    <RouteWithSpinner isLoading={loading} path={'/board'} component={LeaderboardScene} />
                    <Route path={'/add'} component={NewQuestionScene} />
                </Switch>
            </Fragment>
        );
    }
}

function mapStateToProps(stateTree){
    return {
        loading: loadingSelectors.areQuestionsAndUsersLoading(stateTree.scenes.mainScene.loading)
    };
}

export default withRouter(connect(mapStateToProps)(MainScene));
