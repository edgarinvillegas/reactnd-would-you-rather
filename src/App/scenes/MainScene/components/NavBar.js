import React, { Component } from 'react';
import {Button, Collapse, Container, Nav, NavItem, NavLink as ReactStrapNavLink} from 'reactstrap';
import {Link, NavLink} from "react-router-dom";

class NavBar extends Component {
    state = {
        collapsed: true
    };

    toggle = () => {
        this.setState((prevState)=>({
            collapsed: !prevState.collapsed
        }));
    };

    render() {
        console.log('collapse? ', this.state.collapsed);
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
                                <a className="nav-link">
                                    <img className="img-fluid rounded-circle px-0"
                                         alt="Avatar"
                                         src="https://www.gravatar.com/avatar/de057083353e7435174218bcaa3e191a?s=64&amp;d=identicon&amp;r=PG"
                                         width="32px" height="32px"
                                    />
                                    Welcome, Sarah
                                </a>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </nav>
        );
    }
};

export default NavBar;