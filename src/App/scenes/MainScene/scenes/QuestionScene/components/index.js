import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'reactstrap';

import { UserDetails } from 'App/scenes/MainScene';
import { selectors as questionSelectors } from 'App/scenes/MainScene/data/questions/redux';
import QuestionCard from '../../../common/components/QuestionCard';
import { selectors as appSelectors } from 'App/redux';
import { operations } from 'App/scenes/MainScene/data/redux';
import VotesBar from './VotesBar';
import { formatTimestamp } from '../../../common/helpers';

const QuestionScene = ({ dispatch, questionId, authorId, answer, authedUserId, timestamp }) => {
    const onVote = (option) => {
        dispatch(operations.saveAnswerPromiseAction(authedUserId, questionId, option));
    };
    return (
        <Fragment>
            <div className="py-5">
                <UserDetails userId={authorId} />
            </div>
            <div className="py-5">
                <Container>
                    <Row>
                        <div className="col-md-12">
                            <div className="text-right text-info"> Created on {formatTimestamp(timestamp)} </div>
                            <QuestionCard
                                questionId={questionId}
                                answer={answer}
                                showVotes={!!answer}
                                onVote={answer ? null : onVote }
                            />
                        </div>
                    </Row>
                    {!!answer && (
                        <Row>
                            <div className="col-md-12">
                                <VotesBar questionId={questionId} answer={answer} />
                            </div>
                        </Row>
                    )}
                </Container>
            </div>
        </Fragment>
    );
};

function mapStateAndRouterToProps(state, { match: { params: { questionId } } }){
    const question = questionSelectors.getQuestionById(state.scenes.mainScene.data.questions, questionId);
    const answer = appSelectors.getAnswerForAuthedUser(state, questionId);
    console.log('answer', answer);
    return {
        questionId: questionId,
        authorId: question.author,
        answer: answer,
        authedUserId: appSelectors.getAuthedUserId(state),
        timestamp: question.timestamp
    }
}

export default connect(mapStateAndRouterToProps)(QuestionScene);
