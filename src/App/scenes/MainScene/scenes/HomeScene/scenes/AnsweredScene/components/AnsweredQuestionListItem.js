import React from 'react';

import { QuestionCard }from 'App/scenes/MainScene';
import QuestionListItem from 'App/scenes/MainScene/scenes/HomeScene/common/QuestionListItem';

function AnsweredQuestionListItem({ questionId, answer }){
    return (
        <QuestionListItem questionId={questionId}>
            <QuestionCard
                questionId={questionId}
                answer={answer}
            />
        </QuestionListItem>
    );
}

export default AnsweredQuestionListItem;