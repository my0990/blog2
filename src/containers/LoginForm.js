import AuthForm from "../components/auth/AuthForm";
import AuthTemplate from "../components/auth/AuthTemplate";
import { changeField, initialForm } from "../module/auth";
import { setUsername } from "../module/user";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { signInGoogle, signOutGoogle } from "../api/firebase_config";
import { Navigate, Route, Routes, useNavigate} from "react-router-dom";
import { auth } from "../api/firebase_config";





const LoginForm = () => {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
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

   
    const userData = localStorage.getItem('user')
    if(userData){
        const {username, uid} = JSON.parse(userData)
        
    }
    
    useEffect(() => {
        dispatch(initialForm('login'))
    },[dispatch]
    )

    const onLogin = async () => {
        await signInGoogle().then(()=>{navigate('/')}).then(()=>{dispatch(setUsername('test'))})
    }
    
    const onLogout = async () => {
        await signOutGoogle().then(()=>{dispatch(setUsername(''))}).then(localStorage.removeItem('user'))
    }

    auth.onAuthStateChanged((user)=>{
         if(user){
             localStorage.setItem('user',JSON.stringify({username: user.displayName, uid: user.uid}))
         }
    })
 
    if(userData){
        return(
            <Routes>
                <Route path="/" element={<Navigate replace to="/"/>} />
                
            </Routes>
        )
    } else {
        return(
            <AuthTemplate>
                <AuthForm type={'login'} onChange={onChange} onLogin={onLogin} onLogout={onLogout}/>
            </AuthTemplate>
        )
    }

}

export default LoginForm;