import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Button, Container, Form, FormGroup, Input, Label, Row, } from 'reactstrap';

import { operations } from 'App/data/authedUserId';

class LoginScene extends Component {
    state = {
        userId: ''
    };

    onLoginClick = (event) => {
        const userId = this.state.userId;
        event.preventDefault();
        this.props.dispatch(operations.loginAction(userId));
    }
    onUserInputChange = (event) => {
        this.setState({
            userId: event.target.value
        })
    }
    render() {
        const { userId } = this.state;
        return (
            <Fragment>
                <nav className="navbar navbar-expand-md bg-primary navbar-dark">
                    <Container>
                        <a className="navbar-brand" href="/">Would you rather???</a>
                    </Container>
                </nav>
                <div className="py-5">
                    <Container>
                        <Row>
                            <div className="col-md-12 d-flex justify-content-center">
                                <Form className="d-flex flex-column">
                                    <FormGroup className="form-row">
                                        <Label className="col-sm-2 col-form-label text-right col-2">User</Label>
                                        <div className="col-sm-10 col-10">
                                            <Input placeholder="Enter email" type="select" onChange={this.onUserInputChange} value={userId}>
                                                <option value={''}>Select your username</option>
                                                <option value={'sarahedo'}>Sarah Edo</option>
                                                <option value={'tylermcginnis'}>Tyler McGinnis</option>
                                                <option value={'johndoe'}>John Doe</option>
                                            </Input>
                                        </div>
                                    </FormGroup>
                                    <Button color="primary" onClick={this.onLoginClick}>Login</Button>
                                </Form>
                            </div>
                        </Row>
                    </Container>
                </div>
            </Fragment>
        );
    }
}

export default connect()(LoginScene);

