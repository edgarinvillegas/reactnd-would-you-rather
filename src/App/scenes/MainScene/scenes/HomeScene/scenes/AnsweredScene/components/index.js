import React, { Fragment, Component } from 'react';
import {ListGroup, ListGroupItem} from "reactstrap";

import { AnsweredQuestion } from 'App/scenes/MainScene';
import {connect} from "react-redux";

class AnsweredScene extends Component{
    render() {
        return (
            <div className="tab-content mt-2">
                <div className="tab-pane fade show active" id="tabone" role="tabpanel">
                    <h1 className="">I would rather...</h1>
                    <div className="col-md-12">
                        <ListGroup>
                            <ListGroupItem>
                                <AnsweredQuestion
                                    option1Text={'Become a super hero'}
                                    option2Text={'Become a super villian2'}
                                    chosenOption={1}
                                />
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
        );
    }
}

export default connect()(AnsweredScene);