import { createAction, handleActions } from "redux-actions";
import produce from "immer";


const CHANGE_FIELD = 'auth/changeField';
const INITIAL_FORM = 'auth/initialForm';


export const changeField = createAction(CHANGE_FIELD, ({form,key,value}) => ({
    form,
    key,
    value
}))
export const initialForm = createAction(INITIAL_FORM, form => form)

const initialState = {
    login: {
        username: '',
        password: '',
    },
    register: {
        username: '',
        password: '',
        passwordConfirm: '',
        name: '',
        email: '',
        favoriteMovie: '',
        favoriteBook: '',
    }
    
}

const auth = handleActions({
    [CHANGE_FIELD]: (state, { payload: {form,key,value}}) => 
        produce(state, draft => {
            draft[form][key] = value;
    }),
    [INITIAL_FORM]: (state, {payload: form}) => ({
        ...state,
        [form]: initialState[form]
    })
        
    },
    initialState
)

export default auth;