export const initialState = Object.freeze({
    data: {
        authedUserId: ''
    },
    scenes: {
        loginScene: null,
        mainScene: {
            loading: true, 
            data: {
                questions: {}, 
                users: {}
            }, 
            scenes: null
        }
    }
});