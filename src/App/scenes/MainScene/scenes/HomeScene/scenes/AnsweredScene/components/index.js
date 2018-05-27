import React, { Component } from 'react';
import { connect } from "react-redux";

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
