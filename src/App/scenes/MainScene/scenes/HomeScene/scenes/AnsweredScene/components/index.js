import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import { selectors as appSelectors } from 'App/redux';
import AnsweredQuestionListItem from "./AnsweredQuestionListItem";
import { QuestionsTab } from 'App/scenes/MainScene/scenes/HomeScene';


class AnsweredScene extends Component{
    render() {
        const { answers } = this.props;
        const questionIds = Object.keys(answers);
        return (
            <QuestionsTab
                title={'I would rather...'}
                tabId={'tabone'}
                Message={() => (
                    <Fragment>
                        {questionIds.length === 0 && (
                            <p>
                                You haven't answered any question yet!
                                You might want to <Link to={'/home/unanswered'} > answer some. </Link>
                            </p>
                        )}
                    </Fragment>
                )}
            >
                {questionIds.map( questionId => (
                    <AnsweredQuestionListItem
                        key={questionId}
                        questionId={questionId}
                        answer={answers[questionId]}
                    />
                ))}
            </QuestionsTab>
        );
    }
}

function mapStateToProps(state){
    return {
        answers: appSelectors.getAnswersForAuthedUser(state)
    }
}

export default connect(mapStateToProps)(AnsweredScene);
