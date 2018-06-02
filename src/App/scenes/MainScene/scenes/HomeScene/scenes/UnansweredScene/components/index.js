import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectors as appSelectors } from 'App/redux';
import UnansweredQuestionListItem from "./UnansweredQuestionListItem";
import { QuestionsTab } from 'App/scenes/MainScene/scenes/HomeScene';
import { selectors as questionSelectors } from '../../../../../data/questions/redux';

class UnansweredScene extends Component{
    render() {
        const { questionIds } = this.props;
        return (
            <QuestionsTab
                title={'Would you rather...?'}
                tabId={'tabone'}
                Message={() => (
                    <Fragment>
                        {questionIds.length === 0 && (
                            <p>
                                Congratulations! you have answered all questions.
                                You might want to <Link to={'/add'} > create a new question </Link>
                            </p>
                        )}
                    </Fragment>
                )}
            >
                {questionIds.map( questionId => (
                    <UnansweredQuestionListItem
                        key={questionId}
                        questionId={questionId}
                    />
                ))}
            </QuestionsTab>
        );
    }
}

function mapStateToProps(state){
    const questionIds = appSelectors.getUnansweredQuestionsForAuthedUser(state);
    return {
        questionIds: questionSelectors.getSortedQuestionsByTimestamp(state.scenes.mainScene.data.questions, questionIds)
    }
}

export default connect(mapStateToProps)(UnansweredScene);
