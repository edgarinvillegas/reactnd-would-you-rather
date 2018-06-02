import React from 'react';

import { QuestionCard }from 'App/scenes/MainScene';
import QuestionListItem from 'App/scenes/MainScene/scenes/HomeScene/common/QuestionListItem';

function UnansweredQuestionListItem({ questionId }){
    return (
        <QuestionListItem questionId={questionId}>
            <QuestionCard
                questionId={questionId}
            />
        </QuestionListItem>
    );
}

export default UnansweredQuestionListItem;