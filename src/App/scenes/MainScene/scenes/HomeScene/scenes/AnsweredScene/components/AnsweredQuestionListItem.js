import React from 'react';
import { connect } from 'react-redux';
import { ListGroupItem } from 'reactstrap';
import {Link} from 'react-router-dom';

import { selectors as questionSelectors } from 'App/scenes/MainScene/data/questions/redux';
import { selectors as mainSceneDataSelectors } from 'App/scenes/MainScene/data/redux';
import { selectors as appSelectors } from 'App/redux';
import AnsweredQuestion from 'App/scenes/MainScene/shared/components/AnsweredQuestion';
import './AnsweredQuestionListItem.css';


/*
a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
}
*/
function AnsweredQuestionListItem({ questionId, question, answer }){
    return (
        <ListGroupItem>
            <Link to={`/questions/${questionId}`} className={'link-no-underline'}>
                <AnsweredQuestion
                    option1Text={question.optionOne.text}
                    option2Text={question.optionTwo.text}
                    answer={answer}
                />
                <div className="text-right text-info"> {questionId} </div>  {/*TODO: remove */}
            </Link>
        </ListGroupItem>
    );
};

function mapStateToProps(state, ownProps){
    const authedUserId = appSelectors.getAuthedUserId(state);
    const mainSceneDataState = state.scenes.mainScene.data;
    return {
        question: questionSelectors.getQuestionById(mainSceneDataState.questions, ownProps.questionId),
        //chosenOption: mainSceneDataSelectors.getAnsweredOption(mainSceneDataState, authedUserId, ownProps.questionId )
    };
}

export default connect(mapStateToProps)(AnsweredQuestionListItem);