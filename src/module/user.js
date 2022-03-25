import { handleActions, createAction } from "redux-actions";

const USERNAME = 'user/username';

export const setUsername = createAction(USERNAME, (input) => (input))

const initialState = {
    user: {
        username: '1'
    }
}

const user = handleActions({
    [USERNAME]: (state, {payload: input}) => ({
        ...state,
        user: {
            username: input
        }
    })
}, initialState
)

export default user