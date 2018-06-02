import { connect } from 'react-redux';

import NewQuestionScenePres from './NewQuestionScenePres';
import { selectors as appSelectors } from 'App/redux';
import { saveQuestionPromiseAction } from '../../../data/shared/actions';

function mergeProps(stateProps, dispatchProps, ownProps){
    return {
        saveQuestion: (optionOne, optionTwo) => {
            dispatchProps.dispatch(
                saveQuestionPromiseAction(optionOne, optionTwo, stateProps.userId)
            ).then( ({ value, action }) =>  // TODO: analyze value vs action.payload
                ownProps.history.push(`/question/${value.id}`)
            );
        }
    }
}

export default connect(
    state => ({
        userId: appSelectors.getAuthedUserId(state)
    }),
    undefined,
    mergeProps
)(NewQuestionScenePres);