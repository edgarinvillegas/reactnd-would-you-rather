import React, {Fragment} from 'react';

import { UserDetails } from 'App/scenes/MainScene';
import { selectors } from 'App/scenes/MainScene/data/questions/redux';
import { connect } from 'react-redux';

const QuestionScene = (props) => {
    const { authorId } = props;
    console.log('QuestionScene props: ', props);
    return (
        <Fragment>
            <div className="py-5">
                <UserDetails userId={authorId} />
            </div>
        </Fragment>
    );
};

function mapStateAndRouterToProps(state, ownProps){
    console.log('ownProps: ', ownProps);
    const questionId = ownProps.match.params.questionId;
    const question = selectors.getQuestionById(state.scenes.mainScene.data.questions, questionId);
    console.log('question: ', question);
    return {
        authorId: question.author
    }
}

export default connect(mapStateAndRouterToProps)(QuestionScene);
