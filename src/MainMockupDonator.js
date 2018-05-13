import React, { Fragment } from 'react';
import { Badge, Button, Collapse, Container, Form, FormGroup, Input, Label, ListGroup, ListGroupItem, Row, } from 'reactstrap';

export default () => (
  <Fragment>
      <div className="py-5">
          <Container>
              <Row>
                  <div className="col-md-12">
                      <ul className="nav nav-pills">
                          <li className="nav-item">
                              <a href="" className="active nav-link" data-toggle="pill" data-target="#tabone">Answered
                                  questions</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="" data-toggle="pill" data-target="#tabtwo">Unanswered
                                  questions</a>
                          </li>
                      </ul>
                      <div className="tab-content mt-2">
                          <div className="tab-pane fade show active" id="tabone" role="tabpanel">
                              <h1 className="">I would rather...</h1>
                              <div className="col-md-12">
                                  <ListGroup>
                                      <ListGroupItem>
                                          <ListGroup>
                                              <ListGroupItem color="success"
                                                             className="d-flex justify-content-between align-items-center">
                                                  <div> Become a super hero</div>
                                                  <span className="fa fa-check"></span>
                                              </ListGroupItem>
                                              <ListGroupItem color="danger"
                                                             className="d-flex justify-content-between align-items-center">
                                                  <div> Become a super villian</div>
                                                  <span className="fa fa-times"></span>
                                              </ListGroupItem>
                                          </ListGroup>
                                          <div className="text-right text-info"> Voted on 05/05/2018, 13:45</div>
                                      </ListGroupItem>
                                  </ListGroup>
                              </div>
                          </div>
                          <div className="tab-pane fade" id="tabtwo" role="tabpanel">
                              <p className="">Tab pane two. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                          </div>
                          <div className="tab-pane fade" id="tabthree" role="tabpanel">
                              <p className="">Tab pane three. Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit.</p>
                          </div>
                      </div>
                  </div>
              </Row>
          </Container>
      </div>
      <div className="py-5">
          <Container>
              <Row className="border">
                  <div className="col-md-2 d-flex align-items-center justify-content-end col-3"> Asked By:
                      <h4 className="display-4">#1</h4>
                  </div>
                  <div className="d-flex align-items-center col-md-6 col-6">
                      <div className="d-inline-flex p-2">
                          <img className="rounded-circle"
                               src="https://www.gravatar.com/avatar/de057083353e7435174218bcaa3e191a?s=64&amp;d=identicon&amp;r=PG"
                               width="64px" height="64px" />
                              <div className="px-3 d-flex align-items-center">
                                  <h3 className="">John Doe</h3>
                              </div>
                      </div>
                  </div>
                  <div className="col-md-4 text-right d-flex flex-column justify-content-center hidden col-3">
                      <div>
                          <div className="text-info  text-nowrap">Asked: 25</div>
                          <div className="text-info  text-nowrap">Answered: 4</div>
                          <div className="text-primary  text-nowrap"> 29 points</div>
                      </div>
                  </div>
              </Row>
          </Container>
      </div>
      <div className="py-5">
          <Container>
              <Row>
                  <div className="col-md-12">
                      <ListGroup>
                          <ListGroupItem color="success" className="d-flex justify-content-between align-items-center">
                              <div> Become a super hero</div>
                              <div>
                                  <Badge pill className="badge-dark">0 votes (0%)</Badge>
                                  <span className="fa fa-check"></span>
                                  <a className="btn btn-primary" href="#"> Vote </a>
                              </div>
                          </ListGroupItem>
                          <ListGroupItem color="danger" className="d-flex justify-content-between align-items-center">
                              <div> Become a super villian</div>
                              <div>
                                  <Badge pill className="badge-dark">2 votes (100%)</Badge>
                                  <span className="fa fa-times"></span>
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
                              <Input type="email" placeholder="Enter question 1 here"></Input> </FormGroup>
                          <FormGroup>
                              <Label>Option 2</Label>
                              <Input type="email" placeholder="Enter question 2 here"></Input> </FormGroup>
                          <Button color="primary">Submit</Button>
                      </Form>
                  </div>
              </Row>
          </Container>
      </div>
  </Fragment>
);

