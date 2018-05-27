import React, { Fragment } from 'react';
import { Badge, Button, Container, Form, FormGroup, Input, Label, ListGroup, ListGroupItem, Row, } from 'reactstrap';

export default () => (
  <Fragment>


      <div className="py-5">
          <Container>
              <Row>
                  <div className="col-md-12">
                      <h1 className="">Would you rather...?</h1>
                  </div>
              </Row>
              <Row>
                  <div className="col-md-12">
                      <Form>
                          <FormGroup>
                              <Label>Option 1</Label>
                              <Input type="email" placeholder="Enter question 1 here" /> </FormGroup>
                          <FormGroup>
                              <Label>Option 2</Label>
                              <Input type="email" placeholder="Enter question 2 here" /> </FormGroup>
                          <Button color="primary">Submit</Button>
                      </Form>
                  </div>
              </Row>
          </Container>
      </div>
  </Fragment>
);

