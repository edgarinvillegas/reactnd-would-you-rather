import {LOAD_USERS_FULFILLED} from "./actions";


/**
 * Table<User>
 */
const initialState = {};
export default function(state = initialState, action){
    switch(action.type) {
        case LOAD_USERS_FULFILLED:
            return action.payload;
        default:
            return state;
    }
};

function getAuthoredQuestionsCount(state, userId) {
    const user = state[userId];
    return user.questions.length;
}
function getAnswersCount(state, userId) {
    const user = state[userId];
    return Object.keys(user.answers).length;
}

export const selectors = {
    getAnswersForUser: function (state, userId){
        return state[userId].answers;
    },
    getUserById: function (state, userId) {
        return state[userId];
    },
    getAuthoredQuestionsCount,
    getAnswersCount,
    getPoints: function(state, userId) {
        return getAuthoredQuestionsCount(state, userId) + getAnswersCount(state, userId);
    }
};


