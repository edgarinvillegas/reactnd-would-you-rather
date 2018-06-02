import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroupItem } from 'reactstrap';
import { connect } from 'react-redux';

import { selectors as questionSelectors } from 'App/scenes/MainScene/data/questions/redux';
import './styles.css';

function QuestionListItem({ questionId, timestamp, children }) {
    const date = new Date(timestamp);
    const formattedTimestamp = date.toLocaleDateString(date) + ' at ' + date.toLocaleTimeString();
    return (
        <ListGroupItem>
            <Link to={`/question/${questionId}`} className={'link-no-underline'}>
                {children}
                <div className="text-right text-info"> Created on {formattedTimestamp} </div>  {/*TODO: remove */}
            </Link>
        </ListGroupItem>
    );
}

export default connect((state, { questionId }) => ({
    timestamp: questionSelectors.getQuestionById(state.scenes.mainScene.data.questions, questionId).timestamp
}))(QuestionListItem);