import React from 'react';
import { connect } from 'react-redux';
import { ListGroupItem } from 'reactstrap';
import {Link} from 'react-router-dom';

import { selectors as questionSelectors } from 'App/scenes/MainScene/data/questions/redux';
import { AnsweredQuestion } from 'App/scenes/MainScene';
import '../../../common/styles.css';


function AnsweredQuestionListItem({ questionId, question, answer }){
    return (
        <ListGroupItem>
            <Link to={`/question/${questionId}`} className={'link-no-underline'}>
                <AnsweredQuestion
                    option1Text={question.optionOne.text}
                    option2Text={question.optionTwo.text}
                    answer={answer}
                />
                <div className="text-right text-info"> Open </div>  {/*TODO: remove */}
            </Link>
        </ListGroupItem>
    );
}

function mapStateToProps(state, ownProps){
    const mainSceneDataState = state.scenes.mainScene.data;
    return {
        question: questionSelectors.getQuestionById(mainSceneDataState.questions, ownProps.questionId),
    };
}

export default connect(mapStateToProps)(AnsweredQuestionListItem);