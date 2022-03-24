import AuthForm from "../components/auth/AuthForm";
import AuthTemplate from "../components/auth/AuthTemplate";
import { changeField, initialForm } from "../module/auth";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { signInGoogle } from "../api/firebase_config";


const LoginForm = () => {
    const dispatch = useDispatch();
    const {form} = useSelector(({auth}) => ({
        form: auth.login
    }))
    const onChange = e => {
        const {value, name} =  e.target;
        dispatch(
            changeField({
                form: 'login',
                key: name,
                value
            })
        )
    }

    useEffect(() => {
        dispatch(initialForm('login'))
    },[dispatch]
    )
    
 

    return(
        <AuthTemplate>
            <AuthForm type={'login'} onChange={onChange} onLogin={signInGoogle}/>
        </AuthTemplate>
    )
}

export default LoginForm;