import React, { Component } from 'react';
import { connect } from "react-redux";
import { ListGroup } from "reactstrap";

import { selectors as appSelectors } from 'App/redux';
import UnansweredQuestionListItem from "./UnansweredQuestionListItem";


class UnansweredScene extends Component{
    render() {
        const { questionIds } = this.props;
        return (
            <div className="tab-content mt-2">
                <div className="tab-pane fade show active" id="tabone" role="tabpanel">
                    <h1 className="">I would rather...</h1>
                    <div className="col-md-12">
                        <ListGroup>
                            {questionIds.map( questionId => (
                                <UnansweredQuestionListItem
                                    key={questionId}
                                    questionId={questionId}
                                />
                            ))}
                        </ListGroup>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        questionIds: appSelectors.getUnansweredQuestionsForAuthedUser(state)
    }
}

export default connect(mapStateToProps)(UnansweredScene);
