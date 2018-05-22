import React, { Component } from 'react';
import { connect } from "react-redux";
import { ListGroup } from "reactstrap";

import { selectors as appSelectors } from 'App/redux';
import AnsweredQuestionListItem from "./AnsweredQuestionListItem";




class AnsweredScene extends Component{
    render() {
        const { questionIds } = this.props;
        return (
            <div className="tab-content mt-2">
                <div className="tab-pane fade show active" id="tabone" role="tabpanel">
                    <h1 className="">I would rather...</h1>
                    {JSON.stringify(this.props.questionIds)}
                    <div className="col-md-12">
                        <ListGroup>
                            {questionIds.map( questionId => (
                                <AnsweredQuestionListItem key={questionId} questionId={questionId} />
                            ))}
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

function mapStateToProps(state){
    return {
        questionIds: appSelectors.getQuestionsForAuthedUser(state)
    }
}

export default connect(mapStateToProps)(AnsweredScene);
//export default AnsweredScene;