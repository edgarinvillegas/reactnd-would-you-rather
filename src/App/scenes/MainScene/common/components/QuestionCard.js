import React from 'react';
import { ListGroup } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import QuestionOption from './QuestionOption';
import { selectors as questionSelectors } from 'App/scenes/MainScene/data/questions/redux';

function QuestionCard({question, showVotes = false, answer, onVote }) {
    const percentages = questionSelectors.getQuestionPercentages(question);
    const getBadgeText = (option) =>  {
        if(!showVotes) return '';
        return `${question[option].votes.length} (${percentages[option]}%)`;
    };
    const getOnVoteFn = (option) => {
        return () => onVote(option);
    };
    return (
        <ListGroup>
            <QuestionOption
                text={question.optionOne.text}
                badgeText={getBadgeText('optionOne')}
                isVoted={answer ? answer === 'optionOne' : null }
                onVote={onVote ? getOnVoteFn('optionOne') : null }
            />
            <QuestionOption
                text={question.optionTwo.text}
                badgeText={getBadgeText('optionTwo')}
                isVoted={answer ? answer === 'optionTwo' : null }
                onVote={onVote ? getOnVoteFn('optionTwo') : null }
            />
        </ListGroup>
    );
}

QuestionCard.propTypes = {
    showVotes: PropTypes.bool,
    answer: PropTypes.string,
    onVote: PropTypes.func,
    questionId: PropTypes.string.isRequired,
    //Connected props
};

function mapStateToProps(state, { questionId }){
    const questions = state.scenes.mainScene.data.questions;
    return {
        question: questionSelectors.getQuestionById(questions, questionId)
    };
}

export default connect(mapStateToProps)(QuestionCard);