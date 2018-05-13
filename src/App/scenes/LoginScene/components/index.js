
import React, { Fragment } from 'react';
import { Button, Container, Form, FormGroup, Input, Label, Row, } from 'reactstrap';

export default () => (
    <Fragment>
        <nav className="navbar navbar-expand-md bg-primary navbar-dark">
            <Container>
                <a class="navbar-brand" href="/">Would you rather???</a>
            </Container>
        </nav>
        <div class="py-5">
            <Container>
                <Row>
                    <div class="col-md-12 d-flex justify-content-center">
                        <Form className="d-flex flex-column">
                            <FormGroup className="form-row">
                                <Label className="col-sm-2 col-form-label text-right col-2">User</Label>
                                <div class="col-sm-10 col-10">
                                    <Input placeholder="Enter email" type="select">
                                        <option value={''}>Select your username</option>
                                        <option value={'sarahedo'}>Sarah Edo</option>
                                        <option value={'tylermcginnis'}>Tyler McGinnis</option>
                                        <option value={'johndoe'}>John Doe</option>
                                    </Input>
                                </div>
                            </FormGroup>
                            <Button color="primary">Login</Button>
                        </Form>
                    </div>
                </Row>
            </Container>
        </div>
    </Fragment>
);

