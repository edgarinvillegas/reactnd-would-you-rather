import React, { Component } from 'react';
import { connect } from "react-redux";
import { ListGroup } from "reactstrap";

import { selectors as appSelectors } from 'App/redux';
import AnsweredQuestionListItem from "./AnsweredQuestionListItem";


class AnsweredScene extends Component{
    render() {
        const { answers } = this.props;
        const questionIds = Object.keys(answers);
        return (
            <div className="tab-content mt-2">
                <div className="tab-pane fade show active" id="tabone" role="tabpanel">
                    <h1 className="">I would rather...</h1>
                    <div className="col-md-12">
                        <ListGroup>
                            {questionIds.map( questionId => (
                                <AnsweredQuestionListItem
                                    key={questionId}
                                    questionId={questionId}
                                    answer={answers[questionId]}
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
        answers: appSelectors.getAnswersForAuthedUser(state)
    }
}

export default connect(mapStateToProps)(AnsweredScene);
