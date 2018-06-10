import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Button, Collapse, Container, Nav, NavItem, NavLink as ReactStrapNavLink} from 'reactstrap';
import { Link, NavLink, withRouter } from "react-router-dom";

import { selectors as appSelectors } from 'App/redux';
import { selectors as userSelectors } from 'App/scenes/MainScene/data/users/redux';
import { selectors } from '../redux';
import { operations } from 'App/data/authedUserId/redux';


class NavBar extends Component {
    state = {
        collapsed: true
    };

    toggle = () => {
        this.setState((prevState)=>({
            collapsed: !prevState.collapsed
        }));
    };

    signOut = (event) => {
        event.preventDefault();
        this.props.dispatch(operations.logoutAction());
        this.props.history.push('/');
    };

    render() {
        const { avatarURL, username } = this.props;
        return (
            <nav className="navbar navbar-expand-md bg-primary navbar-dark">
                <Container>
                    <Link className="navbar-brand" to="/">
                        <i className="fa fa-question-circle"  aria-hidden="true" />
                        {' '} Would you rather?
                    </Link>
                    <Button onClick={this.toggle}
                            className="navbar-toggler navbar-toggler-right">
                        <span className="navbar-toggler-icon" />
                    </Button>
                    <Collapse isOpen={!this.state.collapsed} id="navbar2SupportedContent" className="navbar-collapse text-center justify-content-end">
                        <Nav navbar>
                            <NavItem className="text-left text-nowrap">
                                <ReactStrapNavLink tag={NavLink} to="/home">
                                    <i className="fa d-inline fa-lg fa-home" /> Home
                                </ReactStrapNavLink>
                            </NavItem>
                            <NavItem className="text-left text-nowrap">
                                <ReactStrapNavLink tag={NavLink} to="/board">
                                    <i  className="fa d-inline fa-lg fa-list-ol" /> Leaderboard
                                </ReactStrapNavLink>
                            </NavItem>
                            <NavItem className="text-left text-nowrap">
                                <ReactStrapNavLink tag={NavLink} to="/add">
                                    <i className="fa fa-file" /> New Question
                                </ReactStrapNavLink>
                            </NavItem>
                            <NavItem className="text-left text-nowrap">
                                <a className="nav-link" href="/" onClick={this.signOut}>
                                    <i className="fa fa-sign-out" /> Sign out
                                </a>
                            </NavItem>
                            <NavItem className="text-left text-nowrap">
                                <a className="nav-link">
                                    <img className="img-fluid rounded-circle px-0"
                                         alt="Avatar"
                                         src={avatarURL}
                                         width="32px" height="32px"
                                    />
                                    {username}
                                </a>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </nav>
        );
    }
}

export default connect(state => {
    if(selectors.areQuestionsAndUsersLoading(state.scenes.mainScene.loading)){
        return {
            avatarURL: '...',
            username: '...'
        };
    }
    const authedUserId = appSelectors.getAuthedUserId(state);
    const user = userSelectors.getUserById(state.scenes.mainScene.data.users, authedUserId);
    return {
        avatarURL: user.avatarURL,
        username: user.name
    }
})(withRouter(NavBar));