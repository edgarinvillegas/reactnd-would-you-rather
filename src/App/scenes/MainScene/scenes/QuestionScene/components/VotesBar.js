import React from 'react';
import { connect } from 'react-redux';

import { selectors as questionSelectors } from 'App/scenes/MainScene/data/questions/redux';

const VotesBar = ({ votedPercentage, nonVotedPercentage }) => {
    return (
        <div className="progress">
            <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{width: `${votedPercentage}%` }}
                aria-valuenow={votedPercentage}
                aria-valuemin="0"
                aria-valuemax="100"
            >
                {votedPercentage}%
            </div>
            <div
                className="progress-bar bg-danger"
                role="progressbar"
                style={{width: `${nonVotedPercentage}%`}}
                aria-valuenow={nonVotedPercentage}
                aria-valuemin="0"
                aria-valuemax="100"
            >
                {nonVotedPercentage}%
            </div>
        </div>
    );
};

export default connect((state, { questionId, answer }) => {
    const questions = state.scenes.mainScene.data.questions;
    const question = questionSelectors.getQuestionById(questions, questionId);
    const percentages = questionSelectors.getQuestionPercentages(question);
    const otherOption = answer === 'optionOne' ? 'optionTwo' : 'optionOne';
    return {
        votedPercentage: percentages[answer],
        nonVotedPercentage: percentages[otherOption]
    };
})(VotesBar);