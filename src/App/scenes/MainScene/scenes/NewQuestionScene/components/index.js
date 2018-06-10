import { connect } from 'react-redux';

import NewQuestionScenePres from './NewQuestionScenePres';
import { selectors as appSelectors } from 'App/redux';
import { saveQuestionPromiseAction } from 'App/scenes/MainScene/data/shared/actions';
import { selectors as loadingSelectors } from 'App/scenes/MainScene/redux';
import { notify } from 'App/common/util/notification';

function mergeProps(stateProps, dispatchProps, ownProps){
    return {
        saveQuestion: (optionOne, optionTwo) => {
            dispatchProps.dispatch(
                saveQuestionPromiseAction(optionOne, optionTwo, stateProps.userId)
            ).then( ({ value, action }) => { // TODO: analyze value vs action.payload
                notify('Saved question succesfully');
                ownProps.history.push(`/question/${value.id}`)
            });
        },
        submitButtonReady: stateProps.submitButtonReady
    }
}

export default connect(
    state => ({
        userId: appSelectors.getAuthedUserId(state),
        submitButtonReady: loadingSelectors.areQuestionsAndUsersLoading(state.scenes.mainScene.loading)
    }),
    undefined,
    mergeProps
)(NewQuestionScenePres);