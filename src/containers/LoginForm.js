import AuthForm from "../components/auth/AuthForm";
import AuthTemplate from "../components/auth/AuthTemplate";
import { changeField, initialForm } from "../module/auth";
import { setUsername } from "../module/user";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { signInGoogle, singOutGoogle } from "../api/firebase_config";
import { useNavigate} from "react-router-dom";


const LoginForm = () => {
    const navigate = useNavigate();
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
    const onLogin = async () => {
        await signInGoogle().then(()=>{navigate('/')}).then(()=>{dispatch(setUsername('test'))})

    }
 

    return(
        <AuthTemplate>
            <AuthForm type={'login'} onChange={onChange} onLogin={onLogin} onLogout={singOutGoogle}/>
        </AuthTemplate>
    )
}

export default LoginForm;