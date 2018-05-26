import React, { Fragment } from 'react';
import { Badge, Button, Container, Form, FormGroup, Input, Label, ListGroup, ListGroupItem, Row, } from 'reactstrap';

export default () => (
  <Fragment>

      <div className="py-5">
          <Container>
              <Row>
                  <div className="col-md-12">
                      <ListGroup>
                          <ListGroupItem color="success" className="d-flex justify-content-between align-items-center">
                              <div> Become a super hero</div>
                              <div>
                                  <Badge pill className="badge-dark">0 votes (0%)</Badge>
                                  <span className="fa fa-check" />
                                  <a className="btn btn-primary" href="#"> Vote </a>
                              </div>
                          </ListGroupItem>
                          <ListGroupItem color="danger" className="d-flex justify-content-between align-items-center">
                              <div> Become a super villian</div>
                              <div>
                                  <Badge pill className="badge-dark">2 votes (100%)</Badge>
                                  <span className="fa fa-times" />
                                  <a className="btn btn-primary" href="#">Vote </a>
                              </div>
                          </ListGroupItem>
                          <ListGroupItem className="d-flex justify-content-between align-items-center">
                              <div> Become a super villian</div>
                              <a className="btn btn-primary" href="#">Vote </a>
                          </ListGroupItem>
                      </ListGroup>
                  </div>
              </Row>
              <Row>
                  <div className="col-md-12">
                      <div className="progress">
                          <div className="progress-bar bg-success" role="progressbar" style={{width: '15%'}}
                               aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"> 15%
                          </div>
                          <div className="progress-bar bg-danger" role="progressbar" style={{width: '85%'}}
                               aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"> 85%
                          </div>
                      </div>
                  </div>
              </Row>
          </Container>
      </div>
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

