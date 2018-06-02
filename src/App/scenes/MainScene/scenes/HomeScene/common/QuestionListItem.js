import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroupItem } from 'reactstrap';
import { connect } from 'react-redux';

import { selectors as questionSelectors } from 'App/scenes/MainScene/data/questions/redux';
import './styles.css';

function QuestionListItem({ questionId, timestamp, children }) {
    return (
        <ListGroupItem>
            <Link to={`/question/${questionId}`} className={'link-no-underline'}>
                {children}
                <div className="text-right text-info"> {timestamp} </div>  {/*TODO: remove */}
            </Link>
        </ListGroupItem>
    );
}

export default connect((state, { questionId }) => ({
    timestamp: questionSelectors.getQuestionById(state.scenes.mainScene.data.questions, questionId).timestamp
}))(QuestionListItem);