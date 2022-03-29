import { handleActions, createAction } from "redux-actions";

const USERNAME = 'user/username';

export const setUsername = createAction(USERNAME, (input) => (input))

const initialState = {
    username: ''
    
}

const user = handleActions({
    [USERNAME]: (state, {payload: input}) => ({
        ...state,
        username: input
        
    })
}, initialState
)

export default user