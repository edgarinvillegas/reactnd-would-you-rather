import React from 'react';
import { connect } from 'react-redux';

import { QuestionCard }from 'App/scenes/MainScene';
import QuestionListItem from 'App/scenes/MainScene/scenes/HomeScene/common/QuestionListItem';


function UnansweredQuestionListItem({ questionId, option1Text, option2Text, timestamp }){
    return (
        <QuestionListItem questionId={questionId}>
            <QuestionCard
                questionId={questionId}
            />
        </QuestionListItem>
    );
}

export default UnansweredQuestionListItem;