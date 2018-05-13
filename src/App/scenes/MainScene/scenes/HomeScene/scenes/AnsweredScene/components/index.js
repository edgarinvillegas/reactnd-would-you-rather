import React, { Fragment } from 'react';
import {ListGroup, ListGroupItem} from "reactstrap";

export default () => {
    return (
        <Fragment>
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
        </Fragment>
    );
}