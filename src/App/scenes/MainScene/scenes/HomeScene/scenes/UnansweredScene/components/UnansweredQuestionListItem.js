import React from 'react';
import { ListGroupItem } from 'reactstrap';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import '../../../common/styles.css';
import { QuestionCard }from 'App/scenes/MainScene';
import { selectors as questionSelectors } from 'App/scenes/MainScene/data/questions/redux';


function UnansweredQuestionListItem({ questionId, option1Text, option2Text, timestamp }){
    return (
        <ListGroupItem>
            <Link to={`/question/${questionId}`} className={'link-no-underline'}>
                <QuestionCard
                    questionId={questionId}
                />
                <div className="text-right text-info"> {timestamp} </div>  {/*TODO: remove */}
            </Link>
        </ListGroupItem>
    );
}

export default connect((state, { questionId }) => ({
    timestamp: questionSelectors.getQuestionById(state.scenes.mainScene.data.questions, questionId).timestamp
}))(UnansweredQuestionListItem);