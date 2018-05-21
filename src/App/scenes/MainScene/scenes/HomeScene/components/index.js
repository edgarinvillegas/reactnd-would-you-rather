import React, {Component, Fragment} from 'react';
import { Container, Row, Nav, NavItem, NavLink as ReactStrapNavLink } from 'reactstrap';
import {NavLink, Redirect, Route, Switch} from "react-router-dom";

import { AnsweredScene } from '../scenes/AnsweredScene';
import { UnansweredScene } from '../scenes/UnansweredScene';

class HomeScene extends Component {
    render() {
        return (
            <Fragment>
                <div className="py-5">
                    <Container>
                        <Row>
                            <div className="col-md-12">
                                <Nav pills>
                                    <NavItem>
                                        <ReactStrapNavLink tag={NavLink} to={'/home/answered'}>
                                            Answered questions
                                        </ReactStrapNavLink>
                                    </NavItem>
                                    <NavItem>
                                        <ReactStrapNavLink tag={NavLink} to={'/home/unanswered'}>
                                           Unanswered questions
                                        </ReactStrapNavLink>
                                    </NavItem>
                                </Nav>
                                <Switch>
                                    {/*<Redirect from={'/home'} to={'/home/answered'} />*/}
                                    <Route path={'/home'} exact render={() => <Redirect to={'/home/answered'} />} />
                                    {/*<Route path={'/home'} component={AnsweredScene} />*/}
                                    <Route path={'/home/answered'} component={AnsweredScene} />
                                    <Route path={'/home/unanswered'} component={UnansweredScene} />
                                </Switch>
                            </div>
                        </Row>
                    </Container>
                </div>
            </Fragment>
        );
    }
};

export default HomeScene;