import React, { Component } from 'react';
import { Button, Collapse, Container } from 'reactstrap';
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
                    <Link className="navbar-brand" to="/">Would you rather?</Link>
                    <Button onClick={this.toggle}
                            className="navbar-toggler navbar-toggler-right">
                        <span className="navbar-toggler-icon"></span>
                    </Button>
                    <Collapse isOpen={!this.state.collapsed} id="navbar2SupportedContent" className="navbar-collapse text-center justify-content-end">
                        <ul className="navbar-nav">
                            <li className="nav-item text-left text-nowrap">
                                <NavLink className="nav-link active" to="/home">
                                    <i className="fa d-inline fa-lg fa-home"></i> Home</NavLink>
                            </li>
                            <li className="nav-item text-left text-nowrap">
                                <a className="nav-link" href="#">
                                    <i className="fa d-inline fa-lg fa-list-ol"></i> Leaderboard</a>
                            </li>
                            <li className="nav-item text-left text-nowrap">
                                <a className="nav-link" href="#">
                                    <i className="fa fa-file"></i> New Question</a>
                            </li>
                            <li className="nav-item text-left text-nowrap">
                                <a className="nav-link" href="#">
                                    <img className="img-fluid rounded-circle px-0"
                                         src="https://www.gravatar.com/avatar/de057083353e7435174218bcaa3e191a?s=64&amp;d=identicon&amp;r=PG"
                                         width="32px" height="32px" /> Welcome, Sarah</a>
                            </li>
                        </ul>
                    </Collapse>
                </Container>
            </nav>
        );
    }
};

export default NavBar;