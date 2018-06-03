import React from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

import { selectors as questionSelectors } from 'App/scenes/MainScene/data/questions/redux';
import QuestionDetails from './QuestionDetails';

function QuestionScene(props){
    if(!props.questionId){
        return (
            <div className="py-5">
                <Container>
                    <Row>
                        <div className="col-md-12">
                            <h1 className="pb-4">404: Not found</h1>
                            <p>
                                Unfortunately, this question doesn't exist.
                                <Link to={'/'} > Home </Link>
                            </p>
                        </div>
                    </Row>
                </Container>
            </div>
        );
    }
    return (
        <QuestionDetails {...props} />
    );
}

function mapStateAndRouterToProps(state, { match: { params: { questionId } } }){
    const question = questionSelectors.getQuestionById(state.scenes.mainScene.data.questions, questionId);
    return {
        questionId: question ? question.id : ''
    };
}

export default connect(mapStateAndRouterToProps)(QuestionScene);