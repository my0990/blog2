import { createAction, handleActions } from "redux-actions";

const CHANGE_FIELD = 'edit/changeField';

export const changeField = createAction(CHANGE_FIELD, ({form,value})=>({
    form,
    value
}))

const initialState = {
    title: '',
    content: ''
}


const edit = handleActions({
    [CHANGE_FIELD]: (state, {payload: {form,value}}) => ({
        ...state,
        [form]: value
    })
    },
    initialState
)

export default edit;