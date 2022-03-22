import RegisterForm from "../components/auth/RegisterForm";
import { useSelector, useDispatch } from "react-redux";
import { changeField, initialForm } from "../module/auth";
import { useEffect } from "react";


const RegisterContainer = () => {
    const dispatch = useDispatch();
    const {form} = useSelector(({auth}) => ({
        form: auth.register,
    }))
    const onChange = e => {
        const {name, value} = e.target;
        dispatch(changeField({
            form: 'register',
            key: name,
            value}))
    }
    useEffect(()=>{
        dispatch(initialForm('register'))
    },[dispatch])

    return (
        <RegisterForm onChange={onChange}/>
    )
}

export default RegisterContainer;