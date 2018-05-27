import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'reactstrap';

import { UserDetails } from 'App/scenes/MainScene';
import { selectors as questionSelectors } from 'App/scenes/MainScene/data/questions/redux';
import QuestionCard from '../../../common/components/QuestionCard';
import { selectors as appSelectors } from 'App/redux';
import { operations } from 'App/scenes/MainScene/data/redux';

const QuestionScene = ({ dispatch, questionId, authorId, answer, authedUserId }) => {
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
                            <QuestionCard
                                questionId={questionId}
                                answer={answer}
                                showVotes={!!answer}
                                onVote={answer ? null : onVote }
                            />
                        </div>
                    </Row>
                    <Row>
                        <div className="col-md-12">
                            <div className="progress">
                                <div className="progress-bar bg-success" role="progressbar" style={{width: '15%'}}
                                     aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"> 15%
                                </div>
                                <div className="progress-bar bg-danger" role="progressbar" style={{width: '85%'}}
                                     aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"> 85%
                                </div>
                            </div>
                        </div>
                    </Row>
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
        authedUserId: appSelectors.getAuthedUserId(state)
    }
}

export default connect(mapStateAndRouterToProps)(QuestionScene);
