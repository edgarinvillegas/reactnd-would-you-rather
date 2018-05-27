import React, { Component } from 'react';
import { connect } from "react-redux";

import { selectors as appSelectors } from 'App/redux';
import UnansweredQuestionListItem from "./UnansweredQuestionListItem";
import { QuestionsTab } from 'App/scenes/MainScene/scenes/HomeScene';

class UnansweredScene extends Component{
    render() {
        const { questionIds } = this.props;
        return (
            <QuestionsTab
                title={'Would you rather...?'}
                tabId={'tabone'}
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
    return {
        questionIds: appSelectors.getUnansweredQuestionsForAuthedUser(state)
    }
}

export default connect(mapStateToProps)(UnansweredScene);
