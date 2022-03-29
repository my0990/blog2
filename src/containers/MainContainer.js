import BoardTemplate from "../components/board/BoardTemplate";
import BoardForm from "../components/board/BoardForm";
import Header from "../components/common/Header";
import ImgSlide from "../components/common/ImgSlide";
import { signOutGoogle } from "../api/firebase_config";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";



const MainContainer = () => {
    const navigate = useNavigate();
    const onLogout = async () => {
        await signOutGoogle().then(()=>{navigate('/login')}).then(localStorage.removeItem('user'))
    }

    const getUser = JSON.parse(localStorage.getItem("user"))
    let username
    let uid
    if(getUser){
        username = getUser.username
        uid = getUser.uid
    } else {
        return <LoginForm />
    }
   
    
    return(
        <>
        <Header onLogout={onLogout} username={username}/>
        <ImgSlide />
        <BoardTemplate>
            <BoardForm title="게시판1"></BoardForm>
            <BoardForm title="게시판2"></BoardForm>
        </BoardTemplate>


        </>
    )
}

export default MainContainer;