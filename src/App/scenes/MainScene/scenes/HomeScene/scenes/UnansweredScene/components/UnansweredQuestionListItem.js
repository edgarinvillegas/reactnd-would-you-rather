import React from 'react';
import { ListGroupItem } from 'reactstrap';
import {Link} from 'react-router-dom';

import '../../../common/styles.css';
import { QuestionCard }from 'App/scenes/MainScene';

function UnansweredQuestionListItem({ questionId, option1Text, option2Text }){
    return (
        <ListGroupItem>
            <Link to={`/question/${questionId}`} className={'link-no-underline'}>
                <QuestionCard
                    questionId={questionId}
                />
                <div className="text-right text-info"> See details or vote! </div>  {/*TODO: remove */}
            </Link>
        </ListGroupItem>
    );
}

export default UnansweredQuestionListItem;