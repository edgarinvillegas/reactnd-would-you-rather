import { connect } from 'react-redux';

import NewQuestionScenePres from './NewQuestionScenePres';
import { selectors as appSelectors } from 'App/redux';
import { saveQuestionPromiseAction } from 'App/scenes/MainScene/data/shared/actions';
import { selectors as loadingSelectors } from 'App/scenes/MainScene/redux';
import { notify } from 'App/common/util/notification';

function mergeProps({ userId, submitButtonReady }, { dispatch }, { history }){
    return {
        saveQuestion: (optionOne, optionTwo) => {
            dispatch(
                saveQuestionPromiseAction(optionOne, optionTwo, userId)
            ).then( ({ value, action }) => { // TODO: analyze value vs action.payload
                notify('Saved question succesfully');
                // ownProps.history.push(`/question/${value.id}`)
                history.push(`/`);
            });
        },
        submitButtonReady: submitButtonReady
    }
}

export default connect(
    state => ({
        userId: appSelectors.getAuthedUserId(state),
        submitButtonReady: loadingSelectors.areQuestionsAndUsersLoading(state.scenes.mainScene.loading)
    }),
    undefined, //I couldn't use the actions shortcut because the action I need returns a promise when dispatched (redux-promise-middleware)
    mergeProps
)(NewQuestionScenePres);