import React from 'react';
import { ListGroupItem } from 'reactstrap';
import {Link} from 'react-router-dom';

import '../../../common/styles.css';
import { QuestionCard }from 'App/scenes/MainScene';


function AnsweredQuestionListItem({ questionId, answer }){
    return (
        <ListGroupItem>
            <Link to={`/question/${questionId}`} className={'link-no-underline'}>
                <QuestionCard
                    questionId={questionId}
                    answer={answer}
                />
                <div className="text-right text-info"> See details </div>  {/*TODO: remove */}
            </Link>
        </ListGroupItem>
    );
}

export default AnsweredQuestionListItem;