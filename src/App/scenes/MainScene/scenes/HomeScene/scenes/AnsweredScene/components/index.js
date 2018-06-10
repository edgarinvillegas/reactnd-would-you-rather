import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import { selectors as appSelectors } from 'App/redux';
import { selectors as questionSelectors } from 'App/scenes/MainScene/data/questions/redux';
import AnsweredQuestionListItem from "./AnsweredQuestionListItem";
import { QuestionsTab } from 'App/scenes/MainScene/scenes/HomeScene';
import { selectors as loadingSelectors } from 'App/scenes/MainScene/redux';

class AnsweredScene extends Component{
    render() {
        const { answers, sortedQuestionIds: questionIds } = this.props;
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
    const loading = loadingSelectors.areQuestionsAndUsersLoading(state.scenes.mainScene.loading);
    const answers = loading ? {} : appSelectors.getAnswersForAuthedUser(state);
    return {
        answers,
        sortedQuestionIds: questionSelectors.getSortedQuestionsByTimestamp(state.scenes.mainScene.data.questions, Object.keys(answers))
    }
}

export default connect(mapStateToProps)(AnsweredScene);
