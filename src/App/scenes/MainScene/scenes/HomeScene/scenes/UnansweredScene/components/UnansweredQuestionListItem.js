import React from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem } from 'reactstrap';
import {Link} from 'react-router-dom';

import { selectors as questionSelectors } from 'App/scenes/MainScene/data/questions/redux';
import '../../../common/styles.css';

function UnansweredQuestionListItem({ questionId, option1Text, option2Text }){
    return (
        <ListGroupItem>
            <Link to={`/question/${questionId}`} className={'link-no-underline'}>
                <ListGroup>
                    <ListGroupItem color={'info'} className="d-flex justify-content-between align-items-center">
                        <div> {option1Text} </div>
                    </ListGroupItem>
                    <ListGroupItem color={'info'} className="d-flex justify-content-between align-items-center">
                        <div> {option2Text} </div>
                    </ListGroupItem>
                </ListGroup>
                <div className="text-right text-info"> Vote </div>  {/*TODO: remove */}
            </Link>
        </ListGroupItem>
    );
}

function mapStateToProps(state, ownProps){
    const mainSceneDataState = state.scenes.mainScene.data;
    const question = questionSelectors.getQuestionById(mainSceneDataState.questions, ownProps.questionId);
    return {
        option1Text: question.optionOne.text,
        option2Text: question.optionTwo.text
    };
}

export default connect(mapStateToProps)(UnansweredQuestionListItem);